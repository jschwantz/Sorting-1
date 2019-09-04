function split(wholeArray) {

  const section = Math.floor(wholeArray.length / 2)
  let firstHalf = wholeArray.slice(0, section)
  let secondHalf = wholeArray.slice(section)

  return [firstHalf, secondHalf]
}

function comparator2 (item1, item2) {
  return item1 < item2
}

function merge(arr1, arr2, compare=comparator2) {
  let newArray = []
  // let arr1 = array[0]
  // let arr2 = array[1]
  while (arr1.length > 0 && arr2.length > 0) {
    if (compare(arr1[0], arr2[0])) {
      newArray.push(arr1.shift())
    } else {
      newArray.push(arr2.shift())
    }
  }
  return newArray.concat(arr1).concat(arr2)
}

function mergeSort(array) {

  // let splitArray = split(array)
  // if (splitArray[0].length > 1 || splitArray[1].length > 1) {
  //   return merge(mergeSort(splitArray[0]), mergeSort(splitArray[1]))
  // } else {
  //   return merge(splitArray[0], splitArray[1])
  // }
  if (array.length <= 1) {
    return array;
  } else {

    let splitArray = split(array)

    // if (splitArray[0].length <= 1 && splitArray[1].length <= 1) {
    //   return merge(splitArray[0], splitArray[1])
    // } else {
      return merge(mergeSort(splitArray[0]), mergeSort(splitArray[1]))
    // }
  }
}
