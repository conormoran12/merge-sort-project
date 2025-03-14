let array = [105, 79, 100, 110];

function mergeSort(arr) {
    if (arr.length == 1) { return arr; };

    let A = arr.slice(0, Math.floor(arr.length / 2));
    let B = arr.slice(Math.floor(arr.length / 2), arr.length);

    mergeSort(A);
    mergeSort(B);

    let ACount = 0;
    let BCount = 0;

    for (let i = 0; i < arr.length; i++) {
        if (ACount < A.length && A[ACount] < B[BCount] || BCount >= B.length) {
            arr[i] = A[ACount];
            ACount++;
        } else {
            arr[i] = B[BCount];
            BCount++;
        }
    }
    return arr;
}

console.log(mergeSort(array));