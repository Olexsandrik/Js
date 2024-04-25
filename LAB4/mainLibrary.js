var SortingLibrary = {
    pushUndefined: function(array, undefinedCount){
        for (let i = 0; i < array.length; i++) {
            if (array[i] === undefined) {
                undefinedCount++;
                array.splice(i, 1);
                i--; 
            }
        }
        array.push(...new Array(undefinedCount).fill(undefined));
        console.log(`Count of undedined ${undefinedCount}`);

    },
   exchangeSort: function(array, sortOrder) {
        let comparisons = 0;
        let exchanges = 0;
        let undefinedCount = 0; 

        const len = array.length;
       
        SortingLibrary.pushUndefined(array,undefinedCount);
        for (let i = 0; i < len - 1; i++) {
            for (let j = 0; j < len - 1 - i; j++) {
                comparisons++;
                if ((sortOrder === 'asc' && array[j] > array[j + 1]) || (sortOrder === 'desc' && array[j] < array[j + 1])) {
                    [array[j], array[j + 1]] = [array[j + 1], array[j]];
                    exchanges++;
                }
            }
        }

        console.log(`Number of comparisons: ${comparisons}`);
        console.log(`Number of exchanges: ${exchanges}`);
        return array;
    },    

   
    minElementSort: function(array, sortOrder) {
        let comparisons = 0;
        let exchanges = 0;
       let undefinedCount= 0;
       const len = array.length;

       SortingLibrary.pushUndefined(array,undefinedCount);


        for (let i = 0; i < len - 1; i++) {
            let minIndex = i;
            comparisons++;
            for (let j = i + 1; j < len; j++) {
                if ((sortOrder === 'asc' && array[j] < array[minIndex]) || (sortOrder === 'desc' && array[j] > array[minIndex])) {
                    minIndex = j;
                    exchanges++;
                }
            }
          
            let temp = array[i];
            array[i] = array[minIndex];
            array[minIndex] = temp;
        }
      

        console.log(`Number of comparisons: ${comparisons}`);
        console.log(`Number of exchanges: ${exchanges}`);
        return array;
    },


    insertionSort: function(array, sortOrder) {
        let comparisons = 0;
        let exchanges = 0;
        let undefinedCount= 0;
        const len = array.length;
        
        SortingLibrary.pushUndefined(array,undefinedCount);

      
        
    
        for (let i = 1; i < len; i++) {
            let currentValue = array[i];
            let j = i - 1;
            exchanges++;
    
            while (j >= 0 && ((sortOrder === 'asc' && array[j] > currentValue) || (sortOrder === 'desc' && array[j] < currentValue))) {
                comparisons++;
                array[j + 1] = array[j];
                j--;
            }
    
            array[j + 1] = currentValue;
           
        }
    
        console.log(`Number of comparisons: ${comparisons}`);
        console.log(`Number of exchanges: ${exchanges}`);
    
        return array;
    },

    
    shellSort: function(array, sortOrder) {
        let comparisons = 0;
        let exchanges = 0;
        let undefinedCount = 0;
        const len = array.length;
        
        SortingLibrary.pushUndefined(array, undefinedCount);
    
        for (let gap = Math.floor(len / 2); gap > 0; gap = Math.floor(gap / 2)) {
            for (let i = gap; i < len; i++) {
                let temp = array[i];
                let j = i;
                exchanges++;
    
                while (j >= gap && ((sortOrder === 'asc' && array[j - gap] > temp) || (sortOrder === 'desc' && array[j - gap] < temp))) {
                    array[j] = array[j - gap];
                    j -= gap;
                    comparisons++;
                }
    
                array[j] = temp;
            }
        }
    
        console.log(`Number of comparisons: ${comparisons}`);
        console.log(`Number of exchanges: ${exchanges}`);
        return array;
    },

    
    quickSort: function(array, sortOrder) {
        let comparisons = 0;
        let exchanges = 0;
        let undefinedCount = 0;

      
        function partition(arr, low, high) {
            let pivot = arr[high];
            let i = low - 1;
            for (let j = low; j < high; j++) {
                comparisons++;
                if ((sortOrder === 'asc' && arr[j] < pivot) || (sortOrder === 'desc' && arr[j] > pivot)) {
                    i++;
                    [arr[i], arr[j]] = [arr[j], arr[i]];
                    exchanges++;
                }
            }
            [arr[i + 1], arr[high]] = [arr[high], arr[i + 1]];
          
            return i + 1;
        }
       
    
        function quickSortHelper(arr, low, high) {
            if (low < high) {
                let pivotIndex = partition(arr, low, high);
                quickSortHelper(arr, low, pivotIndex - 1);
                quickSortHelper(arr, pivotIndex + 1, high);
            }
        }
    
       
        quickSortHelper(array, 0, array.length - 1);
        SortingLibrary.pushUndefined(array, undefinedCount);
    
        console.log(`Number of comparisons: ${comparisons}`);
        console.log(`Number of exchanges: ${exchanges}`);
    
        return array;
    }
    
    
};

const arr = new Array(100);

for (let i = 0; i < arr.length; i++) {
    arr[i] = Math.floor(Math.random() * 100); 
    if(arr[i]%2==1){
        arr[i]=undefined;
    }
   
    
}




// Приклад використання
console.log("====обміну=====");
let first= SortingLibrary.exchangeSort(arr,"asc");
console.log("====мінімальних елементів=====");
let second= SortingLibrary.minElementSort(arr,"asc");
console.log("===вставок===");
let third= SortingLibrary.insertionSort(arr,"asc");
console.log("===Shell===");
let fourth= SortingLibrary.shellSort(arr,"asc");
console.log("===шивде сортування===")
let fiver = SortingLibrary.quickSort(arr,"asc");

console.log(first);
console.log(second);
console.log(third);
console.log(fourth);
console.log(fiver);
