const asyncJson = {};
const nextTick = (process && process.nextTick) || setTimeout.bind(null, 0);
const wrapper = method => (...params) => new Promise((resolve, reject) => nextTick(() => {
  try {
    const result = JSON[method](...params);
    resolve(result);
  } catch (err) {
    reject(err);
  }
}));

asyncJson.parse = wrapper("parse");
asyncJson.stringify = wrapper("stringify");

module.exports = asyncJson;
