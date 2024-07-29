    const increaseButtonEl = document.querySelector(".counter__button-increase");
    const conterValue = document.querySelector(".counter__value");
    const decreaseButtonEl = document.querySelector(".counter__button-decrease");
    const resetValue = document.querySelector(".counter__reset-button")
    const limitTen = document.querySelector(".counter__title")

    function incrementValue () {
    const currentValue =  conterValue.textContent ;
    const currentValueAsNumber = +currentValue ;
    if(currentValueAsNumber<10) {
        const newValue = currentValueAsNumber + 1 ;
        conterValue.textContent = newValue ;
    }
    else {
            limitTen.innerHTML = "Limit! Buy <b>Pro</b> For > 10";
            // To make the Code use a Css
            // limitTen.classList.add("counter--limit");
    }
    }

function decreaseValue () {
    limitTen.innerHTML = "Fancy Counter";
    const currentValueDes = conterValue.textContent ;
    const NewValueNumber = +currentValueDes ;
    if(NewValueNumber>0) {
        const newValueDesc = NewValueNumber - 1 ;
        conterValue.textContent = newValueDesc ;
        }
    }
 
function ResetValuetoZero () {
    conterValue.textContent = 0 ; 
    }
// Increase 'Button' 
increaseButtonEl.addEventListener('click',incrementValue) ;
// Decrease 'Button' 
decreaseButtonEl.addEventListener('click',decreaseValue) ;
//Reset Button 
resetValue.addEventListener('click',ResetValuetoZero)  ;
//increase By KeyStroke
document.addEventListener('keyup',incrementValue) ;




