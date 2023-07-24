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
	
    reverseBetween(m, n) {
        // If the list is empty, do nothing
        if (this.head === null) return;
     
        // Create a dummy node and set its next to head
        const dummy = new Node(0);
        dummy.next = this.head;
        let prev = dummy;
     
        // Move prev to (m-1)th node
        for (let i = 0; i < m - 1; i++) {
            prev = prev.next;
        }
     
        // Set current as the mth node
        let current = prev.next;
        // Reverse the sublist from m to n
        for (let i = 0; i < n - m; i++) {
            // Save the next node of current
            const temp = current.next;
            // Update current's next to skip temp
            current.next = temp.next;
            // Move temp after prev
            temp.next = prev.next;
            // Update prev's next to temp
            prev.next = temp;
        }
     
        // Update head of the list
        this.head = dummy.next;
    }

}



let myLinkedList = new LinkedList(1);
myLinkedList.push(2);
myLinkedList.push(3);
myLinkedList.push(4);
myLinkedList.push(5);


const m = 2;
const n = 4;
myLinkedList.reverseBetween(m, n);



