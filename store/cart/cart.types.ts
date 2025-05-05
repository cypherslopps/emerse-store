interface ICart {
    id: string;
    category: string;
    title: string;
    imageSource: string;
    price: number;
    quantity: number;
}

interface ICartInitialState {
    cartItems: ICart[];
    isCartBasketOpen: boolean
}