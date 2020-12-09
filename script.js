function goSomewhere(x){
  location = x;
}

function showAdVideo() {
	document.getElementById("adVideo").style.visibility='block';
  setTimeout(function (){
    document.querySelector("#movie_player > div.ytp-cued-thumbnail-overlay > button").click()
  },500)
}