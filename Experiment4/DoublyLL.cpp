#include <iostream>
using namespace std;

struct Node {
    int data;
    Node* next;
    Node* prev;

    Node(int value) {
        data = value;
        next = nullptr;
        prev = nullptr;
    }
};

class DoublyLinkedList {
private:
    Node* head;
    Node* tail;

public:
    DoublyLinkedList() {
        head = nullptr;
        tail = nullptr;
    }



    void insertAtHead(int value) {
        Node* newNode = new Node(value);
        if (head == nullptr) {
            head = tail = newNode;
        } else {
            newNode->next = head;
            head->prev = newNode;
            head = newNode;
        }
    }

    void insertAtTail(int value) {
        Node* newNode = new Node(value);
        if (tail == nullptr) {
            head = tail = newNode;
        } else {
            tail->next = newNode;
            newNode->prev = tail;
            tail = newNode;
        }
    }

    void deleteNode(int value) {
        Node* current = head;

        while (current != nullptr && current->data != value) {
            current = current->next;
        }

        if (current == nullptr) {
            cout << "Value " << value << " not found in the list." << endl;
            return;
        }

        if (current == head) {
            head = current->next;
        }
        if (current == tail) {
            tail = current->prev;
        }
        if (current->prev != nullptr) {
            current->prev->next = current->next;
        }
        if (current->next != nullptr) {
            current->next->prev = current->prev;
        }

        delete current;
    }

    void displayForward() {
        if (head == nullptr) {
            cout << "List is empty." << endl;
            return;
        }
        cout << "List (forward): ";
        Node* current = head;
        while (current != nullptr) {
            cout << current->data << " ";
            current = current->next;
        }
        cout << endl;
    }


};

int main() {
    DoublyLinkedList list;

    list.insertAtTail(10);
    list.insertAtTail(20);
    list.insertAtTail(30);

    cout << "Initial list:" << endl;
    list.displayForward();
    cout << "--------------------" << endl;

    cout << "Inserting 5 at the head:" << endl;
    list.insertAtHead(5);
    list.displayForward();
    cout << "--------------------" << endl;

    cout << "Deleting node 20:" << endl;
    list.deleteNode(20);
    list.displayForward();
    cout << "--------------------" << endl;
    
    cout << "Deleting non-existent node 99:" << endl;
    list.deleteNode(99);
    list.displayForward();
    cout << "--------------------" << endl;

    cout << "Deleting head node 5:" << endl;
    list.deleteNode(5);
    list.displayForward();
    cout << "--------------------" << endl;

    return 0;
}