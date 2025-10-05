<h2><a href="https://leetcode.com/problems/count-unique-characters-of-all-substrings-of-a-given-string">855. Count Unique Characters of All Substrings of a Given String</a></h2><h3>Hard</h3><hr><p>Let&#39;s define a function <code>countUniqueChars(s)</code> that returns the number of unique characters in&nbsp;<code>s</code>.</p>

<ul>
	<li>For example, calling <code>countUniqueChars(s)</code> if <code>s = &quot;LEETCODE&quot;</code> then <code>&quot;L&quot;</code>, <code>&quot;T&quot;</code>, <code>&quot;C&quot;</code>, <code>&quot;O&quot;</code>, <code>&quot;D&quot;</code> are the unique characters since they appear only once in <code>s</code>, therefore <code>countUniqueChars(s) = 5</code>.</li>
</ul>

<p>Given a string <code>s</code>, return the sum of <code>countUniqueChars(t)</code> where <code>t</code> is a substring of <code>s</code>. The test cases are generated such that the answer fits in a 32-bit integer.</p>

<p>Notice that some substrings can be repeated so in this case you have to count the repeated ones too.</p>

<p>&nbsp;</p>
<p><strong class="example">Example 1:</strong></p>

<pre>
<strong>Input:</strong> s = &quot;ABC&quot;
<strong>Output:</strong> 10
<strong>Explanation: </strong>All possible substrings are: &quot;A&quot;,&quot;B&quot;,&quot;C&quot;,&quot;AB&quot;,&quot;BC&quot; and &quot;ABC&quot;.
Every substring is composed with only unique letters.
Sum of lengths of all substring is 1 + 1 + 1 + 2 + 2 + 3 = 10
</pre>

<p><strong class="example">Example 2:</strong></p>

<pre>
<strong>Input:</strong> s = &quot;ABA&quot;
<strong>Output:</strong> 8
<strong>Explanation: </strong>The same as example 1, except <code>countUniqueChars</code>(&quot;ABA&quot;) = 1.
</pre>

<p><strong class="example">Example 3:</strong></p>

<pre>
<strong>Input:</strong> s = &quot;LEETCODE&quot;
<strong>Output:</strong> 92
</pre>

<p>&nbsp;</p>
<p><strong>Constraints:</strong></p>

<ul>
	<li><code>1 &lt;= s.length &lt;= 10<sup>5</sup></code></li>
	<li><code>s</code> consists of uppercase English letters only.</li>
</ul>

```java
class Solution {
    public int uniqueLetterString(String s) {
        int n = s.length();
        HashMap<Character, ArrayList<Integer >> map = new HashMap<>();
        for (int i = 0; i < n; i++) {
            char current = s.charAt(i);
            map.computeIfAbsent(current, k->new ArrayList<>()).add(i);
        }
        int res = 0;
        for (char i = 'A'; i <= 'Z'; i++) {
            if (!map.containsKey(i))
                continue;
            ArrayList<Integer> current = new ArrayList<>();
            current = map.get(i);
            int prev = 0;
            for (int j = 0; j < current.size(); j++) {
                int left = 0, right = 0;
                if (j == 0)
                    left = current.get(j);
                else
                    left = current.get(j) - current.get(j - 1) - 1;
                if (j == current.size() - 1)
                    right = n - current.get(j) - 1;
                else
                    right = current.get(j + 1) - current.get(j) - 1;
                res += 1 + left + (right * (left + 1));
            }
        }
        return res;
    }
}
```
