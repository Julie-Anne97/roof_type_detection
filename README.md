# Reconaissance de type de toiture sur images satellite

Mémoire MSc Data Management PSB/EFREI 2021-2023
Alternance chez Léon Grosse

Déterminer le meilleur moyen pour reconnaître automatiquement les types de toitures afin d'améliorer le calcul de potentiel solaire. Comparaison de plusieurs modèles de Deep Learning ainsi que application de Computer Vision.


Raw Data : https://www.data.gouv.fr/fr/datasets/base-de-donnees-nationale-des-batiments/ 

1. Excel Database with latitude/longitude and its corresponding rooftype
- Remove dupplicates and divide by corresponding rooftype 
- Upload to a Google Sheet
- Download to Drive using Google Apps Script (see .gs file), zoom set to 20 for every single building despite its size

2. First Test Deep Learning Image Classification on reduced dataset and only 2 classes proved to work with 75% accuracy.

3. Models used : VGG16, ResNet50 and Xception (see .ipynb)

Model run on Google Colab

![image](https://user-images.githubusercontent.com/101122818/213943186-97af9c0f-9b6e-4309-9d9f-9c22fe48a881.png)
![image](https://user-images.githubusercontent.com/101122818/213943159-49e2d7e2-b561-4080-9ba6-612986373563.png)

## Results
1. Model doesn't really learn, ealy stopping activates early on in epochs

#### Next steps :
- Clean image dabase and apply image transformation
- Learn shape of roof

#### Limits : 
- Use opencv? Use multipolygon to cut shapes of buildings
- Extract images using a different method
