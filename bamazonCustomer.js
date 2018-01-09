var mysql = require('mysql');
var prompt = require('prompt');
var inquirer = require('inquirer');
var console_table = require('console.table');

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


