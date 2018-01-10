let Client = require('mariasql');
let filename = 'villes_france.csv';


csv_to_array(filename);


function csv_to_array(filename) {
    let c = new Client({
        host: '127.0.0.1',
        user: 'root',
        port: 3306,
        password: 'toor',
        db: 'csv',
    });
    let lineReader = require('readline').createInterface({
        input: require('fs').createReadStream(filename)
    });
    let i = 0;
    let rows = [];
    lineReader.on('line', function (line) {
        rows.push(line);
        i += 1;
    });
    lineReader.on('close', function (eh) {
        array_clean(rows);
        let cleaned = new_array(rows);
        console.log(cleaned);fill_db(c,cleaned);
    });
}

function array_clean(array) {
    for (let i = 0; i < array.length; i++) {
        array[i] = array[i].replace(/\"/g, "");
    }
}

function new_array(old_array) {
    new_array = [];
    for (let i = 0; i < old_array.length; i++) {
        new_array[i] = old_array[i].split(',')
    }
    return new_array;
}

function fill_db(client, array) {
    for (let i = 0; i < array.length; i++) {
        var prep = client.prepare('INSERT INTO villes(nom_reel, slug, code_postal, code_commune, long_lat) VALUES (:nom_reel, :slug, :code_postal, :code_commune, :long_lat)');
        client.query(prep({
            nom_reel: array[i][5],
            slug: array[i][0],
            code_postal: array[i][10],
            code_commune: array[i][22],
            long_lat: `${array[i][19]}/${array[i][20]}`,
        }), function (err, rows) {
            if (err)
                throw err;
        });
        client.end();
    }
}