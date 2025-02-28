import * as fs from 'fs'
import * as path from 'path'
import * as os from 'os'
import * as crypto from 'crypto'
import { CryptoUtils } from './crypto'
import { CONFIG } from '../constants/paths'

interface EncryptedMasterKey {
  salt: string
  iv: string
  authTag: string
  encryptedKey: string
  version: number
  createdAt: string
}

export class MasterKeyManager {
  private static readonly CONFIG_DIR = CONFIG.DIR
  private static readonly MASTER_KEY_FILE = path.join(
    CONFIG.DIR,
    CONFIG.FILES.MASTER_KEY,
  )
  private static readonly VERSION = CONFIG.VERSION

  static async initialize(masterPassword: string): Promise<void> {
    try {
      if (!fs.existsSync(this.CONFIG_DIR)) {
        fs.mkdirSync(this.CONFIG_DIR, { mode: 0o700 })
      }

      const masterKey = crypto.randomBytes(32).toString('hex')
      const salt = CryptoUtils.generateSalt()
      const derivedKey = await CryptoUtils.deriveKey(masterPassword, salt)

      const { encrypted, iv, authTag } = await CryptoUtils.encrypt(
        masterKey,
        derivedKey,
      )

      const encryptedMasterKey: EncryptedMasterKey = {
        salt: salt.toString('hex'),
        iv,
        authTag,
        encryptedKey: encrypted,
        version: this.VERSION,
        createdAt: new Date().toISOString(),
      }

      // Save encrypted master key with restricted permissions
      fs.writeFileSync(
        this.MASTER_KEY_FILE,
        JSON.stringify(encryptedMasterKey),
        { mode: 0o600 },
      )

      console.log('✨ Master key initialized successfully')
    } catch (error: unknown) {
      if (error instanceof Error) {
        throw new Error(`Failed to initialize master key: ${error.message}`)
      }
      throw new Error('Failed to initialize master key')
    }
  }

  static async verify(masterPassword: string): Promise<boolean> {
    try {
      await this.getMasterKey(masterPassword)
      return true
    } catch (error) {
      return false
    }
  }

  static async getMasterKey(masterPassword: string): Promise<string> {
    if (!fs.existsSync(this.MASTER_KEY_FILE)) {
      throw new Error('Master key not initialized. Please run: dlabs-env init')
    }

    try {
      const encryptedData: EncryptedMasterKey = JSON.parse(
        fs.readFileSync(this.MASTER_KEY_FILE, 'utf8'),
      )

      const derivedKey = await CryptoUtils.deriveKey(
        masterPassword,
        Buffer.from(encryptedData.salt, 'hex'),
      )

      const masterKey = await CryptoUtils.decrypt(
        encryptedData.encryptedKey,
        derivedKey,
        encryptedData.iv,
        encryptedData.authTag,
      )

      return masterKey
    } catch (error) {
      throw new Error('Invalid master password')
    }
  }

  static isInitialized(): boolean {
    return fs.existsSync(this.MASTER_KEY_FILE)
  }
}
