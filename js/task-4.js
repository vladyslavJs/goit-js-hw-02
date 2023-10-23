// Оголоси функцію getShippingCost(country), яка повинна перевіряти можливість доставки товару в країну користувача (параметр country) і повертати повідомлення про результат. Обов'язково використовуй інструкцію switch.

// Формат рядка, що повертається "Shipping to <country> will cost <price> credits", де замість <country> і <price> необхідно підставити відповідні значення.

function getShippingCost(country) {
    let price;
    let deliveryOrder;
    switch (country) {
        case 'Australia':
            price = 170;
            deliveryOrder = `Shipping to ${country} will cost ${price} credits`;
            break;
        case 'China':
            price = 100;
            deliveryOrder = `Shipping to ${country} will cost ${price} credits`;
            break;
        case 'Chile':
            price = 250;
            deliveryOrder = `Shipping to ${country} will cost ${price} credits`;
            break;
        case 'Jamaica':
            price = 120;
            deliveryOrder = `Shipping to ${country} will cost ${price} credits`;
            break;
        default:
            deliveryOrder = `Sorry, there is no delivery to your country`;
    }
    return deliveryOrder;
}

console.log(getShippingCost("Australia")); // "Shipping to Australia will cost 170 credits"
console.log(getShippingCost("Germany")); // "Sorry, there is no delivery to your country"
console.log(getShippingCost("China")); // "Shipping to China will cost 100 credits"
console.log(getShippingCost("Chile")); // "Shipping to Chile will cost 250 credits"
console.log(getShippingCost("Jamaica")); // "Shipping to Jamaica will cost 120 credits"
console.log(getShippingCost("Sweden")); // "Sorry, there is no delivery to your country"