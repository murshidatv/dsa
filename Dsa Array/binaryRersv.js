 function recursiveBinarySearch(a,t){
 
 
 
     let l=0, r= a.length-1
    m= Math.floor( (l+r)/2 )
 
     if(a[m]===t){
        return m
     }
 
    if(t<a[m]){
 
         return recursiveBinarySearch(a,t)
     }else{
         return recursiveBinarySearch(a,t)
     }
 
 }
 
 console.log(recursiveBinarySearch([1,2,3,4,5],6));