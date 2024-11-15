function E(selector, parent) {
    if (selector instanceof HTMLElement) {
        return selector;
    }
    return (parent || document).querySelectorAll(selector);
}

function hasClass(element, className) {
    return element.classList.contains(className);
}

function radioClass(element, className) {
    Array.from(E("." + className)).forEach((elem) => {
        elem.classList.remove(className);
    });
    element.classList.add(className);
}

function tabs(nav) {
    let navElem = E(nav)[0];
    navElem.addEventListener("click", (e) => {
        let target = e.target;

        if (hasClass(target, "tab")) {
            // Desactivar todas las pestañas
            Array.from(E(".tab")).forEach((tab) => {
                tab.classList.remove("active");
            });

            // Activar la pestaña seleccionada
            target.classList.add("active");

            // Ocultar todas las pestañas de contenido
            Array.from(E(".tab-content")).forEach((content) => {
                content.classList.remove("visible");
            });

            // Mostrar el contenido de la pestaña seleccionada
            let linkedTab = E("." + target.id)[0];
            linkedTab.classList.add("visible");
        }
    });

    // Inicializar la pestaña activa
    let active = E(".tab.active")[0];
    if (active) {
        radioClass(E("." + active.id)[0], "visible");
    }
}


tabs(".menu-nav");

let loadMoreBtn1= document.querySelector('#cargar-mas-1');

let currentItem1= 4;
loadMoreBtn1.onclick= () =>{
    let boxes1=[...document.querySelectorAll('.box-container-1 .box-1')];
    for(var i=currentItem1; i<currentItem1+4;i++){
        boxes1[i].style.display='inline-block';
    }
    currentItem1+=4;
    if (currentItem1>=boxes1.length) {
        loadMoreBtn1.style.display='none'
        
    }
}


let loadMoreBtn2= document.querySelector('#cargar-mas-2');

let currentItem2= 4;
loadMoreBtn2.onclick= () =>{
    let boxes2=[...document.querySelectorAll('.box-container-2 .box-2')];
    for(var i=currentItem2; i<currentItem2+4;i++){
        boxes2[i].style.display='inline-block';
    }
    currentItem2+=4;
    if (currentItem2>=boxes2.length) {
        loadMoreBtn2.style.display='none'
        
    }
}



let loadMoreBtn3= document.querySelector('#cargar-mas-3');

let currentItem3= 4;
loadMoreBtn3.onclick= () =>{
    let boxes3=[...document.querySelectorAll('.box-container-3 .box-3')];
    for(var i=currentItem3; i<currentItem3+4;i++){
        boxes3[i].style.display='inline-block';
    }
    currentItem3+=4;
    if (currentItem3>=boxes3.length) {
        loadMoreBtn3.style.display='none'
        
    }
}
