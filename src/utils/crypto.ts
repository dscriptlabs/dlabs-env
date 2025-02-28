import * as crypto from 'crypto'
import * as fs from 'fs'
import * as path from 'path'
import * as os from 'os'

export class CryptoUtils {
  private static readonly ITERATIONS = 100000
  private static readonly KEY_LENGTH = 32
  private static readonly SALT_LENGTH = 32
  private static readonly ALGORITHM = 'aes-256-gcm'

  static generateSalt(): Buffer {
    return crypto.randomBytes(this.SALT_LENGTH)
  }

  static async deriveKey(password: string, salt: Buffer): Promise<Buffer> {
    return new Promise((resolve, reject) => {
      crypto.pbkdf2(
        password,
        salt,
        this.ITERATIONS,
        this.KEY_LENGTH,
        'sha256',
        (err, key) => {
          if (err) reject(err)
          else resolve(key)
        },
      )
    })
  }

  static async encrypt(
    data: string,
    key: Buffer,
  ): Promise<{
    encrypted: string
    iv: string
    authTag: string
  }> {
    const iv = crypto.randomBytes(16)
    const cipher = crypto.createCipheriv(this.ALGORITHM, key, iv)

    let encrypted = cipher.update(data, 'utf8', 'hex')
    encrypted += cipher.final('hex')
    const authTag = cipher.getAuthTag().toString('hex')

    return {
      encrypted,
      iv: iv.toString('hex'),
      authTag,
    }
  }

  static async decrypt(
    encrypted: string,
    key: Buffer,
    iv: string,
    authTag: string,
  ): Promise<string> {
    const decipher = crypto.createDecipheriv(
      this.ALGORITHM,
      key,
      Buffer.from(iv, 'hex'),
    )
    decipher.setAuthTag(Buffer.from(authTag, 'hex'))

    let decrypted = decipher.update(encrypted, 'hex', 'utf8')
    decrypted += decipher.final('utf8')
    return decrypted
  }
}
