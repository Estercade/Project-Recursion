function fibs(n) {
  let arr = [0, 1];

  for (let i = 2; i < n; i++) {
    arr.push(arr[i - 1] + arr[i - 2]);
  }

  return arr;
}

function fibsRec(n) {
  if (n === 0) {
    return [0];
  } else if (n === 1) {
    return [0,1];
  }

  let arr = fibsRec(n - 1);
  return [...arr, arr[n - 1] + arr[n - 2]];
}