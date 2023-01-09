const countingSort = (arr, min, max) => {
    let counters = [...Array(max+1)].map(e => 0);
    let result = []
  
    for(let i = min; i < max; i++){
        counters[arr[i]] += 1
    }
    
    for(let j = min; j <= max; j++){
      while( counters[j] > 0){
        result.push(j)
        counters[j]--
      }
    }
    
    return result
  }

export {countingSort}