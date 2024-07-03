
const loading = document.querySelector('.sk-chase');
const loadingDetail = document.querySelector('.sk-chaseDetail');


//DISPLAY GAMES
export class Ui {
  displayGameData(data) {
    loading.classList.add('d-none')
    let gameBox = ``;
    for (let i = 0; i < data.length; i++) {

      gameBox += ` <div class="col-md-3 h-100 text-white">
                    <div class="card bg-transparent text-white w-100">
                    <div data-id="${data[i].id}" class="card bg-transparent"></div>


                        <img src="${data[i].thumbnail}" class="card-img-top" alt="game cover image">

                        <div class="card-body">

                      <div class="card-header d-flex justify-content-between align-items-center">
                        <h6 class="card-title">${data[i].title}</h6>
                        <span class="btn btn-primary">Free</span>
                      </div>

                          <p class="card-text">${data[i].short_description.split(" ").splice(0, 8).join(" ").concat(' <span class="text-primary mx-1 text-primary" >...read more</span>')}</p>

                          <div class="card-footer d-flex justify-content-between">
                            <span class="btn btn-primary">${data[i].genre}</span>
                            <span class="btn btn-primary">${data[i].platform}</span>
                          </div>
                        </div>
                      </div>

                </div> 
                  `
    }
    document.getElementById("gamesDisplay").innerHTML = gameBox;
  }

  //DISPLAY DETAILS
  displayDetails(data) {
    console.log(data)
    loadingDetail.classList.add('d-none')
    const detailsBox = `<div class="col-md-4 mt-5">
                    <img src="${data.thumbnail}" class="w-100" alt="">
                 </div>
                 <div class="col-md-8 mt-5  fw-bold">
                    <h3>Title : <span>${data.title}</span></h3>
                    <p class="text-white">Category: <span>${data.title}</span></p>
                    <p class="text-white">Platform: <span>${data.platform}</span></p>
                    <p class="text-white">Status: <span>${data.status}</span></p>
                    <p class="text-white">${data.description}</p>
                      <a class="btn btn-outline-warning" target="_blank" href="${data.game_url}">Show Game</a>
                 </div>

                `;

    document.getElementById("details").innerHTML = detailsBox;
    // console.log(document.getElementById("details"));
  }


}

