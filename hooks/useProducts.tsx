import ItemImage from "@/public/images/item.png";


const products: IProduct[] = [
    {
        id: "fsdf-323",
        description: "Adidas rare shoe collection",
        category: "shoe",
        title: "Adidas",
        imageSource: ItemImage.src,
        price: 23,
    },
    {
        id: "456d-323",
        description: "Best & most comfy Ikea product",
        category: "chair",
        title: "Ikea Markus",
        imageSource: ItemImage.src,
        price: 13.42,
    }
];

export const useProducts = () => {
    return {products};
}