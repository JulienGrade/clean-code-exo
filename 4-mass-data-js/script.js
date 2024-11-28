
// Les IDs d'utilisateur sont générés automatiquement comme un tableau :
const userIds = Array.from({ length: 10000 }, (_, i) => i + 1);

// Les catégories de résultats dépendent d'une fonction de simulation simple :
function categorizeResult(result) {
    return result % 2 === 0 ? "even" : "odd";
}

// La fonction asynchrone simulant une requête est donnée :
async function fetchUserData(id) {
    return new Promise(resolve => {
        setTimeout(() => resolve(id * 10), Math.random() * 100);
    });
}


