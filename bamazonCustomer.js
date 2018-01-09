var mysql = require('mysql');
var prompt = require('prompt');
var inquirer = require('inquirer');


var connection = mysql.createConnection({
    host: "localhost",
    port: 3306,

    // Your username
    user: "root",

    // Your password
    password: "password",
    database: "bamazon"
});

connection.connect(function (err) {
    if (err) throw err;
    console.log("connected as id " + connection.threadId);
    showAllProducts();
    startInquirer();
});

function showAllProducts() {
    connection.query("SELECT * FROM products", function (err, res) {
        for (var i = 0; i < res.length; i++) {
            console.log('\nItem ID: ' + res[i].item_id + " | " + 'Product Name: ' + res[i].product_name + " | " + 'Department: ' + res[i].department_name + " | " + 'Price: ' + res[i].price.toString() + " | " + 'Quantity In Stock: ' + res[i].stock_quantity.toString());
        }
        console.log("-----------------------------------");
    });
}

function startInquirer() {
    // call up inquirer to prompt the user
    inquirer.prompt([
        {
            type: "input",
            message: "What is the item ID of the product you would like to buy?",
            name: "product_id"
        }, {
            type: "input",
            message: "How many units of this product would you like to buy?",
            name: "stock_quantity"
        }
    ]).then(function (answers) {
        updateProduct(answers.item_id, answers.stock_quantity);
    });
}






// create a song in our database
function createSong(title, artist, genre) {
    console.log("Inserting a new song...\n");
    var query = connection.query(
        "INSERT INTO songs SET ?",
        {
            title: title,
            artist: artist,
            genre: genre
        },
        function (err, res) {
            console.log(res.affectedRows + " songs inserted!\n");
            // when we are done call up inquirer again
            startInquirer();
        }
    );

    // logs the actual query being run
    console.log(query.sql);
}
