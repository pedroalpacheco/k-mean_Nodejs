const skmeans = require('skmeans')

let idades = [1,12,13,4,25,21,22,3,14,5,11,2,23,24,15];

//3 é o número de grupos
//[0,1,2] = Clusters
let resultado = skmeans(idades,3)

console.log(resultado)