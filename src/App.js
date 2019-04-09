import React, { Component } from 'react';
import './App.css';
import Promo from './components/Promo';

/*
Démarrer un projet React
Créer un composant Promo
Dans ce composant, initialiser un state qui contient les infos des membres du groupe
Pour chaque membre, appeler le composant Wilder avec les props correspondants
Créer un composant Wilder
Dans ce composant, afficher les infos du wilder concerné
Intégrer la page pour transformer cet exercice en mini-trombinoscope (Intégration ! =D )
*/

const data = [
  {
    title: "JS 02/19",
    students: [
      {
        firstName: "Richard",
        lastName: "Gaillet"
      },
      {
        firstName: "Lou",
        lastName: "Alves"
      }
    ]
  },
  {
    title: "PHP 02/19",
    students: [
      {
        firstName: "Dorine",
        lastName: "Lombardot"
      },
      {
        firstName: "Christine",
        lastName: "Brassart"
      }
    ]
  }
];

class App extends Component {
  render() {
    return (
      <div className="App">
      {
        data.map((promo,i)=>{
          return <Promo key={i} title={promo.title} students={promo.students}/>
        })
      }
      </div>
    );
  }
}
export default App;
