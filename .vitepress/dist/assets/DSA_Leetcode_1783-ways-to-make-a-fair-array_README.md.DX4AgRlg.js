import{_ as n,c as o,o as t,ag as r}from"./chunks/framework.DUDLMHYb.js";const l=JSON.parse('{"title":"","description":"","frontmatter":{},"headers":[],"relativePath":"DSA/Leetcode/1783-ways-to-make-a-fair-array/README.md","filePath":"DSA/Leetcode/1783-ways-to-make-a-fair-array/README.md"}'),a={name:"DSA/Leetcode/1783-ways-to-make-a-fair-array/README.md"};function s(i,e,m,d,u,p){return t(),o("div",null,[...e[0]||(e[0]=[r(`<h2><a href="https://leetcode.com/problems/ways-to-make-a-fair-array">1783. Ways to Make a Fair Array</a></h2><h3>Medium</h3><hr><p>You are given an integer array <code>nums</code>. You can choose <strong>exactly one</strong> index (<strong>0-indexed</strong>) and remove the element. Notice that the index of the elements may change after the removal.</p><p>For example, if <code>nums = [6,1,7,4,1]</code>:</p><ul><li>Choosing to remove index <code>1</code> results in <code>nums = [6,7,4,1]</code>.</li><li>Choosing to remove index <code>2</code> results in <code>nums = [6,1,4,1]</code>.</li><li>Choosing to remove index <code>4</code> results in <code>nums = [6,1,7,4]</code>.</li></ul><p>An array is <strong>fair</strong> if the sum of the odd-indexed values equals the sum of the even-indexed values.</p><p>Return the <em><strong>number</strong> of indices that you could choose such that after the removal, </em><code>nums</code><em></em><em>is <strong>fair</strong>. </em></p><p> </p><p><strong class="example">Example 1:</strong></p><pre><strong>Input:</strong> nums = [2,1,6,4]
<strong>Output:</strong> 1
<strong>Explanation:</strong>
Remove index 0: [1,6,4] -&gt; Even sum: 1 + 4 = 5. Odd sum: 6. Not fair.
Remove index 1: [2,6,4] -&gt; Even sum: 2 + 4 = 6. Odd sum: 6. Fair.
Remove index 2: [2,1,4] -&gt; Even sum: 2 + 4 = 6. Odd sum: 1. Not fair.
Remove index 3: [2,1,6] -&gt; Even sum: 2 + 6 = 8. Odd sum: 1. Not fair.
There is 1 index that you can remove to make nums fair.
</pre><p><strong class="example">Example 2:</strong></p><pre><strong>Input:</strong> nums = [1,1,1]
<strong>Output:</strong> 3
<strong>Explanation:</strong> You can remove any index and the remaining array is fair.
</pre><p><strong class="example">Example 3:</strong></p><pre><strong>Input:</strong> nums = [1,2,3]
<strong>Output:</strong> 0
<strong>Explanation:</strong> You cannot make a fair array after removing any index.
</pre><p> </p><p><strong>Constraints:</strong></p><ul><li><code>1 &lt;= nums.length &lt;= 10<sup>5</sup></code></li><li><code>1 &lt;= nums[i] &lt;= 10<sup>4</sup></code></li></ul>`,18)])])}const g=n(a,[["render",s]]);export{l as __pageData,g as default};
