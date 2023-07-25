const imageContainerEl = document.querySelector(".image-container")

const  btnEl  = document.querySelector(".btn")

btnEl.addEventListener("click", ()=>{
    let imageNum = 10;
    addNewImages(imageNum);
});



function addNewImages(imageNum){
    for (let index = 0; index < imageNum; index++) {
        
        const newImgEl = document.createElement("img");
        newImgEl.src = `https://picsum.photos/300?random=1${Math.random() * 2000}`;
        imageContainerEl.appendChild(newImgEl);
    }
 
}