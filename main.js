let numArray = [];
let floatArray = [];

function getNumber() {
    let num = Number(document.getElementById("inputNum").value);
    numArray.push(num);
    document.getElementById("txtArray").innerHTML = numArray;
}

// BÀI 1: Tính tổng các số dương trong mảng
function sumPositive() {
    let sum = 0;
    for (let i = 0; i < numArray.length; i++) {
        if (numArray[i] > 0) {
            sum += numArray[i];
        }
    }
    document.getElementById("txtSum").innerHTML = sum;
}

// BÀI 2: Đếm có bao nhiêu số dương trong mảng
function countPositive() {
    let count = 0;
    for (let i = 0; i < numArray.length; i++) {
        if (numArray[i] > 0) {
            count++;
        }
    }
    document.getElementById("txtCount").innerHTML = count;
}

// BÀI 3: Tìm số nhỏ nhất trong mảng
function findMin() {
    if (numArray.length === 0) return;
    let min = numArray[0];
    for (let i = 1; i < numArray.length; i++) {
        if (numArray[i] < min) {
            min = numArray[i];
        }
    }
    document.getElementById("txtMin").innerHTML = min;
}

// BÀI 4: Tìm số dương nhỏ nhất trong mảng
function findMinPos() {
    let posArray = [];
    for (let i = 0; i < numArray.length; i++) {
        if (numArray[i] > 0) {
            posArray.push(numArray[i]);
        }
    }
    if (posArray.length === 0) {
        document.getElementById("txtMinPos").innerHTML = "Không có số dương";
    } else {
        let minPos = posArray[0];
        for (let j = 1; j < posArray.length; j++) {
            if (posArray[j] < minPos) {
                minPos = posArray[j];
            }
        }
        document.getElementById("txtMinPos").innerHTML = minPos;
    }
}

// BÀI 5: Tìm số chẵn cuối cùng trong mảng (Nếu không có trả về -1)
function findEven() {
    let lastEven = -1;
    for (let i = 0; i < numArray.length; i++) {
        if (numArray[i] % 2 === 0) {
            lastEven = numArray[i];
        }
    }
    document.getElementById("txtEven").innerHTML = lastEven;
}

// BÀI 6: Đổi chỗ 2 giá trị trong mảng theo vị trí
function changePosition() {
    let index1 = Number(document.getElementById("inputIndex1").value);
    let index2 = Number(document.getElementById("inputIndex2").value);
    if (index1 >= 0 && index1 < numArray.length && index2 >= 0 && index2 < numArray.length) {
        let temp = numArray[index1];
        numArray[index1] = numArray[index2];
        numArray[index2] = temp;
        document.getElementById("txtChangePos").innerHTML = numArray;
    } else {
        document.getElementById("txtChangePos").innerHTML = "Vị trí không hợp lệ";
    }
}

// BÀI 7: Sắp xếp mảng theo thứ tự tăng dần
function sortIncrease() {
    let sortedArray = [];
    for (let i = 0; i < numArray.length; i++) {
        sortedArray.push(numArray[i]);
    }
    for (let i = 0; i < sortedArray.length - 1; i++) {
        for (let j = i + 1; j < sortedArray.length; j++) {
            if (sortedArray[i] > sortedArray[j]) {
                let temp = sortedArray[i];
                sortedArray[i] = sortedArray[j];
                sortedArray[j] = temp;
            }
        }
    }
    document.getElementById("txtIncrease").innerHTML = sortedArray;
}


function checkPrime(n) {
    if (n < 2) return false;
    for (let i = 2; i <= Math.sqrt(n); i++) {
        if (n % i === 0) return false;
    }
    return true;
}

// BÀI 8: Tìm số nguyên tố đầu tiên trong mảng (Nếu không có trả về -1)
function findPrime() {
    let firstPrime = -1;
    for (let i = 0; i < numArray.length; i++) {
        if (checkPrime(numArray[i])) {
            firstPrime = numArray[i];
            break;
        }
    }
    document.getElementById("txtPrime").innerHTML = firstPrime;
}

function getFloat() {
    let num = Number(document.getElementById("inputFloat").value);
    floatArray.push(num);
    document.getElementById("txtArrayFloat").innerHTML = floatArray;
}

// BÀI 9: Đếm số nguyên trong mảng số thực
function findInt() {
    let count = 0;
    for (let i = 0; i < floatArray.length; i++) {
        if (Number.isInteger(floatArray[i])) {
            count++;
        }
    }
    document.getElementById("txtInt").innerHTML = count;
}

// BÀI 10: So sánh số lượng số dương và số lượng số âm
function compareNum() {
    let posCount = 0;
    let negCount = 0;
    for (let i = 0; i < numArray.length; i++) {
        if (numArray[i] > 0) {
            posCount++;
        } else if (numArray[i] < 0) {
            negCount++;
        }
    }
    
    let result = "";
    if (posCount > negCount) {
        result = "Số dương > Số âm";
    } else if (posCount < negCount) {
        result = "Số âm > Số dương";
    } else {
        result = "Số dương = Số âm";
    }
    document.getElementById("txtCompare").innerHTML = result;
}