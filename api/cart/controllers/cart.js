'use strict';

const { parseMultipartData, sanitizeEntity } = require('strapi-utils');

/**
 * Read the documentation (https://strapi.io/documentation/v3.x/concepts/controllers.html#core-controllers)
 * to customize this controller
 */

module.exports = {
    // update: async (ctx, next) => {
    //     const { products } = ctx.request.body;
    //     return strapi.services.cart.edit(ctx.params, {
    //         products: JSON.parse(products)
    //     })
    // }

    async update(ctx) {
        const { id } = ctx.params;
        const { products } = ctx.request.body;
        let entity;
        entity = await strapi.services.cart.update({ id }, {
            products: JSON.parse(products)
        });
    
        return sanitizeEntity(entity, { model: strapi.models.cart });
      },
};
