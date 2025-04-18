const paysData = {
    "AL": {
        nom: "Albanie",
        population: "2 845 000",
        superficie: "28 748",
        gouvernement: "République parlementaire",
        capitale: "Tirana",
        monnaie: "Lek"
    },
    "DE": {
        nom: "Allemagne",
        population: "83 200 000",
        superficie: "357 386",
        gouvernement: "République fédérale",
        capitale: "Berlin",
        monnaie: "Euro"
    },
    "AD": {
        nom: "Andorre",
        population: "77 000",
        superficie: "468",
        gouvernement: "Co-principauté parlementaire",
        capitale: "Andorre-la-Vieille",
        monnaie: "Euro"
    },
    "AT": {
        nom: "Autriche",
        population: "9 000 000",
        superficie: "83 879",
        gouvernement: "République fédérale",
        capitale: "Vienne",
        monnaie: "Euro"
    },
    "BE": {
        nom: "Belgique",
        population: "11 560 000",
        superficie: "30 528",
        gouvernement: "Monarchie constitutionnelle",
        capitale: "Bruxelles",
        monnaie: "Euro"
    },
    "BG": {
        nom: "Bulgarie",
        population: "6 900 000",
        superficie: "110 912",
        gouvernement: "République parlementaire",
        capitale: "Sofia",
        monnaie: "Lev"
    },
    "BA": {
        nom: "Bosnie-Herzégovine",
        population: "3 280 000",
        superficie: "51 129",
        gouvernement: "République fédérale",
        capitale: "Sarajevo",
        monnaie: "Mark convertible"
    },
    "CY": {
        nom: "Chypre",
        population: "1 200 000",
        superficie: "9 251",
        gouvernement: "République présidentielle",
        capitale: "Nicosie",
        monnaie: "Euro"
    },
    "HR": {
        nom: "Croatie",
        population: "4 050 000",
        superficie: "56 594",
        gouvernement: "République parlementaire",
        capitale: "Zagreb",
        monnaie: "Euro"
    },
    "DK": {
        nom: "Danemark",
        population: "5 850 000",
        superficie: "42 933",
        gouvernement: "Monarchie constitutionnelle",
        capitale: "Copenhague",
        monnaie: "Couronne danoise"
    },
    "ES": {
        nom: "Espagne",
        population: "47 400 000",
        superficie: "505 990",
        gouvernement: "Monarchie constitutionnelle",
        capitale: "Madrid",
        monnaie: "Euro"
    },
    "EE": {
        nom: "Estonie",
        population: "1 330 000",
        superficie: "45 228",
        gouvernement: "République parlementaire",
        capitale: "Tallinn",
        monnaie: "Euro"
    },
    "FI": {
        nom: "Finlande",
        population: "5 540 000",
        superficie: "338 145",
        gouvernement: "République parlementaire",
        capitale: "Helsinki",
        monnaie: "Euro"
    },
    "FR": {
        nom: "France",
        population: "67 390 000",
        superficie: "643 801",
        gouvernement: "République semi-présidentielle",
        capitale: "Paris",
        monnaie: "Euro"
    },
    "GR": {
        nom: "Grèce",
        population: "10 720 000",
        superficie: "131 957",
        gouvernement: "République parlementaire",
        capitale: "Athènes",
        monnaie: "Euro"
    },
    "HU": {
        nom: "Hongrie",
        population: "9 750 000",
        superficie: "93 028",
        gouvernement: "République parlementaire",
        capitale: "Budapest",
        monnaie: "Forint"
    },
    "IE": {
        nom: "Irlande",
        population: "5 000 000",
        superficie: "70 273",
        gouvernement: "République parlementaire",
        capitale: "Dublin",
        monnaie: "Euro"
    },
    "IS": {
        nom: "Islande",
        population: "370 000",
        superficie: "103 000",
        gouvernement: "République parlementaire",
        capitale: "Reykjavik",
        monnaie: "Couronne islandaise"
    },
    "IT": {
        nom: "Italie",
        population: "59 550 000",
        superficie: "301 340",
        gouvernement: "République parlementaire",
        capitale: "Rome",
        monnaie: "Euro"
    },
    "XK": {
        nom: "Kosovo",
        population: "1 800 000",
        superficie: "10 887",
        gouvernement: "République parlementaire",
        capitale: "Pristina",
        monnaie: "Euro"
    },
    "LV": {
        nom: "Lettonie",
        population: "1 900 000",
        superficie: "64 589",
        gouvernement: "République parlementaire",
        capitale: "Riga",
        monnaie: "Euro"
    },
    "LI": {
        nom: "Liechtenstein",
        population: "38 000",
        superficie: "160",
        gouvernement: "Monarchie constitutionnelle",
        capitale: "Vaduz",
        monnaie: "Franc suisse"
    },
    "LT": {
        nom: "Lituanie",
        population: "2 800 000",
        superficie: "65 300",
        gouvernement: "République semi-présidentielle",
        capitale: "Vilnius",
        monnaie: "Euro"
    },
    "LU": {
        nom: "Luxembourg",
        population: "630 000",
        superficie: "2 586",
        gouvernement: "Monarchie constitutionnelle",
        capitale: "Luxembourg",
        monnaie: "Euro"
    },
    "MK": {
        nom: "Macédoine du Nord",
        population: "2 080 000",
        superficie: "25 713",
        gouvernement: "République parlementaire",
        capitale: "Skopje",
        monnaie: "Denar"
    },
    "MT": {
        nom: "Malte",
        population: "520 000",
        superficie: "316",
        gouvernement: "République parlementaire",
        capitale: "La Valette",
        monnaie: "Euro"
    },
    "MD": {
        nom: "Moldavie",
        population: "3 550 000",
        superficie: "33 846",
        gouvernement: "République parlementaire",
        capitale: "Chisinau",
        monnaie: "Leu moldave"
    },
    "MC": {
        nom: "Monaco",
        population: "39 000",
        superficie: "2",
        gouvernement: "Monarchie constitutionnelle",
        capitale: "Monaco",
        monnaie: "Euro"
    },
    "ME": {
        nom: "Monténégro",
        population: "620 000",
        superficie: "13 812",
        gouvernement: "République parlementaire",
        capitale: "Podgorica",
        monnaie: "Euro"
    },
    "NO": {
        nom: "Norvège",
        population: "5 450 000",
        superficie: "385 207",
        gouvernement: "Monarchie constitutionnelle",
        capitale: "Oslo",
        monnaie: "Couronne norvégienne"
    },
    "NL": {
        nom: "Holland",
        population: "17 740 000",
        superficie: "41 543",
        gouvernement: "Monarchie constitutionnelle",
        capitale: "Amsterdam",
        monnaie: "Euro"
    },
    "PL": {
        nom: "Pologne",
        population: "37 950 000",
        superficie: "312 696",
        gouvernement: "République parlementaire",
        capitale: "Varsovie",
        monnaie: "Złoty"
    },
    "PT": {
        nom: "Portugal",
        population: "10 300 000",
        superficie: "92 212",
        gouvernement: "République semi-présidentielle",
        capitale: "Lisbonne",
        monnaie: "Euro"
    },
    "CZ": {
        nom: "République Tchèque",
        population: "10 700 000",
        superficie: "78 867",
        gouvernement: "République parlementaire",
        capitale: "Prague",
        monnaie: "Couronne tchèque"
    },
    "RO": {
        nom: "Roumanie",
        population: "19 050 000",
        superficie: "238 397",
        gouvernement: "République semi-présidentielle",
        capitale: "Bucarest",
        monnaie: "Leu roumain"
    },
    "GB": {
        nom: "United Kingdom",
        population: "67 220 000",
        superficie: "242 495",
        gouvernement: "Monarchie constitutionnelle",
        capitale: "Londres",
        monnaie: "Livre sterling"
    },
    "TR": {
        nom: "Turquie",
        population: "84 680 000",
        superficie: "783 562",
        gouvernement: "République présidentielle",
        capitale: "Ankara",
        monnaie: "Livre turque"
    },
    "BY": {
        nom: "Biélorussie",
        nom_en: "Belarus",
        population: "9 349 645",
        superficie: "207 600",
        gouvernement: "République présidentielle",
        capitale: "Minsk",
        monnaie: "Rouble biélorusse"
        },
    "SM": {
        nom: "Saint-Marin",
        population: "34 000",
        superficie: "61",
        gouvernement: "République parlementaire",
        capitale: "Saint-Marin",
        monnaie: "Euro"
    },
    "RS": {
        nom: "Serbie",
        population: "6 900 000",
        superficie: "88 361",
        gouvernement: "République parlementaire",
        capitale: "Belgrade",
        monnaie: "Dinar serbe"
    },
    "SK": {
        nom: "Slovaquie",
        population: "5 460 000",
        superficie: "49 035",
        gouvernement: "République parlementaire",
        capitale: "Bratislava",
        monnaie: "Euro"
    },
    "SI": {
        nom: "Slovénie",
        population: "2 100 000",
        superficie: "20 273",
        gouvernement: "République parlementaire",
        capitale: "Ljubljana",
        monnaie: "Euro"
    },
    "SE": {
        nom: "Suède",
        population: "10 420 000",
        superficie: "450 295",
        gouvernement: "Monarchie constitutionnelle",
        capitale: "Stockholm",
        monnaie: "Couronne suédoise"
    },
    "CH": {
        nom: "Suisse",
        population: "8 700 000",
        superficie: "41 285",
        gouvernement: "République fédérale",
        capitale: "Berne",
        monnaie: "Franc suisse"
    },
    "UA": {
        nom: "Ukraine",
        population: "41 130 000",
        superficie: "603 500",
        gouvernement: "République semi-présidentielle",
        capitale: "Kyiv",
        monnaie: "Hryvnia"
    },
    "GE": {
    nom: "Géorgie",
    population: "3 700 000",
    superficie: "69 700",
    gouvernement: "République parlementaire",
    capitale: "Tbilissi",
    monnaie: "Lari géorgien"
},
"AM": {
    nom: "Arménie",
    population: "2 900 000",
    superficie: "29 743",
    gouvernement: "République parlementaire",
    capitale: "Erevan",
    monnaie: "Dram arménien"
},
    "VA": {
        nom: "Vatican",
        population: "800",
        superficie: "0.44",
        gouvernement: "Monarchie absolue théocratique",
        capitale: "Cité du Vatican",
        monnaie: "Euro"
    }
};
 document.getElementById('carte-europe').addEventListener('load', function() {
     const svgDoc = this.getSVGDocument();
     const paths = svgDoc.querySelectorAll('path, polygon');

     paths.forEach(pays => {
         pays.classList.add('pays');
            pays.style.fill = '#ffffff';
            pays.style.stroke = '#ecf0f1';
            pays.style.transition = 'all 0.3s ease';
        
         pays.addEventListener('mouseover', function() {
             const idPays = this.id;
             const data = paysData[idPays] || {};       
             document.getElementById('pays-nom').textContent = data.nom || 'Inconnu';
             document.getElementById('population').textContent = data.population || '-';
             document.getElementById('superficie').textContent = data.superficie || '-';
             document.getElementById('gouvernement').textContent = data.gouvernement || '-';
             document.getElementById('capitale').textContent = data.capitale || '-';
             document.getElementById('monnaie').textContent = data.monnaie || '-';
            this.style.fill = '#ffbb00';
            this.style.strokeWidth = '1.5px';   
          });

         pays.addEventListener('mouseout', function() {
             document.getElementById('pays-nom').textContent = "Sélectionnez un pays";
             document.getElementById('population').textContent = '-';
             document.getElementById('superficie').textContent = '-';
             document.getElementById('gouvernement').textContent = '-';
             document.getElementById('capitale').textContent = '-';
             document.getElementById('monnaie').textContent = '-';
                this.style.fill = '#cddedf';
                this.style.strokeWidth = '0.5px';
          });
     });
 });


// document.getElementById('carte-europe').addEventListener('load', function() {
//     const svgDoc = this.getSVGDocument();
//     const paths = svgDoc.querySelectorAll('path, polygon');

//     paths.forEach(pays => {
//         pays.style.fill = '#7f8c8d';
//         pays.style.stroke = '#ecf0f1';
//         pays.style.transition = 'all 0.3s ease';
        
//         pays.addEventListener('mouseover', function() {
//             const idPays = this.id;
//             const data = paysData[idPays] || {};
            
//             document.getElementById('pays-nom').textContent = data.nom || 'Inconnu';
//             document.getElementById('population').textContent = data.population || '-';
//             document.getElementById('superficie').textContent = data.superficie || '-';
//             document.getElementById('gouvernement').textContent = data.gouvernement || '-';
//             document.getElementById('capitale').textContent = data.capitale || '-';
//             document.getElementById('monnaie').textContent = data.monnaie || '-';

//             this.style.fill = '#e67e22';
//             this.style.strokeWidth = '1.5px';
//         });

//         pays.addEventListener('mouseout', function() {

//             document.getElementById('pays-nom').textContent = "Sélectionnez un pays";
//             document.querySelectorAll('#info-box span').forEach(span => span.textContent = '-');
            

//             this.style.fill = '#7f8c8d';
//             this.style.strokeWidth = '0.5px';
//         });
//     });
// });