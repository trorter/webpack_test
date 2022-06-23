async function start() {
  return await Promise.resolve('async is working')
}

start().then(console.log)

class Utils {
  static id = Date.now()
}

console.log(Utils.id)