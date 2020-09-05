
# ai-qconf-client

[![npm version][npm-image]][npm-url]

A qconf tools for nodejs and want to look for a girlfriend...

## Installation

``` js
$ npm i ai-qconf-client
```

## Usage

``` js
import createQconfHost from 'ai-qconf-client'
import { Qconf } from '@blued-core/qconf'

const qconf = new Qconf(datum)
qconf.flag = isLocalPro ? 'production' : ''

const getQconfHost = (key: string) => {
  if (!(key in datum)) {
    throw new Error(`Can not find the key: [${key}]`)
  }

  return createQconfHost({
    key,
    option: qconf,
    path: datum[key].qconf,
  })
}

function getTest () {
  const result = getQconfHost('charonRedis')

  console.log(result)
  return result
}
```

## Options

``` js
// options
interface Config {
  key: string
  option: any
  path: string
  time?: number
}
```

## License

[MIT License](http://www.opensource.org/licenses/mit-license.php)

[npm-image]: https://img.shields.io/npm/v/ai-qconf-client.svg?style=flat-square
[npm-url]: https://npmjs.org/package/ai-qconf-client