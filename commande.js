let Commande = [
    {
        Commande: "00001",
        laboratoire: "Enval",
        date: "10/03/2023",
        status: "En cours"
    },
    {
        Commande: "00002",
        laboratoire: "Codeloccol",
        date: "10/03/2023",
        status: "En cours"
    },
    {
        Commande: "00003",
        laboratoire: "ANSI",
        date: "12/03/2023",
        status: "Terminé"
    },
    {
        Commande: "00004",
        laboratoire: "CIPMEN",
        date: "12/03/2023",
        status: "En cours"
    },
    {
        Commande: "00005",
        laboratoire: "ADU",
        date: "13/03/2023",
        status: "Terminé"
    },
    {
        Commande: "00006",
        laboratoire: "Codeloccol",
        date: "14/03/2023",
        status: "En cours"
    },
    {
        Commande: "00007",
        laboratoire: "Enval",
        date: "14/03/2023",
        status: "En cours"
    },
    {
        Commande: "00009",
        laboratoire: "ANSI",
        date: "16/03/2023",
        status: "En cours"
    },
    {
        Commande: "00010",
        laboratoire: "ADU",
        date: "18/03/2023",
        status: "Terminé"
    }
];

const thody = document.getElementById("tbody");
function ajout(params) {
    thody.innerHTML = ''
    params.forEach(elem => {
        thody.innerHTML += `<tr>
        <td class="delete-bd-left">${elem.Commande}</td>
        <td>${elem.laboratoire}</td>
        <td>${elem.date}</td>
        <td class="td-color">${elem.status}</td>
        <td><button>Voir</button></td>
    </tr>`
    });
}

 ajout(Commande)

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
     tableau = Commande.filter(function (para) {
     if(para.Commande.toLowerCase().includes(recher) || para.laboratoire.toLowerCase().includes(recher) || para.date.toLowerCase().includes(recher) || para.status.toLowerCase().includes(recher) ){
   let objt = {
       Commande: para.Commande,
        laboratoire: para.laboratoire,
        date: para.date,
        status: para.status
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