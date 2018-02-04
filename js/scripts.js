document.addEventListener('DOMContentLoaded', function () {
    var menuLi = document.querySelectorAll('.topmenu > li');
    var images = document.querySelectorAll('.images');
    var leftArrow = document.querySelector('.leftarrow');
    var rightArrow = document.querySelector('.rightarrow');

    for (var i = 0; i < menuLi.length; i++) {
        menuLi[i].addEventListener('mouseover', function () {
            //sprawdzam czy jest submenu
            if (this.querySelector('.submenu-wrapper')) {
                this.querySelector('.submenu-wrapper').style.display = 'block';
            }
        });

        menuLi[i].addEventListener('mouseout', function () {
            if (this.querySelector('.submenu-wrapper')) {
                this.querySelector('.submenu-wrapper').style.display = 'none';
            }
        });
    }

    for (var i = 0; i < images.length; i++) {
        images[i].addEventListener('mouseover', function () {
            if (this.querySelector('.section2text')) {
                this.querySelector('.section2text').style.display = 'none';
            }
        });

        images[i].addEventListener('mouseout', function () {
            if (this.querySelector('.section2text')) {
                this.querySelector('.section2text').style.display = 'block';
            }
        });
    }

    leftArrow.addEventListener('click', function (e) {
        e.preventDefault();
        var visibleChair = document.querySelector('.chair.visible');
        var prevChairElement = visibleChair.previousElementSibling;
        visibleChair.classList.remove('visible');
        //sprawdzam czy istnieje poprzedni element o klasie .chair
        //jesli nie to pokazuje ostatni obrazek bo doszlam do poczatku
        if (prevChairElement && prevChairElement.className.indexOf('chair') > -1) {
            prevChairElement.classList.add('visible');
        } else {
            document.querySelector('.chair:last-child').classList.add('visible');
        }

    });

    rightArrow.addEventListener('click', function (e) {
        e.preventDefault();
        var visibleChair = document.querySelector('.chair.visible');
        var nextChairElement = visibleChair.nextElementSibling;
        visibleChair.classList.remove('visible');
        //sprawdzam czy istnieje kolejny element o klasie .chair
        //jesli nie to pokazuje pierwszy obrazek bo doszlam do konca
        if (nextChairElement && nextChairElement.className.indexOf('chair') > -1) {
            nextChairElement.classList.add('visible');
        } else {
            document.querySelector('.chair').classList.add('visible');
        }
    });


});