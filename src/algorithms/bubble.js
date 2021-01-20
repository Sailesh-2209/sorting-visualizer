const bubbleSort = (arr, ele) => {

    let n = arr.length;

    const sleep = (milliseconds) => {
        return new Promise(resolve => setTimeout(resolve, milliseconds));
    }

    const main = async () => {
        for (let i = 0; i < n; i++) {
            for (let j = 0; j < n - i - 1; j++) {
                let div1 = ele.current.childNodes[j];
                let div2 = ele.current.childNodes[j + 1];
                div1.style.backgroundColor = 'white';
                div2.style.backgroundColor = 'white';
                let h1 = div1.style.height;
                let h2 = div2.style.height;

                if (arr[j] > arr[j + 1]) {
                    let temp = arr[j];
                    arr[j] = arr[j + 1];
                    arr[j + 1] = temp;

                    div1.style.height = h2;
                    div2.style.height = h1;
                }

                await sleep(1);

                div1.style.backgroundColor = '#2177f8';
                div2.style.backgroundColor = '#2177f8';

            }
        }
        for (let i = 0; i < n; i++) {
            ele.current.childNodes[i].style.backgroundColor = 'white';
        }
    }
    
    main();
}

export default bubbleSort;