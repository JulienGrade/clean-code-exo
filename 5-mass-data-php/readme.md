<h1>Analyse et agrégation de données massives avec gestion mémoire</h1>
<h2>Contexte :</h2>
<p>Vous devez développer un programme PHP capable de traiter des fichiers volumineux contenant des logs d'événements. Chaque fichier peut contenir plusieurs millions de lignes, et chaque ligne représente un événement sous la forme suivante :</p>
<p>[Timestamp] UserID Action
</p>
<p>Exemple :</p>
<p>
2024-11-21 12:34:56 12345 LOGIN<br/>
2024-11-21 12:35:12 12345 LOGOUT<br/>
2024-11-21 12:36:02 67890 LOGIN<br/>
...

</p>
<h2>Objectifs :</h2>
<ol>
<li>Compter le nombre total d'actions effectuées par chaque utilisateur.
</li>
<li>Identifier l'utilisateur ayant effectué le plus grand nombre d'actions.
</li>
<li>Générer un rapport des 10 actions les plus fréquentes, avec leur fréquence.
</li>
<li>Optimiser la gestion mémoire pour que le programme puisse traiter des fichiers de plusieurs Go.
</li>
</ol>
<h2>Contraintes :</h2>
<ol>
<li>Vous devez lire les fichiers ligne par ligne pour limiter l'utilisation de mémoire.
</li>
<li>Vous ne pouvez pas charger tout le fichier en mémoire à la fois.
</li>
<li>Les données sont réparties sur plusieurs fichiers dans un répertoire donné.
</li>
<li>Le programme doit être robuste aux fichiers malformés et gérer les exceptions.
</li>
</ol>
<h2>Consignes :</h2>
<ol>
<li>Implémentez un script PHP qui lit tous les fichiers d'un répertoire (logs/).
</li>
<li>Effectuez les analyses demandées et générez un fichier de rapport (report.txt) contenant les résultats.
</li>
<li>Optimisez le code pour une grande quantité de données (plusieurs millions de lignes).
</li>
</ol>