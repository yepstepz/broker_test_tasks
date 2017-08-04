/**
 * I'm too lazy to import libs and babel, because
 * this task isn't very big. So here is some ES5 shitty code.
 * Ofc i'm not going to reinwent obvious things all the time.
 * Going to refactor this later;
 * 
 */
// Jquery toggling visibility.
HTMLElement.prototype.toggle = function () {
    return this.style.display = (this.style.display) == 'none' ? '' : 'none';
};
// Make Dom Collection acting like Array.
function iterate(domEl){
    return Array.prototype.slice.call(domEl);
}

function slide(galleryList, numberStart, numberEnd){
    iterate(galleryList).map(function(item, i){
        item.style.display = 'none'
    })
    iterate(galleryList).map(function(item, i){
        if(i>=numberStart && i<=numberEnd){
            item.toggle();
        }
    })
}

(function(){
    var gallery = document.querySelector('.gallery'),
    galleryList = gallery.querySelectorAll('.gallery__item');

    if (+document.body.clientWidth >= 601){ // checking body width.
            var numberEnd = 2,
            numberStart = 0;
            document.querySelector('.gallery__controls').style.display = 'block';

            slide(galleryList, numberStart, numberEnd); // starting with first slide.

        document.querySelector('.gallery__controls__left').onclick = function(e){
            numberStart -= 3;
            numberEnd -= 3;

            if(!galleryList[numberEnd] && 
               !galleryList[numberStart]){
                numberStart = 6;
                numberEnd = 8;
            }
            slide(galleryList, numberStart, numberEnd);
        }
        document.querySelector('.gallery__controls__right').onclick = function(e){
            numberStart = numberEnd + 1;
            numberEnd +=3;

            if(!galleryList[numberEnd] && 
               !galleryList[numberStart]){
                numberStart = 0;
                numberEnd = 2;
            }
            slide(galleryList, numberStart, numberEnd);
        }
        // we are not moving on our page, so our mousewheeling is pretty useless.
        // let's hanging left move on it.
        window.onmousewheel = function() {
            document.querySelector('.gallery__controls__left').onclick();
        }    
    } else {
        document.querySelector('.gallery__controls').style.display = 'none';
        var numberEnd = 0,
        numberStart = 0;
        slide(galleryList, numberStart, numberEnd); // starting with first slide.
        document.querySelector('.mobile .gallery__controls__left').onclick = function(e){
            numberStart -= 1;
            numberEnd -= 1;
            if(!galleryList[numberEnd] && 
               !galleryList[numberStart]){
                numberStart = 8;
                numberEnd = 8;
            }
            slide(galleryList, numberStart, numberEnd);
        }
        document.querySelector('.mobile .gallery__controls__right').onclick = function(e){
            numberStart += 1;
            numberEnd += 1;
            if(!galleryList[numberEnd] && 
               !galleryList[numberStart]){
                numberStart = 0;
                numberEnd = 0;
            }
            slide(galleryList, numberStart, numberEnd);
        }
        window.onmousewheel = function() {
            document.querySelector('.mobile .gallery__controls__left').onclick();
        }
    }


})()