/**
 * 位管理物品/配置方法
 * 优点：只存储结果数字，结果量小
 * 缺点：物品位子顺序不可变更，只可存贮2种状态
 */
let manages = ['冰箱', '电视', '洗衣机', 'WiFi', '独立卫生间', '空调', '电脑', '热水壶']

const room1 = 89

function numsToArr(num, list) {
  const str = num.toString(2).split('').reverse();
  return list.filter((item, index) => {
    return str[index] === '1'
  })
}

/**
 * 89 => 101001
 * 管理物品index 0 从右往左判断，方便后续增加配置
 */
console.log(numsToArr(room1, manages)); // =>[ '冰箱', 'WiFi', '独立卫生间', '电脑' ]

const has = [ '冰箱', 'WiFi', '独立卫生间', '电脑' ]

function arrToNum(num, list) {
  let str = ''
  list.map(item => {
    if (has.indexOf(item) > -1) {
      str = '1' + str
    } else {
      str = '0' + str
    }
  })
  console.log(str);
  return parseInt(str, 2)
}

/**
 * [ '冰箱', 'WiFi', '独立卫生间', '电脑' ] => 01011001
 */

console.log(arrToNum(has, manages)); // => 89
