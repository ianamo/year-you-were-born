const counter = document.getElementById('year');
const facts = document.getElementById('factoids');

// async function fetchDB() {
// 	const res = await fetch('chronicle.json');
// 	const data = await res.json();
// 	return data;
// }

// const db = await fetchDB();


console.log(db);


function randomFact(year) {
	var facts = db[year];

	return facts[(Math.floor(Math.random()*facts.length)-1)];
}

function addYear() {
    while (facts.firstChild) {
        facts.removeChild(facts.firstChild)
    }

    const yearNumber = Number(counter.innerText);
    if (yearNumber<2023) {
        counter.innerText = yearNumber+1;
        return true;
    } else {
        return false;
    }
}

function addDecade() {
    for (var i =0; i<10;i++) {
        var result = addYear();
        if (!result) {
            break;
        }
    }
}

function subtractYear () {
    while (facts.firstChild) {
        facts.removeChild(facts.firstChild)
    }
    const yearNumber = Number(counter.innerText);

    if (yearNumber>1900) {
        counter.innerText = yearNumber - 1;
        return true;
    } else {
        return false;
    }
}

function subtractDecade() {
    for (var i =0; i<10;i++) {
        var result = subtractYear();
        if (!result) {
            break;
        }
    }
}

function addFact() {
    const yearNumber = Number(counter.innerText);

    const myFact = randomFact(yearNumber);

    const item = document.createElement('li');
    item.innerText = myFact;
    facts.appendChild(item);
}