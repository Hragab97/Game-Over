import { Ui } from "./ui.module.js"


//CLOSE DETAILS

const close = document.getElementById('btnClose')
class CloseDetails {
   constructor() {
      close.addEventListener('click', function () {
         document.querySelector('.details').classList.add('d-none')
         document.querySelector(".gamesPage").classList.remove("d-none");

      })
      document.addEventListener('keydown', function(e) {
         if (e.key == 'Escape') {
            document.querySelector('.details').classList.add('d-none')
            document.querySelector(".gamesPage").classList.remove("d-none");

         }
      })

   }

}
new CloseDetails


export class GameDetails {

    constructor(idGames) {
        this.ui = new Ui()
        this.getDetails(idGames);
    }


    //FETCH GAME DETAILS API

    getDetails(idGames) {
        const options = {
            method: 'GET',
            headers: {
                'x-rapidapi-key': 'b29eb2e95amshecbcc5e2cb7b635p10111ajsna3234adcc9a6',
                'x-rapidapi-host': 'free-to-play-games-database.p.rapidapi.com'
            }
        };
        try {
            fetch(`https://free-to-play-games-database.p.rapidapi.com/api/game?id=${idGames}`, options)
                .then((result) => result.json())
                .then((result) => this.ui.displayDetails(result))
                .finally(() => {

                });
        } catch (error) {
            console.error(error);
        }
    }
}

