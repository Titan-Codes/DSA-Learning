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

    // We are using the hare-tortoise algorithm to find the middle node of the linked list
    // the fast pointer moves 2 nodes and slow pointer moves 1 node and when the fast pointer becomes null
    // then the slow pointer stops at the middle node.

    findMiddleNode(){
        let slow = this.head
        let fast = this.head
        while(fast !== null && fast.next !== null){
            slow = slow.next
            fast = fast.next.next
        }
        return slow;
    }
}

var newLL = new LinkedList(1)
newLL.push(2)
newLL.push(3)

console.log(newLL.findMiddleNode())
// console.log(JSON.stringify(newLL,0,2))