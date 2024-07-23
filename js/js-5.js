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


    // const players = [
    //         { id: 'player-1', name: "Mango", timePlayed: 1270, points: 4, online: true },
    //         { id: 'player-2', name: "Poly", timePlayed: 469, points: 2, online: false },
    //         { id: 'player-3', name: "Ajax", timePlayed: 690, points: 3, online: true },
    //         { id: 'player-4', name: "Kiwi", timePlayed: 241, points: 1, online: false },
    //         { id: 'player-5', name: "Tony", timePlayed: 641, points: 7, online: false },
        
    //      ];
    
//          const onlinePlayers = players.filter(({online}) => online);
//          const offlinePlayers = players.filter(player => !player.online);

//  console.table(onlinePlayers);
//  console.table(offlinePlayers);

//  const filterByTimePlayers = players.filter(({timePlayed}) => timePlayed > 250);

//  console.table(filterByTimePlayers);


// //  ------------------find

// const playerToFind = 'player-5';


// const findPlayer = players.find(({id}) => id === playerToFind);

// console.log(findPlayer);

// // ------------------Function of find

// const fuFindPlayer = (players, playerId) => {
//     return players.find(player => player.id === playerId);
// }
 
// console.log(fuFindPlayer(players, 'player-1'));
// console.log(fuFindPlayer(players, 'player-3'));

// ---------------every / some

// const isAllOnline = players.every(({online}) => online);

// console.log(isAllOnline);

// const isAnyOnline = players.some(({online}) => online);

// console.log(isAnyOnline);

// -----------reduce


// const numbers = [5, 10, 15, 20, 25];

// const total = numbers.reduce((acc, number) => {
    
//     console.log('number', number);
//     console.log('acc', acc);
    
    
//     return acc + number;
// }, 0);

// console.log(total);

// const total1 = numbers.reduce((acc, number) => acc + number, 0);

// console.log(total1);


// ------------------ reduce2

// const peopleSalery = {
//     Mango: 5000,
//     Poly: 70000,
//     Ajax: 800
// };

// console.table(peopleSalery);



// const totalSalery = Object.values(peopleSalery).reduce((total, value) => total + value, 0);

//     console.log(totalSalery);

// --------------------reduce3


    // const players = [
    //         { id: 'player-1', name: "Mango", timePlayed: 1270, points: 4, online: true },
    //         { id: 'player-2', name: "Poly", timePlayed: 469, points: 2, online: false },
    //         { id: 'player-3', name: "Ajax", timePlayed: 690, points: 3, online: true },
    //         { id: 'player-4', name: "Kiwi", timePlayed: 241, points: 1, online: false },
    //         { id: 'player-5', name: "Tony", timePlayed: 641, points: 7, online: false },
        
    //      ];

    //      const totalTimePlayed = players.reduce((totalTime, {timePlayed}) => totalTime + timePlayed, 0);

    //      console.log('totalTimePlayed', totalTimePlayed);


    // ------------------reduce4

    // const twets = [
    //     {id: '001', likes: 5, tags: ['js', 'nodes', 'react',  'css']},
    //     {id: '002', likes: 15, tags: ['js',  'react', 'html', 'css']},
    //     {id: '003', likes: 45, tags: ['js', 'nodes', 'html']},
    //     {id: '004', likes: 25, tags: ['js', 'nodes', 'react', 'html']},
    //     {id: '005', likes: 57, tags: ['nodes', 'react', 'css']}
          
    // ];

    // const allTags = twets.reduce((tags, twet) => {
           
    //         tags.push(...twet.tags);
    //         return tags;

    //       }, []);


    // // const allTags2 = twets.reduce((tags, twet) => [...tags, ...twet.tags],[]);

    //       console.log(allTags);
    //     //   console.log(allTags2);

    // const tagsStats = allTags.reduce((acc, tag) => {
       
    //     console.log(acc);

    //     if (acc[tag]) {

    //         // acc[tag] += 1;   

    //     return {
    //         ...acc,
    //         [tag]: acc[tag] + 1,
    //     };
    //     }

    //     // acc[tag] = 1;

    //     return {
    //         ...acc,
    //         [tag]: 1,
    //     };
    // }, {});
    
    // console.log(tagsStats);


    // ---------sort


    // const numbers = [1, 3, 7, 2, 9, 11];

    // const copyNumbers = [...numbers];

    // copyNumbers.sort((curEl, nextEl) => nextEl - curEl);

    // console.log('copyNumbers', copyNumbers);

    // const laters = ['a', 'b', 'c', 'g', 's', 'f'];

    // laters.sort();

    // console.log('laters', laters);


    const twets = [
        {id: '001', likes: 5, tags: ['js', 'nodes', 'react',  'css']},
        {id: '002', likes: 15, tags: ['js',  'react', 'html', 'css']},
        {id: '003', likes: 45, tags: ['js', 'nodes', 'html']},
        {id: '004', likes: 25, tags: ['js', 'nodes', 'react', 'html']},
        {id: '005', likes: 57, tags: ['nodes', 'react', 'css']}
          
    ];

    const sortTwets = [...twets].sort((curLikes, nextLikes) => nextLikes.likes - curLikes.likes);

    console.table(sortTwets);