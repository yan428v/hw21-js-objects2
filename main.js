const fnSpread = () => {
    const arr1 = [4, 3, 7, 10, 5];
    const res1 = [...arr1, 6, 87];
    const arr2 = [56, 334, 89, 1];
    const res2 = [...res1, ...arr2];
    console.log(res2);
}
fnSpread();

const book = {
    name: "Morphine",
    author: "Bulgakov",
    year: 1925
}
let bookCopy = {...book, ISBN: 546374231};
bookCopy = Object.assign(bookCopy, {year: 3010}, {numOfPages: 145});

function divide(a, b) {
    try {
        if (b === 0) {
            throw new Error("делишь на ноль")
        }
        return a / b
    } catch (e) {
        return e;
    }
}

console.log(divide(1,0));


const arr = [5, 4, "cобака", 4, 8]
function sumArr(arr) {
    try {
        let res = 0;
        for (const el of arr) {
            if (typeof el !== "number") {
                throw new Error(`элемент ${arr.indexOf(el)} не число `);
            }
            res += el;
        }
        return res;
    } catch (e) {
        return e
    }
}
console.log(sumArr(arr));








