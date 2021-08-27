class Shopping {

    handleClear(){ /*cleaning the Shopping window */
        ROOT_SHOPPING.innerHTML = '';
    }

    render(){
        let productStore = localStorageUtils.getProducts(); /*local storage contents*/
        let htmlCatalog = '';
        let sumCatalog = 0;

        CATALOG.forEach(({id, name, price})=>{
            if(productStore.indexOf(id) !== -1){ /*comparison of each id of the catalog item with the contents of the local storage */
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
                
                <table>
                    ${htmlCatalog}
                    <tr>
                        <td class=".shopping-element__name">Сумма</td>
                        <td class="shopping-element__price">${sumCatalog}</td>
                    </tr>
                </table>
            </div>
        `;

        ROOT_SCHOPPING.innerHTML = html;
    }
}

const shoppingPage = new Shopping();