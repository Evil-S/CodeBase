// vue3 移除了$on $emit $once等用法，所以新项目可以使用mitt插件
// vue2升级vue 兼容方法
class EventBus {
  constructor() {
    this.busList = {}
  }

  // 订阅
  $on(name, fn) {
    this.busList[name] = this.busList[name] || [];
    this.busList[name].push(fn);
  }

  // 发布
  $emit(name, data) {
    if (this.busList[name]) {
      this.busList[name].forEach((fn) => {
        fn(data);
      });
    }
  }
  // 取消订阅
  $off(name) {
    if (this.busList[name]) {
      delete this.busList[name];
    }
  }
}

export default new EventBus()
