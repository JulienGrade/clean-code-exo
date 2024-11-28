<h1>Optimisation des itinéraires de livraison</h1>
<p>
Vous travaillez sur un système de livraison de colis. Les livreurs ont des contraintes de temps et de distance. Votre mission est d'écrire un algorithme qui trouve l'itinéraire optimal pour un livreur donné afin de livrer un ensemble de colis.
</p>
<h2>Contraintes :</h2>
<ol>
<li>Chaque colis a une adresse représentée par des coordonnées (x, y).</li>
<li>Le point de départ du livreur est (0, 0).</li>
<li>Le livreur doit minimiser la distance totale parcourue.</li>
<li>Une fois livrés, les colis ne peuvent pas être re-livrés.</li>
<li>Les données des colis sont fournies sous la forme suivante :<br/>
const parcels = [ <br/>
    { id: 1, coordinates: { x: 3, y: 4 } },<br/>
    { id: 2, coordinates: { x: -1, y: -2 } },<br/>
    { id: 3, coordinates: { x: 5, y: 1 } },<br/>
    // ...<br/>
];

</li>
</ol>
<h2>Consignes :</h2>
<ol>
<li>Implémentez un algorithme pour déterminer l'ordre optimal de livraison des colis en utilisant la logique du Problème du Voyageur de Commerce (TSP) dans une version simplifiée.
</li>
<li>
Retournez l'itinéraire optimal sous forme d'un tableau d'ID de colis, dans l'ordre de livraison.
</li>
<li>
Calculez la distance totale parcourue pour l'itinéraire optimal.
</li>
</ol>