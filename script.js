var list = document.getElementsByClassName("validate[required]")
for (let j = 0; j < list.length; j++) {
    var options = list[j].options;
    for (let i = 0; i < options.length; i++) {
        if (options[i].textContent === "4") options[i].selected = true;

        // Uncomment the following code to set custom values for specific teachers
        // Set j % 8 == COLUMN_INDEX to set custom values for that specific teacher
        // In the following code, it will set 0 for the Column 1 and 3
        // PS: The column index starts from 0
        // if(j % 8 == 1 || j % 8 == 3 ){ 
        //     if(options[i].textContent==="0")options[i].selected=true;
        // } 
    }
}
