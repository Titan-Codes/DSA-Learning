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

    pop() {
        // if linked list has no items return undefined
        if (!this.head){
            return undefined
        }
        let temp = this.head
        let pre = this.head
        
        // we iterate through the linked list and check for the last (temp) and second last (pre) item
        while (temp.next){
            pre = temp
            temp = temp.next
        }
        this.tail = pre
        this.tail.next = null
        this.length--

        // if linked list has one item
        if(this.length == 0){
            this.head = null
            this.tail = this.head
        }

        return temp  
    }

    unshift(value){
        const newNode = new Node(value) // we create a new node
        if(!this.head){ // check if it's empty linked list and if it is then set head and tail as newNode
            this.head = newNode
            this.tail = newNode
        } else {
            newNode.next = this.head // we put the newNode before the head value (we havent set this as head yet)
            this.head = newNode // and then we set the newNode as head
        }
        this.length++
        return this.value
    }

    shift() {
        if(!this.head){ // checking if the list is empty and if it is then return undefined
            return undefined
        }

        let temp = this.head // first assign a variable to the current head
        this.head = this.head.next // set the next value of previous head as head
        temp.next = null // basically removing the shifted value from the list by setting it's next to null
        this.length--

        if(this.length == 0){ // we do this if we have one item in linked list
            this.tail = null
        }

        // return the shifted value
        return temp
    }

    get(index){
        if(index < 0 || index > this.length){ // checking if index is not -ve or more than the length of the linked list
            return undefined // return undefined if it is -ve or more than length of LL
        }
        let temp = this.head // create a new variable temp which points to the head of LL
        for(let i=0;i<index;i++){ // iterate through the LL till the index
            temp = temp.next // temp also changes when the loop iterates
        }

        return temp // and we return temp
    }

    set(index,value){
        let temp = this.get(index) // use the get method to get the node at the given index
        if(temp){
            temp.value = value // change the value of the node to given value and done!
            return true
        }
        return false // return false if index is undefined
    }

    insert(index,value){
        if (index == 0){ // if index is 0 then simply use the unshift method to insert the value
            return this.unshift(value)
        }
        if(index == this.length){ // if index = length of LL then use the push method to insert the value at the end of LL
            return this.push(value)
        }
        if(index < 0 || index > this.length){ // if index is -ve or more than length of LL return false
            return false
        }
        const newNode = new Node(value) // create a new node
        let temp = this.get(index -1) // create a variable for the node which is going to point towards the new node
        newNode.next = temp.next // set the next equal to the next node of the temp node
        temp.next = newNode // set temp.next to new node
        this.length++
        return true
    }

    remove(index){
        if(index === 0){
            return this.shift()
        }
        if(index === this.length){
            return this.pop()
        }
        if(index < 0 || index > this.length){
            return undefined
        }

        let pre = this.get(index-1) // assign a variable to the node before the index
        let temp = this.get(index) // assign a variable to the node that we are going to remove
        pre.next = temp.next // set pre.next to the node after the node we are going to remove
        temp.next = null // and set the next of the node that we are going to remove to null, that's it!
        this.length-- // MOST IMPORTANT STEP - NEVER FORGET TO DECREASE THE LENGTH (i always forget to do this)

        return temp
    }
    reverse(){
        if(this.length < 2) return undefined
        let temp = this.head // assign a variable temp to the head of LL (helps in switching head and tail)
        this.head = this.tail // set head equivalent to tail
        this.tail = temp // now set tail equivalent to temp which was our previous head now both are switched
        let next = temp.next // create a variable 'next' which is temp.next (helps in iteration to reverse the LL)
        let prev = null // create a variable 'prev' equal to null (also helps in iteration to reverse the LL)

        for(let i=0;i<this.length;i++){
            next = temp.next
            temp.next = prev // points temp.next to the prev (first step) [turns first arrow to null]
            prev = temp // prev points towards the temp (first item)
            temp = next // points temp towards next (so that we can move forward in the loop)
        }
        return this
    }
}

var newLL = new LinkedList(1)
newLL.push(2)
newLL.push(3)
// newLL.shift()
// newLL.unshift(1)
// console.log(newLL.pop())
// console.log(newLL.get(3))
// newLL.set(0,1)
// console.log(newLL.insert(0,1))
// console.log(newLL.remove(1))
// console.log(newLL.reverse())
console.log(JSON.stringify(newLL,0,2))