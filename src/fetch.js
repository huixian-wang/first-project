const getJSON = function(url, options) {
    const newOptions = {
        method: 'post'
    }
    if (options) {
        // newOptions.method = "post"
        newOptions.headers = {
            'Content-Type': 'application/x-www-form-urlencoded; charset=UTF-8'
            // 'Content-Type': 'application/json'
        },
        // newOptions.body = options
        newOptions.body = JSON.stringify(options)
    }
    console.log(newOptions.body, 3333333333)
   return fetchData(url, newOptions)
}

const fetchData = (url, options) => {
    // let url = `pageInfo`
    // const option= {
    //     // method: 'post',
    //     headers:  new Headers({
    //         'Content-type': 'application/json',
    //         // 'Accept': 'application/json, text/javascript, */*; q=0.01'
    //     }),
    //     body: {
    //         params: 1,
    //     },
    //     credentials: 'same-origin',
    // }
    const _this = this
    let result
    const defer = new Promise((resolve, reject) => {
        fetch(url, options)
            .then(response => {
                // return response.json() || response.text()
                // const data = response.json() ? response.json().data : response.text()
                return response.json() || response.text()
            })
            .then(data => {
                // if (!this.ignoreLastFetch)
                // const { data: result } = data
                // console.log(data.data, 999999999)
                resolve.call(_this, data || {})
                // _this.result = result
                // return result
            })
            .catch(err => reject.call(_this, err))
    })
    return defer
        // XMLHttpRequest
        // let xhr
        // console.log(window.XMLHttpRequest, 999999999)
        // if (window.XMLHttpRequest) {　 // Mozilla, Safari...
        //   　this.xhr = new XMLHttpRequest();
        // } else if (window.ActiveXObject) { // IE
        //   　try {
        //     　this.xhr = new ActiveXObject('Msxml2.XMLHTTP');
        //  　 } catch (e) {
        //   　  try {
        //     　  this.xhr = new ActiveXObject('Microsoft.XMLHTTP');
        //    　 } catch (e) {}
        //  　 }
        // }
        // if(this.xhr) {
        //     this.xhr.onreadystatechange = this.onReadyStateChange;
        //     this.xhr.open('POST', '/api', true);
        //  　 // 设置 Content-Type 为 application/x-www-form-urlencoded
        //  　 // 以表单的形式传递数据
        //   　this.xhr.setRequestHeader('Content-Type', 'application/x-www-form-urlencoded');
        //  // 　 xhr.send('username=admin&password=root');
        // }
}
export default getJSON


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