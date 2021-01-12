window.onload = function () {
  params = parseParameters();
  console.log(params);
}


function parseParameters(){
  let url = document.location.href;
  let params = url.split('?')[1].split('&');
  let data = {};
  for (let i = 0; i < params.length; i++) {
       let temp = params[i].split('=');
       data[temp[0]] = temp[1];

  }
  return data;
}
