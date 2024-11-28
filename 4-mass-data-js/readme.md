<h1>Gestion concurrente d'un traitement de données volumineuses
</h1>
<p>Vous devez écrire un script pour traiter un grand nombre d'entrées (comme des IDs d'utilisateurs). Pour chaque ID, il faut :</p>
<ol>
<li>
Effectuer une simulation de requête asynchrone (API distante ou base de données).
</li>
<li>
Rassembler les résultats.
</li>
<li>
Fournir les résultats finaux triés et groupés par des catégories spécifiques.
</li>
</ol>
<p>Contraintes :</p>
<ol>
<li>
Limiter la concurrence : vous ne pouvez traiter que 5 requêtes simultanées à tout moment.
</li>
<li>
Optimiser la performance du traitement pour les grands ensembles de données (10 000+ entrées).
</li>
<li>
Votre solution doit être évolutive et respecter les principes de clean code.
</li>
</ol>
<h2>Consignes :</h2>
<ul>
<li>Implémentez un gestionnaire de traitement concurrent pour limiter le nombre de requêtes actives à 5 à tout moment.</li>
<li>Collectez et triez les résultats finaux par catégories ("even", "odd").
</li>
<li>Fournissez les résultats sous une structure optimisée et lisible :<br/>
{<br/>
    even: [ /* résultats */ ],
    odd: [ /* résultats */ ]<br/>
}

</li>
<li>Fournissez un code clair, modulaire et optimisé pour les performances.
</li>
</ul>