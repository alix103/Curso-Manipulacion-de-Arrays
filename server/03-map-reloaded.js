const order = [
    {
        customerName: 'Nicolas',
        total: 60,
        delivered: true,
    },
    {
        customerName: 'Zulema',
        total: 120,
        delivered: false,
    },
    {
        customerName: 'Santiago',
        total: 180,
        delivered: true,
    },
    {
        customerName: 'Valentina',
        total: 240,
        delivered: true,
    }
];

console.log('original', order);

const rta = order.map(item => item.total);

console.log('Totales', rta);

//const rta2 = order.map(item => {
    //item.tax = .19;
    //return item;
//});

//console.log('rta2', rta2);
//console.log('original', order);

const rta3 = order.map(item => {
    return {
        ...item,
        tax: .19
    };
});

console.log('rta3', rta3);
console.log('original', order);