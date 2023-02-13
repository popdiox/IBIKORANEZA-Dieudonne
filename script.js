
//  function add(array){
//   let sum = 0;
//   for(let added of array){
//     sum += added;
//   }
//   return sum;
//  }
//  console.log(add([3,4,5]));
//  function multiply(array){
//   let product = 1;
//   for(let prod of array){
//     product *= prod;
//   }
//   return product;
//  }
//  console.log(multiply([4,5]));

const express = require('express')
const PORT = 5000;


const app = express()
app.use(express.json())


app.get("/sum", (req, res) => {
  let { num1, num2 } = req.query
  num1 = parseInt(num1)
  num2 = parseInt(num2)
  return res.json({ sum: num1 + num2 })
})

app.get('/prod', (req, res) => {
  let { number1, number2} = req.query
  number1 = parseInt(number1)
  number2 = parseInt(number2)
  return res.json({ product: number1 * number2 })
})



app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
})