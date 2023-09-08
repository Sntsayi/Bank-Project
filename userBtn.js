// js for uploading and updating image.
let profilePic = document.getElementById("profile-pic");
let inputFile = document.getElementById("input-file");

inputFile.onchange = () => {
  profilePic.style.padding = 0;
  profilePic.src = URL.createObjectURL(inputFile.files[0]);
};
