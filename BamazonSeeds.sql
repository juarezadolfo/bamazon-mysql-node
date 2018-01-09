DROP DATABASE IF EXISTS bamazon;

CREATE DATABASE bamazon;

USE bamazon;

CREATE TABLE products (
  item_id INTEGER NOT NULL AUTO_INCREMENT,
  product_name VARCHAR(100)  NOT NULL,
  department_name VARCHAR(100) NOT NULL,
  price DECIMAL(10,2) NOT NULL,
  stock_quantity INTEGER NOT NULL,
  PRIMARY KEY (item_id)
);

INSERT INTO products (item_id, product_name, department_name, price, stock_quantity)
VALUES (12345, "AFE Cold Air Intake","Air Intake Systems", 379.00, 10);

INSERT INTO products (item_id, product_name, department_name, price, stock_quantity)
VALUES (67890, "MGP Caliper Covers","Brakes", 110.00, 20);

INSERT INTO products (item_id, product_name, department_name, price, stock_quantity)
VALUES (91234, "Coverking Seat Covers","Interior Accessories", 129.99, 15);

INSERT INTO products (item_id, product_name, department_name, price, stock_quantity)
VALUES (98765, "Velourtex Floor Mats","Interior Accessories", 29.99, 25);

INSERT INTO products (item_id, product_name, department_name, price, stock_quantity)
VALUES (34567, "Hitchmate Tirestep","Exterior Accessories", 48.30, 12);

INSERT INTO products (item_id, product_name, department_name, price, stock_quantity)
VALUES (54761, "Magnaflow Exhaust System","Performance Exhaust Systems", 1379.00, 5);

INSERT INTO products (item_id, product_name, department_name, price, stock_quantity)
VALUES (99999, "PlasmaGlow Tailgate Light Bar","Lighting", 75.33, 9);

INSERT INTO products (item_id, product_name, department_name, price, stock_quantity)
VALUES (19876, "Firestone Air Tank","Air Compressors", 42.82, 22);

INSERT INTO products (item_id, product_name, department_name, price, stock_quantity)
VALUES (76543, "Whiteline Sway Bar","Suspension", 179.99, 16);

INSERT INTO products (item_id, product_name, department_name, price, stock_quantity)
VALUES (54321, "Willpak Side Window Louvers","Body Kits", 119.95, 6);

SELECT*FROM products; 