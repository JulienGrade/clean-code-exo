<h1>Gestion des commandes et des paiements dans une boutique en ligne</h1>
<h2>Contexte :</h2>
<p>Vous devez implémenter un système de gestion des commandes pour une boutique en ligne. Ce système doit gérer :</p>
<ol>
<li>La création des commandes.
</li>
<li>Le calcul du total d'une commande en fonction des produits ajoutés.
</li>
<li>La validation du paiement, en prenant en charge plusieurs méthodes de paiement.
</li>
<li>La génération d'un rapport résumant les commandes passées.
</li>
</ol>
<h2>Contraintes :</h2>
<ol>
<li>Chaque commande peut contenir plusieurs produits avec des prix et des quantités.
</li>
<li>Les paiements doivent être gérés via une architecture extensible (exemple : carte bancaire, PayPal).
</li>
<li>Le code doit être modulaire, respecter les principes de clean code, et permettre une extension facile pour ajouter de nouvelles méthodes de paiement ou de nouveaux types de produits.
</li>
</ol>
<h2>Consignes :</h2>
<ol>
<li>Implémentez des classes bien nommées et respectant le principe de responsabilité unique (SRP).
</li>
<li>Gérez les paiements avec une interface commune pour permettre l'ajout de nouvelles méthodes de paiement.
</li>
<li>Générez un rapport résumant les commandes et les méthodes de paiement utilisées.
</li>
<li>Évitez les dépendances inutiles et utilisez l'injection de dépendances si nécessaire.
</li>
</ol>