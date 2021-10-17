module.exports = {
 async index(context){
  console.log({context})
  return context.send("Hello world!")
 }
}
