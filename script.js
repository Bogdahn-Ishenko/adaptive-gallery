
const brandContainer = document.querySelector('.brand-gallery__inner');
const brands = brandContainer.children;

const toggleBrandListButton = document.querySelector('.toggle-brand-list-button');
const textButton = toggleBrandListButton.querySelector('.toggle-brand-list-button__text');
const imageButton = toggleBrandListButton.querySelector('.toggle-brand-list-button__image');

const brandContainerWidth = brandContainer.offsetWidth;

function toggleShortFull(condition){
    const brandContainerWidth = brandContainer.offsetWidth;
    const columns = Math.floor(brandContainerWidth / (brands[0].offsetWidth + 27));
    const visibleCardMin = columns * 2;
    console.log(brands.length);
    console.log(visibleCardMin);
    if(brands.length <= visibleCardMin){
        toggleBrandListButton.style.display = 'none';
    }
    else{
        toggleBrandListButton.style.display = 'flex';
    }
    if(condition == 'short'){
        for (const key in brands) {
            if (Object.hasOwnProperty.call(brands, key)) {
                const element = brands[key];
                if(key >= visibleCardMin){
                    element.style.display =  'none';
                }
                else {
                    element.style.display =  'flex';
                }
            }
        }
    } 
    else if(condition == 'full'){
        for (const key in brands) {
            if (Object.hasOwnProperty.call(brands, key)) {
                const element = brands[key];
                if(key >= visibleCardMin){
                    element.style.display =  'flex';
                }
            }
        }
    }
}
toggleShortFull('short');

toggleBrandListButton.addEventListener('click', () =>{
    if(brandContainer.classList.contains('short')){
        brandContainer.classList.remove('short');
        brandContainer.classList.add('full');
        textButton.innerHTML = 'Скрыть';
        imageButton.setAttribute('src','./assets/ico/expand.svg');
        console.log(textButton.innerHTML);
        toggleShortFull('full');
    }
    else if(brandContainer.classList.contains('full')){
        brandContainer.classList.remove('full');
        brandContainer.classList.add('short');
        textButton.innerHTML = 'Показать все';
        imageButton.setAttribute('src','./assets/ico/expand-open.svg');

        toggleShortFull('short');
    }
})
window.addEventListener('resize',()=>{
    if(brandContainer.classList.contains('short')){
        toggleShortFull('short');
    }
    else if(brandContainer.classList.contains('full')){
        toggleShortFull('full');
    }
})
