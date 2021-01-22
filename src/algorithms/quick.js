const quickSort = (arr, ele) => {

    let n = arr.length;
    let low = 0;
    let high = n - 1;
    let pi = 0;

    const sleep = (milliseconds) => {
        return new Promise(resolve => setTimeout(resolve, milliseconds));
    }

    const partition = (array, low, high) => {
        let i = (low - 1);
        let pivot = array[high];
        for (let j = low; j < high + 1; j++) {
            if (array[j] < pivot) {
                i++;
                [ array[i], array[j] ] = [ array[j], array[i] ];
                [ ele.current.childNodes[i].style.height, ele.current.childNodes[j].style.height ] = [ ele.current.childNodes[j].style.height, ele.current.childNodes[i].style.height ];
                ele.current.childNodes[i].style.backgroundColor = 'white';
                ele.current.childNodes[j].style.backgroundColor = 'white';

                ele.current.childNodes[i].style.backgroundColor = '#2177f8';
                ele.current.childNodes[j].style.backgroundColor = '#2177f8';
            }
        }
        [ array[i + 1], array[high] ] = [ array[high], array[i + 1] ]; 
        return (i + 1);
    }

    const main = (arr, low, high) => {
        if (low < high) {
            pi = partition(arr, low, high);
            main(arr, low, pi - 1);
            main(arr, pi + 1, high);
        }
    }
    main(arr, low, high);
}

export default quickSort;