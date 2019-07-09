const assembleParams = function(data) {
    return (Object.keys(data).map(key => (key + '=' + data[key]))).join('&')
}
const transformParams = data => {
    var result = []
    // const isArray = function(data) {
    //     return Object.prototype.toString.call([]) === "[object Array]"
    // }
    const add = function(key, val) {
        result[result.length] = encodeURIComponent(key) + '=' + encodeURIComponent(val)
    }
    const buildParams = function(data, prefix){
        if (prefix) {
            if (Array.isArray(data)) {
                data.forEach((item, index) => {
                    if (/\[\]$/.test(prefix)) {
                        add(prefix, item)
                    } else {
                        buildParams(item, prefix + '[' + (typeof item === 'object' ? index : '') + ']')
                    }
                })
            } else if (data && String(data) === '[object Object]') {
                Object.keys(data).forEach(key => {
                    buildParams(data[key], prefix + '[' + key + ']')
                })
            } else {
                add(prefix, data)
            }
        } else if (Array.isArray(data)){
            data.forEach(item => {
                add(item.name, item.value);
            })
        } else {
            for(let key in data){
                buildParams(data[key], key)
            }
        }
        return result.join('&')
    }
    return buildParams(data)
}
const getJSON = function(url, paramsData, method, theOption) {
    const options = {
        method: method || 'POST',
        mode: 'cors'
    }
    if (method !== 'GET'){
        // json、form-data
        if (paramsData) {
            if (typeof paramsData === "string") {
                options.headers = {
                    'Content-Type': 'application/json'
                }
                options.body = paramsData
                return fetchData(url, options)
            } else if(paramsData) {
                options.headers = {
                    'Content-Type': 'application/x-www-form-urlencoded; charset=UTF-8'
                }
                options.body = transformParams(paramsData)
            }
        }
    } else {
        if (paramsData) {
            let extraUrl = ''
            if (typeof paramsData === "string") {
                extraUrl += '/' + paramsData
            } else if (Object.prototype.toString.call(paramsData) === '[object Object]') {
                Object.keys(paramsData).map(item => {
                    if (assembleParams(paramsData)) {
                        extraUrl += '?' + assembleParams(paramsData)
                    }
                })
            }
            url += extraUrl
        }
    }
    const newOption = Object.assign({}, options, theOption)
    return fetchData(url, newOption)
}

const fetchData = (url, options) => {
    const _this = this
    const defer = new Promise((resolve, reject) => {
        fetch(url, options)
            .then(response => {
                if (typeof response === 'json') {
                    return response.json()
                }
                return response.text()
            })
            .then(data => {
                resolve.call(_this, data || {})
            })
            .catch(err => reject.call(_this, err))
    })
    return defer
}
export default getJSON

// // XMLHttpRequest
// const fetchData = (url, options) => {
//     let xhr
//     console.log(window.XMLHttpRequest, 999999999)
//     if (window.XMLHttpRequest) {　 // Mozilla, Safari...
//       　this.xhr = new XMLHttpRequest();
//     } else if (window.ActiveXObject) { // IE
//       　try {
//         　this.xhr = new ActiveXObject('Msxml2.XMLHTTP');
//      　 } catch (e) {
//       　  try {
//         　  this.xhr = new ActiveXObject('Microsoft.XMLHTTP');
//        　 } catch (e) {}
//      　 }
//     }
//     if(this.xhr) {
//         this.xhr.onreadystatechange = this.onReadyStateChange;
//         this.xhr.open('POST', '/api', true);
//      　 // 设置 Content-Type 为 application/x-www-form-urlencoded
//      　 // 以表单的形式传递数据
//       　this.xhr.setRequestHeader('Content-Type', 'application/x-www-form-urlencoded');
//      // 　 xhr.send('username=admin&password=root');
//     }
// }

// onReadyStateChange() {
//     console.log(this.xhr.readyState);
//   　if (this.xhr.readyState === 4) {
//    　　 // everything is good, the response is received
//     　　if (this.xhr.status === 200) {
//       　　　console.log(this.xhr.responseText);
//     　　} else {
//       　　　console.log('There was a problem with the request.');
//    　　 }
//   　} else {
//     　　// still not ready
//     　　console.log('still not ready...');
//   　}
// }

// mock
// https://segmentfault.com/a/1190000013220134