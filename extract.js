async function extract() {

    var res = await fetch('testNotice.json');
    var data = await res.json()
    var mainContainer = document.getElementById("myData");

    for (var i = 0; i < data.length; i++) {
        var div = document.createElement("a");
        div.innerHTML = data[i];
        mainContainer.appendChild(div);
    }
    res = await fetch('testLink.json');
    data = await res.json()
    
    var childs = mainContainer.children;
    for (var i = 0; i < data.length; i++) {
            childs[i].setAttribute('href', data[i]);
            childs[i].setAttribute('target', "_blank");
    }
}
extract();