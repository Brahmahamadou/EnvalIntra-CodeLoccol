let Facture = [
    {
        facture: "0001",
        laboratoire: "Enval",
        date: "10/03/2023",
    },
    {
        facture: "0002",
        laboratoire: "Biochimie",
        date: "10/03/2023",
    },
    {
        facture: "0003",
        laboratoire: "Biologie",
        date: "11/03/2023",
    },
    {
        facture: "0004",
        laboratoire: "Biologie",
        date: "12/03/2023",
    },
    {
        facture: "0005",
        laboratoire: "Enval",
        date: "12/03/2023",
    },
    {
        facture: "0006",
        laboratoire: "Biochimie",
        date: "12/03/2023",
    },
    {
        facture: "0007",
        laboratoire: "Enval",
        date: "13/03/2023",
    },
    {
        facture: "0008",
        laboratoire: "Géologie",
        date: "13/03/2023",
    },
    {
        facture: "0009",
        laboratoire: "Enval",
        date: "13/03/2023",
    }
];
const thody = document.getElementById("tbody");
function ajout (table){
    thody.innerHTML = ''
table.forEach(elem => {
    thody.innerHTML += `<tr>
    <td class="delete-bd-left">${elem.facture}</td>
    <td>${elem.laboratoire}</td>
    <td>${elem.date}</td>
    <td><button>Voir</button></td>
</tr>`
});
}
 ajout(Facture)

function facture() {
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
           facture();
            fct[0].nextElementSibling.display = 'none'     
        
    });

let tableau = [];
const check = document.querySelector('#check1');


check.addEventListener('keyup',  () => {
    let recher = check.value.toLowerCase() ;
    console.log(recher)
     tableau = Facture.filter(function (para) {
     if(para.facture.toLowerCase().includes(recher) || para.laboratoire.toLowerCase().includes(recher) || para.date.toLowerCase().includes(recher) ){
   let objt = {
    facture: para.facture,
    laboratoire: para.laboratoire,
    date: para.date
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