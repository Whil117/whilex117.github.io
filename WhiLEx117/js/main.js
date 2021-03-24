const btnSwitch = document.getElementById("switch");

matchMedia("(max-width:600px)");

btnSwitch.addEventListener("click", () => {
  const userPrefersDark =
    window.matchMedia &&
    window.matchMedia("(prefers-color-scheme: dark)").matches;

  const userPrefersLight =
    window.matchMedia &&
    window.matchMedia("(prefers-color-scheme: light)").matches;

  if (userPrefersDark) {
    document.body.classList.toggle("light");
    btnSwitch.classList.toggle("active");
    console.log("User prefers a dark interface");
  } else if (userPrefersLight) {
    document.body.classList.toggle("dark");
    btnSwitch.classList.toggle("active");
    console.log("User prefers a light interface");
  }

  // if (window.matchMedia("(prefers-color-scheme:dark)").media === "not all") {
  //   // document.body.classList.toggle("light");
  //   // btnSwitch.classList.toggle("active");
  // } else if (
  //   window.matchMedia("(prefers-color-scheme:light)").media === "not all"
  // ) {
  //   document.body.classList.toggle("dark");
  //   btnSwitch.classList.toggle("remove");
  // } else {
  //   document.body.classList.toggle("dark");
  //   btnSwitch.classList.toggle("active");
  // }
});
