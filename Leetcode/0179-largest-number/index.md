<div align = "center">
<h style = "margin-bottom: 0px; margin-top: 0px; color : purple;" align = "center" class = "header">

## ⌨ 179. Largest Number

</h>
</div>

<h2><a href="https://leetcode.com/problems/largest-number" target = "_blank">179. Largest Number</a></h2><h3>Medium</h3><hr><p>Given a list of non-negative integers <code>nums</code>, arrange them such that they form the largest number and return it.</p>

<p>Since the result may be very large, so you need to return a string instead of an integer.</p>

<p>&nbsp;</p>
<p><strong class="example">Example 1:</strong></p>

<pre>
<strong>Input:</strong> nums = [10,2]
<strong>Output:</strong> &quot;210&quot;
</pre>

<p><strong class="example">Example 2:</strong></p>

<pre>
<strong>Input:</strong> nums = [3,30,34,5,9]
<strong>Output:</strong> &quot;9534330&quot;
</pre>

<p>&nbsp;</p>
<p><strong>Constraints:</strong></p>

<ul>
	<li><code>1 &lt;= nums.length &lt;= 100</code></li>
	<li><code>0 &lt;= nums[i] &lt;= 10<sup>9</sup></code></li>
</ul>

<CodeTabs :languages="[
  { name: 'C++', slot: 'cpp' },
  { name: 'Java', slot: 'java' }
]">

<template #java>

```java
class Solution {
    static class custom_sort implements Comparator<String> {
        @Override
        public int compare(String first, String second) {
            String a = first + second;
            String b = second + first;
            return b.compareTo(a);
        }
    }
    public String largestNumber(int[] nums) {
        int n = nums.length;
        ArrayList<String> res = new ArrayList<>();
        for (int ele : nums)
            res.add(String.valueOf(ele));
        Collections.sort(res, new custom_sort());
        if (res.size() > 0 && res.get(0).equals("0"))
            return "0";
        String ans = "";
        for (String temp : res)
            ans += temp;
        return ans;
    }
}
```

</template>

<template #cpp>

```cpp
class Solution {
public:
    static bool comp(int &x , int &y){
        string a = to_string(x);
        string b = to_string(y);

        return (a + b > b + a);
    }
    string largestNumber(vector<int>& nums) {
        int n = nums.size();
        sort(nums.begin() , nums.end() , comp);

        string res ="";
        for(int i = 0 ; i < n ; i++){
            res += to_string(nums[i]);
        }
        if(res[0] == '0'){
            return "0";
        }
        return res;
    }
};
```

</template>

</CodeTabs>
