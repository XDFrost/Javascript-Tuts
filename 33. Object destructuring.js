// OBJECT DESTRUCTURING




const band = {
    bandName: "led Zeppelin",
    famousSong: "Stairway to heaven",
    year: 1969,
    AnotherFamousSong: "Kashmir"
};


// Method 1:

// const bandName = band.bandName;
// const famousSong = band.famousSong;
// console.log(bandName, famousSong);


// Method 2:

let {bandName, famousSong} = band              // First bandName variable will be created containing value led zeppelin and then famousSong variable will be created containing value famous song
console.log(bandName, famousSong);


// year and AnotherFamousSong won't be be used because no variables are created for them