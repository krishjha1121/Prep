import{_ as r,c as i,o as n,ag as o}from"./chunks/framework.DUDLMHYb.js";const h=JSON.parse('{"title":"","description":"","frontmatter":{},"headers":[],"relativePath":"DSA/Arrays/2792-neighboring-bitwise-xor/README.md","filePath":"DSA/Arrays/2792-neighboring-bitwise-xor/README.md"}'),t={name:"DSA/Arrays/2792-neighboring-bitwise-xor/README.md"};function a(s,e,d,g,l,p){return n(),i("div",null,[...e[0]||(e[0]=[o(`<h2><a href="https://leetcode.com/problems/neighboring-bitwise-xor">2792. Neighboring Bitwise XOR</a></h2><h3>Medium</h3><hr><p>A <strong>0-indexed</strong> array <code>derived</code> with length <code>n</code> is derived by computing the <strong>bitwise XOR</strong> (⊕) of adjacent values in a <strong>binary array</strong> <code>original</code> of length <code>n</code>.</p><p>Specifically, for each index <code>i</code> in the range <code>[0, n - 1]</code>:</p><ul><li>If <code>i = n - 1</code>, then <code>derived[i] = original[i] ⊕ original[0]</code>.</li><li>Otherwise, <code>derived[i] = original[i] ⊕ original[i + 1]</code>.</li></ul><p>Given an array <code>derived</code>, your task is to determine whether there exists a <strong>valid binary array</strong> <code>original</code> that could have formed <code>derived</code>.</p><p>Return <em><strong>true</strong> if such an array exists or <strong>false</strong> otherwise.</em></p><ul><li>A binary array is an array containing only <strong>0&#39;s</strong> and <strong>1&#39;s</strong></li></ul><p> </p><p><strong class="example">Example 1:</strong></p><pre><strong>Input:</strong> derived = [1,1,0]
<strong>Output:</strong> true
<strong>Explanation:</strong> A valid original array that gives derived is [0,1,0].
derived[0] = original[0] ⊕ original[1] = 0 ⊕ 1 = 1 
derived[1] = original[1] ⊕ original[2] = 1 ⊕ 0 = 1
derived[2] = original[2] ⊕ original[0] = 0 ⊕ 0 = 0
</pre><p><strong class="example">Example 2:</strong></p><pre><strong>Input:</strong> derived = [1,1]
<strong>Output:</strong> true
<strong>Explanation:</strong> A valid original array that gives derived is [0,1].
derived[0] = original[0] ⊕ original[1] = 1
derived[1] = original[1] ⊕ original[0] = 1
</pre><p><strong class="example">Example 3:</strong></p><pre><strong>Input:</strong> derived = [1,0]
<strong>Output:</strong> false
<strong>Explanation:</strong> There is no valid original array that gives derived.
</pre><p> </p><p><strong>Constraints:</strong></p><ul><li><code>n == derived.length</code></li><li><code>1 &lt;= n &lt;= 10<sup>5</sup></code></li><li>The values in <code>derived</code> are either <strong>0&#39;s</strong> or <strong>1&#39;s</strong></li></ul>`,19)])])}const u=r(t,[["render",a]]);export{h as __pageData,u as default};
