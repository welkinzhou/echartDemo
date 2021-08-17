import axios from 'axios'
// 公共请求
export const post = (url, data = {}) => {
  return new Promise((resolve, reject) => {
    axios
      .post(url, data, {
        // TODO 写入请求baseURL
        baseURL: ' /* URL */',
        headers: {
          'Content-Type': 'application/json'
        }
      })
      .then(
        response => {
          resolve(response.data)
        },
        err => {
          reject(err)
        }
      )
  })
}
