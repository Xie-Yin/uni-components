export function getPropByPath(obj, path, strict) {
  let tempObj = obj
  let path_ = path.replace(/\[(\w+)\]/g, '.$1')
  path_ = path.replace(/^\./, '')

  const keyArr = path_.split('.')
  let i = 0
  for (let len = keyArr.length; i < len - 1; i += 1) {
    if (!tempObj && !strict) break
    const key = keyArr[i]
    if (key in tempObj) {
      tempObj = tempObj[key]
    } else {
      if (strict) {
        throw new Error('please transfer a valid prop path to form item!')
      }
      break
    }
  }
  return {
    o: tempObj,
    k: keyArr[i],
    v: tempObj ? tempObj[keyArr[i]] : null,
  }
}

export const Log = {
  warn(...args) {
    // eslint-disable-next-line no-console
    console.warn(...args)
  },
}

let uuid = 0
export const gid = () => uuid++

export const globalMap = new Map()


