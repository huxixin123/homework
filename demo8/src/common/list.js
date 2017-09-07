var ul = document.getElementById("ul");

var data = [1,2,3];

for(var i = 0;i<data.length;i++){

    str += `<li>${i}</li>`

}
ul.innerHTML = str;