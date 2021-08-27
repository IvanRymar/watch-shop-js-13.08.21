
class Products {

    constructor(){
        this.labelRemove = 'Удалить из корзины';
        this.labelAdd = 'Добавить в корзину';
        this.classNameActive = 'products-element__btn_active';
    }


    handleSetLocationStorage(element, id){
        const {pushProduсts, products} = localStorageUtils.putProducts(id);/*!!!*/
        console.log(pushProduсts);
        if (pushProduсts){
            element.classList.add(this.classNameActive);
            element.innerHTML = this.labelRemove;
        }
        else{
            element.classList.remove(this.classNameActive);
            element.innerHTML = this.labelAdd;
            }
        headerPage.render(products.length);
    }


    render(){
        const productStore = localStorageUtils.getProducts();/*local storage content*/
        let htmlCatalog = '';

        CATALOG.forEach(({id, name, img, price})=>{ /*iteration over each element of the Catalog array*/
            let activeClass = '';
            let activeText = '';

            if (productStore.indexOf(id) === -1){ /*comparison by id*/
                activeText = this.labelAdd; /*match id => inscription on the "Add to basket" button*/
            }
            else{
                activeText = this.labelRemove; /*no => inscription "Remove from basket"*/
                activeClass = ' ' + this.classNameActive;
            }
            htmlCatalog += `
                <li class="products-element">
                    <span class="products-element__name">${name}</span>
                    <img src="${img}" alt="" class="products-element__img">
                    <span class="products-element__price">${price}</span>
                    <button class="products-element__btn${activeClass}" onclick="productsPage.handleSetLocationStorage(this, '${id}')">${activeText}</button>
                </li>
            `;
        }); 

        const html = `
            <ul class="products-container">
                ${htmlCatalog}
            </ul>
        `;

        ROOT_PRODUCTS.innerHTML = html;

    }

}
const productsPage = new Products();
productsPage.render();