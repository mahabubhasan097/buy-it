import { getShoppingCart } from "../utilities/fakedb";

const cartProductsLoader = async()=>{
    const loadedProducts = await fetch('products.json');
    const products = await loadedProducts.json();

    //if cart data is in database you have to use async await
    const storedCart =getShoppingCart();
    const savedCart =[];
    for (const id in storedCart){
        const addedProduct = products.find(pd => pd.id === id)
        if(addedProduct){
            const quantity = storedCart[id];
            addedProduct.quantity = quantity;
            savedCart.push(addedProduct)
        }
    }
    //if you need to return more than one thing
    //option 1 as array:
    //return [products,savedcart];
    //option 2 as object:
    //return {products,savedcart};
    //return {products,cart: savedcart};
    return savedCart;
}
export default cartProductsLoader;