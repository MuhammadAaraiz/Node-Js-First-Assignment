const fs = require('fs');

const http = require("http");

// console.log(10 + 11);


// -----------------------------First Task xxxxx -----------------------------

// console.log("Top level code 01");

// setTimeout(() => {
//     console.log("timeout task executed!");
// }, 3000);

// console.log("Top level code 02");


// -----------------------------  xxxxx -----------------------------


//------ Second Task Async Task ------- Create File

// fs.writeFile("file.txt", "Hello world!", () => {
//     console.log("file created!");
// });


//------ Third Task Create File ------- Sync Task

// fs.writeFileSync("file2.txt", "Hello world!");


// -----------------------------  xxxxx -----------------------------


// ----- Fourth Task Read file ---- Sync Task


// const res = fs.readFileSync("file.txt", "utf-8");
// fs.readFile("file.txt", "utf-8", (res) => {
//     console.log(res);
// });



// ----- Fifth Task create folder and write file ---- Sync Task


// fs.mkdirSync("new-folder");
// fs.writeFileSync("new-folder/text.txt", "Nested content");





// -----------------------------  xxxxx -----------------------------


// ----- Server Creation  -----

// const server = http.createServer((req, res) => {
//     const url = req.url;
//     res.end("Server is running successfully!");
// });

// ----- Listening Port 2100 -----

// server.listen(2100);

// -----------------------------  xxxxx -----------------------------





// ----- Server Creation  -----

// const server = http.createServer((request, response) => {
//     console.log(request.url);
//     //   request;

//     if (request.url === "/products") {
//         return response.end("Products Data goes here...");
//     }
// return response.end("Server is ruuning!");
// });

// ----- Listening Port 2100 -----

// server.listen(2100, () => {
//     console.log(" server is running: port 2100");
// });


