import { bubbleSort } from "./algoritmos/bubbleSort.js"
import { countingSort } from "./algoritmos/countingSort.js"
import { insertionSort } from "./algoritmos/insertionSort.js"
import { quickSort } from "./algoritmos/quickSort.js"
import { selectionSort } from "./algoritmos/selectionSort.js"
import { radixSort } from "./algoritmos/radixSort.js"
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
