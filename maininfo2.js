const readMoreBtn2 = document.querySelector('.read-more-btn2');
const text2 = document.querySelector('.text2');

readMoreBtn2.addEventListener('click',(e)=>{
    text2.classList.toggle('show-more');
    if(readMoreBtn2.innerText === 'Read More'){
        readMoreBtn2.innerText = 'Read Less';
    }else{
        readMoreBtn2.innerText = 'Read More';
    }
})