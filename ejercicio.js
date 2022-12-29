const numbers = [1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20];

const operacion = numbers.map(item => item * 2);

console.log(operacion);

const result = numbers.filter(item => item > 10 )
console.log(result);

const resultMap = numbers.filter(item => item > 10).map(item => item * 2)
console.log(resultMap);

const frutas = [
    {
        name: 'Pera',
        price: 1500,
        cantidad: 100
    },
    {
        name: 'Mango',
        price: 1300,
        cantidad: 204 
    },
    {
        name: 'Pera',
        price: 1500,
        cantidad: 100
    },
    {
        name: 'Mango',
        price: 1300,
        cantidad: 204 
    }
];

const product = frutas.map(item => {
    if (item.cantidad <= 100) {
      item.price + 500;
    }
    return item
})   
console.log(product);


const newProduct = frutas.map(item => item).
    reduce((array, item) => {
        if(!array[item.name], !array[item.cantidad]){
            array[item.name] = 1
            array[item.cantidad] = 1
        } else{
            array[item.name] += 1
            array[item.cantidad] += 1
        }
    return array;
    }, {})
console.log('newProduct', newProduct);