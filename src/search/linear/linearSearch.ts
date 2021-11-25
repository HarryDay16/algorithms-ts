import { NO_MATCH } from "../common";


const linearSearch = (items: any[], item: any): number => {
for(let counter:number = 0; counter <= items.length; counter++ ){
if (items[counter] == item){
    return counter
}
}
return NO_MATCH}


export default linearSearch;