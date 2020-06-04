import requests
from bs4 import BeautifulSoup

headers = {
    "User-Agent": 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/81.0.4044.122 Safari/537.36'}


def CheckPrice(producturl):
    page = requests.get(producturl, headers=headers)
    soup = BeautifulSoup(page.content, 'html.parser')

    title = soup.find('span', {'class': '_35KyD6'}).get_text()
    price = soup.find('div', {'class': '_1vC4OE _3qQ9m1'}).get_text()

    converted_price = float(price[1:].replace(',', ''))

    return title, converted_price
