const fs = require('fs');

// Fonction pour générer un fichier JSON volumineux
function generateLargeTransactionFile(filename, numRecords) {
    const accounts = ['A123', 'B456', 'C789', 'D012', 'E345'];
    const types = ['CREDIT', 'DEBIT'];

    const stream = fs.createWriteStream(filename);
    stream.write('[\n'); // Début du tableau JSON

    for (let i = 0; i < numRecords; i++) {
        const account = accounts[Math.floor(Math.random() * accounts.length)];
        const amount = Math.floor(Math.random() * 1000) + 1; // Montant entre 1 et 1000
        const type = types[Math.floor(Math.random() * types.length)];

        const transaction = {
            account,
            amount,
            type,
        };

        stream.write(JSON.stringify(transaction));

        if (i < numRecords - 1) {
            stream.write(',\n'); // Séparer les objets sauf le dernier
        }
    }

    stream.write('\n]'); // Fin du tableau JSON
    stream.end();

    console.log(`Fichier généré : ${filename} avec ${numRecords} transactions.`);
}

// Générer un fichier de 1 million de transactions
generateLargeTransactionFile('transactions.json', 1000000);
