// ALTERNATIVE METHOD OF POP USING ONLY ONE VARIABLE

class Node {
    constructor(value) {
        this.value = value
        this.next = null
    }
}

class LinkedList {
    constructor(value) {
        const newNode = new Node(value)
        this.head = newNode
        this.tail = this.head
        this.length = 1
    }

    push(value) {
        const newNode = new Node(value)
        if (!this.head) {
            this.head = newNode
            this.tail = newNode
        } else {
            this.tail.next = newNode
            this.tail = newNode
        }
        this.length++
        console.log(this)
    }

    pop() { // This method will remove the last node from the linked list

        // Edge case 1: Linked list is empty

        if (!this.head) {

            // Do nothing

        }

        // Edge case 2: Linked list has only 1 node

        else if (this.length == 1) {

            this.head = null;

            this.tail = this.head;

        } else {

            // First, we have to make a new pointer that starts from the head and traverses through the linked list

            let tracker = this.head;

            while (tracker.next.next != null) { // This pointer checks if the next node points to null

                tracker = tracker.next;

            }

            tracker.next = null; // If so, the pointer has identified the second last node

            // The second last node points to null

            this.tail = tracker; // The tail pointer points to the pointer pointing to the second last node

        }
    }
}

var myLinkedList = new LinkedList(4)
myLinkedList.push(7)
myLinkedList.pop()
