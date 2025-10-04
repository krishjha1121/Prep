import{_ as e,c as s,o as n,ag as a}from"./chunks/framework.DUDLMHYb.js";const l=JSON.parse('{"title":"","description":"","frontmatter":{},"headers":[],"relativePath":"DSA/Arrays/2600-maximum-tastiness-of-candy-basket/README.md","filePath":"DSA/Arrays/2600-maximum-tastiness-of-candy-basket/README.md"}'),o={name:"DSA/Arrays/2600-maximum-tastiness-of-candy-basket/README.md"};function r(i,t,p,c,d,m){return n(),s("div",null,[...t[0]||(t[0]=[a(`<h2><a href="https://leetcode.com/problems/maximum-tastiness-of-candy-basket">2600. Maximum Tastiness of Candy Basket</a></h2><h3>Medium</h3><hr><p>You are given an array of positive integers <code>price</code> where <code>price[i]</code> denotes the price of the <code>i<sup>th</sup></code> candy and a positive integer <code>k</code>.</p><p>The store sells baskets of <code>k</code> <strong>distinct</strong> candies. The <strong>tastiness</strong> of a candy basket is the smallest absolute difference of the <strong>prices</strong> of any two candies in the basket.</p><p>Return <em>the <strong>maximum</strong> tastiness of a candy basket.</em></p><p> </p><p><strong class="example">Example 1:</strong></p><pre><strong>Input:</strong> price = [13,5,1,8,21,2], k = 3
<strong>Output:</strong> 8
<strong>Explanation:</strong> Choose the candies with the prices [13,5,21].
The tastiness of the candy basket is: min(|13 - 5|, |13 - 21|, |5 - 21|) = min(8, 8, 16) = 8.
It can be proven that 8 is the maximum tastiness that can be achieved.
</pre><p><strong class="example">Example 2:</strong></p><pre><strong>Input:</strong> price = [1,3,1], k = 2
<strong>Output:</strong> 2
<strong>Explanation:</strong> Choose the candies with the prices [1,3].
The tastiness of the candy basket is: min(|1 - 3|) = min(2) = 2.
It can be proven that 2 is the maximum tastiness that can be achieved.
</pre><p><strong class="example">Example 3:</strong></p><pre><strong>Input:</strong> price = [7,7,7,7], k = 2
<strong>Output:</strong> 0
<strong>Explanation:</strong> Choosing any two distinct candies from the candies we have will result in a tastiness of 0.
</pre><p> </p><p><strong>Constraints:</strong></p><ul><li><code>2 &lt;= k &lt;= price.length &lt;= 10<sup>5</sup></code></li><li><code>1 &lt;= price[i] &lt;= 10<sup>9</sup></code></li></ul>`,16)])])}const g=e(o,[["render",r]]);export{l as __pageData,g as default};
