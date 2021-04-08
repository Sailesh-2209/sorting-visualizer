const mergeSort = (arr, ele) => {
  // const sleep = (milliseconds) => {
  // return new Promise((resolve) => setTimeout(resolve, milliseconds));
  // };

  const main = (array) => {
    if (array.length === 1) {
      return array;
    } else {
      const splitIndex = Math.floor(array.length / 2);
      return merge(
        main(array.slice(0, splitIndex)),
        main(array.slice(splitIndex))
      );
    }
    function merge(array1, array2) {
      let merged = [];
      while (array1.length && array2.length) {
        if (array1[0] < array2[0]) {
          merged.push(array1.shift());
        } else if (array1[0] > array2[0]) {
          merged.push(array2.shift());
        } else {
          merged.push(array1.shift(), array2.shift());
        }
      }
      return [...merged, ...array1, ...array2];
    }
  };
  console.log(main(arr));
};

export default mergeSort;
