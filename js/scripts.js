function r1() {
  name = "raider"
  action = 1
  save_action(name,action)
}

function r2() {
  name = "raider"
  action = 2
  save_action(name,action)
}

function k1() {
  name = "kaia"
  action = 1
  save_action(name,action)
}

function k2() {
  name = "kaia"
  action = 2
  save_action(name,action)
}

function display_history() {

}

function create_timestamp() {
    var date = new Date();
    var aaaa = date.getFullYear();
    var gg = date.getDate();
    var mm = (date.getMonth() + 1);

    if (gg < 10)
        gg = "0" + gg;

    if (mm < 10)
        mm = "0" + mm;

    var cur_day = aaaa + "-" + mm + "-" + gg;

    var hours = date.getHours()
    var minutes = date.getMinutes()
    var seconds = date.getSeconds();

    if (hours < 10)
        hours = "0" + hours;

    if (minutes < 10)
        minutes = "0" + minutes;

    if (seconds < 10)
        seconds = "0" + seconds;

    return cur_day + " " + hours + ":" + minutes + ":" + seconds;
}

function save_action(name, action) {
  // Setup our listener to process completed requests
  var xhr = new XMLHttpRequest();
  xhr.onload = function () {
    // Process our return data
  if (xhr.status >= 200 && xhr.status < 300) {
    // What do when the request is successful
    console.log('success!', xhr);
  } else {
    // What do when the request fails
    console.log('The request failed!');
  }
  };
  console.log(create_timestamp())
  xhr.open('POST', 'http://localhost:8000/save_action');
  xhr.setRequestHeader("Content-type", "application/json");
  xhr.setRequestHeader("Access-Control-Allow-Origin", "*");
  post_body = {
	   "dog": name,
	   "action": action,
     "timestamp": create_timestamp()
  }
  console.log(post_body)
  xhr.send(JSON.stringify(post_body));
}

function list_actions() {
  // Setup our listener to process completed requests
  var xhr = new XMLHttpRequest();
  xhr.onload = function () {
      // Process our return data
    if (xhr.status >= 200 && xhr.status < 300) {
      // What do when the request is successful
      var body = xhr.response;
      console.log('success!', xhr);
      return body
    } else {
      // What do when the request fails
      console.log('The request failed!');
    }
    // Code that should run regardless of the request status
    console.log('This always runs...');
  };
  xhr.open('GET', 'http://localhost:8000/list_actions');
  xhr.setRequestHeader("Content-type", "application/json");
  xhr.setRequestHeader("Access-Control-Allow-Origin", "*");
  xhr.send();
}
