//Url date
const baseURL = "https://reqres.in/api/users";

//Methods

//mapping dates of url
const map = (mapper) => (array) => array.map(mapper);

//filter date input
const filter = (predicate) => (array) => array.filter(predicate);

//Join name
const join = (pattern) => (...arr) => arr.join(pattern);

//write both ways
const normalize = (string) => string.toLowerCase().trim();

//Convert first and last name in a new array
const makeName = join(" ");

//Map dates
const UserInfo = map(
  (user) =>
    `
  <div>
  <img src="${user.avatar}" alt="${user.fist_name}">
  <h2>
 ${makeName(user.first_name, user.last_name)} 

      </h2>
      <p>
          ${user.email}
      </p>
    </div>
    `
);

//Fetch api
const getUsers = async () => {
  try {
    const res = await fetch(baseURL);
    const data = await res.json();
    return data;
  } catch (error) {
    console.log(error);
  }
};

//Config fetch
const app = async () => {
  const root = document.getElementById("app");
  const findUserInput = document.getElementById("find-user");
  const rawData = await getUsers();
  const users = rawData.data;
  root.innerHTML = `
  ${UserInfo(users)}
  `;

  //Input Search
  findUserInput.addEventListener("keyup", (evt) => {
    const filteredUsers = users.filter((user) => {
      return normalize(makeName(user.first_name, user.last_name)).includes(
        normalize(evt.target.value)
      );
    });
    root.innerHTML = UserInfo(filteredUsers);
  });
};

app();
