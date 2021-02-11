const bubbleSort = (arr: any[]): any[] => {
  const res = arr.slice();
  let swapped = false;

  for (let i = 1; i < res.length - 1; i++) {
    swapped = false;

    for (let j = 0; j < res.length - i; j++) {
      if (res[j + 1] < res[j]) {
        [res[j], res[j + 1]] = [res[j + 1], res[j]];
        swapped = true;
      }
    }

    if (!swapped) {
      return res;
    }
  }

  return res;
};
