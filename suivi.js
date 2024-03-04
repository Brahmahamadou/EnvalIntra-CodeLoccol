let Suivi = [
    {
        lot:"TE202303001",
        etat:"Reçu",
        date:"12/03/2023",
        rapport:"Disponnible"
    },
    {
        lot:"E202302023",
        etat:"Reçu",
        date:"12/03/2023",
        rapport:"Disponnible"
    },
    {
        lot:"TE20230190",
        etat:"Reçu",
        date:"12/03/2023",
        rapport:"Disponnible"
    },
    {
        lot:"Carbonate",
        etat:"Reçu",
        date:"12/03/2023",
        rapport:"Disponnible"
    },
    {
        lot:"Chlourire",
        etat:"Reçu",
        date:"12/03/2023",
        rapport:"Disponnible"
    },
    {
        lot:"CO2 libre",
        etat:"Reçu",
        date:"12/03/2023",
        rapport:"Disponnible"
    },
    {
        lot:"Conductivité electrique",
        etat:"Reçu",
        date:"12/03/2023",
        rapport:"Disponnible"
    },
    {
        lot:"pH/Temperature",
        etat:"Reçu",
        date:"12/03/2023",
        rapport:"Disponnible"
    },
    {
        lot:"Couleur Brute",
        etat:"Reçu",
        date:"12/03/2023",
        rapport:"Disponnible"
    },
    {
        lot:"Cyanure libre",
        etat:"Reçu",
        date:"12/03/2023",
        rapport:"Disponnible"
    }
];

const thody = document.getElementById("tbody");

function ajout (params) {
    thody.innerHTML = ''
    params.forEach(elem => {
        thody.innerHTML += `<tr class="active-ligne">
        <td id="delete-border-left">${elem.lot}</td>
        <td>${elem.etat}</td>
        <td>${elem.date}</td>
        <td>${elem.rapport}</td>
        <td>
            <a href="suividetail.html">
                <button class="btn-table">Voir</button>
            </a>
        </td>
    </tr>`
    });
}


ajout(Suivi)

function commande() {
    let AZ = document.querySelectorAll('th i');
    for (let i = 0; i < AZ.length; i++) {
        if (AZ[i].classList.contains('fa-arrow-down-a-z')) {
            AZ[i].classList.remove('fa-arrow-down-a-z');
            AZ[i].classList.add('fa-arrow-down-z-a');
        } else {
            AZ[i].classList.remove('fa-arrow-down-z-a');
            AZ[i].classList.add('fa-arrow-down-a-z');
        }
    }
}

let fct = document.querySelectorAll('thead th');


    fct[0].addEventListener('click', function() {
           commande();
            fct[0].nextElementSibling.display = 'none'     
        
    });

let tableau = [];
const check = document.querySelector('#check1');


check.addEventListener('keyup',  () => {
    let recher = check.value.toLowerCase() ;
    console.log(recher)
     tableau = Suivi.filter(function (para) {
     if(para.lot.toLowerCase().includes(recher) || para.etat.toLowerCase().includes(recher) || para.date.toLowerCase().includes(recher) || para.rapport.toLowerCase().includes(recher) ){
   let objt = {
       lot: para.lot,
        etat: para.etat,
        date: para.date,
        rapport: para.rapport
   }
   return objt
     }

       
    })
    ajout(tableau)
})

let image = document.querySelector('.icon-avatar')
const profilImage = JSON.parse(localStorage.getItem('profilImage')) ;

if (profilImage) {
    image.style.borderRadius = "250px"
    image.src =  profilImage;
}