const fetch = require("node-fetch");
fetch("http://127.0.0.1:5501/Exceed03-Frontend/sample.json")
  .then((response) => {
    return response.json();
  })
  .then((json) => {
    // let data = json['Data'];
    // for(var i = 0; i < data.length; i++) {
    //     var obj = data[i];
    //     console.log(obj);
    //     console.log(i);
    // }
    console.log(json);
  })
  .catch((error) => {
    console.error(error);
  });
