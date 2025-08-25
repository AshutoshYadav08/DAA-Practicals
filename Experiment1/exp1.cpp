#include <iostream>
using namespace std;

template <class T>

class Stack {
    T* arr;
    int top;
    int cap;
public:
    Stack(int capacity) {
        cap = capacity;
        arr = new T[capacity];
        top = -1;
    }
    bool isEmpty() {
        return top == -1;
    }
    bool isFull() {
        return top == cap - 1;
    }
    void push(T v) {
        if (isFull()) {
            cout << "Stack overflow"<<endl;
            return;
        }
        arr[++top] = v;
    }
    void pop() {
        if (isEmpty()) {
            cout << "Stack underflow"<<endl;
            return;
        }
        top--;
    }
    T topEl() {
        if (isEmpty()) {
            cout << "stack underflow";
            return T();
        }
        return arr[top];
    }
    void show() {
        if (isEmpty()) { cout << "Stack Empty"; return; }
        cout << "Stack Elements: ";
        for (int i = 0; i <= top; i++) cout << arr[i] << " ";
        cout << endl;
    }
};

int main() {
    Stack<int> st(5);

    st.push(40);
    st.push(100);
    st.push(300);
    st.push(20);
    st.push(600);
    st.show();

    cout << "Top Element: " << st.topEl() << endl;
    cout<<"Stack after pop:"<<endl;
    st.pop();
    st.show();



    return 0;
}