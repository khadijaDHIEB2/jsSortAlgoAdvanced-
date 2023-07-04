let csvFile;
let listVille = [];
let nbPermutation = 0;
let nbComparaison = 0;
const GrenobleLat = 45.166667;
const GrenobleLong = 5.71667;

document.querySelector("#read-button").addEventListener('click', function () {
    csvFile = document.querySelector("#file-input").files[0];
    let reader = new FileReader();
    reader.addEventListener('load', function (e) {
        // récupération de la liste des villes
        listVille = getArrayCsv(e.target.result);

        // Calcul de la distance des villes par rapport à Grenoble
        listVille.forEach(ville => {
            ville.distanceFromGrenoble = distanceFromGrenoble(ville);
        });
        // Tri
        const algo = $("#algo-select").val();
        nbPermutation = 0;
        nbComparaison = 0;
        sort(algo);

        // Affichage 
        displayListVille()
    });
    reader.readAsText(csvFile)
})

/**
 * Récupére la liste des villes contenu dans le fichier csv
 * @param csv fichier csv brut
 * @returns la liste des villes mis en forme
 */
function getArrayCsv(csv) {
    let listLine = csv.split("\n")
    listVille = [];
    let isFirstLine = true;
    listLine.forEach(line => {
        if (isFirstLine || line === '') {
            isFirstLine = false;
        } else {
            let listColumn = line.split(";");
            listVille.push(
                new Ville(
                    listColumn[8],
                    listColumn[9],
                    listColumn[11],
                    listColumn[12],
                    listColumn[13],
                    0
                )
            );
        }
    });
    return listVille;
}

/**
 * Calcul de la distance entre Grenoble et une ville donnée
 * @param ville ville
 * @returns la distance qui sépare la ville de Grenoble
 */
function distanceFromGrenoble(ville) {
    console.log('implement me !');
    const R = 6371e3; // metres
    const φ1 = GrenobleLat * Math.PI/180; // φ, λ in radians
    const φ2 = ville.latitude * Math.PI/180;
    const Δφ = (ville.latitude-GrenobleLat) * Math.PI/180;
    const Δλ = (ville.longitude-GrenobleLong) * Math.PI/180;
    
    const a = Math.sin(Δφ/2) * Math.sin(Δφ/2) +
              Math.cos(φ1) * Math.cos(φ2) *
              Math.sin(Δλ/2) * Math.sin(Δλ/2);
    const c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1-a));
    
    const d = (R * c) /1000; // in km
    return d;
}

/**
 * Retourne vrai si la ville i est plus proche de Grenoble
 * par rapport à j
 * @param {*} i distance de la ville i
 * @param {*} j distance de la ville j
 * @return vrai si la ville i est plus proche
 */
function isLess(i, j) {
    console.log('implement me !');
    return listVille[i].distanceFromGrenoble < listVille[j].distanceFromGrenoble;
}

/**
 * interverti la ville i avec la ville j dans la liste des villes
 * @param {*} i 
 * @param {*} j 
 */
function swap(i, j) {
    console.log('implement me !');
    let temp = listVille[i];
    listVille[i] = listVille[j] ;
    listVille[j] = temp;
}

function sort(type) {
    switch (type) {
        case 'insert':
            insertsort();
            break;
        case 'select':
            selectionsort();
            break;
        case 'bubble':
            bubblesort();
            break;
        case 'shell':
            shellsort();
            break;
        case 'merge':
            mergesort();
            break;
        case 'heap':
            heapsort();
            break;
        case 'quick':
            quicksort();
            break;
    }
}

function insertsort() {
    console.log("insertsort - implement me !");
    for (let i = 1; i < listVille.length; i++) {
        let j = i;
        while(j>0 && isLess(j, j-1)){
            swap(j, j - 1);
            j = j-1;
        }
    }
}

function selectionsort() {
    console.log("selectionsort - implement me !");
    for (let i = 0; i < listVille.length; i++) {
        let min = i;
        for (let j = i + 1; j < listVille.length; j++) {
          if (isLess(j, min)) {
            min = j;
          }
        }
        swap(i, min);
      }
}

function bubblesort() {
    console.log("bubblesort - implement me !");
    let passage = 0;
    let permut = true;
    do {
      permut = false;
      for (i = 0; i < (listVille.length - 1 - passage); i++) {
        if (isLess(i+1, i)) {
          swap(i, i + 1);
          permut = true;
        }
      }
      passage++;
    } while (permut)
}

function shellsort() {
    console.log("shellsort - implement me !");
    let l = listVille.length;
    let n = 0;

    while(n< l/3){
        n = 3*n + 1; 
    }

    while(n !=0){
        for(let i = n; i < l; i++){
            let temp = listVille[i];
            let j = i;
            while(j> n-1 && listVille[j-n].distanceFromGrenoble > temp.distanceFromGrenoble){
                listVille[j] = listVille[j-n];
                j = j - n;
            }
            listVille[j] = temp ;
        }
        n = ((n-1)/3);
    }
}

function mergesort() {
    console.log("mergesort - implement me !");
}


function heapsort() {
    console.log("heapsort - implement me !");
}

function quicksort() {
    console.log("quicksort - implement me !");
}

/** MODEL */

class Ville {
    constructor(nom_commune, codes_postaux, latitude, longitude, dist, distanceFromGrenoble) {
        this.nom_commune = nom_commune;
        this.codes_postaux = codes_postaux;
        this.latitude = latitude;
        this.longitude = longitude;
        this.dist = dist;
        this.distanceFromGrenoble = distanceFromGrenoble;
    }
}

/** AFFICHAGE */
function displayPermutation(nbPermutation) {
    document.getElementById('permutation').innerHTML = nbPermutation + ' permutations';
}

function displayListVille() {
    document.getElementById("navp").innerHTML = "";
    displayPermutation(nbPermutation);
    let mainList = document.getElementById("navp");
    for (var i = 0; i < listVille.length; i++) {
        let item = listVille[i];
        let elem = document.createElement("li");
        elem.innerHTML = item.nom_commune + " - \t" + Math.round(item.distanceFromGrenoble * 100) / 100 + ' m';
        mainList.appendChild(elem);
    }
}
