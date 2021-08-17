
class Products {


    render(){

        let htmlCatalog = '';

        CATALOG.forEach(({id, name, img, price})=>{
            htmlCatalog += `
                <li class="products-element">
                    <span class="produts-element__name">${name}</span>
                    <img src="${img}" alt="" class="produts-element__img">
                    <span class="produts-element__price">${price}</span>
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