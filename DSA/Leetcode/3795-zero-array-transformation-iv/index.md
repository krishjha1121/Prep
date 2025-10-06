## 3795. Zero Array Transformation IV

**Difficulty:** Medium

---

You are given an integer array `nums` of length `n` and a 2D array `queries`, where `queries[i] = [lᵢ, rᵢ, valᵢ]`.

Each `queries[i]` represents the following action on `nums`:

- Select a subset of indices in the range `[lᵢ, rᵢ]` from `nums`.
- Decrement the value at each selected index by **exactly** `valᵢ`.

A **Zero Array** is an array with all its elements equal to 0.

Return the **minimum** possible **non-negative** value of `k`, such that after processing the first `k` queries in **sequence**, `nums` becomes a **Zero Array**. If no such `k` exists, return -1.

### Example 1:

**Input:** `nums = [2,0,2], queries = [[0,2,1],[0,2,1],[1,1,3]]`

**Output:** `2`

**Explanation:**

- **For query 0 (l = 0, r = 2, val = 1):**
    - Decrement the values at indices `[0, 2]` by 1.
    - The array will become `[1, 0, 1]`.
- **For query 1 (l = 0, r = 2, val = 1):**
    - Decrement the values at indices `[0, 2]` by 1.
    - The array will become `[0, 0, 0]`, which is a Zero Array. Therefore, the minimum value of `k` is 2.

### Example 2:

**Input:** `nums = [4,3,2,1], queries = [[1,3,2],[0,2,1]]`

**Output:** `-1`

**Explanation:**

It is impossible to make nums a Zero Array even after all the queries.

### Example 3:

**Input:** `nums = [1,2,3,2,1], queries = [[0,1,1],[1,2,1],[2,3,2],[3,4,1],[4,4,1]]`

**Output:** `4`

**Explanation:**

- **For query 0 (l = 0, r = 1, val = 1):**
    - Decrement the values at indices `[0, 1]` by 1.
    - The array will become `[0, 1, 3, 2, 1]`.
- **For query 1 (l = 1, r = 2, val = 1):**
    - Decrement the values at indices `[1, 2]` by 1.
    - The array will become `[0, 0, 2, 2, 1]`.
- **For query 2 (l = 2, r = 3, val = 2):**
    - Decrement the values at indices `[2, 3]` by 2.
    - The array will become `[0, 0, 0, 0, 1]`.
- **For query 3 (l = 3, r = 4, val = 1):**
    - Decrement the value at index 4 by 1.
    - The array will become `[0, 0, 0, 0, 0]`. Therefore, the minimum value of `k` is 4.

### Example 4:

**Input:** `nums = [1,2,3,2,6], queries = [[0,1,1],[0,2,1],[1,4,2],[4,4,4],[3,4,1],[4,4,5]]`

**Output:** `4`

### Constraints:

- `1 <= nums.length <= 10`
- `0 <= nums[i] <= 1000`
- `1 <= queries.length <= 1000`
- `queries[i] = [lᵢ, rᵢ, valᵢ]`
- `0 <= lᵢ <= rᵢ < nums.length`
- `1 <= valᵢ <= 10`

```java
class Solution {
    public int minZeroArray(int[] nums, int[][] queries) {
        int n = nums.length;
        boolean flag = false;
        for (int ele : nums) {
            if (ele != 0)
                flag = true;
        }
        if (flag == false)
            return 0;
        int low = 0, high = queries.length - 1;
        int ans = -1;
        while (low <= high) {
            int mid = low + (high - low) / 2;
            if (ok(mid, queries, nums)) {
                ans = mid;
                high = mid - 1;
            } else
                low = mid + 1;
        }
        if (ans == -1)
            return ans;
        return ans + 1;
    }
    private boolean ok(int mid, int queries[][], int nums[]) {
        int n = nums.length;
        ArrayList<ArrayList<Integer >> res = new ArrayList<>();
        for (int i = 0; i < n; i++) res.add(new ArrayList<>());
        for (int i = 0; i <= mid; i++) {
            int u = queries[i][0], v = queries[i][1], val = queries[i][2];
            for (int j = u; j <= v; j++)
                res.get(j).add(val);
        }
        int arr[] = new int[n];
        for (int i = 0; i < n; i++) arr[i] = nums[i];
        for (int i = 0; i < n; i++) {
            if (arr[i] == 0)
                continue;
            if (arr[i] > 0 && res.get(i).size() == 0)
                return false;
            else {
                if (solve(arr[i], res.get(i)) == false)
                    return false;
            }
        }
        return true;
    }
    private boolean solve(int target, ArrayList<Integer> arr) {
        int n = arr.size();
        int dp[][] = new int[n + 1][target + 1];
        for (int current[] : dp)
            Arrays.fill(current, -1);
        int res = target_sum(0, arr, dp, target);
        return res == 1;
    }
    private int target_sum(int ind, ArrayList<Integer> arr, int dp[][], int target) {
        if (ind == arr.size() - 1) {
            if (target == 0 || target == arr.get(arr.size() - 1))
                return 1;
            return 0;
        }
        if (dp[ind][target] != -1)
            return dp[ind][target];
        int op1 = target_sum(ind + 1, arr, dp, target);
        int op2 = 0;
        if (target >= arr.get(ind))
            op2 = target_sum(ind + 1, arr, dp, target - arr.get(ind));
        return dp[ind][target] = op1 | op2;
    }
}
```
