function getBoard() {
  return new Promise((resolve, reject) => {
    console.log('Fetching board...');
    setTimeout(() => {
      const board = {
        id: 'def453ed',
        name: 'Thanos',
      };
      console.log('Received board');
      resolve(board);
    }, 1000);
  });
}

function getLists(boardId) {
  return new Promise((resolve, reject) => {
    console.log(`Fetching lists for board id ${boardId}...`);
    setTimeout(() => {
      const lists = {
        def453ed: [
          {
            id: 'qwsa221',
            name: 'Mind',
          },
          {
            id: 'jwkh245',
            name: 'Space',
          },
          {
            id: 'azxs123',
            name: 'Soul',
          },
          {
            id: 'cffv432',
            name: 'Time',
          },
          {
            id: 'ghnb768',
            name: 'Power',
          },
          {
            id: 'isks839',
            name: 'Reality',
          },
        ],
      };
      console.log(`Received lists for board id ${boardId}`);
      resolve(lists[boardId]);
    }, 500);
  });
}

function getCards(listId) {
  return new Promise((resolve, reject) => {
    console.log(`Fetching cards for list id ${listId}...`);
    setTimeout(() => {
      const cards = {
        qwsa221: [
          {
            id: '1',
            description: 'Having acquired the Power Stone, one of the six Infinity Stones,from the planet Xandar',
          },
          {
            id: '2',
            description: 'Having acquired the Power Stone, one of the six Infinity Stones,from the planet Xandar',
          },
          {
            id: '3',
            description: 'Having acquired the Power Stone, one of the six Infinity Stones,from the planet Xandar',
          },
        ],
        jwkh245: [
          {
            id: '1',
            description: 'intercept a spaceship carrying the surviving Asgardians. As they extract the Space Stone from the Tesseract, Thanos subdues Thor, overpowers Hulk, and kills Heimdall and Loki.',
          },
          {
            id: '2',
            description: 'intercept a spaceship carrying the surviving Asgardians. As they extract the Space Stone from the Tesseract, Thanos subdues Thor, overpowers Hulk, and kills Heimdall and Loki.',
          },
          {
            id: '3',
            description: 'intercept a spaceship carrying the surviving Asgardians. As they extract the Space Stone from the Tesseract, Thanos subdues Thor, overpowers Hulk, and kills Heimdall and Loki.',
          },
          {
            id: '4',
            description: 'intercept a spaceship carrying the surviving Asgardians. As they extract the Space Stone from the Tesseract, Thanos subdues Thor, overpowers Hulk, and kills Heimdall and Loki.',
          },
        ],
        azxs123: [
          {
            id: '1',
            description: 'intercept a spaceship carrying the surviving Asgardians. As they extract the Space Stone from the Tesseract, Thanos subdues Thor, overpowers Hulk, and kills Heimdall and Loki.',
          },
          {
            id: '2',
            description: 'intercept a spaceship carrying the surviving Asgardians. As they extract the Space Stone from the Tesseract, Thanos subdues Thor, overpowers Hulk, and kills Heimdall and Loki.',
          },
        ],
        cffv432: [
          {
            id: '1',
            description: 'intercept a spaceship carrying the surviving Asgardians. As they extract the Space Stone from the Tesseract, Thanos subdues Thor, overpowers Hulk, and kills Heimdall and Loki.',
          },
          {
            id: '2',
            description: 'intercept a spaceship carrying the surviving Asgardians. As they extract the Space Stone from the Tesseract, Thanos subdues Thor, overpowers Hulk, and kills Heimdall and Loki.',
          },
        ],
        ghnb768: [
          {
            id: '1',
            description: 'intercept a spaceship carrying the surviving Asgardians. As they extract the Space Stone from the Tesseract, Thanos subdues Thor, overpowers Hulk, and kills Heimdall and Loki.',
          },
          {
            id: '2',
            description: 'intercept a spaceship carrying the surviving Asgardians. As they extract the Space Stone from the Tesseract, Thanos subdues Thor, overpowers Hulk, and kills Heimdall and Loki.',
          },
        ],
      };
      console.log(`Received cards for list id ${listId}`);
      resolve(cards[listId] || []);
    }, 1500);
  });
}

// Task 1 board -> lists -> cards for list qwsa221
// Task 2 board -> lists -> cards for list qwsa221 and cards for list jwkh245 simultaneously
// Task 3 board -> lists -> cards for all lists simultaneously

// const task1 = getBoard()
//   .then((board) => {
//     getLists(board.id)
//       .then((list) => {
//       // console.log('list', list);
//         getCards(list[0].id)
//           .then((cards) => {
//             console.log('\n Task 1');
//             console.log('list', list[0].id);
//             console.log(cards);
//           });
//       });
//   });


// const task2 = getBoard()
//   .then((board) => {
//     getLists(board.id)
//       .then((list) => {
//       // console.log('list', list);
//       console.log('\n Task 2');
//         getCards(list[0].id)
//           .then((cards) => {
//             console.log('list', list[0]);
//             console.log(cards);
//           });
//         getCards(list[1].id)
//           .then((cards) => {
//             console.log('list', list[1]);
//             console.log(cards);
//           });
//       });
//   });

const task3 = getBoard()
  .then((board) => {
    getLists(board.id)
      .then((list) => {
        
        list.forEach((singleList) => {
          console.log('list', singleList);
          getCards(singleList.id).then((cards) => {
            console.log(cards);
          });
        });
      });
  });

