const { createCache } = require('./utils/interval-cache-store')

function batchKeys ({ key, option, path, time }) {
  const interval = 1000 * (time || 60)

  const result = createCache(`batch-keys-${key}`, () => {
    const config = option.getBatchKeys(path)

    return config
  }, interval)

  return result
}

function getMySQLConf ({ key, option, time }) {
  const interval = 1000 * (time || 60)

  const result = createCache(`mysql-conf-${key}`, () => {
    const config = option.getMysqlConf(key)

    return config
  }, interval)

  return result
}

function qconfAllHost ({ key, option, path, time }) {
  const interval = 1000 * (time || 60)

  const result = createCache(`qconf-all-host-${key}`, () => {
    const config = option.getQconfAllHost(path)
    const outcome = config.map(item => item.split(':'))
    const temporary = []

    outcome.forEach(([host, port]) => {
      temporary.push({
        host,
        port
      })
    })

    return temporary
  }, interval)

  return result
}

function qconfConf ({ key, option, path, time }) {
  const interval = 1000 * (time || 60)

  const result = createCache(`qconf-conf-${key}`, () => {
    const config = option.getQconfConf(path)

    return config
  }, interval)

  return result
}

function qconfHost ({ key, option, path, time }) {
  const interval = 1000 * (time || 60)

  const result = createCache(`qconf-host-${key}`, () => {
    const config = option.getQconfHost(path)
    const temporary = { host: '', port: '' }

    if (config) {
      const [host, port] = config.split(':')
      temporary.host = host
      temporary.port = port
    }

    return temporary
  }, interval)

  return result
}

exports.batchKeys = batchKeys
exports.getMySQLConf = getMySQLConf
exports.qconfAllHost = qconfAllHost
exports.qconfConf = qconfConf
exports.qconfHost = qconfHost
