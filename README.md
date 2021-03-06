# async-json-parser
Real Async JSON parser (parse &amp; stringify). Without dependencies. 

## Example

#### Promises
```
const asyncJson = require('./index.js');

const obj = {hola: "mundo"};
const str = '{"hola":"mundo"}';

const log = x => console.log(x) || x;
const type = x => log(typeof x);

asyncJson.stringify(obj).then(log).then(type);
asyncJson.parse(str).then(log).then(type);

```

#### Async/await
```
const asyncJson = require('./index.js');

const obj = {hola: "mundo"};
const str = '{"hola":"mundo"}';

const log = x => console.log(x) || x;
const type = x => log(typeof x);

async function main(){
  const s = await asyncJson.stringify(obj);
  log(s) && type(s);

  const o = await asyncJson.parse(str);
  log(o) && type(o);
}

main();
```
