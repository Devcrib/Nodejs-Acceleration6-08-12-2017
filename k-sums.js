let sumSubsequent = (array) => (array.length === 0) ? 0 : array[0] + sumSubsequent(array.slice(1));

let result = [];

let kSums = (arr,k) => {
  let newArr = arr.map((arrayVal, index) => {
    result.push(arrayVal*k);
    let addSub = sumSubsequent(arr.slice(index,index+k));
    result.push(addSub);
    });
    return result;
};


kSums([13,23,23,23,27,27,52,52,53,53],8);

Repl link = https://repl.it/@Oluwakemi/KSums
