const containerDiv = document.querySelector('#containerDiv');
const allBtn = document.querySelectorAll('button');

const changeBg = (color) => {
    containerDiv.style.backgroundColor = color;
}

allBtn.forEach((btn)=>{
    btn.addEventListener('click', ()=>{
       changeBg(btn.id);
    });
});

