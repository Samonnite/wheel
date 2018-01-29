/*  1.在一个二维数组中，每一行都按照从左到右递增的顺序排序，每一列都按照从上到下递增的顺序排序。
*   请完成一个函数，输入这样的一个二维数组和一个整数，判断数组中是否含有该整数。
*/
//  思路：有序矩阵，从左下角的元素开始，如果数组元素比target小，则上移，如果大，则右移。
function Find(target, array) {
    var row = array.length;
    var col = array[0].length;
    for(var i = row - 1,j = 0;(i >= 0)&&(j < col);) {
        if(target > array[i][j]) {
            j++;
        }else if(target < array[i][j]) {
            i--;
        }else {
            return true;
        }
    }
    return false;
}