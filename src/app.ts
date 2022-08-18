interface Snacks {
id: number;
name: string;
kcalPer100g: number;
priceInEuro: number;
}

function getSnacks(): Promise<Snacks[]> {
    return fetch('/snacks-data.json')
    .then(res => res.json())
    .then(res => {
        //(parameter) res: response
return res as Snacks[]
})
}

const result = document.getElementById('result')
getSnacks()
.then(snacks => {
    result.innerHTML = snacks.map(snack => snack.name).toString()
})
