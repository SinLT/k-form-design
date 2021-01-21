/*利用promise封装的ajax函数*/
export function ajax (method, url, data) {
  /*兼容IE*/

  var request
  if (window.XMLHttpRequest) {
    request = new XMLHttpRequest()
  } else {
    request = new ActiveXObject('Microsoft.XMLHTTP')
  }
  return new Promise(function (resolve, reject) {
    request.onreadystatechange = function () {
      if (request.readyState === 4) {
        if (request.status === 200) {
          resolve(JSON.parse(request.response))
        } else {
          reject(request.status)
        }
      }
    }
    if (method.toUpperCase() === 'GET') {
      var arr = []
      for (var key in data) {
        arr.push(key + '=' + data[key])
      }
      var getData = arr.join('&')

      request.open('GET', url + '?' + getData, true)
      request.send(null)
    } else if (method.toUpperCase() === 'POST') {
      request.open('POST', url, true)
      request.responseType = 'json'
      request.setRequestHeader(
        'Content-Type',
        'application/x-www-form-urlencoded;charset=utf-8'
      )
      request.send(data)
    }
  })
}
