const fs = require('fs-extra');
const c = require('ansi-colors');

module.exports = ({fpath1, body}, {fpath2, meta}, typ) => {
  fs.ensureFile(fpath1, () => {
    fs.writeFile(fpath1, body, err => {
      err && console.log(c.redBright(`>> Error write body ${typ}`), err);
    })
  })
  fs.ensureFile(fpath2, () => {
    fs.writeFile(fpath2, JSON.stringify(meta, null, 2), err => {
      err && console.log(c.redBright(`>> Error write meta ${typ}`), err);
    })
  })
}
