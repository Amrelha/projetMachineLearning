import pandas as pd
from bs4 import BeautifulSoup as soup
from urllib.request import urlopen, Request
from flask import jsonify
#change the url

url =r"C:\Users\lanfouf\Desktop\issamML\projetMachineLearning\Data\countries-aggregated.csv"
#url="C:\Users\elham\Desktop\projetMachineLearning\Data\countries-aggregated.csv"

dataset = pd.read_csv(url)

# typeofdata : Confirmed, Recovered, Deaths
def getData(typeofdata ,countryName):#
    data = dataset[['Country', typeofdata]]
    data = data.groupby('Country')
    array = data.get_group(countryName)[typeofdata].values
    return array
def getMaxOfAll(country):
    data = dataset[['Country', 'Confirmed', 'Recovered', 'Deaths']]
    data = data.groupby(['Country']).max()
    print(data.loc[country])
    data = data.loc[country].values
    print(data)
    return data
def getNewData(country):
    url = "https://www.worldometers.info/coronavirus/country/"+country
    req = Request(url, headers={'User-Agent': 'Mozilla/5.0'})
    page_byte = urlopen(req).read()
    webpage = page_byte.decode('utf-8')
    page_soupe = soup(webpage, "html.parser")
    containers = page_soupe.findAll("div", {"class": "maincounter-number"})
    data = []
    data1 = []
    data2 = []
    for i in range(0, 3):
        data.append(containers[i].span.text)
    for i in range(3):
        data1.append(data[i].strip())

    for i in range(0, 3):
        data2.append(data1[i].replace(",", "."))

    return data2
def getStatistiqueMonde():
    url = "https://www.worldometers.info/coronavirus"
    req = Request(url, headers={'User-Agent': 'Mozilla/5.0'})
    page_byte = urlopen(req).read()
    webpage = page_byte.decode('utf-8')
    page_soupe = soup(webpage, "html.parser")
    containers = page_soupe.findAll("div", {"class": "maincounter-number"})
    data = []
    data1 = []
    data2 = []
    for i in range(0, 3):
        data.append(containers[i].span.text)
    for i in range(3):
        data1.append(data[i].strip())

    for i in range(0, 3):
        data2.append(data1[i].replace(",", "."))
    return data2

if __name__ == "__main__":
    getNewData("morocco")
    getStatistiqueMonde()