const suma = (...nums) => {
    let suma = 0;

    for (const num of nums) 
    {
        suma += num;
    }

    return suma;
};

console.log(suma(2, 2, 2, 7, 9, 423, 12, 53, 32));