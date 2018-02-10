var appLinks = document.getElementsByClassName("app-links");

var verify = function(event) {
  event.preventDefault();
  if (confirm("You are about to leave this site, are you sure? ")) {
    window.location.href = event.target.href;
  }
}

for (var i = 0; i < appLinks.length; i++) {
  appLinks[i].addEventListener('click', verify, false);
};
