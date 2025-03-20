const suma = (a, b, c = 0, d = 0) => {
    let suma = 0;

    suma = (c != 0 && d !=0) ? a + b + c + d : (c != 0) ? a + b + c : a + b;

    return suma;
};

console.log(suma(2, 2, 2, 7, 9));