// DATABASE: This file has all the products shown within the shop
class instrument {
    constructor (id,title,price,total,img,quant,) {
        this.id = id;
        this.title = title;
        this.price = price;
        this.total = total;
        this.img = img;
        this.quant = quant;
    };
};

// class amps {
//     constructor (id, brand,model,series,valve,type,year,power,serial,price,img) {
//         this.id = id;
//         this.brand = brand;
//         this.model = model;
//         this.series = series;
//         this.valve = valve;
//         this.type = type;
//         this.year = year;
//         this.power = power;
//         this.serial = serial;
//         this.price = price;
//         this.img = img;
//     };
// };

// Product catalogue
const products = [
    new instrument (1,"Fender Telecaster Custom Shop 1967 Olympic White",19990,19990,"src/img/guitars/1967-fender-tele-white/hero.jpg",1),
    new instrument (2,"Gibson Les Paul Special 1957 Tv. Yellow",23590,23590,"src/img/guitars/1957-gibson-lp-yellow/hero.jpg",1),
    new instrument (3,"Fender Stratocaster 1957 Cunetto Relic Desert Sand 1996",5990,5990,"src/img/guitars/1996-fender-strato-sand/hero.jpg",1),
];