const insertionSort = (arr, ele) => {

    let n = arr.length;

    const sleep = (milliseconds) => {
        return new Promise(resolve => setTimeout(resolve, milliseconds));
    }

    const main = async () => {
        let div1 = 0;
        let div2 = 0;
        let h1 = 0;
        let h2 = 0;

        for (let i = 1; i < n; i++) {
            let key = arr[i];

            div1 = ele.current.childNodes[i];
            div1.style.backgroundColor = 'white';
            h1 = div1.style.height;

            let j = i - 1;
            while (j >= 0 && key < arr[j]) {
                div2 = ele.current.childNodes[j];
                div2.style.backgroundColor = 'white';
                h2 = div2.style.height;
                arr[j + 1] = arr[j];
                ele.current.childNodes[j + 1].style.height = h2;
                j -= 1;

                await sleep(1);
                div2.style.backgroundColor = '#2177f8';
            }
            arr[j + 1] = key;
            ele.current.childNodes[j + 1].style.height = h1;
            div1.style.backgroundColor = '#2177f8';
        }
        for (let i = 0; i < n; i++) {
            ele.current.childNodes[i].style.backgroundColor = 'white';
        }
    }
    main();
}

export default insertionSort;