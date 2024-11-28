<?php
// Script permettant de générer un fichier lourd
function generateLargeLogFile($filename, $lines = 1000000) {
    $actions = ['LOGIN', 'LOGOUT', 'VIEW_PAGE', 'DOWNLOAD', 'UPLOAD'];
    $file = fopen($filename, 'wb');

    if (!$file) {
        die("Impossible d'ouvrir le fichier $filename");
    }

    for ($i = 0; $i < $lines; $i++) {
        $timestamp = date("Y-m-d H:i:s", time() - mt_rand(0, 31536000)); // Une année de logs aléatoires
        $userId = mt_rand(10000, 99999);
        $action = $actions[array_rand($actions)];
        fwrite($file, "$timestamp $userId $action\n");
    }

    fclose($file);
    echo "Fichier $filename généré avec $lines lignes.\n";
}

// Exemple d'utilisation
generateLargeLogFile('large_log.txt', 10000000); // Génère un fichier de 10 millions de lignes
