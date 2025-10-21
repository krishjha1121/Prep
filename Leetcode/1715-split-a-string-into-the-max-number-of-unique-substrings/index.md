<div align = "center">
<h style = "margin-bottom: 0px; margin-top: 0px; color : purple;" align = "center" class = "header">

## ⌨ 1715. Split a String Into the Max Number of Unique Substrings

</h>
</div>

<h2><a href="https://leetcode.com/problems/split-a-string-into-the-max-number-of-unique-substrings" target = "_blank">1715. Split a String Into the Max Number of Unique Substrings</a></h2><h3>Medium</h3><hr><p>Given a string&nbsp;<code>s</code><var>,</var>&nbsp;return <em>the maximum&nbsp;number of unique substrings that the given string can be split into</em>.</p>

<p>You can split string&nbsp;<code>s</code> into any list of&nbsp;<strong>non-empty substrings</strong>, where the concatenation of the substrings forms the original string.&nbsp;However, you must split the substrings such that all of them are <strong>unique</strong>.</p>

<p>A <strong>substring</strong> is a contiguous sequence of characters within a string.</p>

<p>&nbsp;</p>
<p><strong class="example">Example 1:</strong></p>

<pre>
<strong>Input:</strong> s = &quot;ababccc&quot;
<strong>Output:</strong> 5
<strong>Explanation</strong>: One way to split maximally is [&#39;a&#39;, &#39;b&#39;, &#39;ab&#39;, &#39;c&#39;, &#39;cc&#39;]. Splitting like [&#39;a&#39;, &#39;b&#39;, &#39;a&#39;, &#39;b&#39;, &#39;c&#39;, &#39;cc&#39;] is not valid as you have &#39;a&#39; and &#39;b&#39; multiple times.
</pre>

<p><strong class="example">Example 2:</strong></p>

<pre>
<strong>Input:</strong> s = &quot;aba&quot;
<strong>Output:</strong> 2
<strong>Explanation</strong>: One way to split maximally is [&#39;a&#39;, &#39;ba&#39;].
</pre>

<p><strong class="example">Example 3:</strong></p>

<pre>
<strong>Input:</strong> s = &quot;aa&quot;
<strong>Output:</strong> 1
<strong>Explanation</strong>: It is impossible to split the string any further.
</pre>

<p>&nbsp;</p>
<p><strong>Constraints:</strong></p>

<ul>
	<li>
	<p><code>1 &lt;= s.length&nbsp;&lt;= 16</code></p>
	</li>
	<li>
	<p><code>s</code> contains&nbsp;only lower case English letters.</p>
	</li>
</ul>

<CodeTabs :languages="[ { name: 'C++', slot: 'cpp' }, { name: 'Java', slot: 'java' } ]">

<template #java>

```java
class Solution {
    public int maxUniqueSplit(String s) {
        return solve(s, 0, new HashSet<>());
    }
    private int solve(String s, int left, HashSet<String> set) {
        if (left >= s.length())
            return 0;
        int max = 0;
        for (int right = left + 1; right <= s.length(); right++) {
            String current = s.substring(left, right);
            if (!set.contains(current)) {
                set.add(current);
                max = Math.max(max, 1 + solve(s, right, set));
                set.remove(current);
            }
        }
        return max;
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
