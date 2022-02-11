function openNav(){
  document.getElementById("sidebarNav").style.width = "250px";
  document.getElementById("sidebarNav").style.height = "100%";
}
function closeNav(){
  document.getElementById("sidebarNav").style.width = "0";
  document.getElementById("sidebarNav").style.height = "0";
}

function myFunction() {
  var input, filter, ul, li, a, i, h, p;
  input = document.getElementById("mySearch");
  filter = input.value.toUpperCase();
  ul = document.getElementById("myMenu");
  li = ul.getElementsByTagName("li");
  for (i = 0; i < li.length; i++) {
    a = li[i].getElementsByTagName("a")[0];
    if (a.innerHTML.toUpperCase().indexOf(filter) > -1) {
      li[i].style.display = "";
    } else {
      li[i].style.display = "none";
    }
  }
}