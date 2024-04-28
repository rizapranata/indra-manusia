var newArcafe;
var pageScript = {
    menusData: [],
    menuListContainer:{
        coffee:"coffee",
        mocktail:"mocktail",
        tea:"tea",
        flavorCoffee:"flavor-coffee",
        snack:"snack",
        milkBased:"milk-based",
        indomie:"indomie"
    },
    getMenu: function(){
        newArcafe.ajax('/api/menus', null, function(res){
           
            const dataReturn = res;

            if(dataReturn.status){
                pageScript.menusData = dataReturn.data;
                pageScript.displayMenu();
            }
        })
    },
    displayMenu:function(){
        let coffeeHeader = `<h3 class="mb-4 heading-pricing">Coffee</h3>`,
            mocktailHeader = `<h3 class="mb-4 heading-pricing">Mocktail</h3>`,
            teaHeader = `<h3 class="mb-4 heading-pricing">Tea</h3>`,
            flavorCoffeeHeader = `<h3 class="mb-4 heading-pricing">Flavor Coffee</h3>`,
            snackHeader = `<h3 class="mb-4 heading-pricing">Snack</h3>`,
            milkBasedHeader = `<h3 class="mb-4 heading-pricing">Milk Based</h3>`,
            indomieHeader = `<h3 class="mb-4 heading-pricing">Indomie</h3>`
            
        $(`#menu-${pageScript.menuListContainer.coffee}`).html(coffeeHeader + pageScript.renderMenu(pageScript.menusData?.coffee))
        $(`#menu-${pageScript.menuListContainer.mocktail}`).html(mocktailHeader + pageScript.renderMenu(pageScript.menusData?.mocktail))
        $(`#menu-${pageScript.menuListContainer.tea}`).html(teaHeader + pageScript.renderMenu(pageScript.menusData?.tea))
        $(`#menu-${pageScript.menuListContainer.flavorCoffee}`).html(flavorCoffeeHeader + pageScript.renderMenu(pageScript.menusData?.flavorCoffee))
        $(`#menu-${pageScript.menuListContainer.snack}`).html(snackHeader + pageScript.renderMenu(pageScript.menusData?.snack))
        $(`#menu-${pageScript.menuListContainer.milkBased}`).html(milkBasedHeader + pageScript.renderMenu(pageScript.menusData?.milkBased))
        $(`#menu-${pageScript.menuListContainer.indomie}`).html(indomieHeader + pageScript.renderMenu(pageScript.menusData?.indomie))
    },
    renderMenu:function(data){
        console.log(data)
        return data.reduce((html, obj, i) => {
            let price = accounting.formatMoney(obj.price, newArcafe.defaultCurrency+" ", 0, ".", ",").split(".");
            if(price.length > 1){
                price.pop()
            }

            return /* html */ html +=` <a href="menus/${obj.title.replaceAll(" ", '-').replaceAll("/","").toLowerCase()}" class="pricing-entry d-flex">
                        <div class="img" style="background-image: url(assets/${obj.imagePath});"></div>
                        <div class="desc pl-3">
                            <div class="d-flex text align-items-center">
                                <h3><span>${obj.title}</span></h3>
                                <span class="price">${price}K</span>
                            </div>
                            <div class="d-block">
                                <p>${obj.desc}</p>
                            </div>
                        </div>
                    </a>`
        }, '')
    },
    init:function(){
        pageScript.getMenu();
    }
}

$(document).ready(function(){
    newArcafe = clone(arcafe);
    pageScript.init()
})