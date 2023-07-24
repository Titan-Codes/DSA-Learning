// Time compelxity of this function is O(a+b)

function logItems(a,b){
    for(var i=0;i<a;i++){ // Time complexity of this loop is O(a)
        console.log(i);
    }

    for(var j=0;j<b;j++){ // Time compelxity of this loop is O(b)
        console.log(j);
    }

    // So the time compexity of this fn is O(a+b)
}

logItems(5,5)