
function swap(el1, el2) {
    return new Promise((resolve) => {
        setTimeout(() => {
            const afterNode2 = el2.nextElementSibling;
            const parent = el2.parentNode;
            el1.replaceWith(el2);
            parent.insertBefore(el1, afterNode2);

            resolve();
        }, delay);
    });
}

function swap2(el1, el2) {
    return new Promise((resolve) => {
        setTimeout(() => {
            board.insertBefore(el2, el1);
            resolve();
        }, delay);
    });
}

// bubble sort

async function bubbleSort() {
    var blocks = document.querySelectorAll('.child');
    for (var i = 0; i < blocks.length; i += 1) {
        for (var j = 0; j < blocks.length - i - 1; j += 1) {

            // To change background-color of the
            // blocks to be compared
            blocks[j].style.backgroundColor = "#FF4949";
            blocks[j + 1].style.backgroundColor = "#FF4949";

            await new Promise((resolve) =>
                setTimeout(() => {
                    resolve();
                }, delay)
            );

            // console.log("run");


            // To compare value of two blocks
            if (div[j] > div[j + 1]) {
                await swap(blocks[j], blocks[j + 1]);


                var temp = div[j];
                div[j] = div[j + 1];
                div[j + 1] = temp;
                blocks = document.querySelectorAll(".child");
            }

            // Changing the color to the previous one
            blocks[j].style.backgroundColor = "#ecb365";
            blocks[j + 1].style.backgroundColor = "#ecb365";
        }

    }
}

// selection sort

async function selectionSort() {
    blocks = document.querySelectorAll(".child");

    var i, j, min;

    for (i = 0; i < blocks.length; i++) {
        blocks[i].style.backgroundColor = "#FF4949";

        min = i;
        for (j = i + 1; j < blocks.length; j++) {

            blocks[j].style.backgroundColor = "#FF4949";
            await new Promise((resolve) =>
                setTimeout(() => {
                    resolve();
                }, delay)
            );


            if (div[j] < div[min]) {
                min = j;
            }
            blocks[j].style.backgroundColor = "#ecb365";


        }
        blocks[min].style.backgroundColor = "#FF4949";
        await swap(blocks[i], blocks[min]);
        blocks[i].style.backgroundColor = "#ecb365";
        blocks[min].style.backgroundColor = "#ecb365";

        var temp = div[i];
        div[i] = div[min];
        div[min] = temp;

        blocks = document.querySelectorAll(".child");

    }
    // console.log(div);    
}


// insertion sort
async function insertionSort() {
    blocks = document.querySelectorAll(".child");

    var i, j, key;
    for (i = 1; i < blocks.length; i++) {
        blocks[i].style.backgroundColor = "#FF4949";
        key = div[i];
        keyNode = blocks[i];
        j = i - 1;
        while (j >= 0 && div[j] > key) {
            blocks[j].style.backgroundColor = "#FF4949";
            await new Promise((resolve) =>
                setTimeout(() => {
                    resolve();
                }, delay)
            );

            div[j + 1] = div[j];
            blocks[j + 1].style.backgroundColor = "#ecb365";
            blocks[j].style.backgroundColor = "#ecb365";
            j--;
            blocks[i].style.backgroundColor = "#FF4949";
        }
        div[j + 1] = key;
        board.insertBefore(keyNode, blocks[j + 1]);
        blocks[j + 1].style.backgroundColor = "#FF4949";
        blocks[i].style.backgroundColor = "#ecb365";
        blocks[j + 1].style.backgroundColor = "#ecb365";
        blocks = document.querySelectorAll(".child");
    }
}


// merge sort

async function merge(start, mid, end) {

    var n1 = mid - start + 1;
    var n2 = end - mid;

    var L = new Array(n1);
    var R = new Array(n2);

    for (var i = 0; i < n1; i++)
        L[i] = div[start + i];
    for (var j = 0; j < n2; j++)
        R[j] = div[mid + 1 + j];


    var i = 0, j = 0;
    var k = start;
    

    while(i<n1 && j<n2) {
        if(L[i] <= R[j]) {
            div[k] = L[i];
            i++;
            
        }
        else{
            div[k] = R[j];
            blocks = document.querySelectorAll(".child");
            board.insertBefore(blocks[mid+1+j], blocks[k]);
            j++;
        }
        k++;
        blocks = document.querySelectorAll(".child");
        
    }
    while (i < n1) {
        div[k] = L[i];
        i++;
        k++;
    }
    while (j < n2) {
        div[k] = R[j];
        j++;
        k++;
    }
    return;
}

async function mergeSort(l, r) {
    if(l<r){
        var m = parseInt((l+r)/2);
        await mergeSort(l, m);
        await mergeSort(m+1, r);
        // console.log(l,m,r);
        await merge(l,m,r);
        await new Promise((resolve) =>
            setTimeout(() => {
                resolve();
            }, delay)
        );
    }
}
