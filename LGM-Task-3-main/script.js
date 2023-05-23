let form = document.querySelector("#userForm");
let userData = [];

const getData = function () {
  const name = document.getElementById("fullName").value;
  const email = document.getElementById("email").value;
  const website = document.getElementById("website").value;
  const image = document.getElementById("imageLink").value;

  let gender;
  let skills = [];

  const genderClicked = document.querySelectorAll('input[name="gender"]');

  for (const gen of genderClicked) {
    if (gen.checked) {
      gender = gen.value;
      break;
    }
  }

  const skillSelected = document.querySelectorAll('input[name="skills"]');
  for (const ski of skillSelected) {
    if (ski.checked) {
      skills.push(ski.value);
    }
  }

  return { name, email, website, image, gender, skills };
};

const resetForm = function () {
  const fullName = document.getElementById("fullName");
  fullName.value = "";

  const email = document.getElementById("email");
  email.value = "";

  const website = document.getElementById("website");
  website.value = "";

  const image = document.getElementById("imageLink");
  image.value = "";

  const genderClicked = document.querySelectorAll('input[name="gender"]');
  for (const gen of genderClicked) {
    gen.checked = false;
  }

  const skillSelected = document.querySelectorAll('input[name="skills"]');
  for (const ski of skillSelected) {
    ski.checked = false;
  }
};

let butt = document.getElementById("button");

butt.addEventListener("click", function (event) {
  event.preventDefault();
  const data = getData();
  userData.push(data);
  displayData(data);
  resetForm();
});

let card = document.getElementById("card");
let cardHeading = document.getElementById("card-heading");
let heading = document.createElement("h1");
heading.innerHTML = "Enrolled Students";

cardHeading.appendChild(heading);

function displayData(data) {
  card.innerHTML += `<div class="row card-row"">
  <div class="card bagCo">
  <div class="row">
    <div class="col-img">
      <img src="Images/nature.jpg" class="img-fluid rounded-circle m-3" alt="user Image">
    </div>
    <div class="col-lg-12">
      <div class="card-body">
        <p class="card-title">Name : ${data.name}</p>
        <p class="card-text">E-mail : ${data.email}</p>
        <p class="card-text">Website : ${data.website}</p>
        <p class="card-text">Gender : ${data.gender}</p>
        <p class="card-text">Skills : ${data.skills}</p>
      </div>
    </div>
  </div>
</div>
</div>
  `;
}

// function displayData(data) {
//   const result1 = document.getElementById("enrolled-students");
//   let secHeading = null;
//   if (userData.length == 1) {
//     secHeading = document.createElement("div");
//     const descp = document.createElement("p");
//     description.innerHTML = "Description";
//     description.className = "description";

//     const image = document.createElement("p");
//     image.innerHTML = "Image";
//     image.className = "Image";

//     secHeading.className = "sectionHeading";
//     secHeading.append(description, image);
//   }

//   const textInfoContainer = document.createElement("div");
//   textInfoContainer.className = "textInfoContainer";

//   const imageContainer = document.createElement("div");
//   imageContainer.className = "imageContainer";

//   const imageHyperlink = document.createElement("a");
//   imageHyperlink.href = data.image;
//   imageHyperlink.target = "_blank";

//   let name = document.createElement("p");
//   name.className = "infoText userName";
//   name.innerHTML = data.name;

//   let gender = document.createElement("p");
//   gender.className = "infoText gender";
//   gender.innerHTML = data.gender;

//   let email = document.createElement("p");
//   email.className = "infoText email";
//   email.innerHTML = data.email;

//   let website = document.createElement("a");
//   website.className = "infoText website";
//   website.innerHTML = data.website;
//   website.href = data.website;
//   website.target = "_blank";

//   let skills = document.createElement("p");
//   skills.className = "infoText skills";
//   skills.innerHTML = data.skills.join(", ");

//   let userImage = document.createElement("img");
//   userImage.className = "userImage";
//   userImage.src = data.image;

//   textInfoContainer.append(name, gender, email, website, skills);
//   imageHyperlink.appendChild(userImage);
//   imageContainer.appendChild(imageHyperlink);

//   const container = document.createElement("div");
//   container.append(textInfoContainer, imageContainer);
// }
