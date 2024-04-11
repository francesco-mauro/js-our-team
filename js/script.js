//array teamMembers`
const teamMembers = [
    {
      nome: "Wayne Barnett",
      ruolo: "Founder & CEO",
      foto: "wayne-barnett-founder-ceo.jpg"
    },
    {
      nome: "Angela Caroll",
      ruolo: "Chief Editor",
      foto: "angela-caroll-chief-editor.jpg"
    },
    {
      nome: "Walter Gordon",
      ruolo: "Office Manager",
      foto: "walter-gordon-office-manager.jpg"
    },
    {
      nome: "Angela Lopez",
      ruolo: "Social Media Manager",
      foto: "angela-lopez-social-media-manager.jpg"
    },
    {
      nome: "Scott Estrada",
      ruolo: "Developer",
      foto: "scott-estrada-developer.jpg"
    },
    {
      nome: "Barbara Ramos",
      ruolo: "Graphic Designer",
      foto: "barbara-ramos-graphic-designer.jpg"
    }
  ];
  
  // Controllo dell'array teamMembers
  console.log(teamMembers);



  // Collego il div 'team-container' di index
const container = document.getElementById('team-container');

teamMembers.forEach(member => {
  // Creao un div che contenga le informazioni del membro, e  lo faccio per ogni membro con .forEach(member
  const memberDiv = document.createElement('div');

  // Creazione della stringa con le informazioni del membro
  const memberInfo = `Nome: ${member["nome"]}, Ruolo: ${member["ruolo"]}, Foto: <img src="${member["foto"]}" alt="">`;

  // metto la stringa creata precedentemente dentro a ciascun div che ho creato nell'html
  memberDiv.innerHTML = memberInfo;

  // Aggiunta del div del membro al container principale
  container.innerHTML = memberInfo;
});
