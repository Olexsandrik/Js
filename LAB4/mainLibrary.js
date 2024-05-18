var SortingLibrary = {
    pushUndefined: function(array) {
        let undefinedCount = 0;
        for (let i = 0; i < array.length; i++) {
            if (array[i] === undefined) {
                undefinedCount++;
                array.splice(i, 1);
                i--;
            }
        }
        array.push(...new Array(undefinedCount).fill(undefined));
        console.log(`Count of undefined elements: ${undefinedCount}`);
        return undefinedCount;
    },

    exchangeSort: function(array, sortOrder) {
        let comparisons = 0;
        let exchanges = 0;

        const len = array.length;
        let undefinedCount = this.pushUndefined(array);

        for (let i = 0; i < len - undefinedCount - 1; i++) {
            for (let j = 0; j < len - undefinedCount - 1 - i; j++) {
                comparisons++;
                if ((sortOrder === 'asc' && array[j] > array[j + 1]) || (sortOrder === 'desc' && array[j] < array[j + 1])) {
                    exchanges++;
                    [array[j], array[j + 1]] = [array[j + 1], array[j]];
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

        const len = array.length;
        let undefinedCount = this.pushUndefined(array);

        for (let i = 0; i < len - undefinedCount - 1; i++) {
            let minIndex = i;
            for (let j = i + 1; j < len - undefinedCount; j++) {
                comparisons++;
                if ((sortOrder === 'asc' && array[j] < array[minIndex]) || (sortOrder === 'desc' && array[j] > array[minIndex])) {
                    minIndex = j;
                }
            }
            if (minIndex !== i) {
                exchanges++;
                [array[i], array[minIndex]] = [array[minIndex], array[i]];
            }
        }

        console.log(`Number of comparisons: ${comparisons}`);
        console.log(`Number of exchanges: ${exchanges}`);
        return array;
    },

    insertionSort: function(array, sortOrder) {
        let comparisons = 0;
        let exchanges = 0;

        const len = array.length;
        let undefinedCount = this.pushUndefined(array);

        for (let i = 1; i < len - undefinedCount; i++) {
            let currentValue = array[i];
            let j = i - 1;

            while (j >= 0 && ((sortOrder === 'asc' && array[j] > currentValue) || (sortOrder === 'desc' && array[j] < currentValue))) {
                comparisons++;
                array[j + 1] = array[j];
                j--;
            }
            array[j + 1] = currentValue;
            exchanges++;
        }

        console.log(`Number of comparisons: ${comparisons}`);
        console.log(`Number of exchanges: ${exchanges}`);
        return array;
    },

    shellSort: function(array, sortOrder) {
        let comparisons = 0;
        let exchanges = 0;

        const len = array.length;
        let undefinedCount = this.pushUndefined(array);

        for (let gap = Math.floor((len - undefinedCount) / 2); gap > 0; gap = Math.floor(gap / 2)) {
            for (let i = gap; i < len - undefinedCount; i++) {
                let temp = array[i];
                let j = i;

                while (j >= gap && ((sortOrder === 'asc' && array[j - gap] > temp) || (sortOrder === 'desc' && array[j - gap] < temp))) {
                    comparisons++;
                    array[j] = array[j - gap];
                    j -= gap;
                }
                array[j] = temp;
                exchanges++;
            }
        }

        console.log(`Number of comparisons: ${comparisons}`);
        console.log(`Number of exchanges: ${exchanges}`);
        return array;
    },

    quickSort: function(array, sortOrder) {
        let comparisons = 0;
        let exchanges = 0;

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
            exchanges++;
            return i + 1;
        }

        function quickSortHelper(arr, low, high) {
            if (low < high) {
                let pivotIndex = partition(arr, low, high);
                quickSortHelper(arr, low, pivotIndex - 1);
                quickSortHelper(arr, pivotIndex + 1, high);
            }
        }

        let undefinedCount = this.pushUndefined(array);
        quickSortHelper(array, 0, array.length - undefinedCount - 1);

        console.log(`Number of comparisons: ${comparisons}`);
        console.log(`Number of exchanges: ${exchanges}`);
        return array;
    }
};

// Example usage with non-sparse array
let arr = Array.from({ length: 100 }, () => Math.floor(Math.random() * 100));

console.log("==== Exchange Sort ====");
console.log(SortingLibrary.exchangeSort([...arr], "asc"));
console.log("==== Min Element Sort ====");
console.log(SortingLibrary.minElementSort([...arr], "asc"));
console.log("==== Insertion Sort ====");
console.log(SortingLibrary.insertionSort([...arr], "asc"));
console.log("==== Shell Sort ====");
console.log(SortingLibrary.shellSort([...arr], "asc"));
console.log("==== Quick Sort ====");
console.log(SortingLibrary.quickSort([...arr], "asc"));

// Example usage with sparse array
let sparseArr = Array.from({ length: 100 }, () => (Math.random() > 0.5 ? Math.floor(Math.random() * 100) : undefined));

console.log("==== Exchange Sort (Sparse) ====");
console.log(SortingLibrary.exchangeSort([...sparseArr], "desc"));
console.log("==== Min Element Sort (Sparse) ====");
console.log(SortingLibrary.minElementSort([...sparseArr], "desc"));
console.log("==== Insertion Sort (Sparse) ====");
console.log(SortingLibrary.insertionSort([...sparseArr], "desc"));
console.log("==== Shell Sort (Sparse) ====");
console.log(SortingLibrary.shellSort([...sparseArr], "desc"));
console.log("==== Quick Sort (Sparse) ====");
console.log(SortingLibrary.quickSort([...sparseArr], "desc"));

