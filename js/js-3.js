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
// const feadback = {
//     good: 3,
//     natural: 6,
//     bad: 9,

// }
// let totalFeadback = 0;

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

// const friends = [
//     {name: 'Ola', online: true },
//     {name: 'Ivan', online: true },
//     {name: 'Oleg', online: false },
//     {name: 'Jenya', online: true },
//     {name: 'Lili', online: false },
//     {name: 'Kati', online: true },
//     {name: 'Sonny', online: false },
//     {name: 'Pavel', online: true },
// ]

// console.table(friends);

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

// const getFriendByStatus = function (allFriends) {
    
//     let statusFriends = {
//         online: [],
//         offLine: [],
//     };

//     for (const friend of allFriends) 
//     {        
    
//         if (friend.online) {
//         statusFriends.online.push(friend);
//         continue
//     }
//         statusFriends.offLine.push(friend);
     
// }

// return   statusFriends;
// }

// console.log(getFriendByStatus(friends));

// 7

// const x = {
//     a: 1,
//     b: 5,
//     c: 9,
//     d: 2,
//     f: 4
// }

// const keyOfX = Object.keys(x).length;
// console.log(keyOfX);


// 8
// const arr1 = [1,3,6,9,2,5];
// const arr2 = [6, 99,55, 88, 254];

// const numbers = arr1.concat(arr2);
// console.log(arr1);
// console.log(arr2);
// console.log(numbers);


// const numbersNew = [...arr1, 8, 9, 44, 88, 55, ...arr2];
// console.log(Math.max(...numbersNew));
// console.log(Math.min(...numbersNew));
// console.log(numbersNew);

// 8/1

// const a = [{x: 1}, {y: 2}, {c: 0}];
// const b = [...a];

// console.log('a', a);
// console.log('b', b);

// console.log(a[0] === b[0]);
// console.log(a === b);

// a[0].x = 1000;
// a[1].y = 10000;

// console.log('a', a);
// console.log('b', b);

// 8/2


// const playlist = {
//     name: 'My mysic',
//     rating: 3,
//     tracks: ['one', 'two', 'three'],
//     trackCount: 3,
//     stats: {
//         followers: 2,
//         views: 4,
//         likes: 7
//     }


//        };

//     console.log(playlist);


//     // const { name, rating, tracks: listOftracks, trackCount: countOfTrack = 0, autor = 'user', stats } = playlist;
//     // const {followers, views, likes} = stats;

//     const { name, rating, tracks: listOftracks, trackCount: countOfTrack = 0, autor = 'user', stats: {followers, views, likes} } = playlist;

//     console.log(name, listOftracks, followers, views, likes);
//     console.log(countOfTrack);


// 8/3

//  const autors = {
//     kiwi: 4,
//     poly: 7,
//     ajax: 9,
//     mango: 5,

//  }
//  const entries = Object.entries(autors);
 
//  for (const entrie of entries) {
    // const [name, rating] = entrie;
    // console.log(name, rating);
// або
//     const name = entrie[0];
//     const rating = entrie[1];

//     console.log(name, rating);
    
//  }

 // або

//  for (const [name, rating] of entries) {
   
//     console.log(name, rating);

    
//  }

// 8/4

// const playlist = {
//     name: 'My mysic',
//     rating: 3,
//     tracks: ['one', 'two', 'three'],
//     trackCount: 3,
//     stats: {
//         followers: 2,
//         views: 4,
//         likes: 7
//     }

   
//        };
//        console.log(playlist);

// const { name, tracks, ...restProps } = playlist;

//     console.log(restProps);

    // 8/5

    // const showProfileInfo = function (playlist) {

    //     const { name, rating, tracks, trackCount, stats: {followers,  views, likes } } = playlist;
    //     console.log(name, rating, tracks, trackCount, followers,  views, likes);
    // }

    // const playlist = {
    //     name: 'My mysic',
    //     rating: 3,
    //     tracks: ['one', 'two', 'three'],
    //     trackCount: 3,
    //     stats: {
    //         followers: 2,
    //         views: 4,
    //         likes: 7
    //     }
    
       
    //        };
    //     // console.log(playlist);

    //     showProfileInfo(playlist);

    // 9

    const cart = {
        items: [],
        getItems() {
            return this.items;
        },
        add(product) {

            for (const item of this.items) {
                if (item.name === product.name) {
                    item.quantity += 1;
                    
                    return;
                }
            }

            const newProduct = {
                ...product,
                quantity: 1,
            }

            this.items.push(newProduct);
        },
        remuve(productName) {
            
            const { items } = this;
            for (let i = 0; i < items.length; i += 1) {
                
                console.log(items[i]);
                // const item = this.items[i];
                const { name } = items[i];


                if (productName === name) {

                            console.log(`Найшли цей ${productName} продукт.`);
                            items.splice(i, 1);
                        }
            }
                      
            
            // for (const item of this.items) {
            //     console.log(item);

            //     if (productName === item.name) {

            //         console.log(`Найшли цей ${productName} продукт.`);
            //     }
            // }

        },
        clear() {

            this.items = [];
        },
        countTotalPrice() {

            console.log(this.items);
            const { items } = this;
            let total = 0;

            for (const { price, quantity} of items) {
                 
                total += price * quantity;

                
            }
            
            return total;
            

        },

        increaseQuantity(productName) {},
        descreaseQuantity(productName) {},

        


    }

    // console.table(cart.getItems());

    cart.add({name: 'tomato', price: 20});
    cart.add({name: 'lime', price: 70});
    cart.add({name: 'keake', price: 50});
    cart.add({name: 'peach', price: 30});
    cart.add({name: 'lime', price: 70});
    cart.add({name: 'keake', price: 50});
    cart.add({name: 'peach', price: 30});
    cart.add({name: 'lime', price: 70});
    cart.add({name: 'keake', price: 50});
    cart.add({name: 'peach', price: 30});
    cart.add({name: 'tomato', price: 20});
    cart.add({name: 'keake', price: 50});
    cart.add({name: 'peach', price: 30});

    console.table(cart.getItems());

    // console.log(cart.getItems());

  
    // cart.remuve('peach');

    // console.table(cart.getItems());
    
    // cart.clear();


    cart.countTotalPrice();

    console.log('total', cart.countTotalPrice());

    


    



