<h1>Optimisation multi-livreurs avec contraintes de capacité</h1>
<h2>Contexte :</h2>
<ol>
<li>Chaque livreur a une capacité maximale en termes de nombre de colis qu'il peut transporter.
</li>
<li>
Chaque colis a une valeur de priorité (1 : faible, 2 : moyenne, 3 : haute).
</li>
<li>Les livreurs doivent minimiser la distance totale parcourue tout en livrant les colis les plus prioritaires en premier.
</li>
<li>Les colis sont affectés aux livreurs de manière optimale.
</li>
</ol>
<h3>Contraintes supplémentaires :
</h3>
<ul>
<li>Les livreurs partent tous du même point (0, 0).
</li>
<li>
Chaque livreur doit retourner à son point de départ une fois ses livraisons terminées.
</li>
<li>Les données des livreurs et des colis sont fournies sous la forme suivante :<br/>
const parcels = [ <br/>
    { id: 1, coordinates: { x: 3, y: 4 }, priority: 3 },<br/>
    { id: 2, coordinates: { x: -1, y: -2 }, priority: 1 },<br/>
    { id: 3, coordinates: { x: 5, y: 1 }, priority: 2 },<br/>
    // ...<br/>
];<br/><br/>

const drivers = [ <br/>
{ id: 1, capacity: 2 }, <br/>
{ id: 2, capacity: 3 }, <br/>
// ... <br/>
];

</li>
</ul>
<h2>Consignes :</h2>
<ol>
<li>Attribuez les colis aux livreurs en respectant leurs capacités et les priorités des colis.
</li>
<li>Minimisez la distance totale parcourue par tous les livreurs.
</li>
<li>
Fournissez un rapport final avec : <br/>
<ul><li>L'itinéraire de chaque livreur (ordre des livraisons).</li>
<li>La distance totale parcourue par chaque livreur.</li>
<li>Une validation que tous les colis ont été livrés sans dépasser les capacités.</li>
</ul>
</li>
</ol>
<h2>Indications :</h2>
<ol>
<li>Triez les colis par priorité avant de les attribuer.
</li>
<li>Utilisez une stratégie gloutonne pour assigner les colis aux livreurs tout en respectant leur capacité.
</li>
<li>Calculez les itinéraires des livreurs individuellement en minimisant leur distance totale (comme dans l’exercice précédent).
</li>
</ol>