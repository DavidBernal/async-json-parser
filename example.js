const asyncJson = require('./index.js');

const obj = {hola: "mundo"};
const str = '{"hola":"mundo"}';

const log = x => console.log(x) || x;
const type = x => log(typeof x);

asyncJson.stringify(obj).then(log).then(type);
asyncJson.parse(str).then(log).then(type);

