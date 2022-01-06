"use strict";

// variables



const board = document.querySelector('.box-2');
const size = document.querySelector('#array-input');
const speed = document.querySelector('#speed-input');
const newArray = document.querySelector('.new-array');
const sortingMethod = document.querySelectorAll('.sorting');


var array =[];
var itmd = [];
var div=[];
var delay=100*5;

// event listeners


document.addEventListener('DOMContentLoaded',generateArray);
size.addEventListener('click',()=>{
    generateArray();
});
speed.addEventListener('click',()=>{delay = (10-speed.value) * 100});
newArray.addEventListener('click',()=>{size.click();});
sortingMethod[1].addEventListener('click',()=>{
    bubbleSort();
    bubbletext();
});
sortingMethod[2].addEventListener('click',()=>{
    selectionSort();
    selectiontext()
});
sortingMethod[3].addEventListener('click',()=>{
    insertionSort();
    insertiontext()
});
sortingMethod[4].addEventListener('click',()=>{
    mergeSort(0,size.value-1);
    mergetext() 
});
// sortingMethod[5].addEventListener('click',quickSort);
// sortingMethod[6].addEventListener('click',heapSort);



// function

function generateArray(){
    array = [];
    div = [];
    board.innerHTML = '';
    for(let i = 0; i < size.value; i++){
        const val = (Math.ceil(Math.random() * 400));

        const child = document.createElement('div');
        child.classList.add('child');
        child.style.height = val + 'px';
        child.style.value = val ;
        array.push(child);
        div.push(val);
        board.appendChild(child);

    }
    console.log(array.splice(0,4));
    
}

