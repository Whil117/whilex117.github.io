const url = "https://jsonplaceholder.typicode.com/users";

const pick = (props) => (data) => {
  let newData = {};
  for (let i = 0; i < props.length; i++) {
    newData[props[i]] = data[props[i]];
  }
  return newData;
};

const map = (fn) => (arr) => arr.map(fn);

const getUserInfo = pick(["name", "company", "address"]);
fetch(url)
  .then((Response) => Response.json())
  .then((data) => {
    const userInfo = getUserInfo(data);
    let element = document.getElementById("root");
    element.innerHTML = `
    <h1>${JSON.stringify(userInfo(data))}</h1>
    `;
    console.log(data);
  })
  .catch((err) => console.log(err));
