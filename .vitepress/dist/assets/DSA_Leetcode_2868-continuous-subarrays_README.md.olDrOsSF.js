import{_ as r,C as u,c as a,o as i,ag as t,j as s,a as o,G as p,w as l}from"./chunks/framework.DUDLMHYb.js";const y=JSON.parse('{"title":"","description":"","frontmatter":{},"headers":[],"relativePath":"DSA/Leetcode/2868-continuous-subarrays/README.md","filePath":"DSA/Leetcode/2868-continuous-subarrays/README.md"}'),d={name:"DSA/Leetcode/2868-continuous-subarrays/README.md"};function m(g,n,b,_,f,c){const e=u("font");return i(),a("div",null,[n[8]||(n[8]=t('<h2><a href="https://leetcode.com/problems/continuous-subarrays">2868. Continuous Subarrays</a></h2><h3>Medium</h3><hr><p>You are given a <strong>0-indexed</strong> integer array <code>nums</code>. A subarray of <code>nums</code> is called <strong>continuous</strong> if:</p>',4)),s("ul",null,[s("li",null,[n[6]||(n[6]=t("Let <code>i</code>, <code>i + 1</code>, ..., <code>j</code><sub></sub>be the indices in the subarray. Then, for each pair of indices <code>i &lt;= i<sub>1</sub>, i<sub>2</sub> &lt;= j</code>, ",10)),s("code",null,[p(e,{face:"monospace"},{default:l(()=>[...n[0]||(n[0]=[o("0 <=",-1)])]),_:1}),n[1]||(n[1]=o(" |nums[i",-1)),n[2]||(n[2]=s("sub",null,"1",-1)),n[3]||(n[3]=o("] - nums[i",-1)),n[4]||(n[4]=s("sub",null,"2",-1)),n[5]||(n[5]=o("]| <= 2",-1))]),n[7]||(n[7]=o(".",-1))])]),n[9]||(n[9]=t(`<p>Return <em>the total number of <strong>continuous</strong> subarrays.</em></p><p>A subarray is a contiguous <strong>non-empty</strong> sequence of elements within an array.</p><p> </p><p><strong class="example">Example 1:</strong></p><pre><strong>Input:</strong> nums = [5,4,2,4]
<strong>Output:</strong> 8
<strong>Explanation:</strong> 
Continuous subarray of size 1: [5], [4], [2], [4].
Continuous subarray of size 2: [5,4], [4,2], [2,4].
Continuous subarray of size 3: [4,2,4].
Thereare no subarrys of size 4.
Total continuous subarrays = 4 + 3 + 1 = 8.
It can be shown that there are no more continuous subarrays.
</pre><p> </p><p><strong class="example">Example 2:</strong></p><pre><strong>Input:</strong> nums = [1,2,3]
<strong>Output:</strong> 6
<strong>Explanation:</strong> 
Continuous subarray of size 1: [1], [2], [3].
Continuous subarray of size 2: [1,2], [2,3].
Continuous subarray of size 3: [1,2,3].
Total continuous subarrays = 3 + 2 + 1 = 6.
</pre><p> </p><p><strong>Constraints:</strong></p><ul><li><code>1 &lt;= nums.length &lt;= 10<sup>5</sup></code></li><li><code>1 &lt;= nums[i] &lt;= 10<sup>9</sup></code></li></ul>`,11))])}const A=r(d,[["render",m]]);export{y as __pageData,A as default};
