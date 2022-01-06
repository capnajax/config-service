'use strict';

import { Router } from 'express';
import Config from 'per-env-config';

import _ from 'lodash';

const config = (() => {
  try {
    return Config.fromArgsSync();
  } catch (e) {
    console.log('EXCEPTION:', e);
    console.log(JSON.stringify(e));
  }
})();
const c = config.bind();

const router = Router();

/* GET home page. */
router.get('/:config', function(req, res) {

  console.log('GET :config - ', req.params.config);

  let config = c(req.params.config);
  if (config) {
    res.send(config);
  } else {
    res.sendStatus(404);
  }

});

export default router;
