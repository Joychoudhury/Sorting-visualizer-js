
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

    var start1 = start, start2 = mid;
    var end1 = mid + 1, end2 = end;

    var i = start;
    while (start1 <= end1 && start2 <= end2) {
        if (div[start1] <= div[start2]) {
            blocks = document.querySelectorAll(".child");
            // div[i] = div[];
        }
    }

}

async function mergeSort(start, end) {
    if (start < end) {
        var mid = Math.floor((start + end) / 2);
        await mergeSort(start, mid);
        await mergeSort(mid + 1, end);
        await merge(start, mid, end);
    }
    await new Promise((resolve) => {
        setTimeout(() => {
            resolve();
        }, delay);
    });
}
