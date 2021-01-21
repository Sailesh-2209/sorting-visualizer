const selectionSort = (arr, ele) => {

    let n = arr.length;

    const sleep = (milliseconds) => {
        return new Promise(resolve => setTimeout(resolve, milliseconds));
    }

    const main = async () => {
        let div1 = 0;
        let div2 = 0;
        let h1 = 0;
        let h2 = 0;
        for (let i = 0; i < n; i++) {
            div1 = ele.current.childNodes[i];
            h1 = div1.style.height;
            div1.style.backgroundColor = 'white';
            let minIndex = i;
            for (let j = i + 1; j < n; j++) {
                if (arr[minIndex] > arr[j]) {
                    minIndex = j;
                }
                div2 = ele.current.childNodes[minIndex];
                h2 = div2.style.height;
                div2.style.backgroundColor = 'white';
            }
            let temp = arr[minIndex];
            arr[minIndex] = arr[i];
            arr[i] = temp;

            div1.style.height = h2;
            div2.style.height = h1;

            await sleep(20);

            div1.style.backgroundColor = '#2177f8';
            div2.style.backgroundColor = '#2177f8';
        }
        for (let i = 0; i < n; i++) {
            ele.current.childNodes[i].style.backgroundColor = 'white';
        }
    }
    main();
}

export default selectionSort;