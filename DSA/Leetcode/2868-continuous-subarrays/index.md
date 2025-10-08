<div align = "center">
<h style = "margin-bottom: 0px; margin-top: 0px; color : purple;" align = "center" class = "header">

## ⌨ 2868. Continuous Subarrays

</h>
</div>

<h2><a href="https://leetcode.com/problems/continuous-subarrays" target = "_blank">2868. Continuous Subarrays</a></h2><h3>Medium</h3><hr><p>You are given a <strong>0-indexed</strong> integer array <code>nums</code>. A subarray of <code>nums</code> is called <strong>continuous</strong> if:</p>

<ul>
	<li>Let <code>i</code>, <code>i + 1</code>, ..., <code>j</code><sub> </sub>be the indices in the subarray. Then, for each pair of indices <code>i &lt;= i<sub>1</sub>, i<sub>2</sub> &lt;= j</code>, <code><font face="monospace">0 &lt;=</font> |nums[i<sub>1</sub>] - nums[i<sub>2</sub>]| &lt;= 2</code>.</li>
</ul>

<p>Return <em>the total number of <strong>continuous</strong> subarrays.</em></p>

<p>A subarray is a contiguous <strong>non-empty</strong> sequence of elements within an array.</p>

<p>&nbsp;</p>
<p><strong class="example">Example 1:</strong></p>

<pre>
<strong>Input:</strong> nums = [5,4,2,4]
<strong>Output:</strong> 8
<strong>Explanation:</strong> 
Continuous subarray of size 1: [5], [4], [2], [4].
Continuous subarray of size 2: [5,4], [4,2], [2,4].
Continuous subarray of size 3: [4,2,4].
Thereare no subarrys of size 4.
Total continuous subarrays = 4 + 3 + 1 = 8.
It can be shown that there are no more continuous subarrays.
</pre>

<p>&nbsp;</p>

<p><strong class="example">Example 2:</strong></p>

<pre>
<strong>Input:</strong> nums = [1,2,3]
<strong>Output:</strong> 6
<strong>Explanation:</strong> 
Continuous subarray of size 1: [1], [2], [3].
Continuous subarray of size 2: [1,2], [2,3].
Continuous subarray of size 3: [1,2,3].
Total continuous subarrays = 3 + 2 + 1 = 6.
</pre>

<p>&nbsp;</p>
<p><strong>Constraints:</strong></p>

<ul>
	<li><code>1 &lt;= nums.length &lt;= 10<sup>5</sup></code></li>
	<li><code>1 &lt;= nums[i] &lt;= 10<sup>9</sup></code></li>
</ul>

<CodeTabs :languages="[ { name: 'C++', slot: 'cpp' }, { name: 'Java', slot: 'java' } ]">

<template #java>

```java
class Solution {
    public long continuousSubarrays(int[] nums) {
        int n = nums.length;
        int left = 0, right = 0;
        long count = 0;
        HashMap<Integer, Integer> map = new HashMap<>();
        TreeSet<Integer> set = new TreeSet<>();
        while (right < n) {
            set.add(nums[right]);
            map.put(nums[right], map.getOrDefault(nums[right], 0) + 1);
            while (left <= right && Math.abs(set.first() - set.last()) > 2) {
                map.put(nums[left], map.get(nums[left]) - 1);
                if (map.get(nums[left]) == 0)
                    set.remove(nums[left]);
                left++;
            }
            count += (right - left + 1);
            right++;
        }
        return count;
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
