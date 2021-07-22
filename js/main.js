

window.onload = function () {

    
    let main = document.getElementById('main');
    let pre = document.getElementById('loader');
    
    // main.style.display = 'block' ;
    pre.style.display = 'none' ;
    
}

window.addEventListener('scroll' , () => {

    let fixedNav= document.querySelector('.fixed-nav');

    fixedNav.classList.toggle('active' , window.scrollY > 800);

});


    function tog() {
        
        let navbar = document.querySelector('.nav');
        let hamBtn = document.querySelector(".hamburger-btn");
        navbar.classList.toggle('active');
        hamBtn.classList.toggle("open");
    }
    
    (()=> {
    
        let filterItems = document.querySelector('.filter');
        let filterItem = document.querySelectorAll('.filter-item');
        let gamesList = document.querySelectorAll('.games-list-ilem');


        
        
        filterItems.addEventListener('click' , (event) => {
            
            
            if (event.target.classList.contains('filter-item')  &&
            !event.target.classList.contains('active')) {
                
                const see = event.target.getAttribute('data-target');


            filterItems.querySelector('.filter-item.active').classList.remove('active');

            event.target.classList.add('active');

            gamesList.forEach((item) => {
                
                if (see === item.getAttribute('data-category')
                || see === 'all') {
                    item.classList.remove('hide');
                    item.classList.add('show');
                    console.log(item.getAttribute('data-category'))
                }
                else {
                    item.classList.remove('show');
                    item.classList.add('hide');

                };
            });


            }


        })
    
        })();