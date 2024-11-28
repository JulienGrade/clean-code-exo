<h1>Gestionnaire de système de réservation pour des événements
</h1>
<h2>Contexte :</h2>
<p>Vous développez un système de réservation pour des événements culturels (concerts, spectacles, etc.). Les utilisateurs peuvent réserver des places pour un événement, mais les réservations doivent passer par plusieurs étapes de validation.
</p>
<p>Le système doit permettre :</p>
<ol>
<li>La vérification des informations utilisateur.</li>
<li>La validation des places disponibles pour un événement.</li>
<li>La validation des contraintes liées à l’événement (exemple : âge minimum).
</li>
</ol>
<p>En cas d’échec à une étape de validation, le processus doit s’arrêter immédiatement et retourner un message d’erreur clair (illustration du early return).
</p>
<h2>Contraintes :</h2>
<ol>
<li>Chaque événement est représenté par un objet Event contenant :
<ul>
<li>id : Identifiant unique.
</li>
<li>name : Nom de l’événement.
</li>
<li>capacity : Nombre maximum de places disponibles.
</li>
<li>minimumAge : Âge minimum requis pour assister à l’événement.
</li>
</ul>

</li>
<li>Les utilisateurs sont représentés par un objet User contenant :
<ul>
<li>id : Identifiant unique.
</li>
<li>name : Nom de l’utilisateur.
</li>
<li>age : Âge de l’utilisateur.
</li>
</ul>
</li>
<li>Les réservations suivent les règles suivantes :
<ul>
<li>L'utilisateur doit avoir au moins l'âge minimum requis pour l'événement.
</li>
<li>L'événement doit avoir des places disponibles.
</li>
<li>L'utilisateur ne peut pas réserver plusieurs fois pour le même événement.
</li>
<li>Si une réservation échoue à une étape, elle doit s'arrêter immédiatement avec un message d'erreur.
</li>
</ul>
</li>
<li>Les données doivent être maintenues dans une base de données fictive en mémoire.
</li>
</ol>
<h2>Consignes :</h2>
<ol>
<li>Implémentez les classes User et Event.
</li>
<li>Implémentez une classe BookingService avec une méthode bookEvent(User user, Event event) qui :
<ul>
<li>Effectue les validations nécessaires avec early return.
</li>
<li>Ajoute la réservation dans une base de données fictive si elle réussit.
</li>
</ul>
</li>
<li>Implémentez une base de données fictive en mémoire pour stocker les réservations.
</li>
</ol>