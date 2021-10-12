// //https://www.freecodecamp.org/learn/javascript-algorithms-and-data-structures/basic-javascript/record-collection
//
// // Setup
// var recordCollection = {
//   2548: {
//     albumTitle: 'Slippery When Wet',
//     artist: 'Bon Jovi',
//     tracks: ['Let It Rock', 'You Give Love a Bad Name']
//   },
//   2468: {
//     albumTitle: '1999',
//     artist: 'Prince',
//     tracks: ['1999', 'Little Red Corvette']
//   },
//   1245: {
//     albumTitle: 'Slippery When Wet',
//     artist: 'Robert Palmer',
//     tracks: []
//   },
//   5439: {
//     albumTitle: 'ABBA Gold',
//     artist: 'ABBA',
//   }
// };
//
// // Only change code below this line
// function updateRecords(records, id, prop, value) {
//   for (let recordsKey in records) {
//     if (+recordsKey === id) {
//       for (let i = 0; i < recordsKey.length; i++) {
//         if (prop === 'tracks') {
//           records[recordsKey][prop] = [];
//           records[recordsKey][prop].push(value)
//         } else if (value !== '') {
//           records[recordsKey][prop] = value;
//         }
//       }
//     }
//   }
//   return records;
// }
//
// console.log(updateRecords(recordCollection, 5439, 'artist', 'ABBA'));
// console.log(updateRecords(recordCollection, 5439, "tracks", "Take a Chance on Me"));
// console.log(updateRecords(recordCollection, 2548, "artist", ""));
// console.log(updateRecords(recordCollection, 1245, "tracks", "Addicted to Love"));
// console.log(updateRecords(recordCollection, 2468, "tracks", "Free"));
// console.log(updateRecords(recordCollection, 2548, "tracks", ""));
// console.log(updateRecords(recordCollection, 1245, "albumTitle", "Riptide"));
// //
