// 冒泡排序
/**
 * 1.比较相邻元素大小，交换位置
   2.对每一对相邻元素做相同操作，从开始到最后一对，这样最后的元素就是最大元素
   3.针对n个元重复以上步骤，每次循环排除最后一个
   4.重复1-3
 * @param arr 
 */

function BubbleSort(arr) {
    let len = arr.length;
    // 外层循环控制循环次数
    for (let i = 0; i < len - 1; i++) {
        for (let j = 0; j < len - 1 - i; j++) {
            if (arr[j] > arr[j + 1]) {
                [arr[j], arr[j + 1]] = [arr[j + 1], arr[j]]
            }
        }
    }
    return arr
}


// 快速排序
/** 
 * 1.选择数组中间数作为基数，并从数组中取出此基数
 * 2.准备两个数组容器，遍历数组，逐个与基数对比，较小的放在左边容器，较大的放在右边容器
 * 3.递归处理两个容器的元素，并将处理后的数据与基数按大小合并
 * @param arr
 */

function quickSort(arr) {
    if (arr.length <= 1) return arr;
    // 获取基数的索引，Math.floor向下取整
    let index = Math.floor(arr.length / 2);
    let pivot = arr.splice(index, 1)[0], left = [], right = [];
    for (var i = 0; i < arr.length; i++) {
        if (pivot > arr[i]) {
            left.push(arr[i])
        } else {
            right.push(arr[i])
        }
    }
    return [...quickSort(left), ...[pivot], ...quickSort(right)];
}



// 归并排序

/**
 * 思想：先递归的分解数列，再合并（分治思想）
 * 1.将一个数组拆成A、B两个小组，两个小组继续拆，直到每个小组只有一个元素为止
 * 2.按照拆分过程逐步合并小组，由于各小组初始只有一个元素，可以看做小组内部是有序的，合并小组可以看做是
 * 合并两个有序数组的过程。
 * 3.对左右两个小数列重复第二步，直至各个区间只有一个数
 */

function mergeSort(arr) {
    const len = arr.length;
    // 处理边界情况
    if (len <= 1) return arr
    // 计算分割点
    const mid = Math.floor(len / 2)
    // 递归分割左右子数组，然后合并为有序数组
    const leftArr = mergeSort(arr.slice(0, mid))
    const rightArr = mergeSort(arr.slice(mid, len))
    // 合并左右两个有序数组
    arr = mergeArr(leftArr, rightArr)
    return arr
}

function mergeArr(arr1, arr2) {
    // 初始化两个指针，分别指向arr1和arr2
    let i = 0, j = 0
    const res = []
    const len1 = arr1.length
    const len2 = arr2.length
    // 合并两个子数组
    while (i < len1 && j < len2) {
        if (arr1[i] < arr2[j]) {
            res.push(arr1[i])
            i++
        } else {
            res.push(arr2[j])
            j++
        }
    }

    // 若其中一个子数组首先被合并完全，则直接拼接另一个子数组的剩余部分
    if (i < len1) {
        return res.concat(arr1.slice(i))
    } else {
        return res.concat(arr2.slice(j))
    }
}

// 插入排序 

/**
 * 1.从第一个元素开始，该元素可以认为已经被排序
 * 2.取出下一个元素，在已经排序的元素序列中从后向前扫描
 * 3.如果该元素（已排序）大于新元素，将该元素移到下一个位置
 * 4.重复步骤3，直到找到已排序的元素小于或者等于新元素的位置
 * 5.重复2-5
 */

function insertSort(arr) {
    let len = arr.length
    for (let i = 1; i < len; i++) {
        // cur用来保存当前需要插入的元素，preIndex用于帮助cur寻找自己应该有的定位
        let preIndex = i, cur = arr[i];
        while (preIndex >= 0 && arr[preIndex - 1] > cur) {
            arr[preIndex] = arr[preIndex - 1]
            preIndex--;
        }
        arr[preIndex] = cur
    }
    return arr
}

// 选择排序
/**
 * 思路：每一次从待排序的数组元素中选择最小的一个元素作为首元素，直到排完为止
 * 有n个数需排序n-1次，第一次选择最小值，放在第一位，第二次选择最小值，放在第二位
 * 第n-1次选择最小值，放在n-1位
 */

function selectSort(arr) {
    // temp为当前第一个元素
    let len = arr.length, temp = 0;
    for (let i = 0; i < len; i++) {
        temp = i;
        for (let j = i + 1; j < len; j++) {
            if (arr[j] < arr[temp]) {
                temp = j
            }
        }
        // 每一趟保证第i位为最小值
        if (temp !== i) {
            [arr[i], arr[temp]] = [arr[temp], arr[i]]
        }
    }
    return arr
}



let arr = [1, 3, 2, 8, 4, 6, 2, 5, 3]
var a = insertSort(arr)
console.log(a)

