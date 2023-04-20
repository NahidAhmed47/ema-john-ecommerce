import { getShoppingCart } from "../utilities/fakedb";

const cartProductsLoader = async()=>{
    const res = await fetch('products.json');
    const data = await res.json();
    
    const storedCart = getShoppingCart();
    let savedCart = [];
    for(const id in storedCart){
         const addedProduct = data.find(pId => pId.id === id);
        if(addedProduct){
            const quantity = storedCart[id];
            addedProduct.quantity = quantity;
            savedCart.push(addedProduct);
         }
    }
    return savedCart;
}

export default cartProductsLoader;