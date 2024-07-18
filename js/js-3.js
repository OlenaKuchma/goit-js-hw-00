// const playlist = {
//     name: 'My mysic',
//     rating: 3,
//     tracks: ['one', 'two', 'three'],
//     trackCount: 3

// }

// const propertyName = 'tracks';

// console.log(playlist);
// console.log(playlist.name);
// console.log(playlist.tracks);
// console.log(playlist['tracks']);
// console.log(playlist[propertyName]);

// 1
// const fn = function(myObjeckt) {
//     console.log(myObjeckt);
    
// }

// fn({a: 1, b: 2});

// 2

// const userName = 'Miki';
// const userEmail = 'miki@gmail.com';

// const userSignUp = {
//     userName,
//     userEmail,
// }

// console.log(userSignUp);

// 3

// const inputName = 'Color';
// const inputValue = 'tomato';

// const colorPicerData = {
//     [inputName]: inputValue,
//     month: 4,
// }

// colorPicerData.day = 7;
// colorPicerData.month = 7;

// console.log(colorPicerData);

// 4
// const playlist = {
//     name: 'My mysic',
//     rating: 3,
//     tracks: ['one', 'two', 'three'],
//     trackCount: 3,
//     // getName: function () {
//     //     console.log('Це функція');
//     // },
//     getName () {
//         console.log('Це функція');
//     }



// }
// console.log(playlist);


// 4/1

// const playlist = {
//     name: 'My mysic',
//     rating: 3,
//     tracks: ['one', 'two', 'three'],
//     trackCount: 3,
//     changeName (newName) {
//         console.log('Це функція зміни імені');

//         this.name = newName;
//     },

//     addTrack (newTrack) {
//         this.tracks.push(newTrack);
        
//     },

//     updateRating (newReting) {
//         this.rating = newReting
//     },

//     getTrackCount () {
//         return this.tracks.length;
//     }


// }


// playlist.changeName('Нове імя');
// playlist.addTrack('Новий трек');
// playlist.updateRating(7);
// console.log(playlist);
// console.log(playlist.getTrackCount());


// 5
const feadback = {
    good: 3,
    natural: 6,
    bad: 9,

}
let totalFeadback = 0;
const keys = Object.keys(feadback);

for (const key of keys) {
    
    console.log(keys);
    console.log(feadback[key]);
    totalFeadback += feadback[key];
}
console.log(keys);
console.log(totalFeadback);

