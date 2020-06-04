# Pricatch

Pricatch is a web application that keeps track of prices of products that you wish to buy. It will send you an email notification when the price of product you asked to track gets below a certain price that you entered.

This project is broken up into a backend and frontend. The backend contains the Django project which uses the Django Rest Framework to host a simple API. The frontend uses React and queries data from the API

It is a solo project and is a work under progress

## Get Started

### Downloading the git repository

Download the zip file

OR

Run the following commands to clone git repository

```sh
git init
git clone https://github.com/saket-m0/pricatch.git
cd Pricatch
rmdir .git
```

### Open a terminal window

Run the following commands to get started with frontend

```sh
cd frontend
cd pricatch
npm i
npm start
```

### Open a new terminal window in Pricatch folder

Run the following commands to get started with backend

```sh
cd backend
virtualenv Pricatchenv
pricatchenv\Scripts\activate
pip install -r requirements.txt
cd Pricatch
python manage.py runserver
```
