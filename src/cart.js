let cart = {

    products: [
        {
            title: "shirts-Product1 title",
            available: true,
            price: 56,
            description: 'description of a product1',
            images: [
                {
                    url: 'https://justinehats.com/wp-content/uploads/2019/03/black-straw-hat-wide-brim-hat-justine-hats.jpg',
                    alt: 'alt text'
                }
            ],
            media: []
        },
        {
            title: "shirts-Product2 title",
            available: true,
            price: 56,
            description: 'description of a product2 - shirts',
            images: [
                {
                    url: 'https://justinehats.com/wp-content/uploads/2019/03/black-straw-hat-wide-brim-hat-justine-hats.jpg',
                    alt: 'alt text'
                }
            ],
            media: []
        }

    ],
    item_count: function () {
        return this.products.length
    },
    total_price: function () {
        return this.products.reduce((acc, product) => acc + product.price, 0)
    },

}

export function getCart() {
    return cart
} 