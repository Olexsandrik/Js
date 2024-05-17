async function fetchDataFromMultipleFiles() {
        const [categoriesResponse, electronikResponse, clothingResponse,BookResponse,foodsResponse] = await Promise.all([
            fetch('./api/categories.json'),
            fetch('./api/electronik.json'),
            fetch('./api/things.json'),
            fetch('./api/book.json'),
            fetch('./api/foods.json')
        ]);
        const categoriesData = await categoriesResponse.json();
        const electronikData = await electronikResponse.json();
        const clothingData = await clothingResponse.json();
        const BookData = await BookResponse.json();
        const FoodsData = await foodsResponse.json();

        return { categoriesData, electronikData,clothingData,BookData,FoodsData};
}




let specialsLinkInserted = false;

function loadHomePage() {
    document.getElementById('content').innerHTML = "";
    
    const container_nav_menu = document.querySelector(".container__nav-menu");
    const navMenuChildren = container_nav_menu.children;

    if (navMenuChildren.length >= 3) {
        container_nav_menu.removeChild(navMenuChildren[2]);
    }
    specialsLinkInserted = false;
}

async function loadCatalog() {
    try {
        const data = await fetchDataFromMultipleFiles();
        const categories = data.categoriesData;
        const content = document.getElementById('content');
        const container_nav_menu = document.querySelector(".container__nav-menu");
        content.innerHTML = '';

        for (const category of categories) {
            const categoryContainer = `
                <div class="catalog_container">
                    <div class="category_img">
                        <a href="#" class="mainLink" id="${category.id}"><img src="${category.img}" alt="img"></a>
                    </div>
                    <div class="category_shortname">${category.shortname}</div>
                    <div class="category_name">${category.name}</div>
                </div>
            `;
            content.innerHTML += categoryContainer;
        }

        const categoryLinks = document.querySelectorAll('.mainLink');
        categoryLinks.forEach(link => {
            link.addEventListener('click', function (event) {
                event.preventDefault();
                const categoryId = event.target.parentElement.id;
                
                loadSubCategoties(categoryId);
                
                
                
            });
        });

        if (!specialsLinkInserted) {
            const specialsLi = document.createElement('li');
            const specialsLink = document.createElement("a");
            specialsLink.href = '#';
            specialsLink.innerText = 'Specials';
            specialsLi.appendChild(specialsLink);
            specialsLink.style.fontSize = "20px";
            specialsLink.style.fontFamily = "Verdana, Geneva, Tahoma, sans-serif";
            specialsLink.style.textUnderlinePosition;

            specialsLink.addEventListener("mouseover", function () {
                this.style.textDecoration = "underline";
            });
            specialsLink.addEventListener("mouseout", function () {
                this.style.textDecoration = "none";
            });

            specialsLink.onclick = (e) => {
                e.preventDefault();
                loadRandomCategory();
            };
            container_nav_menu.appendChild(specialsLi);

            specialsLinkInserted = true;
        }
    } catch (error) {
        console.error('Помилка завантаження каталогу: ', error);
    }
}

async function loadSubCategoties(id) {

    const content = document.getElementById('content');
    content.innerHTML="";
   // const mainConent= document.getElementById('content');
    const data = await fetchDataFromMultipleFiles();
    let categories = null;
        
    if(id==1){
         categories = data.electronikData;
    }
    else if(id==2){
        categories = data.clothingData;
    }
    else if(id==3){
        categories= data.BookData;
    }
    else if(id==4){
        categories= data.FoodsData;
    }
  
        for (const category of categories) {
            const categoryContainer = `
                <div class="catalog_container">
                    <div class="category_img">
                        <a href="#" class="mainLink" id="${category.id}"><img src="${category.img}" alt="img"></a>
                    </div>

                    <div class="category_shortname">${category.shortname}</div>
                    <div class="category_name">${category.name}</div>
                    <div class="category_discription">${category.description}</div>
                    <div class="category_price">${category.price}</div>
                </div>
            `;
            content.innerHTML += categoryContainer;
        }

}





document.addEventListener('DOMContentLoaded', function () {

});

    
    
    
    
    
    