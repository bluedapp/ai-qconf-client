interface QconfConfig {
  key: string
  option: any
  path: string
  time?: number
}

interface MySQLConfig {
  key: string
  option: any
  time?: number
}

export function batchKeys(config: QconfConfig)
export function getMySQLConf(config: MySQLConfig)
export function qconfAllHost(config: QconfConfig)
export function qconfConf(config: QconfConfig)
export function qconfHost(config: QconfConfig)
