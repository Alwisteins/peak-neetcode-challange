function relativeSortArray(arr1, arr2) {
  let order = new Map();

  for (let i = 0; i < arr2.length; i++) {
    order.set(arr2[i], i);
  }

  arr1.sort((a, b) => {
    let aPst = order.get(a);
    let bPst = order.get(b);

    if (aPst === undefined && bPst === undefined) {
      return a - b;
    } else if (aPst === undefined) {
      return 1;
    } else if (bPst === undefined) {
      return -1;
    }

    return aPst - bPst;
  });

  return arr1;
}
