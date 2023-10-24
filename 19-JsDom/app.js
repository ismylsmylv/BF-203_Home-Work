let body = document.querySelector("body");
let content = document.createElement("div");
let bigBox = document.createElement("div");
let bigBoxText = document.createElement("div");
let table = document.createElement("table");
let tableRow = document.createElement("tr");
let tableColumn = document.createElement("th");
let tableDataDiv = document.createElement("div");
let tableDataDivText = document.createElement("p");
let tableDataHeader = document.createElement("h3");
let tableDataInfo = document.createElement("p");
let tableDataButton = document.createElement("button");
let tableColumn2 = document.createElement("th");
let tableDataDiv2 = document.createElement("div");
let tableDataDivText2 = document.createElement("p");
let tableDataHeader2 = document.createElement("h3");
let tableDataInfo2 = document.createElement("p");
let tableDataButton2 = document.createElement("button");
let tableColumn3 = document.createElement("th");
let tableDataDiv3 = document.createElement("div");
let tableDataDivText3 = document.createElement("p");
let tableDataHeader3 = document.createElement("h3");
let tableDataInfo3 = document.createElement("p");
let tableDataButton3 = document.createElement("button");

body.append(content)
content.append(bigBox);
content.append(table);
bigBox.append(bigBoxText);
table.append(tableRow);
tableRow.append(tableColumn);
tableColumn.append(tableDataDiv, tableDataHeader, tableDataInfo, tableDataButton);
tableRow.append(tableColumn2);
tableColumn2.append(tableDataDiv2, tableDataHeader2, tableDataInfo2, tableDataButton2);
tableRow.append(tableColumn3);
tableColumn3.append(tableDataDiv3, tableDataHeader3, tableDataInfo3, tableDataButton3);
tableDataDiv.append(tableDataDivText);
tableDataDiv2.append(tableDataDivText2);
tableDataDiv3.append(tableDataDivText3);

body.style.display = "flex";
body.style.flexDirection = "column";
body.style.alignItems = "center";
body.style.margin = "0";
body.style.padding = "0";

bigBox.style.width = "960px";
bigBox.style.height = "360px";
bigBox.style.backgroundColor = "#333333";
bigBox.style.display = "flex";
bigBox.style.justifyContent = "center";
bigBox.style.alignItems = "center";
bigBoxText.innerText = "960 x 360px";
bigBoxText.style.color = "white";
bigBoxText.style.fontSize = "30px";

content.style.margin="0 auto"
content.style.display = "flex";
content.style.flexDirection = "column";
content.style.alignItems = "center";
table.style.display = "flex";
table.style.justifyContent = "center";
table.style.width = "100%";
table.style.margin = "0 auto";
bigBox.style.margin = "0 auto";
tableRow.style.display = "flex";
tableRow.style.justifyContent = "center";
tableRow.style.padding = "20px";
//table.style.border = "1px solid black";
tableDataDivText.innerText = "290 x 180px";
tableDataDivText.style.fontSize = "20px";
tableDataDiv.style.width = "290px";
tableDataDiv.style.height = "180px";
tableDataDiv.style.display = "flex";
tableDataDiv.style.justifyContent = "center";
tableDataDiv.style.alignItems = "center";
tableDataDiv.style.backgroundColor = "#333333";
tableDataDivText.style.color = "white";

tableDataDiv2.style.width = "290px";
tableDataDiv2.style.height = "180px";
tableDataDiv2.style.display = "flex";
tableDataDiv2.style.justifyContent = "center";
tableDataDiv2.style.alignItems = "center";
tableDataDivText2.innerText = "290 x 180px";
tableDataDivText2.style.fontSize = "20px";
tableDataDivText2.style.color = "white";
tableDataDiv2.style.backgroundColor = "#333333";

tableDataDiv3.style.width = "290px";
tableDataDiv3.style.height = "180px";
tableDataDiv3.style.display = "flex";
tableDataDiv3.style.justifyContent = "center";
tableDataDiv3.style.alignItems = "center";
tableDataDivText3.innerText = "290 x 180px";
tableDataDivText3.style.fontSize = "20px";
tableDataDivText3.style.color = "white";
tableDataDiv3.style.backgroundColor = "#333333";

tableDataHeader.innerText = "Indonectenus facilis";
tableDataHeader2.innerText = "Indonectenus facilis";
tableDataHeader3.innerText = "Indonectenus facilis";
tableDataHeader.style.color = "#D0D0D0";
tableDataHeader.style.fontStyle = "italic";
tableDataHeader2.style.fontStyle = "italic";
tableDataHeader3.style.fontStyle = "italic";
tableDataHeader2.style.color = "#D0D0D0";
tableDataHeader3.style.color = "#D0D0D0";
tableDataHeader.style.textAlign = "left";
tableDataHeader2.style.textAlign = "left";
tableDataHeader3.style.textAlign = "left";

tableDataInfo.innerText = "Lorem ipsum dolor sit amet consectetur adipisicing elit. Neque, repellat?";
tableDataInfo2.innerText = "Lorem ipsum dolor sit amet consectetur adipisicing elit. Neque, repellat?";
tableDataInfo3.innerText = "Lorem ipsum dolor sit amet consectetur adipisicing elit. Neque, repellat?";

tableDataInfo.style.textAlign = "left";
tableDataInfo.style.width = "100%";
tableDataInfo2.style.textAlign = "left";
tableDataInfo3.style.textAlign = "left";
tableDataInfo.style.color = "#D0D0D0";
tableDataInfo2.style.color = "#D0D0D0";
tableDataInfo3.style.color = "#D0D0D0";
tableDataInfo.style.width = "100%";

let buttons = [tableDataButton, tableDataButton2, tableDataButton3];
for (let button of buttons) {
    button.style.border = "none";
    button.style.color = "red";
    button.innerText = "Read more";
    button.style.textAlign = "right";
    button.style.cursor = "pointer";
    button.style.backgroundColor = "white";
}
