# e-commerce-backend
![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)

## Table of Contents

[Description](#description)

[Installation] (#installation)

[Usage](#usage)

[Images](#images)

[URLs](#urls)

## Description

This is the backend of an e-commerce website. The website has products, categories of products, and tags for the products. All products, categories, and tags can be created, searched, updated, or deleted according to the routes in the api.

## Installation

Clone the Github repository, then run "npm install." Open mySQL workbench and create a database called ecommerce_db. Create a .env file containing the DB_NAME, DB_USER, and DB_PASSWORD that you use on your computer. Next run "npm run seed" to seed the database. Finally, run "node server.js" or "npm run start" to start the application.

## Usage

Using Insomnia, put localhost:3001 into the address bar to access the application. The endpoints in this application are:

/api/categories

/api/categories:id

/api/products

/api/products:id

/api/tags

/api/tags:id

Get and Post routes can be accesssed with the / routes while the Put and Delete routes can be accessed with the /:id routes.

The Put and Update routes require the following information to be present in the request body:

Categories:

{
    "category_name": "NewCategoryName"
}

Products: 

{

    "product_name": "NewProductName",

    "price": 20.00,

    "stock": 5,

    "tagIds": [1, 2, 3]

}

Tags:
{
    "tag_name": "NewTagName"
}

## Images

![Walkthrough Video](./assets/e-commerce%20backend.webm)

## URLs

GitHub Repo: https://github.com/Shippo704/e-commerce-backend

Walkthrough link: https://drive.google.com/file/d/1HfYrjJiKTyM9JO-UD6mKpjFYDzjEIVj1/view