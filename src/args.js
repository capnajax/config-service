'use strict';

import Parser from 'args-and-envs';
import path from 'path';
import _ from 'lodash';

import fs from 'fs';

let parser = new Parser([
  { arg: ['--config', '-c'],
    env: 'CONFIG_FILES',
    name: 'configFiles',
    required: true,
    type: 'list'      
  },
  { arg: ['--env'],
    env: 'CONFIG_ENV',
    name: 'configEnv',
    required: false
  },
  { name: 'port',
    arg: [ '--port', '-p' ],
    env: 'PORT',
    type: 'integer',
    default: 3000
  }],
  { unknown: 'ignore',
    handler: {
      configFiles: valueArray => {
        return _.flatten(_.map(valueArray, v => v.split(path.delimiter)));
      }
    }
  });
parser.parse();


export { parser };
export default parser.argv;
