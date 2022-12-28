const btn = document.getElementById("red-button");
const height = document.documentElement.clientHeight;
const width = document.documentElement.clientWidth;

btn.addEventListener("click", () => {
  let randY = Math.floor((Math.random() * height) + 1);
  let randX = Math.floor((Math.random() * width) + 1);
  btn.style.top = randY + "px";
  btn.style.right = randX + "px";
  document.getElementById("desc").style.display = "none"
});

var aTags = document.querySelectorAll('span[data-href]');

for(var i = 0; i < aTags.length; i++){
    var aTag = aTags[i];
    aTag.addEventListener('click', function(e){
        var ele = e.target;
        window.location.replace(ele.getAttribute('data-href'));
    });    
}