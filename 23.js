function sumTwoSmallestNumbers(numbers) { 
  numbers.sort((a, b)=>a - b);
  const outputin = numbers[0] + numbers[1] || 0;
    return console.log(outputin)
    }
    sumTwoSmallestNumbers([1,2,3])