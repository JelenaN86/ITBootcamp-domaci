/*Исписати Марио пирамиду одређене висине:
За n = 5

    #
   ## 
  ###
 ####   
#####
*/
let n = 5
for(let i = n; i > 0; i--){
    console.log(` `.repeat(i - 1) + `#`.repeat(n - i + 1))
}