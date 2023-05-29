//1
/*
const http = require('http');
const os = require('os');
const path = require('path');

const server = http.createServer((req, res) => {
  const username = os.userInfo().username;
  const osType = os.type();
  const uptimeMinutes = Math.floor(os.uptime() / 60);
  const currentDirectory = process.cwd();
  const serverFileName = path.basename(__filename);

  const responseData = `Username: ${username}\nOS Type: ${osType}\nUptime (minutes): ${uptimeMinutes}\nCurrent Directory: ${currentDirectory}\nServer File Name: ${serverFileName}`;

  res.statusCode = 200;
  res.setHeader('Content-Type', 'text/plain');
  res.end(responseData);
});

const port = 5000;

server.listen(port, () => {
  console.log(`Сервер запущено на порті ${port}`);
});*/

//3
/*const http = require('http');
const fs = require('fs');

const filePath = 'text.txt';

// Функція для запису інформації у файл
function writeToTextFile(data) {
  fs.writeFile(filePath, data, (err) => {
    if (err) {
      console.error('Помилка запису в файл:', err);
    } else {
      console.log('Інформацію успішно записано у файл.');
    }
  });
}

// Створення серверу, який прослуховує запити
const server = http.createServer((req, res) => {
  // Перевірка, чи запит відправлений методом GET
  if (req.method === 'GET') {
    const userInput = req.url.substr(1); // Отримання інформації з адресного рядка (без початкового слеша)

    // Записування отриманої інформації у файл
    writeToTextFile(userInput);

    // Зчитування даних з файлу
    fs.readFile(filePath, 'utf8', (err, data) => {
      if (err) {
        console.error('Помилка зчитування файлу:', err);
        res.statusCode = 500;
        res.end('Помилка сервера');
      } else {
        // Відправлення вмісту файлу як відповідь на запит
        res.statusCode = 200;
        res.setHeader('Content-Type', 'text/plain');
        res.end(data);
      }
    });
  } else {
    res.statusCode = 400;
    res.end('Неправильний метод запиту');
  }
});

// Запуск серверу на порті 3000
server.listen(3000, () => {
  console.log('Сервер запущено на порті 3000');
});*/
