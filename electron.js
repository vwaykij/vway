// main.js
const { app } = require('electron');

app.whenReady().then(() => {
  console.log("🚀 Electron App Started Successfully!");
  app.quit(); // 바로 종료
});
