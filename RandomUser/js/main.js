const rootDom = document.getElementById("root");

const baseUrl = "https://jsonplaceholder.typicode.com/";

const map = (mapper) => {
  return (array) => array.map(mapper);
};

const filter = (predicate) => {
  return (array) => array.filter(predicate);
};

const userShowData = map((item) => {
  return `
    <div class="card">
      <div class="card__line"></div>
      <div class="card__item">
      <div>  
         <img class="card__item-img" src="${item.Img.url}"></img></div>
 
      
          <div class="card__item-infoUser">
          <h1 class="card__item-name">${item.name}</h1>
          <p class="card__item-address-item">City: ${item.address.city}</p>
          <p class="card__item-email">E-mail: ${item.email}</p> 
          <p class="card__item-phone">Phone: ${item.phone}</p>
          <p>Work-Site: ${item.company.name}</p>
          </div>
      </div>
    </div> `;
});

const fetchIt = async (url) =>
  await fetch(url)
    .then((Response) => Response.json())
    .then((data) => data)
    .catch((err) => console.log(err));

const app = async () => {
  const inputUserFind = document.getElementById("searchUser");
  const userPhoto = await fetchIt(`${baseUrl}photos`);
  const userInfo = await fetchIt(`${baseUrl}users`);
  const user = userInfo.map((user, indice) => {
    const obj = { ...user, Img: userPhoto[indice] };
    return obj;
  });

  rootDom.innerHTML = userShowData(user).join("");

  inputUserFind.addEventListener("keyup", (e) => {
    const userFilter = filter((item) => item.name.includes(e.target.value));
    rootDom.innerHTML = userShowData(userFilter(user));
  });
};
app();
