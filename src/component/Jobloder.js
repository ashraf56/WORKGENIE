import { getShoppingCart } from "./fakedb";

let Jobloder =async ()=>{
    let load=await fetch('/JobData.json')
    let product= await load.json();
    
    let storcart=getShoppingCart();
    let saveCart=[]
    for (const key_id in storcart) {
       let addedProduct=product.find(pd=> pd.key_id===key_id);
       if(addedProduct){
        let quantity=storcart[key_id];
        addedProduct.quantity=quantity
    saveCart.push(addedProduct)
    }
    }
    
    
    return saveCart;
    
    }
    export {Jobloder};