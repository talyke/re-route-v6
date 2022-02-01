import App from './App.js';

var xmlhttp = new XMLHttpRequest();
xmlhttp.onreadystatechange = function () {
    if (this.readyState == 4 && this.status == 200) {
        var people = JSON.parse(this.responseText);
        document.getElementById("./people/*").innerHTML = people.name;
    }
};
xmlhttp.open("GET", "https://swapi.dev/api/people/1/", true);
xmlhttp.send();

export default App;