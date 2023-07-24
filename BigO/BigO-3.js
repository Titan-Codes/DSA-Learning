// This function has time compexity of O(n*n) or O(n^2)
function logItems(n){
    for(var i=0;i<n;i++){ // time complexity = O(n^2)
        for(var j=0;j<n;j++){
            console.log(i,j);
        }
    }

    for(var k=0;k<n;k++){ // time complexity = O(n)
        console.log(k);
    }

    // We drop the non-dominant time complexity which is O(n) and we consider O(n^2)[wrost case]  so that's why the time complexity is O(n^2)
}

logItems(10);