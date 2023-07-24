class Node {
    constructor(value){
        this.value = value
        this.next = null
    }
}

class LinkedList {
    constructor(value){
        const newNode = new Node(value)
        this.head = newNode
        this.tail = this.head
        this.length = 1
    }

    push(value) {
        const newNode = new Node(value)
        if(!this.head){
            this.head = newNode
            this.tail = newNode
        } else {
            this.tail.next = newNode
            this.tail = newNode
        }
        this.length++
        return this
    }

    // CHECK IF THE LINKED LIST HAS ANY LOOP OR CYCLE

    // We are using the hare-tortoise algorithm in this and if the fast pointer meets the slow pointer at a point
    // or we could say slow == fast then it means the LL has loop
    hasLoop(){
        let slow = this.head
        let fast = this.head
        let hasLoop;
        while(fast !== null && fast.next !== null && slow !== null){
            slow = slow.next;
            fast = fast.next.next;
            if(slow == fast){
                hasLoop = true;
                break;
            }
        }
        if(hasLoop == true){
            return true;
        } else {
            return false;
        }
    }

    findKthFromEnd(k){
        let slow = this.head
        let fast = this.head
        
        for(let i=0;i<k;i++){
           if(fast === null){
               return null;
           }
           fast = fast.next
        }
        
        while(fast !== null){
            slow = slow.next
            fast = fast.next
        }
        return slow;
    }
}

var newLL = new LinkedList(1)
newLL.push(2)
newLL.push(3)
newLL.push(4)

console.log(newLL.findKthFromEnd(2))

// console.log(JSON.stringify(newLL,0,2))