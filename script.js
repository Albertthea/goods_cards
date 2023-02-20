let jewerlyCardTemplate = document.querySelector('#jewerly-card');  
let itemBox = document.querySelector('.item-box');
let errorTempl = document.querySelector('#errors-template');

async function getJewerlyInf() {
  try {
    let response = await fetch ('http://fakestoreapi.com/products/category/jewelery');
    let data = await response.json();

    for (let idx of data) {
      let cloneTemplate = jewerlyCardTemplate.content.cloneNode(true);
      let cardTitle = cloneTemplate.querySelector('.card-information_title');
      let cardImage = cloneTemplate.querySelector('.card-information_picture');
      let cardDescription = cloneTemplate.querySelector('.card-information_description');
      let cardPrice = cloneTemplate.querySelector('.card-information_price');
      let cardRating = cloneTemplate.querySelector('.card-information_rating');

      cardTitle.innerText = idx.title;
      cardImage.src = idx.image;
      cardDescription.innerText = idx.description;
      cardPrice.innerText = idx.price + ' $';
      cardRating.innerText = idx.rating.rate + '☆' + ' ';
      cardRating.innerText += idx.rating.count;

      itemBox.appendChild(cloneTemplate);
    }   
  } catch (err) {
    let newErr = errorTempl.content.cloneNode(true);
    itemBox.appendChild(newErr);
  }
}
getJewerlyInf();


// fetch('http://fakestoreapi.com/products/category/jewelery')
//   .then(response => response.json())
//   .then((data) => {
//     for (let idx of data) {
//       let cloneTemplate = jewerlyCardTemplate.content.cloneNode(true);
//       let cardTitle = cloneTemplate.querySelector('.card-information_title');
//       let cardImage = cloneTemplate.querySelector('.card-information_picture');
//       let cardDescription = cloneTemplate.querySelector('.card-information_description');
//       let cardPrice = cloneTemplate.querySelector('.card-information_price');
//       let cardRating = cloneTemplate.querySelector('.card-information_rating');

//       cardTitle.innerText = idx.title;
//       cardImage.src = idx.image;
//       cardDescription.innerText = idx.description;
//       cardPrice.innerText = idx.price + ' $';
//       cardRating.innerText = idx.rating.rate + '☆' + ' ';
//       cardRating.innerText += idx.rating.count;

//       itemBox.appendChild(cloneTemplate);
      
//     }
//     console.log(data);
//   })
  // .catch(() => {
  //   let newErr = errorTempl.content.cloneNode(true);
  //   itemBox.appendChild(newErr);
  // }) 
  