// Time complexity of this function is O(n^2) [loop within a loop]
function logItems(n){
    for(var i=0;i<n;i++){
        for(var j=0;j<n;j++){
            console.log(i,j);
        }
    }
}

logItems(10);