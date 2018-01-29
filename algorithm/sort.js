//  冒泡排序
/**
 * 
 * 冒泡排序的基本思想是从头遍历要排序的数组，比较相邻的两个数，如果前面的大于后面的就交换位置，
 * 否则不操作。遍历完一次后，最大的数就放在了数组最后的位置。然后再从头遍历数组，进行同样的操作，
 * 直到所有数都排好位置为止。冒泡排序平均时间复杂度为O(n^2),是一种稳定的排序算法。
 */
function bubbleSort(arr) {
    for(var i = 0; i < arr.length; i++) {
        for(var j = 0; j < arr.length-1-i; j++) {
            if(arr[j] > arr[j+1]) {
                //交换位置
                var temp = arr[j];
                arr[j] = arr[j+1];
                arr[j+1] = temp;
            }
        }
        return arr;
    }
}

//  选择排序
/**
 * 选择排序的基本思想是先找到数组中最小的元素，将它和数组的第一个元素位置交换，再找到数组中第二小的元素，
 * 将它和第二个元素交换位置，依次进行下去，直到整个数组排好序为止。时间复杂度为O(n^2),是一个不稳定的排序算法。
 */
function selectSort(arr) {
    for(var i = 0; i < arr.length-1; i++) {
        var min = arr[i];
        for(var j = i + 1; j < arr.length; j++) {
            if(arr[j] < min) {
                var temp = min;
                min = arr[j];
                arr[j] = temp;
            }
            arr[i] = min;
        }
    }
    return arr;
}

//  快速排序
/**
 * 快速排序是一种分而治之的算法，它是冒泡排序的改进，基本思想是通过一趟排序将待排序列分割成独立的两部分，
 * 其中一部分的值都要比另一部分的值小，再分别对这两部分继续进行排序，直到整个序列有序。快速排序的步骤是：
 * 首先从序列中选择一个基准元素，假设为第一个元素，将列表分成两部分，将所有小于基准值的元素放在基准值前面，
 * 所有大于基准值的元素放在基准值后面，再分别对这两部分重复上面的步骤即可。复杂度为O(nlogn),是一个不稳定的排序算法。
 */
function quickSort(arr) {
    if(arr.length <= 1) {
        return arr;
    }else {
        var low = [];
        var high = [];
        var pivotkey = arr[0];
        for(var i = 1; i < arr.length;i++ ) {
            if(arr[i] <= pivotkey) {
                low.push(arr[i]);
            }else{
                high.push(arr[i]);
            }
        }
    }
    return quickSort(low).concat(pivotkey, quickSort(high));
}