let son = 0;
function a() {
  son++;

  if (son%2==0) {
    document.getElementById('y').style.height='35px';
  }
  if (son%2!=0) {
    document.getElementById('y').style.height='150px';
  }

}