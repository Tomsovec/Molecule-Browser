function createLink(){
    var x = document.getElementById('urlAdd').value;

    var url = 'duckduckgo.com/' + x;
 
    console.log(url);

    let main = require('../main');
    main.changeURL(url);

}