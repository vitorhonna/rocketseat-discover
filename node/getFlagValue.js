module.exports = function getFlagValue(flag){
  // const arguments = process.argv;
  // for (let i in arguments) {
  //   i = Number(i)
  //   if (flag == arguments[i]) {
  //     return arguments[i+1]
  //   }
  // }
  const arguments = process.argv;
  const index = arguments.indexOf(flag) + 1
  return arguments[index]
}