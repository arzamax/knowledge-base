// Not-optimized quick sort

const simpleQuickSort = (arr: any[]): any[] => {
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

  return [...simpleQuickSort(left), pivot, ...simpleQuickSort(right)];
};

// Optimized quick sort

const partition = (arr: any[], left: number, right: number): number => {
  const middle = Math.floor((right + left) / 2);
  const pivot = arr[middle];
  let i = left;
  let j = right;

  while (i <= j) {
    while (arr[i] < pivot) i++;
    while (arr[j] > pivot) j--;

    if (i <= j) {
      [arr[i], arr[j]] = [arr[j], arr[i]];
      i++;
      j--;
    }
  }

  return i;
};

const quickSort = (arr: any[], left = 0, right = arr.length - 1): any[] => {
  const len = arr.length;

  if (len > 1) {
    const index = partition(arr, left, right);

    if (left < index - 1) quickSort(arr, left, index - 1);
    if (index < right) quickSort(arr, index, right);
  }

  return arr;
};
