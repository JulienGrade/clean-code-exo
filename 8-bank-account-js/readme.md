<h1>Simulation d'un système de gestion de transactions bancaires</h1>
<h2>Contexte :</h2>
<p>Vous devez développer un programme en JavaScript qui analyse un ensemble de transactions bancaires simulées pour effectuer les tâches suivantes :</p>
<ol>
<li>Calculer le solde final de chaque compte bancaire.
</li>
<li>Trouver les 5 transactions les plus élevées en montant.
</li>
<li>Identifier les comptes ayant des transactions frauduleuses (montant supérieur à une limite définie).
</li>
<li>Générer un rapport contenant les informations suivantes :
<ul>
<li>Liste des comptes avec leur solde final.
</li>
<li>Les 5 plus grandes transactions.
</li>
<li>Les comptes suspects avec leurs transactions frauduleuses.
</li>
</ul>
</li>
</ol>
<h2>Contraintes :</h2>
<ol>
<li>Le programme doit être capable de traiter un ensemble de transactions volumineux (plusieurs millions d'entrées).
</li>
<li>Les données doivent être traitées en flux pour minimiser l'utilisation de mémoire.
</li>
<li>Aucune bibliothèque externe ne doit être utilisée (sauf Node.js standard).
</li>
<li>Limite de transaction frauduleuse :<br/>
Une transaction est considérée comme frauduleuse si son montant dépasse 500.</li>
</ol>
<h2>Consignes :</h2>
<ol>
<li>Implémentez une fonction pour lire les données en flux à partir d'un fichier JSON.
</li>
<li>Analysez les transactions en temps réel pour :
<ul><li>Calculer les soldes des comptes.
</li>
<li>Déterminer les transactions les plus élevées.
</li>
<li>Identifier les transactions frauduleuses.
</li>
</ul>
</li>
<li>Générez un rapport sous la forme d’un fichier texte (report.txt).
</li>
</ol>