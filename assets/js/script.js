const tabs = document.querySelectorAll('.tab');
const pageNumbers = document.querySelectorAll('.page-list li');

document.querySelector('.tab').classList.add('show');

pageNumbers.forEach(function(list,index){
    list.addEventListener('click',function(){
        for (var i=0; i<pageNumbers.length; i++){
            pageNumbers[i].classList.remove('active');
            tabs[i].classList.remove('show');
        }
        list.classList.add('active');
        tabs[index].classList.add('show');
    })
})
