// import { generateList, generateItem as generateListItem } from "./modules/list.js";
// import {generateTable, generateTableRow, generateItem as generateTableItem} from "./modules/table.js";



// let list = generateList(document.body);
// generateListItem(list, "images/1.png");
// generateListItem(list, "images/2.png");
// generateListItem(list, "images/3.png");


// let table = generateTable(document.body);
// let tr = generateTableRow (table);
// generateTableItem (tr, "images/1.png")
// generateTableItem (tr, "images/2.png")
// generateTableItem (tr, "images/3.png")



import * as List from "./modules/list.js"
import * as Table from "./modules/table.js"

let list = List.generateList(document.body);
List.generateItem(list, "images/1.png")
List.generateItem(list, "images/2.png")
List.generateItem(list, "images/3.png")

let table = Table.generateTable(document.body);
let tr = Table.generateTableRow(table)
Table.generateItem(tr, "images/1.png")
Table.generateItem(tr, "images/2.png")
Table.generateItem(tr, "images/3.png")


import * as Div from "./modules/div.js"

let div = Div.genarateDiv(document.body);
let item = Div.genarateItem(div);
Div.genarateItem(item, "images/1.png")
Div.genarateItem(item, "images/2.png")
Div.genarateItem(item, "images/3.png")

