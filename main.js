// let userName = window.prompt("What's your name? ");
// console.log(userName);
let a;
let b;
let c;

// a = window.prompt("Enter the side A");
// a = Number(a);
// b = window.prompt("Enter the side B");
// b = Number(b);

// c = Math.sqrt(Math.pow(a , 2) + Math.pow(b , 2));

// console.log("Your C is equal to: ", c);
document.getElementById("headerButton7").onclick = function(){
    a = document.getElementById("inputOfKilos").value;
    a = Number(a);

    b = a * 2.20462;
    c = Math.round(b);
    document.getElementById("bLabel").innerHTML = 'Your weight in Pounds (lbs) is: ' + c;
}

let d;
let e;
let f;
document.getElementById("headerButton8").onclick = function(){
    d = document.getElementById("inputOfCelcius").value;
    d = Number(d);

    e = (d * 1.8) + 32;
    f = Math.round(e);
    document.getElementById("cLabel").innerHTML = "Your temperature in Fahrenheit is: " + f;
}
const nationalDishes = [
    "Asado", "Meat pie", "Wiener Schnitzel", "Biryani", "Moules-frites",
    "Feijoada", "Poutine", "Peking duck", "Bandeja paisa", "Ropa vieja",
    "Svíčková", "Smørrebrød", "Koshary", "Injera", "Kalakukko", "Coq au vin",
    "Bratwurst", "Moussaka", "Goulash", "Biryani", "Nasi goreng",
    "Chelow kabab", "Irish stew", "Falafel", "Pizza", "Jerk chicken",
    "Sushi", "Ugali", "Kibbeh", "Nasi lemak", "Tacos", "Couscous", "Dal bhat",
    "Stroopwafel", "Hangi", "Jollof rice", "Lutefisk", "Biryani", "Ceviche",
    "Adobo", "Bigos", "Bacalhau", "Borscht", "Kabsa", "Bobotie", "Bibimbap",
    "Paella", "Mole", "Pierogi", "Gazpacho", "Haggis", "Pho", "Kabsa",
    "Köttbullar", "Ful Medames", "Pierogi", "Sauerbraten", "Cevapcici",
    "Rendang", "Cassoulet", "Dolma", "Baklava", "Brik", "Fish and Chips",
    "Bulgogi", "Churrasco", "Pad Thai", "Sarmale", "Poutine",
    "Arroz con Pollo", "Khachapuri", "Pierogi", "Tajine", "Peking duck",
    "Kangaroo steak", "Ceviche", "Cantonese roast duck", "Beef Stroganoff",
    "Hainanese Chicken Rice", "Irish Boxty", "Gado-gado", "Tandoori Chicken",
    "Köttbullar", "Feijoa", "Kachamak", "Bistecca alla Fiorentina", "Carpaccio",
    "Pastel de Choclo", "Kare-Kare", "Bánh mì", "Cassava Cake", "Chiles en Nogada",
    "Pierogi", "Chapati", "Cuban Sandwich", "Pierogi", "Pozole", "Khinkali",
    "Fårikål", "Tiramisu"
];
const emotionsAfter = [
    '🍰' , '🍪' , '🍧' , '🍦' , '🍨' , '🎂' , '🍩' , '🧁' , '🍮' ,
    '🍫' , '🍬' , '🍭' , '🍯' , "🍞", "🍖", "🍗", "🍔", "🍟", "🍕",
    "🥖", "🥐", "🧇", "🧀", "🥩", "🥓", "🌭", "🥪", "🥚", "🧆",
    "🥙", "🌯", "🌮", "🥣", "🥗", "🍿", "🫕", "🍚", "🍝", "🍡",
    "🍥", "🍣" , "🥞", "🥯", "🥨", "🫓"
];

function getRandomDish() {
    const randomIndex = Math.floor(Math.random() * nationalDishes.length);
    return nationalDishes[randomIndex];
}

function getRandomEmoji() {
    const randomNum = Math.floor(Math.random() * emotionsAfter.length);
    return emotionsAfter[randomNum];
}

document.getElementById("headerButton13").onclick = function() {
    const dishElement = document.getElementById("dLabel");
    const randomDish = getRandomDish();
    const randomEmoji = getRandomEmoji();
    const highlightedDish = `<span class="highlight"><span class="color">${randomDish}</span></span>`;
    dishElement.innerHTML = "The dish we'd recommend to cook is: " + highlightedDish + "❗" + randomEmoji;
};

document.getElementById("headerButton228").onclick = () => {
    const activeRadioButton = document.querySelector('input[type="radio"]:checked') 
    const secondBtn = `<button type="button" id="headerButton328">No, i'm not!</button>`
    document.querySelector('#paragraph').innerHTML = "Are you sure you would like to use "  + activeRadioButton.value + "?" + `<br>`;
    document.getElementById('paragraph2').insertAdjacentHTML('beforebegin', '<button type="button" id="headerButton428">I\'m sure!</button>' + "   " + secondBtn);
    document.getElementById("headerButton328").onclick = () => {
        location.reload();
    }
    document.getElementById("headerButton428").onclick = () => {
        if(activeRadioButton.value === "Visa Card"){
            window.open("https://www.visa.com.ua/uk_UA/pay-with-visa/find-a-card/credit-cards.html", "_blank");
        }
        else if(activeRadioButton.value === "MasterCard"){
            window.open("https://www.mastercard.ua/uk-ua.html", "_blank");
        }
        else if(activeRadioButton.value === "PayPal"){
            window.open("https://www.paypal.com/ua/home", "_blank");
        }
        location.reload();
    }
}
