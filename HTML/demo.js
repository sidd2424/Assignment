var i = 0;

function tCount() {
  i = i + 1;
  postMessage(i);
  setTimeout("tCount()",500);
}

tCount();

