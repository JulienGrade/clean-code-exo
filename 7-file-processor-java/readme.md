<h1>Gestionnaire concurrent de fichiers et traitement distribué</h1>
<h2>Contexte :</h2>
<p>Vous devez développer un programme en Java qui traite un grand nombre de fichiers en parallèle, tout en respectant les contraintes suivantes :</p>
<ol>
<li>Chaque fichier contient un ensemble de données numériques.
</li>
<li>Chaque thread doit lire un fichier, effectuer une transformation (par exemple, calculer le carré de chaque nombre), puis écrire le résultat dans un fichier de sortie.
</li>
<li>Le programme doit gérer les threads de manière concurrente, en utilisant un pool de threads limité (maximum 4 threads à la fois).
</li>
<li>Une fois tous les fichiers traités, le programme doit combiner les résultats dans un seul fichier récapitulatif.
</li>
</ol>
<h2>Contraintes :</h2>
<ol>
<li>Vous devez limiter l'utilisation de threads à un maximum de 4.
</li>
<li>Le programme doit gérer les exceptions (erreurs de lecture, écriture ou format incorrect des données dans un fichier).
</li>
<li>Le programme doit fournir un fichier final contenant tous les résultats triés dans l'ordre croissant.
</li>
</ol>
<h2>Fonctionnement attendu :</h2>
<p>Entrée :
Vous disposez d’un répertoire contenant les fichiers suivants :</p>
<ul>
<li>file1.txt: 2, 4, 6</li>
<li>file2.txt: 1, 3, 5</li>
<li>file3.txt: 7, 9</li>
<li>file4.txt: 8, 10, 12
</li>
</ul>
<p>Sortie :
Chaque fichier produit un fichier de sortie individuel (output_file1.txt, etc.).</p>
<ul>
<li>output_file1.txt: 4, 16, 36
</li>
<li>output_file2.txt: 1, 9, 25
</li>
</ul>
<p>Le fichier final (final_output.txt) contiendra :</p>
<p>1, 4, 9, 16, 25, 36, 49, 64, 81, 100, 144
</p>
<h2>Consignes :</h2>
<ol>
<li>Implémentez un programme utilisant ExecutorService pour gérer les threads.
</li>
<li>Chaque thread doit :
<ul>
<li>Lire un fichier, appliquer une transformation (calculer le carré des nombres), et écrire le résultat dans un fichier de sortie.
</li>
</ul>
</li>
<li>Une fois tous les fichiers traités, combinez les résultats dans un fichier final trié.
</li>
<li>Fournissez un mécanisme robuste de gestion des exceptions et assurez-vous que le programme est modulaire.
</li>
</ol>