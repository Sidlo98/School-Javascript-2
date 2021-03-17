const hello = () => {
  console.log('Hello World')
}

// hello();
// hello();
// hello();

//När vi jobbar i Node så heter vårat globala objekt global istället för window 
// console.log(global);

setTimeout(() => {
  console.log('timed out')
},3000)

console.log(__dirname)
console.log(__filename)