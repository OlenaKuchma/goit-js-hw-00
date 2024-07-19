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

// // 5/1
// // const keys = Object.keys(feadback);

// // for (const key of keys) {
    
// //     console.log(keys);
// //     console.log(feadback[key]);
// //     totalFeadback += feadback[key];
// // }
// // console.log(keys);
// // console.log(totalFeadback);


// // 5/2
// const values = Object.values(feadback);
// for (const value of values) {
//     totalFeadback += value;
// }
// console.log(totalFeadback);



// 6

const friends = [
    {name: 'Ola', online: true },
    {name: 'Ivan', online: true },
    {name: 'Oleg', online: false },
    {name: 'Jenya', online: true },
    {name: 'Lili', online: false },
    {name: 'Kati', online: true },
    {name: 'Sonny', online: false },
    {name: 'Pavel', online: true },
]

console.table(friends);

// for (const friend of friends) {
//     console.log(friend);

//     friend.newKey = 555;
// }

// console.table(friends);

// 6/1
// const findeFriendByName = function (allFriends, friendName) {
//     for (const friend of allFriends) {
//         // console.log(friend.name === name);

//         if (friend.name === friendName) {
//             return `Знайдено імя ${friendName} друга!`

//         }
//         return `Не знайдено імя ${friendName} друга!`
//     }
    

// }

// console.log(findeFriendByName(friends,'Jenya' ));
// console.log(findeFriendByName(friends, 'Sonny'));
// console.log(findeFriendByName(friends, 'Dan'));


// 6/2
// const getFriendName = function (allFriends) {
    
//     let names = [];

//     for (const friend of allFriends) 
//     {        
//     names.push(friend.name);
//     }
//     return names;

// }
// console.log(getFriendName(friends));

// 6/2
// const getFriendOnline = function (allFriends) {
    
//     let onlineFriends = [];

//     for (const friend of allFriends) 
//     {        
//     if (friend.online === true) {
//         onlineFriends.push(friend);
//     }
        
//     }
//     return onlineFriends;

// }
// console.log(getFriendOnline(friends));

// 6/3
// const getFriendOffline = function (allFriends) {
    
//     let offlineFriends = [];

//     for (const friend of allFriends) 
//     {        
//     if (!friend.online) {
//         offlineFriends.push(friend);
//     }
        
//     }
//     return offlineFriends;

// }
// console.log(getFriendOffline(friends));


// 6/4

const getFriendByStatus = function (allFriends) {
    
    let statusFriends = {
        online: [],
        offLine: [],
    };

    for (const friend of allFriends) 
    {        
    
        if (friend.online) {
        statusFriends.online.push(friend);
        continue
    }
        statusFriends.offLine.push(friend);
     
}

return   statusFriends;
}

console.log(getFriendByStatus(friends));