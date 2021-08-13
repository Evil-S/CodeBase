/**
 * 给整数数字添加逗号
 * @param number
 */
function addSplitNumber(number){
  number.replace(/(?!^)(?=(\d{3})+$)/g, ',')
}
