/*return, const, this, null, splice, push*/

class LocalStorageUtils{/*two methods: 1. returns the contents of the local storage; 
2.transfers the id of the selected item to the local storage */

    constructor(){
        this.keyName = 'products';
    }

    getProducts(){ /**returns the contents of local storage **/
        const productsLocalStorage = localStorage.getItem(this.keyName); /*local storage contents*/
        if (productsLocalStorage !== null){ /*checking local storage contents*/

            console.log(productsLocalStorage); /*убрать*/   
            return JSON.parse(productsLocalStorage); /*returns the contents of local storage*/
        }
            console.log(productsLocalStorage); /*убрать*/  
            return []; /*returns an empty array*/
    }
    
        

    putProducts(id){ /*transfers the id of the selected item to local storage*/
       let products = this.getProducts(); /*local storage contents*/
       console.log(products);/*убрать*/
       let index = products.indexOf(id); /*checking for the presence of the given id in the local storage, getting its index in local storage*/
       let pushProduсts = false;

       if (index !== -1){/*add this item to local storage =>"Add to basket"*/
            products.push('id');
            pushProduсts = true;/*item selected*/
       }
       else{ /*the selected item is present in local storage*/
            products.splice(index, 1); /*remove this item from local storage=>"Remove from basket"*/
       }

       localStorage.setItem(this.keyName, JSON.stringify(products));
       return {pushProduсts, products};

    }
}
const localStorageUtils = new LocalStorageUtils();





// localStorageUtils.putProducts('el1');
// const a = localStorageUtils.getProducts();
// console.log(a);

