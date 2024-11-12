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
    let boxes=[...document.querySelectorAll('.box-container-1 .box-1')];
    for(var i=currentItem1; i<currentItem1+4;i++){
        boxes[i].style.display='inline-block';
    }
    currentItem1+=4;
    if (currentItem1>=boxes.length) {
        loadMoreBtn1.style.display='none'
        
    }
}
