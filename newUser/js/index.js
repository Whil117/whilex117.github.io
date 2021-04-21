//Url date
const baseURL = "https://reqres.in/api/users";

//Methods
const map = (mapper) => (array) => array.map(mapper);
const filter = (predicate) => (array) => array.filter(predicate);

const join = (pattern) => (...arr) => arr.join(pattern);
const normalize = (string) => string.toLowerCase().trim();

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

//Fetch
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
