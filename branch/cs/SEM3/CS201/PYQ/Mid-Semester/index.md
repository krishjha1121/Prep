<div align="center">
  <h1>🏫 National Institute of Technology Silchar</h1>
</div>

<CodeTabs :languages="[
  { name: '2024-SEP', slot: '2024-SEP' },
]">

<template #2024-SEP>

<div align="center">
  <h6> Answer all questions (Total Marks = 30, Duration = 1 hour)</h6>
</div>

<table border="1" style="width: 100%; border-collapse: collapse;">
  <thead>
    <tr>
      <th>Question</th>
      <th>Details</th>
      <th>Marks</th>
      <th>CO</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td><strong>1(a)</strong></td>
      <td>Define <strong>Abstract Data Type (ADT)</strong> with an example.</td>
      <td>2</td>
      <td>CO1</td>
    </tr>
    <tr>
      <td><strong>1(b)</strong></td>
      <td>Solve the following recurrence relation using the <strong>Master Theorem</strong>:<br><code>T(n) = 16T(n/4) + n³</code></td>
      <td>2</td>
      <td>CO1</td>
    </tr>
    <tr>
      <td><strong>1(c)</strong></td>
      <td>Is <code>4²ⁿ = O(2²ⁿ)</code>? Justify your answer.</td>
      <td>2</td>
      <td>CO1</td>
    </tr>
    <tr>
      <td><strong>1(d)</strong></td>
      <td>Consider a <strong>row-major</strong> array <code>A[15…40, 20…45]</code>, where one array element occupies <strong>one byte</strong> of storage in memory. If the starting address of array <code>A</code> is <code>1600</code>, then what is the address of the element <code>A[30][25]</code>?</td>
      <td>2</td>
      <td>CO2</td>
    </tr>
    <tr>
      <td><strong>2(a)</strong></td>
      <td>The following infix expression <strong>Q</strong> is converted to its equivalent postfix expression using a <strong>stack</strong> data structure.<br><code>Q: A + (B * C - (D / E ^ F) * G) * H</code><br>What are the elements of the stack <strong>after operand <code>F</code></strong> is scanned during the conversion process?</td>
      <td>3</td>
      <td>CO2</td>
    </tr>
    <tr>
      <td><strong>2(b)</strong></td>
      <td>What is a <strong>well-defined recursive function</strong>?<br>Write a <strong>tail-recursive function</strong> to find the factorial of a given positive number.</td>
      <td>1 + 2</td>
      <td>CO1</td>
    </tr>
    <tr>
      <td><strong>2(c)</strong></td>
      <td>
        What is the <strong>output</strong> of the following function for a singly linked list with values <code>1 -> 2 -> 3 -> 4 -> 5 -> 6</code>?<br><code>start</code> is pointing to the first node.<br>
        <pre><code class="language-c">
void fun(struct node *start) {
    if (start->next == NULL) return;
    if (start->next->next != NULL)
        fun(start->next->next);
    printf("%d", start->data);
}
        </code></pre>
      </td>
      <td>2</td>
      <td>CO2</td>
    </tr>
    <tr>
      <td><strong>3(a)</strong></td>
      <td>Write an <strong>algorithm</strong> to insert an element in a <strong>single-headed Doubly Linked List (DLL)</strong> after a given node <code>X</code>.<br>What is the <strong>time complexity</strong> of this insertion?<br>Assume that the start (head) pointer points to the beginning of the DLL.</td>
      <td>4 + 1</td>
      <td>CO3</td>
    </tr>
    <tr>
      <td><strong>3(b)</strong></td>
      <td>What is a <strong>min-priority queue</strong> data structure?<br>Consider an <strong>array representation</strong> of a <strong>circular queue</strong> where <code>FRONT</code> and <code>REAR</code> are the usual terms used in queue data structure.<br>Write an <strong>algorithm</strong> to insert an element into the circular queue.</td>
      <td>1 + 4</td>
      <td>CO3</td>
    </tr>
    <tr>
      <td><strong>3(c)</strong></td>
      <td>
        Let a <strong>space-efficient data structure</strong> called <code>twoStack</code> is created by using only <strong>one linear array</strong>, which supports the following operations:<br>
        <code>push1(int x) -> pushes x to the first stack.</code>,<br>
        <code>push2(int x) -> pushes x to the second stack.</code>,<br>
        <code>pop1() -> pops and element from first stack and return the popped element.</code>,<br>
        <code>pop2() -> pops and element from second stack and return the popped element.</code>.<br>
        Write an <strong>algorithms</strong> to implement the <code>push()</code> and <code>pop()</code> operations for <code>twoStack</code>.
      </td>
      <td>4</td>
      <td>CO3</td>
    </tr>
  </tbody>
</table>

</template>
</CodeTabs>
