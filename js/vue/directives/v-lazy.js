// 图片懒加载
export const lazyDirective = {
  mounted(el){
    if(!window.io){
      window.io = new IntersectionObserver(entries => {
        entries.every(item => {
          // 如果存在地址，说明已加载过
          if(item.target.src) return
          if(item.intersectionRatio > 0){
            item.target.src = item.target.dataset.src
            io.unobserve(item.target)
          } else {
            item.target.src = ''
          }
        })
      })
    }
    io.observe(el)
  }
}
export function setupLazyDirective(app){
  app.directive('lazy', lazyDirective)
}
