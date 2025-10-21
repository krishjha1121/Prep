<div align = "center">
<h style = "margin-bottom: 0px; margin-top: 0px; color : purple;" align = "center" class = "header">

## ⌨ 3676. Smallest Number With All Set Bits

</h>
</div>

<h2><a href="https://leetcode.com/problems/smallest-number-with-all-set-bits" target = "_blank">3676. Smallest Number With All Set Bits</a></h2><h3>Easy</h3><hr><p>You are given a <em>positive</em> number <code>n</code>.</p>

<p>Return the <strong>smallest</strong> number <code>x</code> <strong>greater than</strong> or <strong>equal to</strong> <code>n</code>, such that the binary representation of <code>x</code> contains only <strong>set</strong> bits.</p>

<p>A <strong>set</strong> bit refers to a bit in the binary representation of a number that has a value of <code>1</code>.</p>

<p>&nbsp;</p>
<p><strong class="example">Example 1:</strong></p>

<div class="example-block">
<p><strong>Input:</strong> <span class="example-io">n = 5</span></p>

<p><strong>Output:</strong> <span class="example-io">7</span></p>

<p><strong>Explanation:</strong></p>

<p>The binary representation of 7 is <code>&quot;111&quot;</code>.</p>
</div>

<p><strong class="example">Example 2:</strong></p>

<div class="example-block">
<p><strong>Input:</strong> <span class="example-io">n = 10</span></p>

<p><strong>Output:</strong> <span class="example-io">15</span></p>

<p><strong>Explanation:</strong></p>

<p>The binary representation of 15 is <code>&quot;1111&quot;</code>.</p>
</div>

<p><strong class="example">Example 3:</strong></p>

<div class="example-block">
<p><strong>Input:</strong> <span class="example-io">n = 3</span></p>

<p><strong>Output:</strong> <span class="example-io">3</span></p>

<p><strong>Explanation:</strong></p>

<p>The binary representation of 3 is <code>&quot;11&quot;</code>.</p>
</div>

<p>&nbsp;</p>
<p><strong>Constraints:</strong></p>

<ul>
	<li><code>1 &lt;= n &lt;= 1000</code></li>
</ul>

<CodeTabs :languages="[ { name: 'C++', slot: 'cpp' }, { name: 'Java', slot: 'java' } ]">

<template #java>

```java
class Solution {
    public int smallestNumber(int n) {
        while (true) {
            int new_num = n + 1;
            int temp = new_num & (new_num - 1);
            if (temp == 0)
                return n;
            n++;
        }
    }
}
```

</template>

<template #cpp>

```cpp
// Add your C++ solution here
```

</template>

</CodeTabs>
