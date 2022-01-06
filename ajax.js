function bubbletext() {
    const box1 = document.querySelector('.box-1');  
    box1.innerHTML = `<p>Bubble Sort</p>`;  

    const box3 = document.querySelector('.box-3'); 
    box3.innerHTML = `<p>Time :	O(n^2)</p>
    <p>Space :	O(1)</p>`; 

}
function selectiontext() {
    const box1 = document.querySelector('.box-1');  
    box1.innerHTML = `<p>Selection Sort</p>`; 
    
    const box3 = document.querySelector('.box-3');  
    box3.innerHTML = `<p>Time :	O(n^2)</p>
    <p>Space :	O(1)</p>`;
}
function insertiontext() {
    const box1 = document.querySelector('.box-1');  
    box1.innerHTML = `<p>Insertion Sort</p>`;  

    const box3 = document.querySelector('.box-3');  
    box3.innerHTML = `<p>Time :	O(n^2)</p>
    <p>Space :	O(1)</p>`;
}
function mergetext() {
    const box1 = document.querySelector('.box-1');  
    box1.innerHTML = `<p>Merge Sort</p>`;  

    const box3 = document.querySelector('.box-3');  
    box3.innerHTML = `<p>Time :	O(nlog n)</p>
    <p>Space :	O(n)</p>`;
}