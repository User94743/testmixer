const SET_LANGUAGE = 'SET-LANGUAGE';
const SET_INIT = 'SET-INIT';

export const setLanguage = (lang) => {
    return {
        type: SET_LANGUAGE,
        lang
    }
}

export const setInit = () => {
    return {
        type: SET_INIT
    }
}

let initialState = {
 init: 0,
 language : '',
 currentDescription: {},
 descriptionRU: {
     header: {
         mainPage: 'Главная',
         supportPage: 'Поддержка проекта',
         languageSelect: 'Язык'
     },
     buttons: {
         selectFiles: 'Выберите файлы',
         loadFiles: 'Поочередно',
         downloadFiles: 'Скачать результат',
         add: 'Добавить строки',
         reset: 'Сбросить',
         loadRandom: 'Случайно'

     },
     form: {
         textBefore: 'Текст в начале строки',
         textAfter: 'Текст в конце строки',
         nameResultFile: 'Название файла',
         result: 'Результат',
         rowsCount: 'Количество строк: '
     },
     support: {
         contacts: 'Привет! На этом сайте вы можете воспользоваться миксером, который перемешает ваши строки в нужном порядке. Мы будем очень рады, если у вас буду замечания или предложения, вы можете их написать сюда:',
         pay: 'Данный проект является бесплатным, но если вы решите поддержать его монеткой, то мы будем очень признательны вам.',
         buttonPay: 'Поддержать проект'
     }
 },
    descriptionENG: {
        header: {
            mainPage: 'Main',
            supportPage: 'Support Project',
            languageSelect: 'Language'
        },
        buttons: {
            selectFiles: 'Change files',
            loadFiles: 'Alternately',
            downloadFiles: 'Download result',
            add: 'Add Rows',
            reset: 'Reset',
            loadRandom: 'Random'
        },
        form: {
            textBefore: 'Text at the beginning of a line',
            textAfter: 'Text at the end of a line',
            nameResultFile: 'File name',
            result: 'Result',
            rowsCount: 'Number of lines: '
        },
        support: {
            contacts: 'Hello! On this site, you can use a mixer that will shuffle your lines in the right order. We will be very happy if you have any comments or suggestions, you can write them here:',
            pay: 'This project is free, but if you decide to support it with a coin, we will be very grateful to you.',
            buttonPay: 'Support the project'
        }
    },
    descriptionESP: {
        header: {
            mainPage: 'Principal',
            supportPage: 'Proyecto de apoyo',
            languageSelect: 'Idioma'
        },
        buttons: {
            selectFiles: 'Selecciona archivos',
            loadFiles: 'Alternativamente',
            downloadFiles: 'Descargar resultado',
            add: 'Añadir líneas',
            reset: 'Reiniciar',
            loadRandom: 'Por casualidad'
        },
        form: {
            textBefore: 'Texto al principio de una línea',
            textAfter: 'Texto al final de una línea',
            nameResultFile: 'Nombre del archivo',
            result: 'Resultado',
            rowsCount: 'Número de líneas: '
        },
        support: {
            contacts: '¡Hola! En este sitio, puede usar un mezclador que barajará sus líneas en el orden correcto. Estaremos muy contentos si tienes algún comentario o sugerencia, puedes escribirlos aquí:',
            pay: 'Este proyecto es gratuito, pero si decides apoyarlo con una moneda, te estaremos muy agradecidos.',
            buttonPay: 'Apoya el proyecto'
        }
    }


};

const mainReducer = (state = initialState, action) => {

    function setDescriptionLang(lang) {

       if (lang === 'ru') {
         return  state.descriptionRU
       }
       else if (lang === 'en') {
         return state.descriptionENG
       }
       else if (lang === 'es') {
         return state.descriptionESP
       }
       else {
         return state.descriptionENG
       }

    }

    switch (action.type) {

        case SET_INIT:
            return {
                ...state, init: 1
            }

        case SET_LANGUAGE:
            return {
                ...state, language: action.lang, currentDescription: setDescriptionLang(action.lang)
            }

        default: return state
    }

}

export default mainReducer;