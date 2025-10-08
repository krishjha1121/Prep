<div align = "center">
<h style = "margin-bottom: 0px; margin-top: 0px; color : purple;" align = "center" class = "header">

## ⌨ 2646. Kth Largest Sum in a Binary Tree

</h>
</div>

<h2><a href="https://leetcode.com/problems/count-total-number-of-colored-cells" target = "_blank">2649. Count Total Number of Colored Cells</a></h2><h3>Medium</h3><hr><p>There exists an infinitely large two-dimensional grid of uncolored unit cells. You are given a positive integer <code>n</code>, indicating that you must do the following routine for <code>n</code> minutes:</p>

<ul>
	<li>At the first minute, color <strong>any</strong> arbitrary unit cell blue.</li>
	<li>Every minute thereafter, color blue <strong>every</strong> uncolored cell that touches a blue cell.</li>
</ul>

<p>Below is a pictorial representation of the state of the grid after minutes 1, 2, and 3.</p>
<img alt="" src="https://assets.leetcode.com/uploads/2023/01/10/example-copy-2.png" style="width: 500px; height: 279px;" />
<p>Return <em>the number of <strong>colored cells</strong> at the end of </em><code>n</code> <em>minutes</em>.</p>

<p>&nbsp;</p>
<p><strong class="example">Example 1:</strong></p>

<pre>
<strong>Input:</strong> n = 1
<strong>Output:</strong> 1
<strong>Explanation:</strong> After 1 minute, there is only 1 blue cell, so we return 1.
</pre>

<p><strong class="example">Example 2:</strong></p>

<pre>
<strong>Input:</strong> n = 2
<strong>Output:</strong> 5
<strong>Explanation:</strong> After 2 minutes, there are 4 colored cells on the boundary and 1 in the center, so we return 5. 
</pre>

<p>&nbsp;</p>
<p><strong>Constraints:</strong></p>

<ul>
	<li><code>1 &lt;= n &lt;= 10<sup>5</sup></code></li>
</ul>

<CodeTabs :languages="[ { name: 'C++', slot: 'cpp' }, { name: 'Java', slot: 'java' } ]">

<template #java>

```java
class Solution {
    public long coloredCells(int n) {
        long res = 1;
        if (n == 1)
            return res;
        for (int i = 1; i < n; i++)
            res += 4 * 1L * i;
        return res;
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
