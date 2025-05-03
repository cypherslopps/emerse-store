interface ICart {
    id: string;
    title: string;
    imageSource: string;
    price: number;
    quantity: number;
}

interface ICartInitialState {
    items: ICart[];
    totalCartCount: number;
    totalCartPrice: number;
}