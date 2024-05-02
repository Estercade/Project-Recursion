function mergeSort(arr) {
  let mid = Math.floor((arr.length) / 2);
  let left = arr.slice(0, mid);
  let right = arr.slice(mid);

  if (arr.length <= 1) {
    return arr;
  }

  return merge(mergeSort(left), mergeSort(right));
}

function merge(left, right) {
  let sorted = [];
  while (left.length && right.length) {
    if (left[0] < right[0]) {
      sorted.push(left.shift());
    } else {
      sorted.push(right.shift());
    }
  }
  return [...sorted, ...left, ...right];
}