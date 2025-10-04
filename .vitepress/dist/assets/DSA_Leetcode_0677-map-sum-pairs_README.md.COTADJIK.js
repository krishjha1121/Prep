import{_ as t,c as o,o as a,ag as l}from"./chunks/framework.DUDLMHYb.js";const m=JSON.parse('{"title":"","description":"","frontmatter":{},"headers":[],"relativePath":"DSA/Leetcode/0677-map-sum-pairs/README.md","filePath":"DSA/Leetcode/0677-map-sum-pairs/README.md"}'),u={name:"DSA/Leetcode/0677-map-sum-pairs/README.md"};function n(p,e,s,i,r,d){return a(),o("div",null,[...e[0]||(e[0]=[l(`<h2><a href="https://leetcode.com/problems/map-sum-pairs">677. Map Sum Pairs</a></h2><h3>Medium</h3><hr><p>Design a map that allows you to do the following:</p><ul><li>Maps a string key to a given value.</li><li>Returns the sum of the values that have a key with a prefix equal to a given string.</li></ul><p>Implement the <code>MapSum</code> class:</p><ul><li><code>MapSum()</code> Initializes the <code>MapSum</code> object.</li><li><code>void insert(String key, int val)</code> Inserts the <code>key-val</code> pair into the map. If the <code>key</code> already existed, the original <code>key-value</code> pair will be overridden to the new one.</li><li><code>int sum(string prefix)</code> Returns the sum of all the pairs&#39; value whose <code>key</code> starts with the <code>prefix</code>.</li></ul><p> </p><p><strong class="example">Example 1:</strong></p><pre><strong>Input</strong>
[&quot;MapSum&quot;, &quot;insert&quot;, &quot;sum&quot;, &quot;insert&quot;, &quot;sum&quot;]
[[], [&quot;apple&quot;, 3], [&quot;ap&quot;], [&quot;app&quot;, 2], [&quot;ap&quot;]]
<strong>Output</strong>
[null, null, 3, null, 5]

<strong>Explanation</strong>
MapSum mapSum = new MapSum();
mapSum.insert(&quot;apple&quot;, 3);  
mapSum.sum(&quot;ap&quot;);           // return 3 (<u>ap</u>ple = 3)
mapSum.insert(&quot;app&quot;, 2);    
mapSum.sum(&quot;ap&quot;);           // return 5 (<u>ap</u>ple + <u>ap</u>p = 3 + 2 = 5)
</pre><p> </p><p><strong>Constraints:</strong></p><ul><li><code>1 &lt;= key.length, prefix.length &lt;= 50</code></li><li><code>key</code> and <code>prefix</code> consist of only lowercase English letters.</li><li><code>1 &lt;= val &lt;= 1000</code></li><li>At most <code>50</code> calls will be made to <code>insert</code> and <code>sum</code>.</li></ul>`,13)])])}const h=t(u,[["render",n]]);export{m as __pageData,h as default};
