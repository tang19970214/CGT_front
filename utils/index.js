export function isJson(str) {
  let result = false;
  try {
    /* eslint-disable-next-line */
    const obj = JSON.parse(str);
    result = true
  } catch (error) {
    result = false
  }
  return result
}