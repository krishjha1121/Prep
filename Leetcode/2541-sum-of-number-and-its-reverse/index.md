<div align = "center">
<h style = "margin-bottom: 0px; margin-top: 0px; color : purple;" align = "center" class = "header">

## ⌨ 2541. Sum of Number and Its Reverse

</h>
</div>

<h2><a href="https://leetcode.com/problems/sum-of-number-and-its-reverse" target = "_blank">2541. Sum of Number and Its Reverse</a></h2><h3>Medium</h3><hr><p>Given a <strong>non-negative</strong> integer <code>num</code>, return <code>true</code><em> if </em><code>num</code><em> can be expressed as the sum of any <strong>non-negative</strong> integer and its reverse, or </em><code>false</code><em> otherwise.</em></p>

<p>&nbsp;</p>
<p><strong class="example">Example 1:</strong></p>

<pre>
<strong>Input:</strong> num = 443
<strong>Output:</strong> true
<strong>Explanation:</strong> 172 + 271 = 443 so we return true.
</pre>

<p><strong class="example">Example 2:</strong></p>

<pre>
<strong>Input:</strong> num = 63
<strong>Output:</strong> false
<strong>Explanation:</strong> 63 cannot be expressed as the sum of a non-negative integer and its reverse so we return false.
</pre>

<p><strong class="example">Example 3:</strong></p>

<pre>
<strong>Input:</strong> num = 181
<strong>Output:</strong> true
<strong>Explanation:</strong> 140 + 041 = 181 so we return true. Note that when a number is reversed, there may be leading zeros.
</pre>

<p>&nbsp;</p>
<p><strong>Constraints:</strong></p>

<ul>
	<li><code>0 &lt;= num &lt;= 10<sup>5</sup></code></li>
</ul>

<CodeTabs :languages="[ { name: 'C++', slot: 'cpp' }, { name: 'Java', slot: 'java' } ]">

<template #java>

```java
class Solution {
    public boolean sumOfNumberAndReverse(int num) {
        for (int i = num / 2; i <= num; i++) {
            if (i + get(i) == num)
                return true;
        }
        return false;
    }
    private int get(int n) {
        int res = 0;
        while (n > 0) {
            res = res * 10 + n % 10;
            n /= 10;
        }
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
