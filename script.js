function Valid() {
  let name = document.forms["RegForm"]["Username"];
  let password = document.forms["RegForm"]["Password"];

  if (name.value == "") {
    let nouvelContenu = "Veuillez entré votre nom";
    name.placeholder = nouvelContenu;
    name.style.background = "rgb(219, 64, 64)";
    return false;
  }

  if (password.value == "") {
    let nouvelContenu = "Saisissez votre mot de passe";
    password.placeholder = nouvelContenu;
    password.style.background = "rgb(219, 64, 64)";
    return false;
  }
  return true;
}
