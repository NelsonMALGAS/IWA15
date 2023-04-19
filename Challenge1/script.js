const data = {
    lists: [
      ['first', [15, 11, 13, 7, 5]],
      ['second', [2, 6, 8, 4, 14, 12, 10]],
      ['third', [9, 3, 1]],
    ]
  }
  
  const extractBiggest = () => {
    const [first, second, third] = data.lists.map(([, lists]) => lists);
  
    if (first.length === 0 && second.length === 0 && third.length === 0) {
      return undefined;
    }

    /**
     * The code snippet takes the last element of each of the three arrays, and
      finds the largest value among them using the Math.max() function. If any
      of the arrays is empty, meaning it has no elements, the value returned
      will be negative infinity.
     */
  
    const maxFirst = first.length > 0 ? first[first.length - 1] : -Infinity;
    const maxSecond = second.length > 0 ? second[second.length - 1] : -Infinity;
    const maxThird = third.length > 0 ? third[third.length - 1] : -Infinity;
    const max = Math.max(maxFirst, maxSecond, maxThird);
  
    if (maxFirst === max) {
      first.pop();
      return maxFirst;
    }
    if (maxSecond === max) {
      second.pop();
      return maxSecond;
    }
    third.pop();
    return maxThird;
  }
  
  
  const result = [];
  
// Only edit above

result.push(extractBiggest())
result.push(extractBiggest())
result.push(extractBiggest())
result.push(extractBiggest())
result.push(extractBiggest())

result.push(extractBiggest())
result.push(extractBiggest())
result.push(extractBiggest())
result.push(extractBiggest())
result.push(extractBiggest())

result.push(extractBiggest())
result.push(extractBiggest())
result.push(extractBiggest())
result.push(extractBiggest())
result.push(extractBiggest())

  
  console.log(result);
  