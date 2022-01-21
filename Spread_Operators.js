

// Spread Operators spread the array values into multiple values and send to args
function sum(name, ...args)
{
    console.log(arguments);

    let sum =0;
    for(let i in args)
    {
        sum += args[i];
    }
    
    console.log(`Name is ${name} Sum is ${sum}`);
}

let arr1=[10,20,30,40,50]
sum("Imran",...arr1)// Spread Opearator ...
let arr2=[10,20]
sum("Pramod",...arr2)// Spread Opearator ...
