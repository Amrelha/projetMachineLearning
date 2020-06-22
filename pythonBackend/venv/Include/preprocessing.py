import pandas as pd
import numpy as np
from sklearn.cluster import KMeans
import matplotlib.pyplot as plt
import seaborn as sns
urlTest = "C:/Users/elham/Desktop/S4/Maching learning/projet machine learning/full-list-total-tests-for-covid-19.csv"
urlEtat = "C:/Users/elham/Desktop/S4/Maching learning/projet machine learning/covid-19-master/data/countries-aggregated.csv"
datasetTest = pd.read_csv(urlTest)
datasetEtat = pd.read_csv(urlEtat)

# print("dataset Etat \n ",datasetEtat.head())
# print("dataset Test \n",datasetTest.head())
# print(datasetTest.info())
# print(datasetEtat.info())
# datasetTest = datasetTest.groupby(['Total tests']).sum()
# print("dataset Test \n",datasetTest.head())
# array = datasetTest.loc[:, "Total tests"]
datasetTest = datasetTest[['Entity', 'Total tests']]
datasetTest = datasetTest.rename(columns={'Entity':'Country'})
datasetTest = datasetTest.groupby(['Country']).max()

datasetEtat = datasetEtat[['Country', 'Confirmed', 'Recovered', 'Deaths']]
datasetEtat = datasetEtat.groupby(['Country']).max()
# print(datasetTest)
# print(datasetEtat)
data = pd.merge(datasetEtat, datasetTest, on='Country')
data = data.reset_index()
# print(data.isnull())
wcss = []
x = data.loc[:, ['Confirmed', 'Recovered', 'Deaths', 'Total tests']].values

for i in range(1, 12):
    kmeans = KMeans(n_clusters=i, init='k-means++', random_state=42)
    kmeans.fit(x)
    wcss.append(kmeans.inertia_)
plt.figure(figsize=(10,5))
sns.lineplot(range(1, 12), wcss, marker='o', color='red')
plt.title('elbow methode')
plt.xlabel('Number of clusters')
plt.ylabel('WCSS')
plt.show() ##### 4

kmeans = KMeans(n_clusters = 4, init = 'k-means++', random_state = 42)
y_kmeans = kmeans.fit_predict(x)
print(y_kmeans)
data = data.assign(cluster = y_kmeans+1)

country_cluster = data.loc[:, ['Country', 'cluster']].values
print("***",data)
mean_clusters = pd.DataFrame(round(data.groupby('cluster').mean(), 1))
print(mean_clusters)
# print(data)