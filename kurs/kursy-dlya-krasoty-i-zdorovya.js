const courses = [
    {
        id: 'molecular-5p-nutritionist',
        name: 'Молекулярный 5П-нутрициолог', //Название курса
        text: 'Инновационная профессия с присвоением новых квалификаций 5P-Health Tracker и молекулярный  5П-нутрициолог', //Краткое описание курса
        p: ['Работа на молекулярном и генетическом уровнях с высокой точностью и гарантией результата',
        'Синтез генетики, диетологии и биохимии для предотвращения и лечения заболеваний',
        'Юридические нюансы деятельности нутрициолога'], //Подпункты описания курса
        url: 'https://lp.updn.info/molecule_5p?utm_source=soc&utm_medium=seo',
        category: 'Дополнительное профессиональное образование', //Категория курса
        categoryResalt: 'Диплом', //Первая цветная плашка в блоке курса
        categoryCourse: 'Кафедра', //Вторая цветная плашка в блоке курса
        duration: '6 месяцев', //Срок обучения
        days: 182, //Срок обучения в днях для вычисления в фильтре
        result: 'С получением диплома', //Результат
        type: 'nutrition', //Направление курса
    },
    
    {
        id: 'full-course',
        name: '5П-Нутрициолог полный курс',
        text: 'Нутрициологическую поддержку при самых различных заболеваниях:',
        p: ['Разберетесь в нутрицевтиках',
         'Научитесь выявлять расстройства пищевого поведения',
         'Овладеете знаниями по лабораторной диагностике'],
        url: 'https://lp.updn.info/nutritionology_seo?utm_source=soc&utm_medium=seo',
        category: 'Дополнительное профессиональное образование',
        categoryCourse: 'Кафедра',
        duration: '6 месяцев',
        days: 182,
        result: 'С получением диплома',
        categoryResalt: 'Диплом',
        type: 'nutrition',
    },
    
    {
        id: 'nutrition-coach',
        name: 'Коуч по рациональному питанию и коррекции веса',
        text: 'Тактика ведения клиента в программах различной нутрицевтической направленности:',
        p: ['Комплексный подход к здоровья человека через питание',
         'Современные аспекты нутрициологии и здоровья',
         'Здоровый образ жизни: от питания до физической активности',
         'Нутрицевтика: ключевые модули для здоровья человека'],
        url: 'https://xn--j1amdg6b.xn----7sbhdegumjf0agbb9c1e.xn--p1ai/zayavka_kouch_seo',
        category: 'Дополнительное профессиональное образование',
        categoryCourse: 'Кафедра',
        duration: '6 месяцев',
        days: 182,
        result: 'С получением диплома',
        categoryResalt: 'Диплом',
        type: 'nutrition',
    },
    
    {
        id: 'protein-carbohydrate-alternation',
        name: 'Белково углеводное чередование',
        text: '',
        p: ['Основы белково-углеводного чередования',
         'Недостатки и противопоказания белково-углеводного чередования',
         'Разрешенные и запрещенные продукты на белково-углеводном чередовании'],
        url: 'https://lp.updn.info/sportspec',
        category: 'Повышение квалификации',
        categoryCourse: 'Курс',
        duration: '6 недель',
        days: 42,
        result: 'С получением сертификата',
        categoryResalt: 'Сертификат',
        type: 'sport',
    },
    
    {
        id: 'drying',
        name: 'Сушка',
        text: '',
        p: ['Условия для сушки тела',
         'Спортивные добавки',
         'Кетодиета, основы'],
        url: 'https://lp.updn.info/sportspec',
        category: 'Повышение квалификации',
        categoryCourse: 'Курс',
        duration: '6 недель',
        days: 42,
        result: 'С получением сертификата',
        categoryResalt: 'Сертификат',
        type: 'sport',
    },
    
    {
        id: 'gain-muscle-mass',
        name: 'Набор мышечной массы',
        text: '',
        p: ['Гипертрофия мышечных волокон',
         'Условия набора мышечной массы',
         'Спортивные добавки'],
        url: 'https://lp.updn.info/sportspec',
        category: 'Повышение квалификации',
        categoryCourse: 'Курс',
        duration: '6 недель',
        days: 42,
        result: 'С получением сертификата',
        categoryResalt: 'Сертификат',
        type: 'sport',
    },
    
    {
        id: 'psychologist-coach-weight-correction',
        name: 'Психолог-коуч в сфере коррекции веса и пищевого поведения',
        text: 'Освойте эффективные инструменты для обретения идеальной фигуры вами и вашими клиентами через проработку истинных психологических причин лишнего веса',
        p: [],
        url: 'https://updn.online/psychologist-consultant',
        category: 'Дополнительное профессиональное образование',
        categoryCourse: 'Кафедра',
        duration: '6 недель',
        days: 42,
        result: 'С получением диплома',
        categoryResalt: 'Диплом',
        type: 'eatingBehavior',
    },
    
    {
        id: 'psychology-eating-behavior',
        name: 'Психология пищевого поведения',
        text: 'Психолог-консультант — человек, который имеет знания в области нутрициологии и психологии и может оказать качественную поддержку своим подопечным.',
        p: [],
        url: 'https://updn.pro/kurs/psihologiya-pishhevogo-povedeniya/',
        category: 'Повышение квалификации',
        categoryCourse: 'Курс',
        duration: '6 недель',
        days: 42,
        result: 'С получением сертификата',
        categoryResalt: 'Сертификат',
        type: 'eatingBehavior',
    },
    
    {
        id: 'business-5p',
        name: 'Бизнес 5П',
        text: '',
        p: [],
        url: 'https://updn.online/5p_new?utm_source=soc&utm_medium=seo',
        category: 'Повышение квалификации',
        categoryCourse: 'Курс',
        duration: '6 месяцев',
        days: 182,
        result: 'С получением сертификата',
        categoryResalt: 'Сертификат',
        type: 'nutrition',
    },
    
    {
        id: 'specialist-consulting-professional',
        name: 'Профессионал специализированного консультирования и подбора нутрицевтиков',
        text: '',
        p: [],
        url: 'https://xn--j1amdg6b.xn----7sbhdegumjf0agbb9c1e.xn--p1ai/zayavka_kouch_seo',
        category: 'Повышение квалификации',
        categoryCourse: 'Курс',
        duration: '6 месяцев',
        days: 182,
        result: 'С получением сертификата',
        categoryResalt: 'Сертификат',
        type: 'nutrition',
    },
    
    {
        id: 'expert-laboratory-diagnostics',
        name: 'Эксперт лабораторной диагностики для детей и взрослых',
        text: '',
        p: [],
        url: 'https://xn--j1amdg6b.xn----7sbhdegumjf0agbb9c1e.xn--p1ai/zayavka_kouch_seo',
        category: 'Повышение квалификации',
        categoryCourse: 'Курс',
        duration: '6 месяцев',
        days: 182,
        result: 'С получением сертификата',
        categoryResalt: 'Сертификат',
        type: 'nutrition',
    },
    
    {
        id: 'specialist-5P-nutritionology-protocols',
        name: 'Специалист 5П-Нутрициологии и протоколов питания',
        text: '',
        p: [],
        url: 'https://xn--j1amdg6b.xn----7sbhdegumjf0agbb9c1e.xn--p1ai/zayavka_kouch_seo',
        category: 'Повышение квалификации',
        categoryCourse: 'Курс',
        duration: '6 месяцев',
        days: 182,
        result: 'С получением сертификата',
        categoryResalt: 'Сертификат',
        type: 'nutrition',
    },
    
    {
        id: 'vitamin-mineral-transformation',
        name: 'Витаминно-минеральная трансформация',
        text: '',
        p: ['Готовое решение в борьбе с дефицитами витаминов и минеральных веществ у взрослых и детей',
         'Избавление от таких состояний, как отсутствие энергии, лишний вес, ранние морщины, тусклые волосы, ощущение депрессии и других'],
        url: 'https://lid.nutritionist4day.ru/vmtransformation',
        category: 'Повышение квалификации',
        categoryCourse: 'Курс',
        duration: '6 недель',
        days: 42,
        result: 'С получением сертификата',
        categoryResalt: 'Сертификат',
        type: 'beauty',
    },
    
    {
        id: 'all-about-lymphatic-system',
        name: 'Все о здоровье лимфатической системы',
        text: 'Поддержите свою лимфатическую систему, чтобы:',
        p: ['Профилактировать заболевания',
         'Решить уже существующие проблемы'],
        url: 'https://lid.nutritionist4day.ru/lymphatic-system',
        category: 'Тренинг',
        categoryCourse: 'Тренинг',
        duration: '6 недель',
        days: 42,
        result: 'С получением сертификата',
        categoryResalt: 'Сертификат',
        type: 'beauty',
    },
    
    {
        id: 'nutritionist-for-family',
        name: 'Диетолог для себя и своей семьи',
        text: 'Получите здоровое стройное тело с помощью питания и новый уровень качества жизни',
        p: [],
        url: 'https://lid.nutritionist4day.ru/mybody ',
        category: 'Тренинг',
        categoryCourse: 'Тренинг',
        duration: '6 недель',
        days: 42,
        result: 'С получением сертификата',
        categoryResalt: 'Сертификат',
        type: 'beauty',
    },
    
    {
        id: 'antiage',
        name: 'Антиэйдж',
        text: 'Возвращаем молодость на клеточном уровне:',
        p: ['Сэкономьте десятки тысяч на ненужных процедурах',
         'Долгосрочный результат в любом возрасте',
         'Комплексный подход, который игнорируют хирурги и косметологи',
         'До минус 15 лет без инъекций и подтяжек'],
        url: 'https://lp.updn.info/clas_antiage',
        category: 'Тренинг',
        categoryCourse: 'Тренинг',
        duration: '6 недель',
        days: 42,
        result: 'С получением сертификата',
        categoryResalt: 'Сертификат',
        type: 'beauty',
    },
    
    {
        id: 'antiparasitic-program',
        name: 'Антипаразитарная программа',
        text: 'Избавьтесь от паразитов гарантированно, безопасно и без медикаментов',
        p: ['Надёжно защитите себя и близких от паразитов в будущем'],
        url: 'https://lid.nutritionist4day.ru/antiparasitic',
        category: 'Тренинг',
        categoryCourse: 'Тренинг',
        duration: '6 недель',
        days: 42,
        result: 'С получением сертификата',
        categoryResalt: 'Сертификат',
        type: 'beauty',
    },
    
    {
        id: 'healthy-intestines',
        name: 'Здоровый кишечник',
        text: 'Станьте востребованным специалистом в сфере диетологии!',
        p: ['Полное представление о строении, функциях, и работе кишечника',
         'Сезонные отравления и заболевания',
         'Поймете откуда возникают различные патологии в кишечнике и узнаете современные методы их лечения',
         'Вы избавитесь от запоров'],
        url: 'https://updn.pro/kurs/onlajn-kurs-mikrobiota-kishechnika/ ',
        category: 'Тренинг',
        categoryCourse: 'Тренинг',
        duration: '6 недель',
        days: 42,
        result: 'С получением сертификата',
        categoryResalt: 'Сертификат',
        type: 'beauty',
    },
    
    {
        id: 'cholesterol-control',
        name: 'Холестерин под контролем',
        text: '',
        p: ['Профилактируйте повышенный уровень холестерина и заболевания, к которым он приводит',
         'Научитесь снижать высокий холестерин и поддерживать его на оптимальном уровне'],
        url: 'https://lid.nutritionist4day.ru/cholesterol',
        category: 'Тренинг',
        categoryCourse: 'Тренинг',
        duration: '6 недель',
        days: 42,
        result: 'С получением сертификата',
        categoryResalt: 'Сертификат',
        type: 'beauty',
    },

    {
        id: 'remove-belly',
        name: 'Как убрать живот',
        text: 'Эффективная и проверенная инструкция, которая приведёт вас к здоровому и подтянутому животу',
        p: ['Разберетесь какие причины лежат в истоках растущего живота',
         'Грамотно проведете диагностику причин абдоминального ожирения',
         'Подберете лабораторные анализы для диагностики'],
        url: 'https://updn.pro/kurs/kak-ubrat-zhivot/ ',
        category: 'Тренинг',
        categoryCourse: 'Тренинг',
        duration: '6 недель',
        days: 42,
        result: 'С получением сертификата',
        categoryResalt: 'Сертификат',
        type: 'beauty',
    },
    
    {
        id: 'slim-body',
        name: 'Ваше стройное тело от «А» до «Я»',
        text: 'Раскройте секреты своего организма с профессиональными нутрициологами и сбросьте до 10 кг уже через 30 дней!',
        p: ['Похудеть без диет, жёстких запретов и насилия над собой',
         'Жить в стройном теле с удовольствием, не думая о шоколадке каждый час',
         'Не навредить организму при снижении веса — все только с пользой для здоровья!'],
        url: 'https://lid.nutritionist4day.ru/slender-bodyful',
        category: 'Тренинг',
        categoryCourse: 'Тренинг',
        duration: '6 недель',
        days: 42,
        result: 'С получением сертификата',
        categoryResalt: 'Сертификат',
        type: 'beauty',
    },
    

]

const blockCourses = document.querySelector('.courses')
const filtrButton = document.querySelector('.content__filtr-button');
const form = document.querySelector('.form-course');
const formBlock = document.querySelector('.form-course-block');
const allCourse = document.querySelector('.all-course');
const nutritionCourse = document.querySelector('.nutrition-course');
const sportCourse = document.querySelector('.sport-course');
const eatingBehaviorCourse = document.querySelector('.eating-behavior-course');
const buttonApply = document.querySelector('.form-course__button-apply');
const buttonReset = document.querySelector('.form-course__button-reset');
const beautyCourse = document.querySelector('.beauty-course');
const breadcrumbsCurrent = document.querySelector('.bread-crumbs__current');
const formBlack = document.querySelector('.form-course-black');
const radiosCategory = document.querySelectorAll('input[name="category"]');
const radiosResult = document.querySelectorAll('input[name="result"]');
let onRadiosCategory = ''
let onRadiosResult = ''
let newCourses = []

let result = courses.filter(item => {return item.type === 'beauty'});
newCourses = newCourses.concat(result)
beautyCourse.classList.add('blue-button')
breadcrumbsCurrent.innerHTML = '/ Курсы для красоты и здоровья'
render(newCourses)

// Cнимаем показания с формы
formBlock.addEventListener('click', function() {
    for (let i=0; i<radiosCategory.length; i++) {
        if (radiosCategory[i].checked) {
            onRadiosCategory = radiosCategory[i].value
        }
    }
    for (let i=0; i<radiosResult.length; i++) {
        if (radiosResult[i].checked) {
            onRadiosResult = radiosResult[i].value
        }
    }
})

// Кнопка формы "Применить"
buttonApply.addEventListener('click', function() {
    filtrCourses(newCourses)
})

//Фильтрация
function filtrCourses(arr) {
    let result

    if (onRadiosResult == '') {
        result = arr.filter(item => {return item.category == onRadiosCategory && item.days <= onSliderMax && item.days >= onSliderMin});
    } 

    if (onRadiosCategory == '') {
        result = arr.filter(item => {return item.result == onRadiosResult && item.days <= onSliderMax && item.days >= onSliderMin});
    } 

    if (onRadiosResult != '' && onRadiosCategory != '') {
        result = arr.filter(item => {return item.category == onRadiosCategory  && item.result == onRadiosResult && item.days <= onSliderMax && item.days >= onSliderMin});
        } 
        
    if (onRadiosResult == '' && onRadiosCategory == '') {
        result = arr.filter(item => {return item.days <= onSliderMax && item.days >= onSliderMin});
        } 


    render(result)
    console.log(result)
    newCourses = []
    newCourses = newCourses.concat(arr)
    if(window.innerWidth <= 1440) {
        formBlack.style.display = 'none'
        form.style.display = 'none'
        filtrButton.textContent = 'Показать фильтр'
    } 
}

    // Ползунок
    let sliderUpper = document.getElementById("myRange-upper");
    let sliderLower = document.getElementById("myRange-lower");
    let monthUpper = document.getElementById("month-upper");
    let monthLower = document.getElementById("month-lower");
    let outputMax = document.getElementById("max");
    let outputMin = document.getElementById("min");
    let slideTrack = document.querySelector(".slide-track");
    let onSliderMax = 730;
    let onSliderMin = 1;

    sliderUpper.oninput = function() {
        onSliderMax = this.value;
        if (onSliderMax - onSliderMin >= 0) { 
            outputMax.innerHTML = this.value;
               
        } else {
            onSliderMax = onSliderMin
            sliderUpper.value = onSliderMax
        } 
        
        monthUpper.innerHTML = (onSliderMax%10 == 1) ? 'дня' : 'дней';
        colorSlideTrack(onSliderMax, onSliderMin) ;
    }

    sliderLower.oninput = function() {
        onSliderMin = this.value;
        if ( onSliderMax - onSliderMin >= 0) {
            outputMin.innerHTML = this.value;   
        } else {
            onSliderMin = onSliderMax
            sliderLower.value = onSliderMin
        }

        if (onSliderMin > 1) {
            monthLower.innerHTML = (onSliderMin%10 == 1) ? 'дня' : 'дней';
        } else {
            monthLower.innerHTML = 'дня';
        }

        colorSlideTrack(onSliderMax, onSliderMin)
    }

    function colorSlideTrack(onSliderMax, onSliderMin) {
        let positionSliderMax = onSliderMax * 100 / 730;
        let positionSliderMin = onSliderMin * 100 / 730;
        slideTrack.style.background = `linear-gradient(to right,  #DBEDFF ${positionSliderMin}%, #1D7AD3 ${positionSliderMin}%, #1D7AD3 ${positionSliderMax}%, #DBEDFF ${positionSliderMax}%)`;
    }

// Кнопка формы "Сбросить фильтр"
buttonReset.addEventListener('click', function() {
    resetFiltr()
})

function resetFiltr() {
    for (let i=0; i<radiosCategory.length; i++) {
        radiosCategory[i].checked = false
    }
    for (let i=0; i<radiosResult.length; i++) {
        radiosResult[i].checked = false
    }
    onRadiosCategory = ''
    onRadiosResult = ''
    sliderUpper.value = 730
    sliderLower.value = 1
    onSliderMax = 730;
    onSliderMin = 1
    outputMax.innerHTML = sliderUpper.value;
    outputMin.innerHTML = sliderLower.value;
    monthUpper.innerHTML = 'дней';
    monthLower.innerHTML = 'дня';
    slideTrack.style.background = '#1D7AD3'
    colorSlideTrack(onSliderMax, onSliderMin)
    render(newCourses)
}

window.addEventListener('resize', () => {
    if(window.innerWidth > 1340) {
        form.style.display = 'block'
        formBlack.style.display = 'none'
    } else {
        form.style.display = 'none'
        formBlack.style.display = 'none'
        filtrButton.textContent = 'Показать фильтр'
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


// Отрисовка курсов
function render(arr) {
    blockCourses.innerHTML = ''

    for (let i=0; i<arr.length; i++) {
        let string1 = 
        `
        <div class="courses__block">
                    <div class="courses__block__category">
                        <div class="courses__block__category-first">${arr[i].categoryResalt}</div>
                        <div class="courses__block__category-second">${arr[i].categoryCourse}</div>
                    </div>
                    <div class="courses__block__title">${arr[i].name}</div>
                    <div class="courses__block__text">${arr[i].text}</div>`

        let string2 =''
        let arrP = arr[i].p
         function text(arr) {
            for (let i=0; i<arr.length; i++) {
                string2 +=`<div class="courses__block__p">
                    
                    <div class="courses__block__point">
                        <div class="courses__block__point-g"></div>
                    </div>

                    <div>${arr[i]}</div>
                </div>`
            }
        }
        text(arrP)

        let string3 = `<div class="courses__block__bottom">
                    <div class="courses__block__duration">
                        Срок обучения: <span class="courses__block__duration__span">${arr[i].duration}</span>
                    </div>
                    
                    <form action=${arr[i].url} class="courses__block__form">
                        <button class="courses__block__button">Узнать подробнее</button>
                    </form>
                </div>
                </div>`
    
        blockCourses.innerHTML += string1 + string2 + string3
    }

    const all = document.querySelectorAll('.courses__block__category-second')

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