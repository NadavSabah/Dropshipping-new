let collections = [
    {
        handle: "hats",
        title: "Hats collection title",
        image: [],
        products_count: 36,
        products: [
            {
                title: "hats - Product1 title",
                handle: 'handle1',
                available: true,
                price: 56,
                description: 'hats - description of a product1',
                images: [
                    {
                        url: 'https://justinehats.com/wp-content/uploads/2020/03/boater-straw-sun-hat-for-women-summer-2020-hat-most-fashion-trent-hat-for-summer-justine-hats.jpg',
                        alt: 'alt text'
                    }
                ],
                media: []
            },
            {
                title: "hats - Product2 title",
                handle: 'handle2',
                available: true,
                price: 76,
                description: 'hats - description of a product2',
                images: [
                    {
                        url: 'https://justinehats.com/wp-content/uploads/2017/05/quality-raffia-straw-hat-justine-hats.jpg',
                        alt: 'alt text'
                    }
                ],
                media: []
            },
            {
                title: "hats - Product2 title",
                handle: 'handle 3',
                available: true,
                price: 60,
                description: 'hats - description of a product2',
                images: [
                    {
                        url: 'https://justinehats.com/wp-content/uploads/2019/03/black-straw-hat-wide-brim-hat-justine-hats.jpg',
                        alt: 'alt text'
                    }
                ],
                media: []
            }

        ]
    },
    {
        handle: "shirts",
        title: "shirts collection title",
        image: [],
        products_count: 36,
        products: [
            {
                title: "shirts-Product1 title",
                handle: '33',
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
                handle: '55',
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

        ]
    },
    {
        handle: "shoes",
        title: "shoes collection title",
        image: [],
        products_count: 36,
        products: [
            {
                title: "Product1 title",
                handle: "new-handle",
                available: true,
                price: 56,
                description: 'description of a product1',
                images: [],
                media: []
            },
            {
                title: "Product2 title",
                handle: 'blabla handle',
                available: true,
                price: 56,
                description: 'description of a product2',
                images: [],
                media: []
            }

        ]
    }
];

export function getProducts() {
    let products = {}
    collections.forEach(collection => {
        collection.products.forEach((product) => {
            products[product.handle] = product
        })
    })
    return products
}

export function getCollections() {
    return collections;
}

export function getCollection(handle) {
    return collections.find(
        (collection) => collection.handle === handle
    );
}


export function getProductByHandle(handle) {
    let products = getProducts()
    return products[handle]
}