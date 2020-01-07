function fetchRandomNumbers() {
  console.log('Fetching number...');
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      const randomNum = Math.floor(Math.random() * (100 - 0 + 1)) + 0;
      console.log('Received random number:', randomNum);
      resolve(randomNum);
    }, (Math.floor(Math.random() * (5)) + 1) * 1000);
  });
}


function fetchRandomString(callback) {
  console.log('Fetching string...');
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      let result = '';
      const characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
      const charactersLength = characters.length;
      for (let i = 0; i < 5; i++) {
        result += characters.charAt(Math.floor(Math.random() * charactersLength));
      }
      console.log('Received random string:', result);
      resolve(result);
    }, (Math.floor(Math.random() * (5)) + 1) * 1000);
  });
}


fetchRandomNumbers().then((randomNum) => {
  console.log(randomNum);
});

fetchRandomString().then((randomStr) => console.log(randomStr));
