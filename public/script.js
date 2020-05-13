document.addEventListener('DOMContentLoaded', function () {

    // SCROLL-----------------------

    const scrollBtn = document.getElementById("scrollTop");

    window.onscroll = function() {scrollFunction()};

    const scrollFunction = () => {
        if (document.body.scrollTop > 50 || document.documentElement.scrollTop > 50) {
            scrollBtn.style.display = "flex";
        } else {
            scrollBtn.style.display = "none";
        }
    }

    scrollBtn.addEventListener('click', () => {
        document.body.scrollTop = 0;
        document.documentElement.scrollTop = 0;
    });

    








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




    const service = [
        {
            name: 'телефоны',
            photo: 'image/icons/iphone.png',
            services: [
                'замена деталей',
                'ремонт после попадания жидкости',
				'програмный ремонт (прошивка)',
				'реомнт материнской платы'
            ]
        },
        {
            name: 'ПЛАНШЕТЫ',
            photo: 'image/icons/notepad.png',
            services: [
                'замена деталей',
                'ремонт после попадания жидкости',
				'програмный ремонт (прошивка)',
				'реомнт материнской платы'
            ]
        },
        {
            name: 'НОУТБУКИ',
            photo: 'image/icons/notebook.png',
            services: [
                'профилактика',
                'ремонт после попадания жидкости',
				'програмный ремонт (прошивка)',
				'реомнт материнской платы'
            ]
        },
        {
            name: 'ТЕЛЕВИЗОРЫ',
            photo: 'image/icons/tv.png',
            services: [
                'ремонт подсветки, блока питания',
				'ремонт материнской платы',
				'ремонт после попадания жидкости',
				'прошивка памяти'
            ]
        }
    ];

// -------------------service
    const serviceInfo = document.getElementById('service-info');

    for(let i = 0; i < service.length; i++){
        const container = document.createElement('div');
        container.classList.add('service-container');

        const header = document.createElement('h3');
        header.innerHTML = service[i].name;

        const divImg = document.createElement('div');
        divImg.classList.add('service-img');
        
        const img = document.createElement('img');
        img.setAttribute('src', service[i].photo);    
        
        divImg.appendChild(img);

        const list = document.createElement('ul');
        
        for(let k = 0; k < service[i].services.length; k++){
            const item = document.createElement('li');
            item.innerHTML = service[i].services[k];

            list.appendChild(item);
        }

        container.appendChild(header);
        container.appendChild(divImg);
        container.appendChild(list);

        serviceInfo.appendChild(container);
    }




// ------------------comments

    const comments = [
        {
            name: 'Tatyana Levchenko',
            photo: '',
            comment: 'отличный сервис! экран поменяли за день, при этом цена ооочень  адекватная. без лишних накруток и всего остального. всё четко и по делу. позвонили,  когда телефон был готов. спасибо за работу, если что, то мы теперь только к вам 👍'
        },
        {
            name: 'Елена Парафилова',
            photo: '',
            comment: 'Оперативно заменили батарею на телефоне. В течение нескольких часов. Дали гарантию. В сервисном центре на Декабристов предлагали заменить ее же в течение трёх дней.'
        },
        {
            name: 'Анна Птица',
            photo: '',
            comment: 'Быстро и, главное, качественно! Все проблемы с телефоном решаю только там. Однозначно пятёрочка'
        }
    ];

    const comentInfo = document.getElementById('comment-info');

    for(let i = 0; i < comments.length; i++){
        const container = document.createElement('div');
        container.classList.add('comment-container');

        const divImg = document.createElement('div');
        divImg.classList.add('comment-avatar');

        const img = document.createElement('img');
        img.setAttribute('src', comments[i].photo);

        divImg.appendChild(img);

        const comment = document.createElement('div');
        comment.classList.add('comment');

        const name = document.createElement('h3');
        name.innerHTML = comments[i].name;
        const text = document.createElement('p');
        text.innerHTML = comments[i].comment;
        
        comment.appendChild(name);
        comment.appendChild(text);

        container.appendChild(divImg);
        container.appendChild(comment);

        comentInfo.appendChild(container);
    }













})