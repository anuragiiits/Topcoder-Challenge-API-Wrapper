/**
 * Test common function.
 */
const _ = require('lodash')
const td = require('./testData')
const routes = require('./routes')

/**
 * Find route for request
 * @param {Object} param the request params
 * @return {Object} the found route
 */
const findRoute = (param) => {
  const routeParam = param.isHead ? _.assign({}, param, { method: 'get' }) : param
  let route
  _.each(routes, (verbs, url) => {
    _.each(verbs, (def, verb) => {
      if (routeParam.path === url && verb === routeParam.method) {
        route = def
      }
    })
  })
  return route
}

/**
 * Set path of param
 * @param {Object} param the request params
 */
const setPath = (param) => {
  let path = String(param.uri)
  if (param.uri.startsWith(td.API_VERSION)) {
    path = param.uri.substring(td.API_VERSION.length)
  }
  if (path.includes('?')) {
    path = path.split('?')[0]
  }
  param.path = path
}

/**
 * Validate route of param
 * @param {Object} param the request params
 */
const checkRoute = (param) => {
  const route = findRoute(param)
  if (!route) {
    throw new Error(`Route '${param.method} ${param.path}' not defined.`)
  }
}

/**
 * Parse param which path like resource/:id
 * @param {Object} param the request param
 * @return {Object} parsed param
 */
const parsePathParam = (param) => {
  const parts = param.path.split('/')
  const id = parts.pop()
  const resource = parts.pop()
  const routeParam = _.assign({}, param, { id, path: `/${resource}/:id` })
  return routeParam
}

/**
 * Mock create for api
 * @param {Object} param the create params
 * @return {Array} the create result for nock
 */
const create = (param) => {
  setPath(param)
  checkRoute(param)
  const route = findRoute(param)
  const joiParam = {}
  joiParam.entity = param.body.param
  const result = route.schema.validate(joiParam)

  if (result.error) {
    return [td.JOI_FAIL_STATUS, { message: result.error.details[0].message }]
  }
  let id = route.id
  if (_.isArray(route.id)) {
    id = route.id.pop()
  }
  const init = {}
  return [td.CREATE_SUCCESS_STATUS, _.assign(init, param.body, { id })]
}

/**
 * Mock search for api
 * @param {Object} param the search params
 * @return {Array} the search result for nock
 */
const get = (param) => {
  setPath(param)
  checkRoute(param)
  const route = findRoute(param)
  return [td.SUCCESS_STATUS, route.records]
}

/**
 * Mock put for api
 * @param {Object} param the put param
 * @return {Array} the put result for nock
 */
const put = (param) => {
  setPath(param)
  const routeParam = parsePathParam(param)
  checkRoute(routeParam)
  const route = findRoute(routeParam)
  const joiParam = { [route.idProp]: routeParam.id, entity: routeParam.body.param }
  const result = route.schema.validate(joiParam)
  if (result.error) {
    return [td.JOI_FAIL_STATUS, { message: result.error.details[0].message }]
  }
  const notFoundId = routeParam.notFoundId || td.NOT_FOUND_ID
  if (routeParam.id === notFoundId) {
    return [td.NOT_FOUND_STATUS, { message: routeParam.notFound }]
  }
  const obj = routeParam.obj
  return [td.SUCCESS_STATUS, _.assign({}, obj, routeParam.body)]
}

/**
 * Mock patch for api
 * @param {Object} param the patch param
 * @return {Array} the patch result for nock
 */
const patch = (param) => {
  return put(param)
}

/**
 * Mock remove for api
 * @param {Object} param the delete param
 * @return {Array} the delete result for nock
 */
const remove = (param) => {
  setPath(param)
  const routeParam = parsePathParam(param)
  checkRoute(routeParam)
  const route = findRoute(routeParam)
  const result = route.schema.validate({ [route.idProp]: routeParam.id })
  if (result.error) {
    return [td.JOI_FAIL_STATUS, { message: result.error.details[0].message }]
  }
  const notFoundId = routeParam.notFoundId || td.NOT_FOUND_ID
  if (routeParam.id === notFoundId) {
    return [td.NOT_FOUND_STATUS, { message: routeParam.notFound }]
  }
  if (!routeParam.obj) {
    return [td.NOT_FOUND_STATUS, { message: td.NotFoundError.ReviewType }]
  }
  return [td.SUCCESS_STATUS, null]
}

/**
 * Make client that invokes the Wrapper methods with JWT argument
 */
function makeJwtClient (api, jwt) {
  return Object.entries(api).reduce((acc, [key, fn]) => {
    acc[key] = (...args) => fn(...args, jwt)
    return acc
  }, {})
}

module.exports = {
  findRoute,
  create,
  get,
  patch,
  remove,
  makeJwtClient
}
