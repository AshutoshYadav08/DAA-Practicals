#include <iostream>
using namespace std;

struct Node {
    int data;
    Node* next;

    Node(int value) {
        data = value;
        next = nullptr;
    }
};

class CircularLinkedList {
private:
    Node* tail;

public:
    CircularLinkedList() {
        tail = nullptr;
    }



    void insertAtHead(int value) {
        Node* newNode = new Node(value);
        if (tail == nullptr) {
            tail = newNode;
            tail->next = tail; // Point to itself
        } else {
            newNode->next = tail->next;
            tail->next = newNode;
        }
    }

    void insertAtTail(int value) {
        Node* newNode = new Node(value);
        if (tail == nullptr) {
            tail = newNode;
            tail->next = tail;
        } else {
            newNode->next = tail->next;
            tail->next = newNode;
            tail = newNode;
        }
    }

    void deleteNode(int value) {
        if (tail == nullptr) {
            cout << "List is empty." << endl;
            return;
        }

        Node* current = tail->next;
        Node* prev = tail;

        do {
            if (current->data == value) {
                if (current == prev) { // Only one node in the list
                    tail = nullptr;
                } else {
                    prev->next = current->next;
                    if (current == tail) { // If deleting the tail
                        tail = prev;
                    }
                }
                delete current;
                return;
            }
            prev = current;
            current = current->next;
        } while (current != tail->next);

        cout << "Value " << value << " not found in the list." << endl;
    }

    void display() {
        if (tail == nullptr) {
            cout << "List is empty." << endl;
            return;
        }

        Node* current = tail->next; // Start from head
        cout << "List: ";
        do {
            cout << current->data << " -> ";
            current = current->next;
        } while (current != tail->next);
        cout << " (head)" << endl;
    }
};

int main() {
    CircularLinkedList list;

    list.insertAtTail(10);
    list.insertAtTail(20);
    list.insertAtTail(30);

    cout << "Initial list:" << endl;
    list.display();
    cout << "--------------------" << endl;

    cout << "Inserting 5 at the head:" << endl;
    list.insertAtHead(5);
    list.display();
    cout << "--------------------" << endl;
    
    cout << "Inserting 40 at the tail:" << endl;
    list.insertAtTail(40);
    list.display();
    cout << "--------------------" << endl;

    cout << "Deleting node 20:" << endl;
    list.deleteNode(20);
    list.display();
    cout << "--------------------" << endl;

    cout << "Deleting tail node 40:" << endl;
    list.deleteNode(40);
    list.display();
    cout << "--------------------" << endl;
    
    cout << "Deleting head node 5:" << endl;
    list.deleteNode(5);
    list.display();
    cout << "--------------------" << endl;

    return 0;
}