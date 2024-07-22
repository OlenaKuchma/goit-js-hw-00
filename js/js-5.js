// const numbers = [5, 10, 15, 20, 25];

// numbers.forEach(function(num, i, arr) { 
//     console.log('num', num, 'i', i, 'arr', arr);

// }, {a: 3, b: 8});


// // 99% випадків тільки так

// numbers.forEach(function(num, i, arr) { 
//     console.log('num', num, 'i', i, 'arr', arr);

// });

// console.log(numbers);

// const doubleNumbers = numbers.map(number => number * 2);

// console.log(doubleNumbers);

// 2 -------------------------------map
//  const players = [
//     { id: 'player-1', name: "Mango", timePlayed: 1270, points: 4, online: true },
//     { id: 'player-2', name: "Poly", timePlayed: 469, points: 2, online: false },
//     { id: 'player-3', name: "Ajax", timePlayed: 690, points: 3, online: true },
//     { id: 'player-4', name: "Kiwi", timePlayed: 241, points: 1, online: false },
//     { id: 'player-5', name: "Tony", timePlayed: 641, points: 7, online: false },

//  ]

//  const playersName = players.map(player => player.name);

//  console.log(playersName);


//  const playersId = players.map(player => player.id);
//  console.log(playersId);


//  const playersRes = players.map(({name, online}) => {
//     return {
//         name,
//         online
//     }
// });
//  console.log(playersRes);


//  const updatePlayers = players.map(player => ({...player,
//         points: player.points*1.1, }));
 
//         console.table(updatePlayers);


// const playerIdToUpdate = 'player-4';
 
// const updetedPlayer = players.map(player => {
    
//     if (playerIdToUpdate === player.id) {
//         return {
//             ...player,
//             timePlayed: player.timePlayed + 100,
//         }
//     }
//         return player;

// });

//     console.table(updetedPlayer);


    // const updetedPlayer = players.map(player => 
    //     playerIdToUpdate === player.id ? 
    //     {...player, timePlayed: player.timePlayed + 100} : player);
    
    //     console.table(updetedPlayer);

    // -------------------- filter

    // const numbers = [5, 10, 15, 20, 25];
    // const filteredNumbers = numbers.filter(number => {
    //     console.log(number);

    //     return number > 10;
    // });

    // console.log(filteredNumbers);


    const players = [
            { id: 'player-1', name: "Mango", timePlayed: 1270, points: 4, online: true },
            { id: 'player-2', name: "Poly", timePlayed: 469, points: 2, online: false },
            { id: 'player-3', name: "Ajax", timePlayed: 690, points: 3, online: true },
            { id: 'player-4', name: "Kiwi", timePlayed: 241, points: 1, online: false },
            { id: 'player-5', name: "Tony", timePlayed: 641, points: 7, online: false },
        
         ];
    
         const onlinePlayers = players.filter(({online}) => online);
         const offlinePlayers = players.filter(player => !player.online);

 console.table(onlinePlayers);
 console.table(offlinePlayers);

 const filterByTimePlayers = players.filter(({timePlayed}) => timePlayed > 250);

 console.table(filterByTimePlayers);


//  ------------------find

const playerToFind = 'player-5';


const findPlayer = players.find(({id}) => id === playerToFind);

console.log(findPlayer);

// ------------------Function of find

const fuFindPlayer = (players, playerId) => {
    return players.find(player => player.id === playerId);
}
 
console.log(fuFindPlayer(players, 'player-1'));
console.log(fuFindPlayer(players, 'player-3'));

// ---------------every / some

const isAllOnline = players.every(({online}) => online);

console.log(isAllOnline);

const isAnyOnline = players.some(({online}) => online);

console.log(isAnyOnline);

// -----------