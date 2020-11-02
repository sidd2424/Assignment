function myFunction() {
    var x = document.getElementById("topNav");
    if (x.className === "inside-Nav") {
      x.className += " responsive";
    } else {
      x.className = "inside-Nav";
    }
  }