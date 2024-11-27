import  {newCourses}  from './index.js'
console.log(newCourses)

const blockCourses = document.querySelector('.courses')
const filtrButton = document.querySelector('.content__filtr-button');
const form = document.querySelector('.form');
const formBlock = document.querySelector('.form-block');
const allCourse = document.querySelector('.all-course');
const nutritionCourse = document.querySelector('.nutrition-course');
const sportCourse = document.querySelector('.sport-course');
const eatingBehaviorCourse = document.querySelector('.eating-behavior-course');
const buttonApply = document.querySelector('.form__button-apply');
const buttonReset = document.querySelector('.form__button-reset');
const beautyCourse = document.querySelector('.beauty-course');
const radiosCategory = document.querySelectorAll('input[name="category"]');
const radiosResult = document.querySelectorAll('input[name="result"]');
let onRadiosCategory
let onRadiosResult
let onDuration

// Cнимаем показания с формы
formBlock.addEventListener('click', function() {
    for (let i=0; i<radiosCategory.length; i++) {
        if (radiosCategory[i].checked) {
            onRadiosCategory = radiosCategory[i].value
            console.log(onRadiosCategory)
        }
    }
    for (let i=0; i<radiosResult.length; i++) {
        if (radiosResult[i].checked) {
            onRadiosResult = radiosResult[i].value
            console.log(onRadiosResult)
        }
    }
})

// Кнопка формы "Применить"
buttonApply.addEventListener('click', function() {
    console.log('работает')
    let result = courses.filter(item => {return item.category == onRadiosCategory  || item.result == onRadiosResult || item.days <= onRadiosResult});
    render(result)
    newCourses = newCourses.concat(result)
})
// Кнопка формы "Сбросить фильтр"
buttonReset.addEventListener('click', function() {
    
    for (let i=0; i<radiosCategory.length; i++) {
        radiosCategory[i].checked = false
    }
    for (let i=0; i<radiosResult.length; i++) {
        radiosResult[i].checked = false
    }
    slider.value = 365
    render(courses)
})

render(courses)

// Ползунок
let slider = document.getElementById("myRange");
let output = document.getElementById("demo");
slider.oninput = function() {
  onRadiosResult = this.value;
  console.log(onRadiosResult)
}

// Открытие-закрытие формы в мобильной версии
filtrButton.addEventListener('click', function() {
    filtrButton.textContent = filtrButton.textContent === 'Скрыть фильтр' ? 'Показать фильтр': 'Скрыть фильтр';
    form.style.display = form.style.display === 'block' ? 'none' : 'block';
    formBlack.style.display = formBlack.style.display === 'block' ? 'none' : 'block';
})


// Фильтр по направлениям
allCourse.addEventListener('click', function() {
    render(courses)
    allCourse.classList.add('blue-button')
    nutritionCourse.classList.remove('blue-button')
    sportCourse.classList.remove('blue-button')
    eatingBehaviorCourse.classList.remove('blue-button')
    beautyCourse.classList.remove('blue-button')
    newCourses = newCourses.concat(result)
})
nutritionCourse.addEventListener('click', function() {
    let result = courses.filter(item => {return item.type === 'nutrition'});
    render(result)
    allCourse.classList.remove('blue-button')
    nutritionCourse.classList.add('blue-button')
    sportCourse.classList.remove('blue-button')
    eatingBehaviorCourse.classList.remove('blue-button')
    beautyCourse.classList.remove('blue-button')
    newCourses = newCourses.concat(result)
})
sportCourse.addEventListener('click', function() {
    let result = courses.filter(item => {return item.type === 'sport'});
    render(result)
    allCourse.classList.remove('blue-button')
    nutritionCourse.classList.remove('blue-button')
    sportCourse.classList.add('blue-button')
    eatingBehaviorCourse.classList.remove('blue-button')
    beautyCourse.classList.remove('blue-button')
    newCourses = newCourses.concat(result)
})
eatingBehaviorCourse.addEventListener('click', function() {
    let result = courses.filter(item => {return item.type === 'eatingBehavior'});
    render(result)
    allCourse.classList.remove('blue-button')
    nutritionCourse.classList.remove('blue-button')
    sportCourse.classList.remove('blue-button')
    eatingBehaviorCourse.classList.add('blue-button')
    beautyCourse.classList.remove('blue-button')
    newCourses = newCourses.concat(result)
})
beautyCourse.addEventListener('click', function() {
    let result = courses.filter(item => {return item.type === 'beauty'});
    render(result)
    allCourse.classList.remove('blue-button')
    nutritionCourse.classList.remove('blue-button')
    sportCourse.classList.remove('blue-button')
    eatingBehaviorCourse.classList.remove('blue-button')
    beautyCourse.classList.add('blue-button')
    newCourses = newCourses.concat(result)
})





// Отрисовка курсов
function render(arr) {
    blockCourses.innerHTML = ''

    for (let i=0; i<arr.length; i++) {
        let string1 = 
        `<div class="courses__block">
                    <div class="courses__block__category">
                        <div class="courses__block__category-first">${arr[i].categoryResalt}</div>
                        <div class="courses__block__category-second" color="${arr[i].categoryColor}">${arr[i].categoryCourse}</div>
                    </div>
                    <div class="courses__block__title">${arr[i].name}</div>
                    <div class="courses__block__text">${arr[i].text}</div>`

        let string2 =''
        let arrP = arr[i].p
         function text(arr) {
            for (let i=0; i<arr.length; i++) {
                string2 +=`<div class="courses__block__p"><div><img src="img/Ellipse 21.png"></div><div>${arr[i]}</div></div>`
            }
        }
        text(arrP)
        

        let string3 = `<div class="courses__block__duration">
                        Срок обучения: <span>${arr[i].duration}</span>
                    </div>
                    
                    <form action=${arr[i].url}>
                        <button class="courses__block__button">Переход по ссылке</button>
                    </form>
                </div>`
    
        blockCourses.innerHTML += string1 + string2 + string3  

    }

    const all = document.querySelectorAll('.courses__block__category-second')
    console.log(all)

    for (let i=0; i<all.length; i++) {
        if (all[i].innerText === 'Тренинг') {
            all[i].style.backgroundColor = '#FFA453' 
        }
        if (all[i].innerText === 'Курс') {
            all[i].style.backgroundColor = '#4F6FC5' 
        }
        if (all[i].innerText === 'Кафедра') {
            all[i].style.backgroundColor = '#8D50B0' 
        }
    }
}




