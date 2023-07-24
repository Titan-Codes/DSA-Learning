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
	
	partitionList(x) {
		// If the list is empty, do nothing
		if (this.head === null) return;
	 
		// Create dummy nodes for two sublists
		const dummy1 = new Node(0);
		const dummy2 = new Node(0);
		// Initialize prev pointers for sublists
		let prev1 = dummy1;
		let prev2 = dummy2;
		// Initialize current pointer at head
		let current = this.head;
	 
		// Iterate through the list
		while (current !== null) {
			// If current value is less than x
			if (current.value < x) {
				// Add current node to the first sublist
				prev1.next = current;
				prev1 = current;
			} else {
				// Add current node to the second sublist
				prev2.next = current;
				prev2 = current;
			}
			// Move current pointer to the next node
			current = current.next;
		}
	 
		// Terminate the second sublist
		prev2.next = null;
		// Merge the sublists
		prev1.next = dummy2.next;
	 
		// Update the head of the list
		this.head = dummy1.next;
	}

}



let myLinkedList = new LinkedList(3);
myLinkedList.push(5);
myLinkedList.push(8);
myLinkedList.push(5);
myLinkedList.push(10);
myLinkedList.push(2);
myLinkedList.push(1);

const partitionValue = 5;
myLinkedList.partitionList(partitionValue);


