var newArcafe;
var pageScript = {
    url:{},
    menusData: [],
    allMenuData:[],
    getMenu: async function(){
        return new Promise((resolve) => {
            newArcafe.ajax('/api/menus', null, function(res){
           
                const dataReturn = res;
    
                if(dataReturn.status){
                    pageScript.menusData = dataReturn.data;
                    
                    Object.entries(pageScript.menusData).forEach(([k,v]) =>{
                        let subMenu = pageScript.menusData[k];
    
            
                        for(let j = 0; j < subMenu.length; j++){
                            let item = subMenu[j];
                            item.category = k;
            
                            pageScript.allMenuData.push(item);
                        }
                    })
                       
                    
                    console.log(pageScript.allMenuData)

                    resolve(pageScript.allMenuData)
                }
            })
        })
    },
    displayMenu:function(){
        let data = pageScript.allMenuData.find((obj) => obj.title.replaceAll(" ", '-').replaceAll("/","").toLowerCase() == pageScript.url.pathArray[2])

        if(!data){
            alert("Menu not found.")
            window.location.href = "/menus"
        }

        $(document).find(`#menu-title`).text(data.title)
        $(document).find(`#menu-submenu`).text(newArcafe.capitalizeEachWord(data.category))
        $(document).find(`#menu-desc`).text(data.desc)
        $(document).find(`#menu-image`).attr('src', `assets/${data.imagePath}`)
        $(document).find(`#menu-marker`).attr('src', `assets/${data?.markerPath}`)
        if(!newArcafe.isset(data.markerPath)){
            $(document).find(`#menu-marker`).hide()
            $(document).find(`#menu-marker-info`).hide()
        }

    },
    init:async function(){
        pageScript.url.base_url = window.location.origin;
        pageScript.url.host = window.location.host;
        pageScript.url.pathArray = window.location.pathname.split( '/' );
        await pageScript.getMenu();
        pageScript.displayMenu();

    }
}

$(document).ready(function(){
    newArcafe = clone(arcafe);
    pageScript.init()
})