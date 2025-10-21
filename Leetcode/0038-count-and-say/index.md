<div align = "center">
<h style = "margin-bottom: 0px; margin-top: 0px; color : purple;" align = "center" class = "header">

## ⌨ 38. Count and Say

</h>
</div>

<h2><a href="https://leetcode.com/problems/count-and-say" target = "_blank">38. Count and Say</a></h2><h3>Medium</h3><hr><p>The <strong>count-and-say</strong> sequence is a sequence of digit strings defined by the recursive formula:</p>

<ul>
	<li><code>countAndSay(1) = "1"</code></li>
	<li><code>countAndSay(n)</code> is the run-length encoding of <code>countAndSay(n - 1)</code>.</li>
</ul>

<p><a href="http://en.wikipedia.org/wiki/Run-length_encoding" target="_blank">Run-length encoding</a> (RLE) is a string compression method that works by replacing consecutive identical characters (repeated 2 or more times) with the concatenation of the character and the number marking the count of the characters (length of the run). For example, to compress the string <code>"3322251"</code> we replace <code>"33"</code> with <code>"23"</code>, replace <code>"222"</code> with <code>"32"</code>, replace <code>"5"</code> with <code>"15"</code> and replace <code>"1"</code> with <code>"11"</code>. Thus the compressed string becomes <code>"23321511"</code>.</p>

<p>Given a positive integer <code>n</code>, return <em>the </em><code>n<sup>th</sup></code><em> element of the <strong>count-and-say</strong> sequence</em>.</p>

<p>&nbsp;</p>
<p><strong class="example">Example 1:</strong></p>

<div class="example-block">
<p><strong>Input:</strong> <span class="example-io">n = 4</span></p>

<p><strong>Output:</strong> <span class="example-io">"1211"</span></p>

<p><strong>Explanation:</strong></p>

<pre>
countAndSay(1) = "1"
countAndSay(2) = RLE of "1" = "11"
countAndSay(3) = RLE of "11" = "21"
countAndSay(4) = RLE of "21" = "1211"
</pre>
</div>

<p><strong class="example">Example 2:</strong></p>

<div class="example-block">
<p><strong>Input:</strong> <span class="example-io">n = 1</span></p>

<p><strong>Output:</strong> <span class="example-io">"1"</span></p>

<p><strong>Explanation:</strong></p>

<p>This is the base case.</p>
</div>

<p>&nbsp;</p>
<p><strong>Constraints:</strong></p>

<ul>
	<li><code>1 <= n <= 30</code></li>
</ul>

<p>&nbsp;</p>
<strong>Follow up:</strong> Could you solve it iteratively?

<CodeTabs :languages="[
  { name: 'C++', slot: 'cpp' },
  { name: 'Java', slot: 'java' }
]">

<template #java>

```java
class Solution {
    public String countAndSay(int n) {
        StringBuilder res = new StringBuilder();
        for (int i = 1; i <= n; i++) {
            if (i == 1)
                res.append("1");
            else {
                String current = res.toString();
                res = new StringBuilder();
                res.append(findRLE(current));
            }
        }
        return res.toString();
    }
    private String findRLE(String s) {
        int n = s.length();
        StringBuilder res = new StringBuilder();
        char prev = s.charAt(0);
        int count = 1;
        for (int i = 1; i < n; i++) {
            char current = s.charAt(i);
            if (current == prev)
                count++;
            else {
                res.append(count);
                res.append(prev);
                count = 1;
                prev = current;
            }
        }
        if (count > 0) {
            res.append(count);
            res.append(prev);
        }
        return res.toString();
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

