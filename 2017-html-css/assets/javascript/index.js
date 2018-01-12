function $(id) { return document.getElementById(id) }
const color = ["red", "yellow", "pink", "green", "violet", "orange", "cyan"]
var count = 0
$("screen").addEventListener("click", function(){
  count += 1
  $("screen").style.background = color[count % color.length]
})
