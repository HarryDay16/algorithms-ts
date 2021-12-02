import { NO_MATCH } from "../common"

const binarySearch = (items: any[], item: any) => {
    let result = null;
    let lowestPoint = 0
    let highestPoint = items.length - 1
    let middlePoint; 
    while(result == null){
        middlePoint = Math.floor((highestPoint + lowestPoint) / 2)
        
        if (item == items[middlePoint]){
            result = middlePoint
        }
        else if(lowestPoint == highestPoint){
            result = NO_MATCH
        }
        else if(item > items[middlePoint]){
            if (middlePoint == 0){
                result = NO_MATCH
            }
            lowestPoint = middlePoint + 1
           
        }
        else if(item < items[middlePoint]){
            if (middlePoint == items.length - 1){
                result = NO_MATCH
            }
             highestPoint = middlePoint - 1
        }

    }
    return result;
}
 


export default binarySearch;