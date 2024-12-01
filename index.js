const courses = [
    {
        name: 'Молекулярный 5П-нутрициолог',
        text: 'Инновационная профессия с присвоением новых квалификаций 5P-Health Tracker и молекулярный  5П-нутрициолог',
        p: ['Работа на молекулярном и генетическом уровнях с высокой точностью и гарантией результата',
        'Синтез генетики, диетологии и биохимии для предотвращения и лечения заболеваний',
        'Юридические нюансы деятельности нутрициолога'],
        url: 'https://lp.updn.info/molecule_5p?utm_source=soc&utm_medium=seo',
        category: 'dop', //Дополнительное профессиональное образование
        categoryCourse: 'Кафедра',
        categoryColor: '#8D50B0',
        duration: '6 месяцев',
        days: 182,
        result: 'diplom', //С получением сертификата
        categoryResalt: 'Диплом',
        type: 'nutrition',
        diplom: true,
        department: true,
        divHight: '572px'
    },
    
    {
        name: '5П-Нутрициолог полный курс',
        text: 'Нутрициологическую поддержку при самых различных заболеваниях:',
        p: ['Разберетесь в нутрицевтиках',
         'Научитесь выявлять расстройства пищевого поведения',
         'Овладеете знаниями по лабораторной диагностике'],
        url: 'https://lp.updn.info/nutritionology_seo?utm_source=soc&utm_medium=seo',
        category: 'dop', //Дополнительное профессиональное образование
        categoryCourse: 'Кафедра',
        categoryColor: '#8D50B0',
        duration: '6 месяцев',
        days: 182,
        result: 'diplom', //С получением сертификата
        categoryResalt: 'Диплом',
        type: 'nutrition',
        divHight: '572px'
    },
    
    {
        name: 'Коуч по рациональному питанию и коррекции веса',
        text: 'Тактика ведения клиента в программах различной нутрицевтической направленности:',
        p: ['Комплексный подход к здоровья человека через питание',
         'Современные аспекты нутрициологии и здоровья',
         'Здоровый образ жизни: от питания до физической активности',
         'Нутрицевтика: ключевые модули для здоровья человека'],
        url: 'https://xn--j1amdg6b.xn----7sbhdegumjf0agbb9c1e.xn--p1ai/zayavka_kouch_seo',
        category: 'dop', //Дополнительное профессиональное образование
        categoryCourse: 'Кафедра',
        categoryColor: '#8D50B0',
        duration: '6 месяцев',
        days: 182,
        result: 'diplom', //С получением диплома
        categoryResalt: 'Диплом',
        type: 'nutrition',
        divHight: '572px'
    },
    
    {
        name: 'Белково углеводное чередование',
        text: '',
        p: ['Основы белково-углеводного чередования',
         'Недостатки и противопоказания белково-углеводного чередования',
         'Разрешенные и запрещенные продукты на белково-углеводном чередовании'],
        url: 'https://lp.updn.info/sportspec',
        category: 'qualifications', //Повышение квалификации
        categoryCourse: 'Курс',
        categoryColor: '#4F6FC5',
        duration: '6 недель',
        days: 42,
        result: 'certificate', //С получением сертификата
        categoryResalt: 'Сертификат',
        type: 'sport',
        divHight: '438px'
    },
    
    {
        name: 'Сушка',
        text: '',
        p: ['Условия для сушки тела',
         'Спортивные добавки',
         'Кетодиета, основы'],
        url: 'https://lp.updn.info/sportspec',
        category: 'qualifications', //Повышение квалификации
        categoryCourse: 'Курс',
        categoryColor: '#4F6FC5',
        duration: '6 недель',
        days: 42,
        result: 'certificate', //С получением сертификата
        categoryResalt: 'Сертификат',
        type: 'sport',
        divHight: '438px'
    },
    
    {
        name: 'Набор мышечной массы',
        text: '',
        p: ['Гипертрофия мышечных волокон',
         'Условия набора мышечной массы',
         'Спортивные добавки'],
        url: 'https://lp.updn.info/sportspec',
        category: 'qualifications', //Повышение квалификации
        categoryCourse: 'Курс',
        categoryColor: '#4F6FC5',
        duration: '6 недель',
        days: 42,
        result: 'certificate', //С получением сертификата
        categoryResalt: 'Сертификат',
        type: 'sport',
        divHight: '438px'
    },
    
    {
        name: 'Психолог-коуч в сфере коррекции веса и пищевого поведения',
        text: 'Освойте эффективные инструменты для обретения идеальной фигуры вами и вашими клиентами через проработку истинных психологических причин лишнего веса',
        p: [],
        url: 'https://updn.online/psychologist-consultant',
        category: 'dop', //Дополнительное профессиональное образование
        categoryCourse: 'Кафедра',
        categoryColor: '#8D50B0',
        duration: '6 недель',
        days: 42,
        result: 'diplom', //С получением диплома
        categoryResalt: 'Диплом',
        type: 'eatingBehavior',
        divHight: '426px'
    },
    
    {
        name: 'Психология пищевого поведения',
        text: 'Психолог-консультант — человек, который имеет знания в области нутрициологии и психологии и может оказать качественную поддержку своим подопечным.',
        p: [],
        url: 'https://updn.pro/kurs/psihologiya-pishhevogo-povedeniya/',
        category: 'qualifications', //Повышение квалификации
        categoryCourse: 'Курс',
        categoryColor: '#4F6FC5',
        duration: '6 недель',
        days: 42,
        result: 'certificate', //С получением сертификата
        categoryResalt: 'Сертификат',
        type: 'eatingBehavior',
        divHight: '426px'
    },
    
    {
        name: 'Бизнес 5П',
        text: '',
        p: [],
        url: 'https://updn.online/5p_new?utm_source=soc&utm_medium=seo',
        category: 'qualifications', //Повышение квалификации
        categoryCourse: 'Курс',
        categoryColor: '#4F6FC5',
        duration: '6 месяцев',
        days: 182,
        result: 'certificate', //С получением сертификата
        categoryResalt: 'Сертификат',
        type: 'nutrition',
        divHight: '301px',
        divHight: '352px'
    },
    
    {
        name: 'Профессионал специализированного консультирования и подбора нутрицевтиков',
        text: '',
        p: [],
        url: 'https://xn--j1amdg6b.xn----7sbhdegumjf0agbb9c1e.xn--p1ai/zayavka_kouch_seo',
        category: 'qualifications', //Повышение квалификации
        categoryCourse: 'Курс',
        categoryColor: '#4F6FC5',
        duration: '6 месяцев',
        days: 182,
        result: 'certificate', //С получением сертификата
        categoryResalt: 'Сертификат',
        type: 'nutrition',
        divHight: '352px'
    },
    
    {
        name: 'Эксперт лабораторной диагностики для детей и взрослых',
        text: '',
        p: [],
        url: 'https://xn--j1amdg6b.xn----7sbhdegumjf0agbb9c1e.xn--p1ai/zayavka_kouch_seo',
        category: 'qualifications', //Повышение квалификации
        categoryCourse: 'Курс',
        categoryColor: '#4F6FC5',
        duration: '6 месяцев',
        days: 182,
        result: 'certificate', //С получением сертификата
        categoryResalt: 'Сертификат',
        type: 'nutrition',
        divHight: '301px'
    },
    
    {
        name: 'Специалист 5П-Нутрициологии и протоколов питания',
        text: '',
        p: [],
        url: 'https://xn--j1amdg6b.xn----7sbhdegumjf0agbb9c1e.xn--p1ai/zayavka_kouch_seo',
        category: 'qualifications', //Повышение квалификации
        categoryCourse: 'Курс',
        categoryColor: '#4F6FC5',
        duration: '6 месяцев',
        days: 182,
        result: 'certificate', //С получением сертификата
        categoryResalt: 'Сертификат',
        type: 'nutrition',
        divHight: '301px'
    },
    
    {
        name: 'Витаминно-минеральная трансформация',
        text: '',
        p: ['Готовое решение в борьбе с дефицитами витаминов и минеральных веществ у взрослых и детей',
         'Избавление от таких состояний, как отсутствие энергии, лишний вес, ранние морщины, тусклые волосы, ощущение депрессии и других'],
        url: 'https://lid.nutritionist4day.ru/vmtransformation',
        category: 'qualifications', //Повышение квалификации
        categoryCourse: 'Курс',
        categoryColor: '#4F6FC5',
        duration: '6 недель',
        days: 42,
        result: 'certificate', //С получением сертификата
        categoryResalt: 'Сертификат',
        type: 'beauty',
        divHight: '469px'
    },
    
    {
        name: 'Все о здоровье лимфатической системы',
        text: 'Поддержите свою лимфатическую систему, чтобы:',
        p: ['Профилактировать заболевания',
         'Решить уже существующие проблемы'],
        url: 'https://lid.nutritionist4day.ru/lymphatic-system',
        category: 'training', //Тренинг
        categoryCourse: 'Тренинг',
        categoryColor: '#FFA453',
        duration: '6 недель',
        days: 42,
        result: 'certificate', //С получением сертификата
        categoryResalt: 'Сертификат',
        type: 'beauty',
        divHight: '469px'
    },
    
    {
        name: 'Диетолог для себя и своей семьи',
        text: 'Получите здоровое стройное тело с помощью питания и новый уровень качества жизни',
        p: [],
        url: 'https://lid.nutritionist4day.ru/mybody ',
        category: 'training', //Тренинг
        categoryCourse: 'Тренинг',
        categoryColor: '#FFA453',
        duration: '6 недель',
        days: 42,
        result: 'certificate', //С получением сертификата
        categoryResalt: 'Сертификат',
        type: 'beauty',
        divHight: '469px'
    },
    
    {
        name: 'Антиэйдж',
        text: 'Возвращаем молодость на клеточном уровне:',
        p: ['Сэкономьте десятки тысяч на ненужных процедурах',
         'Долгосрочный результат в любом возрасте',
         'Комплексный подход, который игнорируют хирурги и косметологи',
         'До минус 15 лет без инъекций и подтяжек'],
        url: 'https://lp.updn.info/clas_antiage',
        category: 'training', //Тренинг
        categoryCourse: 'Тренинг',
        categoryColor: '#FFA453',
        duration: '6 недель',
        days: 42,
        result: 'certificate', //С получением сертификата
        categoryResalt: 'Сертификат',
        type: 'beauty',
        divHight: '519px'
    },
    
    {
        name: 'Антипаразитарная программа',
        text: 'Избавьтесь от паразитов гарантированно, безопасно и без медикаментов',
        p: ['Надёжно защитите себя и близких от паразитов в будущем'],
        url: 'https://lid.nutritionist4day.ru/antiparasitic',
        category: 'training', //Тренинг
        categoryCourse: 'Тренинг',
        categoryColor: '#FFA453',
        duration: '6 недель',
        days: 42,
        result: 'certificate', //С получением сертификата
        categoryResalt: 'Сертификат',
        type: 'beauty',
        divHight: '519px'
    },
    
    {
        name: 'Здоровый кишечник',
        text: 'Станьте востребованным специалистом в сфере диетологии!',
        p: ['Полное представление о строении, функциях, и работе кишечника',
         'Сезонные отравления и заболевания',
         'Поймете откуда возникают различные патологии в кишечнике и узнаете современные методы их лечения',
         'Вы избавитесь от запоров'],
        url: 'https://updn.pro/kurs/onlajn-kurs-mikrobiota-kishechnika/ ',
        category: 'training', //Тренинг
        categoryCourse: 'Тренинг',
        categoryColor: '#FFA453',
        duration: '6 недель',
        days: 42,
        result: 'certificate', //С получением сертификата
        categoryResalt: 'Сертификат',
        type: 'beauty',
        divHight: '519px'
    },
    
    {
        name: 'Холестерин под контролем',
        text: '',
        p: ['Профилактируйте повышенный уровень холестерина и заболевания, к которым он приводит',
         'Научитесь снижать высокий холестерин и поддерживать его на оптимальном уровне'],
        url: 'https://lid.nutritionist4day.ru/cholesterol',
        category: 'training', //Тренинг
        categoryCourse: 'Тренинг',
        categoryColor: '#FFA453',
        duration: '6 недель',
        days: 42,
        result: 'certificate', //С получением сертификата
        categoryResalt: 'Сертификат',
        type: 'beauty',
        divHight: '565px'
    },

    {
        name: 'Как убрать живот',
        text: 'Эффективная и проверенная инструкция, которая приведёт вас к здоровому и подтянутому животу',
        p: ['Разберетесь какие причины лежат в истоках растущего живота',
         'Грамотно проведете диагностику причин абдоминального ожирения',
         'Подберете лабораторные анализы для диагностики'],
        url: 'https://updn.pro/kurs/kak-ubrat-zhivot/ ',
        category: 'training', //Тренинг
        categoryCourse: 'Тренинг',
        categoryColor: '#FFA453',
        duration: '6 недель',
        days: 42,
        result: 'certificate', //С получением сертификата
        categoryResalt: 'Сертификат',
        type: 'beauty',
        divHight: '565px'
    },
    
    {
        name: 'Ваше стройное тело от «А» до «Я»',
        text: 'Раскройте секреты своего организма с профессиональными нутрициологами и сбросьте до 10 кг уже через 30 дней!',
        p: ['Похудеть без диет, жёстких запретов и насилия над собой',
         'Жить в стройном теле с удовольствием, не думая о шоколадке каждый час',
         'Не навредить организму при снижении веса — все только с пользой для здоровья!'],
        url: 'https://lid.nutritionist4day.ru/slender-bodyful',
        category: 'training', //Тренинг
        categoryCourse: 'Тренинг',
        categoryColor: '#FFA453',
        duration: '6 недель',
        days: 42,
        result: 'certificate', //С получением сертификата
        categoryResalt: 'Сертификат',
        type: 'beauty',
        divHight: '565px'
    },
    

]

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
const formBlack = document.querySelector('.form-black');
const radiosCategory = document.querySelectorAll('input[name="category"]');
const radiosResult = document.querySelectorAll('input[name="result"]');
let onRadiosCategory = ''
let onRadiosResult = ''
let onSlider = 730
let newCourses = []
let neNutrition = []
let newSport = []
let newEatingBehavior = []
let newBeauty = []

render(courses)

// Cнимаем показания с формы
formBlock.addEventListener('click', function() {
    for (let i=0; i<radiosCategory.length; i++) {
        if (radiosCategory[i].checked) {
            onRadiosCategory = radiosCategory[i].value
            console.log('wtwrtr' + onRadiosCategory)
        }
    }
    for (let i=0; i<radiosResult.length; i++) {
        if (radiosResult[i].checked) {
            onRadiosResult = radiosResult[i].value
            console.log(onRadiosResult)
        }
    }

    console.log('категория' + onRadiosCategory)
    console.log('результат' + onRadiosResult)
    console.log('длительность' + slider.value)
})

// Кнопка формы "Применить"
buttonApply.addEventListener('click', function() {
    let result 

    if (onRadiosResult == '') {
        result = courses.filter(item => {return item.category == onRadiosCategory && item.days <= onSlider});
    } 

    if (onRadiosCategory == '') {
        result = courses.filter(item => {return item.result == onRadiosResult && item.days <= onSlider});
    } 

    if (onRadiosResult != '' && onRadiosCategory != '') {
        result = courses.filter(item => {return item.category == onRadiosCategory  && item.result == onRadiosResult && item.days <= onSlider});
        } 
        
    if (onRadiosResult == '' && onRadiosCategory == '') {
        result = courses.filter(item => {return item.days <= onSlider});
        } 

    console.log('qwe' + onRadiosCategory)
    console.log('qwe' + onRadiosResult)
    console.log('qwe' + slider.value)
    console.log(result)

    

    render(result)
    newCourses = newCourses.concat(result)
    formBlack.style.display = 'none'
    if(window.innerWidth <= 1440) {
        form.style.display = 'none'
        filtrButton.textContent = 'Показать фильтр'
    } 
})

    // Ползунок
    let slider = document.getElementById("myRange");
    slider.oninput = function() {
        onSlider = this.value;
        let positionSlider = onSlider * 100 / 730
        this.style.background = `linear-gradient(to right, #1D7AD3 ${positionSlider}%, #DBEDFF ${positionSlider}%)`;
        console.log(onSlider)
    }

// Кнопка формы "Сбросить фильтр"
buttonReset.addEventListener('click', function() {
    
    for (let i=0; i<radiosCategory.length; i++) {
        radiosCategory[i].checked = false
    }
    for (let i=0; i<radiosResult.length; i++) {
        radiosResult[i].checked = false
    }
    onRadiosCategory = ''
    onRadiosResult = ''
    slider.value = 730
    render(courses)
})

window.addEventListener('resize', () => {
    if(window.innerWidth > 1440) {
        form.style.display = 'block'
    } else {
        form.style.display = 'none'
    }
  });

// Кнопка "Показать фильтр"" в мобильной версии
filtrButton.addEventListener('click', function() {
    filtrButton.textContent = filtrButton.textContent === 'Скрыть фильтр' ? 'Показать фильтр': 'Скрыть фильтр';
    form.style.display = form.style.display === 'block' ? 'none' : 'block';
    formBlack.style.display = formBlack.style.display === 'block' ? 'none' : 'block';
})

// Клик на темном поле - закрытие формы
formBlack.addEventListener('click', function() {
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
})
nutritionCourse.addEventListener('click', function() {
    let result = courses.filter(item => {return item.type === 'nutrition'});
    render(result)
    allCourse.classList.remove('blue-button')
    nutritionCourse.classList.add('blue-button')
    sportCourse.classList.remove('blue-button')
    eatingBehaviorCourse.classList.remove('blue-button')
    beautyCourse.classList.remove('blue-button')
    console.log(result)
    neNutrition = neNutrition.concat(result)
    console.log(neNutrition)
})
sportCourse.addEventListener('click', function() {
    let result = courses.filter(item => {return item.type === 'sport'});
    render(result)
    allCourse.classList.remove('blue-button')
    nutritionCourse.classList.remove('blue-button')
    sportCourse.classList.add('blue-button')
    eatingBehaviorCourse.classList.remove('blue-button')
    beautyCourse.classList.remove('blue-button')
    newSport = newSport.concat(result)
})
eatingBehaviorCourse.addEventListener('click', function() {
    let result = courses.filter(item => {return item.type === 'eatingBehavior'});
    render(result)
    allCourse.classList.remove('blue-button')
    nutritionCourse.classList.remove('blue-button')
    sportCourse.classList.remove('blue-button')
    eatingBehaviorCourse.classList.add('blue-button')
    beautyCourse.classList.remove('blue-button')
    newEatingBehavior = newEatingBehavior.concat(result)
})
beautyCourse.addEventListener('click', function() {
    let result = courses.filter(item => {return item.type === 'beauty'});
    render(result)
    allCourse.classList.remove('blue-button')
    nutritionCourse.classList.remove('blue-button')
    sportCourse.classList.remove('blue-button')
    eatingBehaviorCourse.classList.remove('blue-button')
    beautyCourse.classList.add('blue-button')
    newBeauty = newBeauty.concat(result)
})


// Отрисовка курсов
function render(arr) {
    blockCourses.innerHTML = ''

    for (let i=0; i<arr.length; i++) {
        let string1 = 
        `<div class="courses__block cours-hight${i}">
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
                        Срок обучения: <span class="courses__block__duration__span">${arr[i].duration}</span>
                    </div>
                    
                    <form action=${arr[i].url}>
                        <button class="courses__block__button">Переход по ссылке</button>
                    </form>
                </div>`
    
        blockCourses.innerHTML += string1 + string2 + string3
        document.querySelector(`.cours-hight${i}`).style.height = `${arr[i].divHight}`;   

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
   
    console.log('123213')
}