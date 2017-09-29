export class Product {
    id: number;
    name: string;
    image: string;
    description: string;
    dealtype: string;
    price: number;
    exchange: string;
    userId: number;
    contacttype: string;
    deliverytype: string;
}

export const DealType = ['Продажа', 'Обмен', 'Продажа / Обмен'];

export const Images = [
    '/assets/images/plant.svg',
    '/assets/images/hibiscus.svg',
    '/assets/images/cactus.svg',
    '/assets/images/geranium.svg',
    '/assets/images/hydrangea.svg',
    '/assets/images/kalla.svg',
    '/assets/images/orchid.svg',
    '/assets/images/succulent.svg',
    '/assets/images/spathiphyllum.svg',
    '/assets/images/violet.svg'
];

export const ContactType = ['Тел.', 'Email'];

export const DeliveryType = ['самовывоз', 'до станции метро', 'по адресу покупателя', 'почтовая служба'];
