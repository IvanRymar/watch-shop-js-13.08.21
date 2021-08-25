class Shopping {

    handleClear(){
        ROOT_SHOPPING.innerHTML = '';
    }

    render(){
        let productStore = localStorageUtils.getProducts(); 
        let htmlCatalog = '';
        let sumCatalog = 0;

        CATALOG.forEach(({id, name, price})=>{
            if(productStore.indexOf(id) !== -1){
                htmlCatalog +=`
                    <tr>
                        <td class="shopping-element__name">${name}</td>
                        <td class="shopping-element__price">${price}</td>
                    </tr>
                `;
                sumCatalog += price;
            }
        });

        const html = `
            <div class="shopping-container">
                <div class="shopping__close" onclick="shoppingPage.handleClear()"></div>
                ${htmlCatalog}
                <tr>
                    <td class=".shopping-element__name">Сумма</td>
                    <td class="shopping-element__price">${sumCatalog}</td>
                </tr>
            </div>
        `;

        ROOT_SHOPPING.innerHTML = html;
    }
}

const shoppingPage = new Shopping();