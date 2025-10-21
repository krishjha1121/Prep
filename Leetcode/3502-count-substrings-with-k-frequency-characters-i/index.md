<div align = "center">
<h style = "margin-bottom: 0px; margin-top: 0px; color : purple;" align = "center" class = "header">

## ⌨ 3502. Count Substrings With K-Frequency Characters I

</h>
</div>

<h2><a href="https://leetcode.com/problems/count-substrings-with-k-frequency-characters-i" target = "_blank">3502. Count Substrings With K-Frequency Characters I</a></h2><h3>Medium</h3><hr><p>Given a string <code>s</code> and an integer <code>k</code>, return the total number of <span data-keyword="substring-nonempty">substrings</span> of <code>s</code> where <strong>at least one</strong> character appears <strong>at least</strong> <code>k</code> times.</p>

<p>&nbsp;</p>
<p><strong class="example">Example 1:</strong></p>

<div class="example-block">
<p><strong>Input:</strong> <span class="example-io">s = &quot;abacb&quot;, k = 2</span></p>

<p><strong>Output:</strong> <span class="example-io">4</span></p>

<p><strong>Explanation:</strong></p>

<p>The valid substrings are:</p>

<ul>
	<li><code>&quot;aba&quot;</code> (character <code>&#39;a&#39;</code> appears 2 times).</li>
	<li><code>&quot;abac&quot;</code> (character <code>&#39;a&#39;</code> appears 2 times).</li>
	<li><code>&quot;abacb&quot;</code> (character <code>&#39;a&#39;</code> appears 2 times).</li>
	<li><code>&quot;bacb&quot;</code> (character <code>&#39;b&#39;</code> appears 2 times).</li>
</ul>
</div>

<p><strong class="example">Example 2:</strong></p>

<div class="example-block">
<p><strong>Input:</strong> <span class="example-io">s = &quot;abcde&quot;, k = 1</span></p>

<p><strong>Output:</strong> <span class="example-io">15</span></p>

<p><strong>Explanation:</strong></p>

<p>All substrings are valid because every character appears at least once.</p>
</div>

<p>&nbsp;</p>
<p><strong>Constraints:</strong></p>

<ul>
	<li><code>1 &lt;= s.length &lt;= 3000</code></li>
	<li><code>1 &lt;= k &lt;= s.length</code></li>
	<li><code>s</code> consists only of lowercase English letters.</li>
</ul>

<CodeTabs :languages="[ { name: 'C++', slot: 'cpp' }, { name: 'Java', slot: 'java' } ]">

<template #java>

```java
import java.util.*;
import java.io.*;
import java.math.*;
import static java.lang.Math.*;

class Solution {
    public static int numberOfSubstrings(String s, int k) {
        int n = s.length(), count = 0;
        for (int i = 0; i < n; i++) {
            HashMap<Character, Integer> map = new HashMap<>();
            int maxi = 0;
            for (int j = i; j < n; j++) {
                char current = s.charAt(j);
                map.put(current, map.getOrDefault(current, 0) + 1);
                maxi = max(maxi, map.get(current));
                if (maxi >= k)
                    count++;
            }
            map.clear();
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
