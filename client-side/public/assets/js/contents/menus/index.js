var newArcafe;
var pageScript = {
    menusData: [],
    menuListContainer:{
        mata:"mata",
        hidung:"hidung",
        telinga:"telinga",
        lidah:"lidah",
        kulit:"kulit",
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
        let coffeeHeader = `<h3 class="mb-4 heading-pricing">Mata</h3>`,
            mocktailHeader = `<h3 class="mb-4 heading-pricing">Hidung</h3>`,
            teaHeader = `<h3 class="mb-4 heading-pricing">Telinga</h3>`,
            flavorCoffeeHeader = `<h3 class="mb-4 heading-pricing">Lidah</h3>`,
            snackHeader = `<h3 class="mb-4 heading-pricing">Kulit</h3>`
            
        $(`#menu-${pageScript.menuListContainer.mata}`).html(coffeeHeader + pageScript.renderMenu(pageScript.menusData?.mata))
        $(`#menu-${pageScript.menuListContainer.hidung}`).html(mocktailHeader + pageScript.renderMenu(pageScript.menusData?.hidung))
        $(`#menu-${pageScript.menuListContainer.telinga}`).html(teaHeader + pageScript.renderMenu(pageScript.menusData?.telinga))
        $(`#menu-${pageScript.menuListContainer.lidah}`).html(flavorCoffeeHeader + pageScript.renderMenu(pageScript.menusData?.lidah))
        $(`#menu-${pageScript.menuListContainer.kulit}`).html(snackHeader + pageScript.renderMenu(pageScript.menusData?.kulit))
    },
    renderMenu:function(data){
        console.log(data)
        return data.reduce((html, obj, i) => {

            return /* html */ html +=` <a href="menus/${obj.title.replaceAll(" ", '-').replaceAll("/","").toLowerCase()}" class="pricing-entry d-flex">
                        <div class="img" style="background-image: url(assets/${obj.imagePath});"></div>
                        <div class="desc pl-3">
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