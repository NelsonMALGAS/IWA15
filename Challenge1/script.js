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
     * This block of code assigns the last element of  arrays called
      "first","second" & "Third" to  variables named "maxFirst","maxSecond" &
      "maxThird" if the arrays are not empty. If the array is empty, it assigns a
      value of negative infinity to "maxFirst","maxSecond" & "maxThird". The ternary operators is used
      here to conditionally assign a value to "maxFirst" based on the length of
      the "first" array.
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
  
  // An empty array to hold the extracted values
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
  