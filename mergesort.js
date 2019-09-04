function split(wholeArray) {
  const section = Math.floor(wholeArray.length / 2);
  let firstHalf = wholeArray.slice(0, section);
  let secondHalf = wholeArray.slice(section);

  return [firstHalf, secondHalf];
}

function comparator2(item1, item2) {
  return item1 < item2;
}

function merge(arr1, arr2, compare = comparator2) {
  let newArray = [];

  while (arr1.length > 0 && arr2.length > 0) {
    if (compare(arr1[0], arr2[0])) {
      newArray.push(arr1.shift());
    } else {
      newArray.push(arr2.shift());
    }
  }
  return newArray.concat(arr1).concat(arr2);
}

function mergeSort(array) {
  if (array.length <= 1) {
    return array;
  } else {
    let splitArray = split(array);
    return merge(mergeSort(splitArray[0]), mergeSort(splitArray[1]));
  }
}
