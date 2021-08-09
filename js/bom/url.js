// 获取url中的参数
let query = location.search.replace(/([^?&=]+)=([^&]+)/g,(_,k,v)=>q[k]=v)
