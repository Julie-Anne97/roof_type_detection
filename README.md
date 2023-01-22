# Reconaissance de type de toiture sur images satellite

## Mémoire MSc Data Management PSB/EFREI 2021-2023

Déterminer le meilleur moyen pour reconnaitre les types de toitures automatiquement pour améliorer le calcul de potentiel solaire. Comparaison de plusieurs modèles de Deep Learning ainsi que application de Computer Vision


Raw Data : https://www.data.gouv.fr/fr/datasets/base-de-donnees-nationale-des-batiments/ 

1. Excel Database with latitude/longitude and its corresponding rooftype
2. Image extraction/download using Google Apps Script
(zoom set to 20 for every building)
4. First Test Deep Learning Image Classification on reduced dataset and only 2 classes proved to work with 75% accuracy.
5. Second with bigger dataset, all 4 classes test still in progress because kernel keeps dying.
6. Third test also in progress

![image](https://user-images.githubusercontent.com/101122818/213943186-97af9c0f-9b6e-4309-9d9f-9c22fe48a881.png)
![image](https://user-images.githubusercontent.com/101122818/213943159-49e2d7e2-b561-4080-9ba6-612986373563.png)

Next steps :
- Clean image dabase and apply image transformation
- Learn shape of roof
