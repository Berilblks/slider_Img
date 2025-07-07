const nextIcon = document.querySelector(".next");
const prevIcon = document.querySelector(".prev");
const image = document.querySelector(".image");
const imgs = document.querySelectorAll('img');

let currentImg = 1;
let timeout;

prevIcon.addEventListener('click', ()=>{
    currentImg ++;
    clearTimeout(timeout);
    NewImg();
})

nextIcon.addEventListener('click', ()=>{
    currentImg ++;
    clearTimeout(timeout);
    NewImg();
})

function NewImg(){
    if(currentImg > imgs.length){
        currentImg = 1;
    }
    else if(currentImg < 1){
        currentImg = imgs.length;
    }
    image.style.transform = `translateX(-${(currentImg - 1) * 700}px)`;
    timeout = setTimeout(()=>{
        currentImg ++;
        NewImg();
    },4000)
}

NewImg()