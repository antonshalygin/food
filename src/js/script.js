import tabs from './modules/tabs';
import calc from './modules/calc';
import modal from './modules/modal';
import timer from './modules/timer';
import cards from './modules/cards';
import forms from './modules/forms';
import slider from './modules/slider';
import {openModal} from './modules/modal';

window.addEventListener('DOMContentLoaded', () => {
    const modalTimerId = setTimeout(() => openModal('.modal', modalTimerId), 90000);
    
    tabs('.tabheader__item', '.tabcontent', '.tabheader__items', 'tabheader__item_active');
    calc();
    modal('[data-modal]', '.modal', modalTimerId);
    timer('.timer', '2020-10-20');
    cards();
    forms('form', modalTimerId);
    slider({
        nextArrow: '.offer__slider-next',
        prevArrow: '.offer__slider-prev',
        currentCounter: '#current', 
        totalCounter: '#total', 
        slide: '.offer__slide',
        container: '.offer__slider',  
        wrapper: '.offer__slider-wrapper', 
        field: '.offer__slider-inner'
    });
});
