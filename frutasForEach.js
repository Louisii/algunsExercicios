const frutas = [ 'Banana', 'Morango', 'Maçã', 'Uva', 'Pêra' ]

const pritnfrutas = (fruta, i) => {
    console.log(`elemento ${i + 1}: ${fruta}`)
}

frutas.forEach(pritnfrutas)