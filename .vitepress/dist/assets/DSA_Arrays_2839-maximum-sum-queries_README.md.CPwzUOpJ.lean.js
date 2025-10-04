import{_ as t,c,o as u,ag as s,j as n,a as e}from"./chunks/framework.DUDLMHYb.js";const p=JSON.parse('{"title":"","description":"","frontmatter":{},"headers":[],"relativePath":"DSA/Arrays/2839-maximum-sum-queries/README.md","filePath":"DSA/Arrays/2839-maximum-sum-queries/README.md"}'),d={name:"DSA/Arrays/2839-maximum-sum-queries/README.md"};function i(l,o,r,a,m,b){return u(),c("div",null,[...o[0]||(o[0]=[s("",8),n("pre",null,[e(""),n("strong",null,"Input:"),e(` nums1 = [4,3,1,2], nums2 = [2,4,9,5], queries = [[4,1],[1,3],[2,5]]
`),n("strong",null,"Output:"),e(` [6,10,7]
`),n("strong",null,"Explanation:"),e(` 
For the 1st query `),n("code",{node:"[object Object]"},[e("x"),n("sub",null,"i"),e(" = 4")]),e(" and "),n("code",{node:"[object Object]"},[e("y"),n("sub",null,"i"),e(" = 1")]),e(", we can select index "),n("code",{node:"[object Object]"},"j = 0"),e(" since "),n("code",{node:"[object Object]"},"nums1[j] >= 4"),e(" and "),n("code",{node:"[object Object]"},"nums2[j] >= 1"),e(". The sum "),n("code",{node:"[object Object]"},"nums1[j] + nums2[j]"),e(` is 6, and we can show that 6 is the maximum we can obtain.

For the 2nd query `),n("code",{node:"[object Object]"},[e("x"),n("sub",null,"i"),e(" = 1")]),e(" and "),n("code",{node:"[object Object]"},[e("y"),n("sub",null,"i"),e(" = 3")]),e(", we can select index "),n("code",{node:"[object Object]"},"j = 2"),e(" since "),n("code",{node:"[object Object]"},"nums1[j] >= 1"),e(" and "),n("code",{node:"[object Object]"},"nums2[j] >= 3"),e(". The sum "),n("code",{node:"[object Object]"},"nums1[j] + nums2[j]"),e(` is 10, and we can show that 10 is the maximum we can obtain. 

For the 3rd query `),n("code",{node:"[object Object]"},[e("x"),n("sub",null,"i"),e(" = 2")]),e(" and "),n("code",{node:"[object Object]"},[e("y"),n("sub",null,"i"),e(" = 5")]),e(", we can select index "),n("code",{node:"[object Object]"},"j = 3"),e(" since "),n("code",{node:"[object Object]"},"nums1[j] >= 2"),e(" and "),n("code",{node:"[object Object]"},"nums2[j] >= 5"),e(". The sum "),n("code",{node:"[object Object]"},"nums1[j] + nums2[j]"),e(` is 7, and we can show that 7 is the maximum we can obtain.

Therefore, we return `),n("code",{node:"[object Object]"},"[6,10,7]"),e(`.
`)],-1),n("p",null,[n("strong",{class:"example"},"Example 2:")],-1),n("pre",null,[e(""),n("strong",null,"Input:"),e(` nums1 = [3,2,5], nums2 = [2,3,4], queries = [[4,4],[3,2],[1,1]]
`),n("strong",null,"Output:"),e(` [9,9,9]
`),n("strong",null,"Explanation:"),e(" For this example, we can use index "),n("code",{node:"[object Object]"},"j = 2"),e(` for all the queries since it satisfies the constraints for each query.
`)],-1),n("p",null,[n("strong",{class:"example"},"Example 3:")],-1),n("pre",null,[e(""),n("strong",null,"Input:"),e(` nums1 = [2,1], nums2 = [2,3], queries = [[3,3]]
`),n("strong",null,"Output:"),e(` [-1]
`),n("strong",null,"Explanation:"),e(" There is one query in this example with "),n("code",{node:"[object Object]"},[e("x"),n("sub",null,"i")]),e(" = 3 and "),n("code",{node:"[object Object]"},[e("y"),n("sub",null,"i")]),e(" = 3. For every index, j, either nums1[j] < "),n("code",{node:"[object Object]"},[e("x"),n("sub",null,"i")]),e(" or nums2[j] < "),n("code",{node:"[object Object]"},[e("y"),n("sub",null,"i")]),e(`. Hence, there is no solution. 
`)],-1),s("",3)])])}const h=t(d,[["render",i]]);export{p as __pageData,h as default};
