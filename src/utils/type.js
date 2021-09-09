export const rowType = target => Object.prototype.toString.call(target).slice(8, -1)

export const isUndef = val => val === undefined

export const isFn = val => rowType(val) === 'Function'

export const isObj = val => rowType(val) === 'Object'

export const isNull = val => val === null

export const isStr = val => typeof val === 'string'

export const isPromise = val => rowType(val) === 'Promise'
