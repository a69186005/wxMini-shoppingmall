function createFly () {
  if (mpvuePlatform === 'wx') {
    const Fly = require('flyio/dist/npm/wx')
    return new Fly()
  } else {
    return null
  }
}

function handleError (err) {
  console.log(err)
}
export function request (method, url, params = {}) {
  const fly = createFly()
  if (fly) {
    if (method === 'get') {
      return new Promise((resolve, reject) => {
        fly.get(url, params).then(response => {
          console.log(response)
          resolve(response)
        }).catch(err => {
          handleError(err)
          reject(err)
        })
      })
    } else if (method === 'post') {
      return new Promise((resolve, reject) => {
        fly.post(url, params).then(response => {
          console.log(response)
          resolve(response)
        }).catch(err => {
          handleError(err)
          reject(err)
        })
      })
    }
  }
}
