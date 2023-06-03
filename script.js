var list =document.getElementsByClassName("validate[required]")
// for(let i=0;i<list.length;i++)
for(let j=0;j<list.length;j++){
    var options =list[j].options;
for(let i=0;i<options.length;i++){if(options[i].textContent==="4")options[i].selected=true;}}