<div align="center">
  <h1>🏫 National Institute of Technology Silchar</h1>
</div>

<CodeTabs :languages="[
  { name: '2024-July-Supplementary', slot: '2024-July-Supplementary' },
]">

<template #2024-July-Supplementary>

<details style="margin-bottom: 5px; margin-top : 10px; border: 1px solid #ccc; border-radius: 5px; padding: 8px;">
  <summary style="font-weight: bold; cursor: pointer; font-size: 1rem;">Click to view the Question Paper</summary>
  <div align="center" style="margin-top: 10px;">
    <img src="https://res.cloudinary.com/dzgoq3ikq/image/upload/v1760764416/Screenshot_18-Oct_10-42-39_3266_xylnqq.png" 
         alt="Question Paper" 
         style="max-width: 90%; height: auto; border-radius: 8px; box-shadow: 0 2px 8px rgba(0,0,0,0.2);" />
    <img src="https://res.cloudinary.com/dzgoq3ikq/image/upload/v1760764468/Screenshot_18-Oct_10-44-10_20041_rf9ukm.png" 
         alt="Question Paper" 
         style="max-width: 90%; height: auto; border-radius: 8px; box-shadow: 0 2px 8px rgba(0,0,0,0.2);" />
</div>
</details>

<table style="width: 100%; border-collapse: collapse; border-color:none">
    <caption>Answer any 8 Questions</caption>
<thead>
    <tr>
      <th>S.N.</th>
      <th>Questions</th>
      <th>Marks</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td>1(a)</td>
      <td>What is a <code>sparse matrix?</code></td>
      <td>2</td>
    </tr>
    <tr>
      <td>1(b)</td>
      <td>How do we represent the <code>sparse matrix</code>J to save space?</td>
      <td>4</td>
    </tr>
    <tr>
      <td>1(c)</td>
      <td>Write a program to <code>reverse an array.</code></td>
      <td>4</td>
    </tr>
    <tr>
      <td>2(a)</td>
      <td>Given a function <code>roll()</code>, which returns an unpredictable outcome of the rolling a die. It can return 1, 2, 3, 4, 5, or 6. Your task is to roll a die n times. Write a program to determine the frequencies of the outcome : <br> 1, 2, 3, 4, 5, and 6. The example frequencies of the faces for <strong>N = 10000</strong> are given below: <div align = "center"> <br> Face 1: 1667 <br> Face 2: 1660 <br> Face 3: 1732 <br> Face 4: 1697 <br> Face 5: 1586 <br> Face 6: 1658</div> <br>Note: Assume <code>roll()</code> as a library function, so do not write the roll() function. <br> Moreover, your solution should not take more than <code>O(n) time complexity.</code></td>
      <td>5</td>
    </tr>
    <tr>
      <td>2(b)</td>
      <td>Given a <code>singly linked</code> list with N nodes. Write a program to <strong>reverse the given singly linked list.</strong></td>
      <td>5</td>
    </tr>
    <tr>
      <td>3(a)</td>
      <td>What is the <code>output</code> of the following recursive function?<br><br>#include &lt;stdio.h&gt;<br>void foo(int n)<br>{<br>&nbsp;&nbsp;if(n>=1)<br>&nbsp;&nbsp;{<br>&nbsp;&nbsp;&nbsp;&nbsp;foo(n-1);<br>&nbsp;&nbsp;&nbsp;&nbsp;printf("%d\t",n);<br>&nbsp;&nbsp;&nbsp;&nbsp;foo(n-1);<br>&nbsp;&nbsp;}<br>}<br>int main()<br>{<br>&nbsp;&nbsp;foo(4);<br>&nbsp;&nbsp;return 0;<br>}</td>
      <td>5</td>
    </tr>
    <tr>
      <td>3(b)</td>
      <td>Derive the <code>time and space complexity</code> of the above program.</td>
      <td>5</td>
    </tr>
    <tr>
      <td>4(a)</td>
      <td>Given the functions <code>stack</code> <code>*create(int size)</code>, <code>void push(stack *st)</code>, <code>int pop(stack *st)</code>, <code>int peek(stack *st)</code>, <code>int isEmpty(stack *st)</code>. Write a program to implement a <code>queue</code> with the help of two stacks. Define the functions of the queue - <code>enQueue()</code> and <code>deQueue()</code> for the int data type using the given functions of stack.</td>
      <td>4 + 4</td>
    </tr>
    <tr>
      <td>4(b)</td>
      <td>What is the worst-case <code>time complexity</code> of each enQueue() and deQueue() function?</td>
      <td>5</td>
    </tr>
    <tr>
      <td>5(a)</td>
      <td>Write a program to implement <code>inorder and preorder binary tree</code> traversal <strong>without using recursion.</strong></td>
      <td>5</td>
    </tr>
    <tr>
      <td>5(b)</td>
      <td>Construct a <code>binary tree</code> from inorder and preorder tree traversal where the inorder and preorder traversal are given as follows: <br> <code>Preorder</code>: 20, 15, 10, 18, 17, 30, 25, 40, 35, 38, 50 <br> <code>Inorder</code>: 10, 15, 17, 18, 20, 25, 30, 35, 38, 40, 50</td>
      <td>5</td>
    </tr>
    <tr>
      <td>6(b)</td>
      <td>Solve the following <br> <code>recurrence relation: T(n) = T(9n/10) + T(n/10) + O(n)</code></td>
      <td>5</td>
    </tr>
    <tr>
      <td>7(a)</td>
      <td>Given a <code>circular linked list</code> containing int data type. Write a program to display the data of the circular linked list.</td>
      <td>5</td>
    </tr>
    <tr>
      <td>7(b)</td>
      <td>Write a program to insert at <strong>Kth position</strong> in the <code>doubly linked list.</code></td>
      <td>5</td>
    </tr>
    <tr>
      <td>8(a)</td>
      <td>Write a program to <strong>multiply two matrices.</strong></td>
      <td>5</td>
    </tr>
    <tr>
      <td>8(b)</td>
      <td>Construct the <code>AVL Tree</code> for the given sequence of nodes: <br> 
                <code>Nodes</code>: 21, 26, 30, 9, 4, 14, 28, 18, 15, 10, 2, 3, 7. <br> Analyze the time and space complexity of AVL Tree operations.</td>
      <td>5</td>
    </tr>
    <tr>
      <td>9(a)</td>
      <td>When do we use <code>insertion sort?</code></td>
      <td>2</td>
    </tr>
    <tr>
      <td>9(b)</td>
      <td>What <strong>sorting algorithm</strong> takes the least number of swaps?</td>
      <td>2</td>
    </tr>
    <tr>
      <td>9(c)</td>
      <td>Define a <code>priority queue.</code></td>
      <td>2</td>
    </tr>
    <tr>
      <td>9(d)</td>
      <td>What is the time complexity to <code>re-heapify</code> a heap?</td>
      <td>2</td>
    </tr>
    <tr>
      <td>9(e)</td>
      <td>Why should we not use <code>bubble sort?</code></td>
      <td>2</td>
    </tr>
  </tbody>
</table>

</template>

</CodeTabs>
