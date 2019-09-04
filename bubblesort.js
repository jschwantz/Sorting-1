let swapCounter = 0;
let comparisonCounter = 0;

function comparator(itemA, itemB) {
    return itemA>itemB
}

function bubbleSort(array, compare=comparator) {
    let swapping = true;

    while (swapping) {
        swapping = false;
        for (let i =0; i<array.length-1; i++) {
            if (compare(array[i], array[i+1])) {
                swap(array, i, i+1);
                swapping = true;
            }
        }
    }

    return array;
}

function swap(array, index1, index2) {
    const valueAtIndex1 = array[index1];
    const valueAtIndex2 = array[index2];
    array[index1]=valueAtIndex2;
    array[index2]=valueAtIndex1;
    swapCounter+=1
}
