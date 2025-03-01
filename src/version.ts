import { readFileSync } from 'fs'
import { join, dirname } from 'path'
import { fileURLToPath } from 'url'

const __dirname = dirname(fileURLToPath(import.meta.url))

let version: string
try {
  const pkg = JSON.parse(
    readFileSync(join(__dirname, '..', 'package.json'), 'utf8'),
  )
  version = pkg.version
} catch (error) {
  version = '0.0.1'
  console.warn('Warning: Could not read version from package.json')
}

export { version }
