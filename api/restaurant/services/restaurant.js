'use strict'

/**
 * Read the documentation (https://strapi.io/documentation/developer-docs/latest/development/backend-customization.html#core-services)
 * to customize this service
 */

module.exports = {
  async find (params, populate) {
    let result = await strapi.query('restaurant').find(params, populate)
    console.log({result,services:strapi.services})
    return result;
  },
  findById(params,populate){
  return "Testing if this working just fine"
  }

}
