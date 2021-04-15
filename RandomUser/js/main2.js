const url = "https://jsonplaceholder.typicode.com/comments",
  root = document.getElementById("root"),
  searchUser = document.getElementById("searchUser");

let data;
const showData = (items) =>
  items
    .map(
      (item) =>
        `<h1>${item.id}</h1><h2>${item.name}</h2><h4>${item.email}</h4><p>${item.body}</p>`
    )
    .join("");

window.onload = async () => {
  data = await fetch(url)
    .then((res) => res.json())
    .then((data) => data)
    .catch((err) => console.log(err));
  root.innerHTML = showData(data);
  console.log(data);
};

let search = "";
searchUser.addEventListener("keyup", (element) => {
  root.innerHTML = showData(
    data.filter(
      (item) => item.id == element.target.value || element.target.value == ""
    )
  );
});
console.log(showData);
