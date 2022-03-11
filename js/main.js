const rangeInput = document.querySelectorAll('.range__input input'),
    priceInput = document.querySelectorAll('.price__input input'),
    range = document.querySelector('.slider .progress');
let priceGap = 20;
let minVal = parseInt(rangeInput[0].value),
    maxVal = parseInt(rangeInput[1].value);

// set progress width
range.style.left = (minVal / rangeInput[0].max) * 100 + '%';
range.style.right = 100 - (maxVal / rangeInput[1].max) * 100 + '%';

priceInput.forEach(input => {
    input.addEventListener('input', e => {
        let minPrice = parseInt(priceInput[0].value),
            maxPrice = parseInt(priceInput[1].value);
        if (maxPrice - minPrice >= priceGap && maxPrice <= 100) {
            if (e.target.className === 'input__min') {
                rangeInput[0].value = minPrice;

                range.style.left = (minPrice / 100) * 100 + '%';

                // set position of price count above
            } else {
                rangeInput[1].value = maxPrice;
                range.style.right = 100 - (maxPrice / rangeInput[1].max) * 100 + '%';
                console.log('number was changed');
            }
        }
    });
});

rangeInput.forEach(input => {
    input.addEventListener('input', e => {
        let minVal = parseInt(rangeInput[0].value),
            maxVal = parseInt(rangeInput[1].value);

        if (maxVal - minVal < priceGap) {
            if (e.target.className === 'range__min') {
                rangeInput[0].value = maxVal - priceGap;
            } else {
                rangeInput[1].value = minVal + priceGap;
            }
        } else {
            priceInput[0].value = minVal;
            priceInput[1].value = maxVal;
            // set progress width
            range.style.right = 100 - (maxVal / rangeInput[1].max) * 100 + '%';
            range.style.left = (minVal / rangeInput[0].max) * 100 + '%';
        }
    });
});
