const c = require('ansi-colors');

module.exports = (_package) => {
  console.log(c.greenBright(
  `
  Usage: mitm-play <profl> [options]
  
  Options:
    -h --help     \t show this help
    -u --url      \t go to specific url
    -g --group    \t create cache group/rec
    -d --delete   \t delete/clear cache & logs
    -p --pristine \t pristine browser, default option
    -i --insecure \t set nodejs env to accept insecure cert
    -n --nosocket \t no websocket injection to html page
    -o --ommitlog \t removed unnecessary console log
    -v --verbose  \t show more detail of console log
    -l --logurl   \t test route to log url & headers
    -r --route    \t set userscript folder of routes
    -s --save     \t save as default <profl>
    -c --chromium \t run chromium browser
    -f --firefox  \t run firefox browser
    -w --webkit   \t run webkit browser
    -z --lazy     \t delay ~400ms click action 
    --incognito   \t set chromium incognito
    --proxypac    \t set chromium proxypac
    --plugins     \t add chrome plugins
    --debug       \t show ws messages
    --proxy       \t a proxy request

  v${_package.version}
`));
process.exit();
}
