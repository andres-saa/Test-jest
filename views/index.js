
const unorder = document.getElementById('arreglo')
const order = document.getElementById('arregloOrdenado')
const btn_limpiar=document.getElementById('limpiar')
const arreglo = [ 1,4,7,9,6,445,3232,78,998,44,4,7,9,6,445,3232,78,998,44,4,7,9,6,445,3232,78,998,44,4,7,9,6,445,3232,78,998,44]
let arregloOrdenado = []
const btn_bubbleSort=document.getElementById('bubble')
const btn_insertionSort=document.getElementById('insertion')
const btn_countingsort=document.getElementById('counting')
const btn_heapsort=document.getElementById('heap')
const btn_quicksort=document.getElementById('quick')
const btn_selectionsort=document.getElementById('selection')
const btn_Radixsort=document.getElementById('radix')

console.log(bubbleSort)
unorder.innerHTML=arreglo



//funciones de ordenamiento

btn_limpiar.addEventListener('click',()=>{order.innerHTML=''},false)
btn_bubbleSort.addEventListener('click',()=> { order.innerHTML=bubbleSort( arreglo ); } , false )
btn_insertionSort.addEventListener('click',()=>{ order.innerHTML=insertionSort(arreglo); },false)
btn_countingsort.addEventListener('click',()=>{ order.innerHTML=countingSort(arreglo,0,5000);},false)



btn_heapsort.addEventListener('click',()=>{ order.innerHTML=insertionSort(arreglo);},false)


btn_quicksort.addEventListener('click',()=>{ order.innerHTML=quickSort(arreglo,0,arreglo.length-1);},false)
btn_selectionsort.addEventListener('click',()=>{ order.innerHTML=selectionSort(arreglo);},false)
btn_Radixsort.addEventListener('click',()=>{ order.innerHTML=radixSort(arreglo);},false)

function bubbleSort(array){
    let flag = false;
    for(var i = 0; i <= array.length-1; i++){
        flag = false;
        for(var j = 0; j < ( array.length - i -1); j++){

            // Comparing two adjacent numbers 
            // and see if first is greater than second
            if(array[j] > array[j+1]){

            // Swap them if the condition is true 
            var temp = array[j]
            array[j] = array[j + 1]
            array[j+1] = temp
            flag = true;
            }
        }
        // console.log(array);
       return array
        
        if(!flag){
            console.log(array)
            return;
        }
}}


function insertionSort(arr) {
    for (let i = 1; i < arr.length; i++) {
      let currentValue = arr[i]
      let j
      for (j = i - 1; j >= 0 && arr[j] > currentValue; j--) {
        arr[j + 1] = arr[j]
      }
      arr[j + 1] = currentValue
    }
    arregloOrdenado= arr
    return arr
  }
  


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





  /////////////////////////////////////quick sort///////////////////////

function swap(items, leftIndex, rightIndex){
    var temp = items[leftIndex];
    items[leftIndex] = items[rightIndex];
    items[rightIndex] = temp;
}


function partition(items, left, right) {
    var pivot   = items[Math.floor((right + left) / 2)], //middle element
        i       = left, //left pointer
        j       = right; //right pointer
    while (i <= j) {
        while (items[i] < pivot) {
            i++;
        }
        while (items[j] > pivot) {
            j--;
        }
        if (i <= j) {
            swap(items, i, j); //sawpping two elements
            i++;
            j--;
        }
    }
    return i;
}

function quickSort(items, left, right) {
    var index;
    if (items.length > 1) {
        index = partition(items, left, right); //index returned from partition
        if (left < index - 1) { //more elements on the left side of the pivot
            quickSort(items, left, index - 1);
        }
        if (index < right) { //more elements on the right side of the pivot
            quickSort(items, index, right);
        }
    }
    return items
}



function selectionSort(arr) {
    for (let i = 0; i < arr.length; i++) {
      let lowest = i
      for (let j = i + 1; j < arr.length; j++) {
        if (arr[j] < arr[lowest]) {
          lowest = j
        }
      }
      if (lowest !== i) {
        // Swap
        ;[arr[i], arr[lowest]] = [arr[lowest], arr[i]]
      }
    }
    return arr
  }
  

  //////////////////////////////radix sort//////////////////////

  function getDigit(num, place) {
    return Math.floor(Math.abs(num) / Math.pow(10, place)) % 10
  }
  

  function digitCount(num) {
    if (num === 0) return 1
    return Math.floor(Math.log10(Math.abs(num))) + 1
  }


  function mostDigits(nums) {
    let maxDigits = 0
    for (let i = 0; i < nums.length; i++) {
      maxDigits = Math.max(maxDigits, digitCount(nums[i]))
    }
    return maxDigits
  }

  function radixSort(arrOfNums) {
    let maxDigitCount = mostDigits(arrOfNums)
    for (let k = 0; k < maxDigitCount; k++) {
      let digitBuckets = Array.from({ length: 10 }, () => []) // [[], [], [],...]
      for (let i = 0; i < arrOfNums.length; i++) {
        let digit = getDigit(arrOfNums[i], k)
        digitBuckets[digit].push(arrOfNums[i])
      }
      // New order after each loop
      arrOfNums = [].concat(...digitBuckets)
    }
    return arrOfNums
  }
  




