function findQuantity(product,quantity,pricePerKg) {
    let quantityKg = quantity/1000;
    let priceForQuantity = quantityKg*pricePerKg;
    console.log(`I need $${priceForQuantity.toFixed(2)} to buy ${quantityKg.toFixed(2)} kilograms ${product}.`)
}

