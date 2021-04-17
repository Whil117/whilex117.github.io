const url = "https://jsonplaceholder.typicode.com/users",
  root = document.getElementById("root"),
  searchUser = document.getElementById("searchUser");
const urlImgUser = "https://jsonplaceholder.typicode.com/photos";

let dataUser;
let dataImgUser;
let data;
const showData = (items) =>
  items
    .map(
      (item) =>
        `
        <div class="card">
                  <div class="card__line"></div>
                  
                  <div class="card__item">
                  <img class="card__item-img" src="${item.Img.url}"></img>
                  
                  <div class="card__item-infoUser">
                  <h1 class="card__item-name">${item.name}</h1>
                  <p class="card__item-address-item">City: ${item.address.city}</p>
                  <p class="card__item-email">E-mail: ${item.email}</p> 
                  <p class="card__item-phone">Phone: ${item.phone}</p>
                  <p>Work-Site: ${item.company.name}</p>
                  </div>
                  </div>
                  </div>
                  `
    )
    .join("");

window.onload = async () => {
  dataImgUser = await fetchapp(urlImgUser);
  dataUser = await fetchapp(url);
  const newInfo = dataUser.map((user, indice) => {
    const obj = { ...user, Img: dataImgUser[indice] };
    return obj;
  });
  console.log(newInfo);
  root.innerHTML = showData(newInfo);
};
const fetchapp = async (url) =>
  await fetch(url)
    .then((Response) => Response.json())
    .then((data) => data)
    .catch((err) => console.log(err));

searchUser.addEventListener("keyup", (e) => {
  root.innerHTML = showData(
    data.filter((item) => item.name.includes(e.target.value))
  );
});
