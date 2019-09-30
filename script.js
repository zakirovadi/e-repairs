document.addEventListener('DOMContentLoaded', function () {


    // BUTTON MENU------------------
    var menuUl = document.getElementsByClassName('menu-ul')[0],
        menuButton = document.getElementsByClassName('menu-button')[0];

    menuButton.onclick = function showMenu(){    
        menuUl.classList.toggle('menu-ul-phone');
        menuButton.classList.toggle('menu-btn-clicked');
    }


    // SLIDER-----------------------

    var index = 0,
        images = [
            'image/slider0.jpg',
            'image/slider1.jpg',
            'image/slider2.jpg',
            'image/slider3.jpg',];

    
    function fixIndex() {   //чтоб не выходить за границы массива
        if(index >= images.length)
            index = 0;
        else if(index < 0) 
            index = images.length - 1;
    };

    function updateImageSrc(){  //добавление фото в html
        document.getElementsByClassName('slider-image')[0].src = images[index];
    }

    function next(){    //слайд вперед
        index++;

        fixIndex();
        updateImageSrc();
    }
    
    function previous(){    //слайд назад
        index--;
        
        fixIndex()
        updateImageSrc();
    }

    function init(){
        index = 0;
        updateImageSrc();
    
        setInterval(next, 6000);
    }

    init();

    var btnNext = document.getElementsByClassName('slider-next')[0],
        btnPrev = document.getElementsByClassName('slider-prev')[0];

    btnNext.onclick = next;
    btnPrev.onclick = previous;









})