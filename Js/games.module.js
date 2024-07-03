import { GameDetails } from "./details.module.js";
import { Ui } from "./ui.module.js";



export class Games {
    constructor() {
        this.getGames('mmorpg')
        this.ui = new Ui();
        document.querySelectorAll(".menu a").forEach((link) => {
            link.addEventListener("click", (e) => {
                document.querySelector(" .active").classList.remove("active");
                e.target.classList.add("active");
                this.getGames(e.target.dataset.category);
                loading.classList.remove("d-none");

            });
        });
    }

    //FETCH GAME API

    async getGames(category) {

        const options = {
            method: 'GET',
            headers: {
                'x-rapidapi-key': 'b29eb2e95amshecbcc5e2cb7b635p10111ajsna3234adcc9a6',
                'x-rapidapi-host': 'free-to-play-games-database.p.rapidapi.com'
            }
        };
        try {
            const api = await fetch(`https://free-to-play-games-database.p.rapidapi.com/api/games?category=${category}`, options);

            const result = await api.json();
            this.ui.displayGameData(result);
            console.log(result);
            this.startEvent()

        } catch (error) {
            console.error(error);

        }
    }

    startEvent() {
        document.querySelectorAll(".card").forEach((item) => {
            item.addEventListener("click", (e) => {
                console.log('hello world')
                const id = item.children[0].dataset.id;
                console.log(item.children[0].dataset)
                this.showDetails(id);
            });
        });
    }

    showDetails(id) {
        const details = new GameDetails(id);
        document.querySelector(".gamesPage").classList.add("d-none");
        document.querySelector(".details").classList.remove("d-none");
    }

}

