console.log(`Linkedlist DSA Practices`);

// definaition of Node
// class Node {
//     constructor(newData) {
//         this.data = newData;
//         this.next = null;
//     }
// }


// Doubly Linkedlist
// class Node {
//     constructor(newData) {
//         this.data = newData;
//         this.next = null;
//         this.prev = null;
//     }
// }


// linkedlist implementation

class Node {
    constructor(newData) {
        this.data = newData;
        this.next = null;
    }
}

function printList(head){
    while(head !== null){
        console.log(`head data : ${head.data}`)
        head = head.next;
    }
    console.log(`All list data printed`);
}

function main(){
    let head = new Node(5);
    head.next = new Node(3);
    head.next.next = new Node(4);
    head.next.next.next = new Node(5);
    head.next.next.next.next = new Node(6);
    printList(head);
}

main()