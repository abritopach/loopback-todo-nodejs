'use strict';

module.exports = function(Category) {
    Category.validatesUniquenessOf('name', {message: 'El nombre debe ser unico.'});
};
