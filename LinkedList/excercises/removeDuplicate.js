class Node {
    constructor(value){
        this.value = value;
        this.next = null;
    }
}
 
class LinkedList {
    constructor(value) {
        const newNode = new Node(value);
        this.head = newNode;
        this.length = 1;
    }
 
	push(value) {
		const newNode = new Node(value);
		if (!this.head) {
			this.head = newNode;
		} else {
			let current = this.head;
			while (current.next !== null) {
				current = current.next;
			}
			current.next = newNode;
		}
		this.length++;
	}
	
    removeDuplicates() {
        // Create a Set to store unique values
        const values = new Set();
        // Initialize previous pointer as null
        let previous = null;
        // Initialize current pointer at head
        let current = this.head;
     
        // Iterate through the list
        while (current !== null) {
            // If value already exists in the set
            if (values.has(current.value)) {
                // Remove the duplicate node by updating previous' next
                previous.next = current.next;
                // Decrement list length
                this.length -= 1;
            } else {
                // Add unique value to the set
                values.add(current.value);
                // Update previous pointer to current node
                previous = current;
            }
            // Move current pointer to the next node
            current = current.next;
        }
    }

}



let myLinkedList = new LinkedList(1);
myLinkedList.push(2);
myLinkedList.push(3);
myLinkedList.push(3);
myLinkedList.push(4);
myLinkedList.push(5);
myLinkedList.push(5);

myLinkedList.removeDuplicates();

