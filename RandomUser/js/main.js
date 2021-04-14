const url = "https://jsonplaceholder.typicode.com/users";
const root = document.getElementById("root");

const searchUser = document.getElementById("searchUser");
let data;
const showData = (items) =>
  items
    .map(
      (item) =>
        `<h1>${item.name}</h1> <p>${item.email}</p> <p>${item.address.street}</p> <p>${item.phone}</p>`
    )
    .join("");
window.onload = async () => {
  data = await fetch(url)
    .then((Response) => Response.json())
    .then((data) => data)
    .catch((err) => console.log(err));
  root.innerHTML = showData(data);
  console.log(data);
};
let search = "";
searchUser.addEventListener("keyup", (e) => {
  root.innerHTML = showData(
    data.filter((item) => item.name.includes(e.target.value))
  );
});
