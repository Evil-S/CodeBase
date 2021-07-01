// 懒加载
let modules = import.meta.glob('../../views/**/*.{vue,tsx}')

/**
 * modules = {
    './dir/foo.js': () => import('./dir/foo.js'),
    './dir/bar.js': () => import('./dir/bar.js')
  }
 */

// 直接引入
let modules = import.meta.globEager('../../views/**/*.{vue,tsx}')

/** vite 生成的代码
  import * as __glob__0_0 from './dir/foo.js'
  import * as __glob__0_1 from './dir/bar.js'
  const modules = {
    './dir/foo.js': __glob__0_0,
    './dir/bar.js': __glob__0_1
  }
 */
