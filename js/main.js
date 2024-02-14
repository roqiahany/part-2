var colsData = document.getElementById('colsData');

var data = [];

var myHttps = new XMLHttpRequest();

myHttps.open('GET', 'https://jsonplaceholder.typicode.com/comments');
myHttps.send();

myHttps.addEventListener('readystatechange', function () {
  if (myHttps.readyState == 4) {
    data = JSON.parse(myHttps.response);
    console.log(data);
    displayData();
  }
});

function displayData() {
  var cols = '';
  for (var i = 0; i < data.length; i++) {
    cols += `
    <div class="card col-md-4">
    <div class="card-body text-center">
      <h3>id: ${data[i].id}</h3>
      <h3 class="card-title">name: ${data[i].name}</h3>
      <p class="card-text">email: ${data[i].email}</p>
      <p class="card-text">body:${data[i].body}</p>
    </div>
  </div>
   `;
  }

  colsData.innerHTML = cols;
}
