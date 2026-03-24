CREATE TABLE foods (
    id SERIAL PRIMARY KEY,
    name VARCHAR(100) NOT NULL,
    price INTEGER NOT NULL,
    spicy_level VARCHAR(20) CHECK (spicy_level IN ('Low', 'Medium', 'High')),
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);
-- create food
insert into foods (name, price, spicy_level) values ('Burger', 10, 'Medium');
insert into foods (name, price, spicy_level) values ('Pizza', 15, 'High');
insert into foods (name, price, spicy_level) values ('Pasta', 12, 'Low');

