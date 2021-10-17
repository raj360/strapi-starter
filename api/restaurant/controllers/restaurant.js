'use strict';

/**
 * Read the documentation (https://strapi.io/documentation/developer-docs/latest/development/backend-customization.html#core-controllers)
 * to customize this controller
 */

module.exports = {
  async findById(ctx){
   
   console.log({ctx})
   return "Testing if this is working just fine "
  }
};
