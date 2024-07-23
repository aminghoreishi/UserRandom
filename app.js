let btn = document.querySelector(".cli");
let nam = document.querySelector(".nam");
let fam = document.querySelector(".fam");
let age = document.querySelector(".age");
let ph = document.querySelector(".ph");
let email = document.querySelector(".email");
let country = document.querySelector(".country");

btn.addEventListener("click", () => {
  fetch("https://randomuser.me/api/")
    .then((respose) => {
      console.log(respose);

      if (respose.status === 200) {
        return respose.json();
      } else {
        new Error("Erorr");
      }
    })
    .then((respose2) => {
      console.log(respose2.results[0]); //* {gender: 'male', name: {…}, location: {…}, email: 'arthur.collins@example.com', login: {…}, …}
      return respose2.results[0];
    })
    .then((respose3) => {
      console.log(respose3.phone);
      nam.innerHTML = "";
      nam.innerHTML = respose3.name.first;
      fam.innerHTML = "";
      fam.innerHTML = respose3.name.last;
      age.innerHTML = "";
      age.innerHTML = respose3.registered.age;
      ph.innerHTML = "";
      ph.innerHTML = respose3.phone;
      email.innerHTML = "";
      email.innerHTML = respose3.email;
      country.innerHTML = "";
      country.innerHTML = respose3.location.country;
    });
});
