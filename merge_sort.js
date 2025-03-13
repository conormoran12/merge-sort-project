let array = [3, 2, 1, 13, 8, 5, 0, 1];//new Uint8Array([3, 2, 1, 13, 8, 5, 0, 1]);

function mergeSort(arr) {
    if (arr.length == 1) { return arr; };
    let A = arr.slice(0, Math.round(arr.length / 2));
    let B = arr.slice(Math.round(arr.length / 2), arr.length + 1);

    mergeSort(A); // Sorts Left Side 
    mergeSort(B); // Sorts Right Side

    let ACount = 0;
    let BCount = 0;

    for (let i = 0; i < arr.length; i++) {
        if (ACount < A.length && A[ACount] < B[BCount] || BCount >= B.length) { // If index of LEFT SIDE is less than LEFT SIDE array length AND the LEFT SIDE index value is less than RIGHT SIDE index value OR RIGHT SIDE index is greater or equal to RIGHT SIDE array length then
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