const quickSortRecursive = (arr: any[]): any[] => {
  if (arr.length < 2) return arr;
  const pivotIndex = Math.floor(Math.random() * arr.length);
  const pivot = arr[pivotIndex];
  const left = [];
  const right = [];

  arr.splice(pivotIndex, 1);

  for (let i = 0; i < arr.length; i++) {
    if (pivot > arr[i]) {
      left.push(arr[i]);
    } else {
      right.push(arr[i]);
    }
  }

  return [...quickSortRecursive(left), pivot, ...quickSortRecursive(right)];
};
