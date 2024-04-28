var data = {
    coffee:[
        {
            id:0,
            title: 'Americano',
            price: 13000,
            imagePath: 'images/menus/menu-2.jpg',
            desc:'A small river named Duden flows by their place and supplies'
        },
        {
            id:1,
            title: 'Vietname Drip',
            price: 13000,
            imagePath: 'images/menus/menu-2.jpg',
            desc:'A small river named Duden flows by their place and supplies'
        },
        {
            id:1,
            title: 'Cafe Latte',
            price: 15000,
            imagePath: 'images/menus/menu-2.jpg',
            desc:'A small river named Duden flows by their place and supplies'
        },
        {
            id:1,
            title: 'V60',
            price: 15000,
            imagePath: 'images/menus/menu-2.jpg',
            desc:'A small river named Duden flows by their place and supplies'
        },
        {
            id:1,
            title: 'Japanesse Style',
            price: 17000,
            imagePath: 'images/menus/menu-2.jpg',
            desc:'A small river named Duden flows by their place and supplies'
        },
        {
            id:1,
            title: 'Caramel Machiato',
            price: 20000,
            imagePath: 'images/menus/menu-2.jpg',
            desc:'A small river named Duden flows by their place and supplies'
        },
        {
            id:1,
            title: 'Es Kopi Singgah',
            price: 17000,
            imagePath: 'images/menus/menu-2.jpg',
            desc:'Es Kopi Susu Pisang'
        },
        {
            id:1,
            title: 'Es Kopi Bersua',
            price: 17000,
            imagePath: 'images/menus/menu-2.jpg',
            desc:'Es Kopi Sus Gula Aren'
        }
    ],
    mocktail:[
        {
            id:0,
            title: 'Strawberry Cuite',
            price: 18000,
            imagePath: `images/menus/${"Strawberry Cuite".replace(/\s/g, "_").toLowerCase()}/menu-2.jpg`,
            desc:'A small river named Duden flows by their place and supplies',
            markerPath:`images/menus/${"Strawberry Cuite".replace(/\s/g, "_").toLowerCase()}/marker/0.png`
        },
        {
            id:0,
            title: 'Lychee Splash',
            price: 18000,
            imagePath: 'images/menus/menu-2.jpg',
            desc:'A small river named Duden flows by their place and supplies'
        },
    ],
    tea:[
        {
            id:0,
            title: 'Sweet Tea',
            price: 8000,
            imagePath: 'images/menus/menu-2.jpg',
            desc:'A small river named Duden flows by their place and supplies'
        },
        {
            id:0,
            title: 'Lemon Tea',
            price: 15000,
            imagePath: 'images/menus/menu-2.jpg',
            desc:'A small river named Duden flows by their place and supplies'
        },
        {
            id:0,
            title: 'Lychee Tea',
            price: 15000,
            imagePath: 'images/menus/menu-2.jpg',
            desc:'A small river named Duden flows by their place and supplies'
        }
    ],
    flavorCoffee:[
        {
            id:0,
            title: 'Vanilla',
            price: 18000,
            imagePath: 'images/menus/menu-2.jpg',
            desc:'A small river named Duden flows by their place and supplies'
        },
        {
            id:0,
            title: 'Caramel',
            price: 18000,
            imagePath: 'images/menus/menu-2.jpg',
            desc:'A small river named Duden flows by their place and supplies'
        },
        {
            id:0,
            title: 'Hazelnut',
            price: 18000,
            imagePath: 'images/menus/menu-2.jpg',
            desc:'A small river named Duden flows by their place and supplies'
        },{
            id:0,
            title: 'Pandan',
            price: 18000,
            imagePath: 'images/menus/menu-2.jpg',
            desc:'A small river named Duden flows by their place and supplies'
        },
    ],
    milkBased:[
        {
            id:0,
            title: 'Green Tea',
            price: 17000,
            imagePath: 'images/menus/menu-2.jpg',
            desc:'A small river named Duden flows by their place and supplies'
        },
        {
            id:0,
            title: 'Red Velvet',
            price: 17000,
            imagePath: 'images/menus/menu-2.jpg',
            desc:'A small river named Duden flows by their place and supplies'
        },
        {
            id:0,
            title: 'Chocolate',
            price: 17000,
            imagePath: 'images/menus/menu-2.jpg',
            desc:'A small river named Duden flows by their place and supplies'
        },
        {
            id:0,
            title: 'Strawberry Milk Jam',
            price: 17000,
            imagePath: 'images/menus/menu-2.jpg',
            desc:'A small river named Duden flows by their place and supplies'
        },
    ],
     snack:[
        {
            id:0,
            title: 'French Fries',
            price: 13000,
            imagePath: 'images/menus/menu-2.jpg',
            desc:'A small river named Duden flows by their place and supplies'
        },
        {
            id:0,
            title: 'Otak-otak',
            price: 13000,
            imagePath: 'images/menus/menu-2.jpg',
            desc:'A small river named Duden flows by their place and supplies'
        },
        {
            id:0,
            title: 'Sosis',
            price: 13000,
            imagePath: 'images/menus/menu-2.jpg',
            desc:'A small river named Duden flows by their place and supplies'
        },
        {
            id:0,
            title: 'Nugget',
            price: 15000,
            imagePath: 'images/menus/menu-2.jpg',
            desc:'A small river named Duden flows by their place and supplies'
        },
        {
            id:0,
            title: 'Mozzarella Goreng',
            price: 15000,
            imagePath: 'images/menus/menu-2.jpg',
            desc:'A small river named Duden flows by their place and supplies'
        },
        {
            id:0,
            title: 'Platter',
            price: 20000,
            imagePath: 'images/menus/menu-2.jpg',
            desc:'A small river named Duden flows by their place and supplies'
        },
     ],
     indomie:[
        {
            id:0,
            title: 'Rebus / Goreng',
            price: 8000,
            imagePath: 'images/menus/menu-2.jpg',
            desc:'A small river named Duden flows by their place and supplies'
        },
     ]
}

function returnJson(data, statusCode = 200){
    return {
        status: true,
        statusCode,
        data
    }
}

exports.list = function(req, res){
    
    res.status(200).json(returnJson(data, 200))
}