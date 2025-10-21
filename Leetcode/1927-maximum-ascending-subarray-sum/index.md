<div align = "center">
<h style = "margin-bottom: 0px; margin-top: 0px; color : purple;" align = "center" class = "header">

## ⌨ 1927. Maximum Ascending Subarray Sum

</h>
</div>

<h2><a href="https://leetcode.com/problems/maximum-ascending-subarray-sum" target = "_blank">1927. Maximum Ascending Subarray Sum</a></h2><h3>Easy</h3><hr><p>Given an array of positive integers <code>nums</code>, return the <em>maximum possible sum of an <strong>ascending</strong> subarray in </em><code>nums</code>.</p>

<p>A subarray is defined as a contiguous sequence of numbers in an array.</p>

<p>A subarray <code>[nums<sub>l</sub>, nums<sub>l+1</sub>, ..., nums<sub>r-1</sub>, nums<sub>r</sub>]</code> is <strong>ascending</strong> if for all <code>i</code> where <code>l &lt;= i &lt; r</code>, <code>nums<sub>i </sub> &lt; nums<sub>i+1</sub></code>. Note that a subarray of size <code>1</code> is <strong>ascending</strong>.</p>

<p>&nbsp;</p>
<p><strong class="example">Example 1:</strong></p>

<pre>
<strong>Input:</strong> nums = [10,20,30,5,10,50]
<strong>Output:</strong> 65
<strong>Explanation: </strong>[5,10,50] is the ascending subarray with the maximum sum of 65.
</pre>

<p><strong class="example">Example 2:</strong></p>

<pre>
<strong>Input:</strong> nums = [10,20,30,40,50]
<strong>Output:</strong> 150
<strong>Explanation: </strong>[10,20,30,40,50] is the ascending subarray with the maximum sum of 150.
</pre>

<p><strong class="example">Example 3:</strong></p>

<pre>
<strong>Input:</strong> nums = [12,17,15,13,10,11,12]
<strong>Output:</strong> 33
<strong>Explanation: </strong>[10,11,12] is the ascending subarray with the maximum sum of 33.
</pre>

<p>&nbsp;</p>
<p><strong>Constraints:</strong></p>

<ul>
	<li><code>1 &lt;= nums.length &lt;= 100</code></li>
	<li><code>1 &lt;= nums[i] &lt;= 100</code></li>
</ul>

<CodeTabs :languages="[ { name: 'C++', slot: 'cpp' }, { name: 'Java', slot: 'java' } ]">

<template #java>

```java
class Solution {
    public int maxAscendingSum(int[] nums) {
        int n = nums.length;
        int sum = 0, maxi = 0;
        for (int i = 0; i < n; i++) {
            if (i == 0)
                sum += nums[i];
            if (i > 0 && nums[i] > nums[i - 1])
                sum += nums[i];
            else
                sum = nums[i];
            maxi = Math.max(maxi, sum);
        }
        return maxi;
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
