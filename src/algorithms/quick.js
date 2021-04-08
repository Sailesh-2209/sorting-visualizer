const quickSort = (arr, ele) => {
  let n = arr.length;
  let low = 0;
  let high = n - 1;
  let pi = 0;

  const sleep = (milliseconds) => {
    return new Promise((resolve) => setTimeout(resolve, milliseconds));
  };

  const partition = async (array, low, high) => {
    let i = low - 1;
    let pivot = array[high];
    for (let j = low; j < high + 1; j++) {
      if (array[j] < pivot) {
        i++;
        [array[i], array[j]] = [array[j], array[i]];
        [
          ele.current.childNodes[i].style.height,
          ele.current.childNodes[j].style.height,
        ] = [
          ele.current.childNodes[j].style.height,
          ele.current.childNodes[i].style.height,
        ];
        ele.current.childNodes[i].style.backgroundColor = "white";
        ele.current.childNodes[j].style.backgroundColor = "white";

        await sleep(40);

        ele.current.childNodes[i].style.backgroundColor = "#2177f8";
        ele.current.childNodes[j].style.backgroundColor = "#2177f8";
      }
    }
    [array[i + 1], array[high]] = [array[high], array[i + 1]];
    ele.current.childNodes[i + 1].style.backgroundColor = "white";
    ele.current.childNodes[high].style.backgroundColor = "white";
    [
      ele.current.childNodes[i + 1].style.height,
      ele.current.childNodes[high].style.height,
    ] = [
      ele.current.childNodes[high].style.height,
      ele.current.childNodes[i + 1].style.height,
    ];

    await sleep(40);

    ele.current.childNodes[i + 1].style.backgroundColor = "#2177f8";
    ele.current.childNodes[high].style.backgroundColor = "#2177f8";

    return i + 1;
  };

  const main = async (arr, low, high) => {
    if (low < high) {
      pi = await partition(arr, low, high);
      main(arr, low, pi - 1);
      main(arr, pi + 1, high);
    }
  };
  main(arr, low, high);
};

export default quickSort;
