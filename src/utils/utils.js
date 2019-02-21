import axios from 'axios'


axios.defaults.baseURL = 'http://170.106.6.234:8081';  //设置axios默认请求地址

axios.defaults.withCredentials = true;   //允许跨域配置

//request拦截器
// axios.interceptors.request.use((config)=>{

// });
//response拦截器
// axios.interceptors.response.use(res => {
//     if (res.data.retCode === -1) {
//         localStorage.removeItem('userInfo');
//         localStorage.removeItem('role');
//         AppState.logout();
//         return router.push('/login');
//     } else {
//         return res
//     }
// });


/**
 *转换  为 请求参数格式  ==> name=1&id=1
 *
 * @param {*} params
 * @param {*} postFlag
 * @returns
 */
function stringifyURL(params,postFlag){
    var paramUrl = '';
    for (var key in params) {
        if (!postFlag && paramUrl === '') {
            paramUrl += '?' + key + '=' + encodeURIComponent(params[key]);
        }
        else {
            paramUrl += '&' + key + '=' + encodeURIComponent(params[key]);
        }
    }
    //console.log(paramUrl);
    return paramUrl;
}
/**
 *
 *
 * @export
 * @param {*} url    请求的url地址
 * @param {*} data   请求的参数
 * @param {boolean} [isJson=false] isJson传过来的为true是  发送的参数为JSON格式
 * @returns         返回的一个Promise对象
 * get 方法同原理
 */
export function post(url,data,isJson = false) {
    return new Promise((resolve, reject) => {
        data = isJson ? data : stringifyURL(data, true);
        let header = isJson ? {'Content-type': 'application/json'} : {'Content-Type': 'application/x-www-form-urlencoded'};
        axios.post(url, data, {
                headers: header
            }
        ).then(res => {
            resolve(res.data)
        }).catch(err => {
            reject(err)
        })
    })
}
export function get(url, data) {
    return new Promise((resolve, reject) => {
      axios.get(url, {params: data}, {})
        .then(res => {
            if(res !== undefined){
                resolve(res.data)
            }
        })
        .catch(err => {
          reject(err)
        })
    })
  }