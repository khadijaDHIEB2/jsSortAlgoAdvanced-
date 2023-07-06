
function swap(A, i, j) {
    console.log("implement me");
    let temp = A[i];
    A[i] = A[j] ;
    A[j] = temp;
}

function insertionSort(inputArr) {
    console.log("implement me");
    for (let i = 1; i < inputArr.length; i++) {
        let j = i;
        while(j>0 && inputArr[j-1]> inputArr[j]){
            swap(inputArr, j, j - 1);
            j = j-1;
        }
    }
      return inputArr;
}

function selectionSort(inputArr) {
    console.log("implement me");
    for (let i = 0; i < inputArr.length; i++) {
        let min = i;
        for (let j = i + 1; j < inputArr.length; j++) {
          if (inputArr[j]<inputArr[min]) {
            min = j;
          }
        }
        swap(inputArr, i, min);
      }
    return inputArr;
}

function bubbleSort(inputArr) {
    console.log("implement me");
    let passage = 0;
    let permut = true;
    do {
      permut = false;
      for (i = 0; i < (inputArr.length - 1 - passage); i++) {
        if (inputArr[i]> inputArr[i + 1]) {
          swap(inputArr, i, i + 1);
          permut = true;
        }
      }
      passage++;
    } while (permut)
    return inputArr;
}

function shellSort(inputArr) {
    console.log("implement me");
    let l = inputArr.length;
    let n = 0;

    while(n< l/3){
        n = 3*n + 1; 
    }

    while(n !=0){
        for(let i = n; i < l; i++){
            let temp = inputArr[i];
            let j = i;
            while(j> n-1 && inputArr[j-n]> temp){
                inputArr[j] = inputArr[j-n];
                j = j - n;
            }
            inputArr[j] = temp ;
        }
        n = ((n-1)/3);
    }
    return inputArr;
}

function heapSort(inputArr, indexStart, indexEnd) {
    console.log("implement me");
    return inputArr;
}


function _mergesort(inputArr) {
  console.log("mergesort - implement me !");
  if(inputArr.length <2){
      return inputArr;
  }else{
    let m =  Math.floor(inputArr.length / 2);
    let right = inputArr.slice(m);
    let left = inputArr.slice(0, m);
    return _merge(_mergesort(left), _mergesort(right));
  }
}

function _merge(left, right){
  if(left.length == 0){
      return right;
  }
  if(right.length == 0){
      return left ;
  }
  if(left[0]<= right[0]){
      let tab = _merge(left.slice(1), right);
      tab.unshift(left[0]);
      return tab ;
  }else {
    let tab = _merge(left , right.slice(1));
    tab.unshift(right[0]);
    return tab ;
  }
}


function quickSort(arr, first, last) {
  if (last - first < 1) {
    return arr;
  }

  // let pivot = arr[arr.length-1];
  // let leftArr = [];
  // let rightArr = [];

  // for (let i = 0; i < arr.length-1; i++) {
  //   if (arr[i] < pivot) {
  //     leftArr.push(arr[i]);
  //   } else {
  //     rightArr.push(arr[i]);
  //   }
  // }

  // return [...quickSort(leftArr), pivot, ...quickSort(rightArr)];


  pi = _partition(arr, first, last);
  quickSort(arr, first , pi-1);
  quickSort(arr, pi+1, last);
  return arr;
}

function _partition(arr, first , last ) {
  pivot = arr[last];
  j = first ;
  for(let i = first; i < last; i++){
      if(arr[i] <= pivot){
        swap(arr, i, j);
        j++;
      }
  }
  swap(arr, last, j)
  return j;
}

/////////////////////////////////////////////////////////////
//                          START                       ////
////////////////////////////////////////////////////////////

// Création de list

var list = [];
let size = 8;
for (let i = 0; i < size; i++) {
    list.push(Math.floor(Math.random() * size * 2));
}


// Calculs, performances

var swappedList = [...list];
swap(swappedList, 0, 1);

var insertionList = insertionSort([...list]);

var selectionList = selectionSort([...list]);

var bubbleList = bubbleSort([...list]);

var shellList = shellSort([...list]);

var heapList = heapSort([...list]);

var mergeList = _mergesort([...list]);

var quickList = quickSort([7, 8, 6, 1, 0, 3, 5, 2], 0, size-1);

// Affichage des résultats
console.log("Liste non triee");
console.log(list);
 console.log("Swap des deux premiers elements");
 console.log(swappedList);
 console.log("Insertion");
 console.log(insertionList)
 console.log("Selection");
 console.log(selectionList);
 console.log("Bubble");
 console.log(bubbleList);
 console.log("Shell");
 console.log(shellList);
console.log("Merge");
console.log(mergeList);
console.log("Quick");
console.log(quickList);
