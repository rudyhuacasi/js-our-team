`use strict`

// definisco una variabile per un array di oggetti per rappresentare i membri del team
const team = [
    {
        nome: `Wayne Barnett`,
        ruolo: `Founder & CEO`,
        foto: `wayne-barnett-founder-ceo.jpg`
    },
    {
        nome: `Angela Caroll`,
        ruolo: `Chief Editor`,
        foto: `angela-caroll-chief-editor.jpg`
    },
    {
        nome: `Walter Gordon`,
        ruolo: `Office Manager`,
        foto: `walter-gordon-office-manager.jpg`
    },
    {
        nome: `Angela Lopez`,
        ruolo: `Social Media Manager`,
        foto: `angela-lopez-social-media-manager.jpg`
    },
    {
        nome: `Scott Estrada`,
        ruolo: `Developer`,
        foto: `scott-estrada-developer.jpg`
    },
    {
        nome: `Barbara Ramos`,
        ruolo: `GraphicDesigner`,
        foto: `barbara-ramos-graphic-designer.jpg`
    }
]

//  definisco tre variabbili per selezzionare il main e aggiungere div
const main = document.querySelector(`main`)
const grandParentsDiv = document.createElement(`div`);
const parentsDiv = document.createElement(`div`);

// aggiungo il div al html
main.append(grandParentsDiv);
grandParentsDiv.append(parentsDiv);

// aggiungo claslist a div 
grandParentsDiv.classList.add(`container`, `grid`, `text-center`);
parentsDiv.classList.add(`row`);

// aggiungo un ciclo per ripetere le schede dove c'è i membri del team
for (let i = 0; i < 6; i++) {

    const figliDiv = document.createElement(`div`);
    parentsDiv.append(figliDiv);
    figliDiv.classList.add(`col-4`, `p-4`);

    const datiTeam = team[i];
    

    //stampo immagini
    const immagini = document.createElement(`img`)
    figliDiv.append(immagini)

    const img =  `img/${datiTeam.foto}`
    immagini.src= img

    console.log(datiTeam.foto);
    
    //stampo il nome
    const h3 = document.createElement(`h3`);
    figliDiv.append(h3)
    h3.innerHTML = datiTeam.nome
    
    console.log(datiTeam.nome);

    //stampo il ruolo
    const em =document.createElement(`em`)
    figliDiv.append(em)
    em.innerHTML = datiTeam.ruolo

    console.log(datiTeam.ruolo);



    
}
