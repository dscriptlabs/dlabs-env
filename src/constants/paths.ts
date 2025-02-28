import * as path from 'path'
import * as os from 'os'

export const CONFIG = {
  DIR: path.join(os.homedir(), '.dlabs-env'),
  FILES: {
    MASTER_KEY: '.master.key',
    SALT: '.salt',
    CONFIG: '.config',
    DB: '.db-config',
  },
  VERSION: 1,
} as const
