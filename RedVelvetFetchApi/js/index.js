//Method Map
const map = (mappper) => (array) => array.map(mappper).join("");

const filter = (predicate) => (array) => array.filter(predicate);

const normalize = (string) => string.toLowerCase().trim();
//Dates of users
const memberInfo = map(
  (band) =>
    `
    <h1>${band.bandName}</h1>
    <p>${band.site}</p>
    <p>${band.formed}</p>
    <p>${band.active}</p>
    <table >
    <tr>
    <th>Name</th>
    <th>Age</th>
    </tr>
    ${band.members
      .map(
        (member) => `
      <tr>
            <th>${member.name}</th>
            <th>${member.age}</th>
      </tr>
      `
      )
      .join("")}
    </table>
    `
);

//API Fetch Incialization
const getMember = async () => {
  try {
    const res = await fetch("json/index.json");
    const data = await res.json();
    return data;
  } catch (err) {
    console.log(err);
  }
};

//App config
const app = async () => {
  const root = document.getElementById("root");
  const findUser = document.getElementById("FindMember");
  const newData = await getMember();

  root.innerHTML = ` ${memberInfo(newData)}`;
  console.log(newData);

  findUser.addEventListener("keyup", (evt) => {
    const getName = (arr) => arr.map((any) => any.name);
    const result = newData.filter((band) => {
      return normalize(getName(band.members).join(" ")).includes(
        normalize(evt.target.value)
      );
    });
    console.log(result);
    root.innerHTML = `${memberInfo(result)}`;
  });
};

app();
//porque siento que no hice nada con el codigo :,v

//
