import data from '../data.json' assert{type: 'json'};

let bgColor = [
    'hsl(15, 100%, 70%)',
    'hsl(195, 74%, 62%)',
    'hsl(348, 100%, 68%)',
    'hsl(145, 58%, 55%)',
    'hsl(264, 64%, 52%)',
    'hsl(43, 84%, 65%)'
    
]

let dailyBtn = document.querySelector('#daily');
let weeklyBtn = document.querySelector('#weekly');
let monthlyBtn = document.querySelector('#monthly');

let secondSection = document.querySelector('.second-section');

let dailyArray = data.map(item => item.timeframes.daily);
let weeklyArray = data.map(item => item.timeframes.weekly);
let monthlyArray = data.map(item => item.timeframes.monthly);

let defaults = dailyArray;

drawElements(defaults);

dailyBtn.addEventListener('click', () => {
    drawElements(dailyArray);
});

weeklyBtn.addEventListener('click', () => {
    drawElements(weeklyArray);
});

monthlyBtn.addEventListener('click', () => {
    drawElements(monthlyArray);
});

function drawElements(array) {
    secondSection.innerHTML = '';
    array.forEach((element, index) => {
        let title = data[index].title;

        if (title == 'Self Care'){
            title = 'self-care'
        }

        secondSection.innerHTML += `
            <div class="card">
                <div class="card__background" style="background-color: ${bgColor[index]};">
                    <img class="card__image" src="./images/icon-${title.toLocaleLowerCase()}.svg" alt="maletin" />
                </div>
                <div class="card__details">
                    <div class="card__activity">
                        <p class="card__title">${title}</p>
                        <img class="card__points" src="./images/icon-ellipsis.svg" alt="Three-points" />
                    </div>
                <div class="card__calendar">
                    <p class="card__hours">${element.current}hrs</p>
                    <p class="card_previous">Previous - ${element.previous}hrs</p>
                </div>
                </div>
            </div>
        `
    })
}