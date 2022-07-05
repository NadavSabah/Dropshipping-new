export let cart = {

    products: [

    ],
    item_count: function () {
        return this.products.length
    },
    total_price: function () {
        return this.products.reduce((acc, product) => acc + product.price, 0)
    },

}

export function getCart() {
    console.log(cart)
    return cart
}
export function addToCart(product) {

    if (!product) return 'no product supplied addToCart function'
    product.quantity = (product.quantity || 0) + 1;
    let productInCart = cart.products.find(currProduct => currProduct.handle === product.handle)

    productInCart ? productInCart.quantity += 1 : cart.products.push(product)

}
export function removeFromCart(productHandle) {
    cart.products = cart.products.filter(product => product.handle != productHandle)
}