import { getShoppingCart } from "./fakedb";

let Jobloder =async ()=>{
    let load=await fetch('JobData.json')
    let product= await load.json();
    
    let storcart=getShoppingCart();
    let saveCart=[]
    for (const company_name in storcart) {
       let addedProduct=product.find(pd=> pd.company_name===company_name);
       if(addedProduct){
        let quantity=storcart[company_name];
        addedProduct.quantity=quantity
    saveCart.push(addedProduct)
    }
    }
    
    
    return saveCart;
    
    }
    export {Jobloder};