<div align = "center">
<h style = "margin-bottom: 0px; margin-top: 0px; color : purple;" align = "center" class = "header">

## ⌨ 2249. Count the Hidden Sequences

</h>
</div>

## 2249. Count the Hidden Sequences

**Difficulty:** Medium

---

You are given a **0-indexed** array of `n` integers `differences`, which describes the **differences** between each pair of **consecutive** integers of a **hidden** sequence of length `(n + 1)`. More formally, call the hidden sequence `hidden`, then we have that `differences[i] = hidden[i + 1] - hidden[i]`.

You are further given two integers `lower` and `upper` that describe the **inclusive** range of values `[lower, upper]` that the hidden sequence can contain.

- For example, given `differences = [1, -3, 4]`, `lower = 1`, `upper = 6`, the hidden sequence is a sequence of length `4` whose elements are in between `1` and `6` (**inclusive**).
    - `[3, 4, 1, 5]` and `[4, 5, 2, 6]` are possible hidden sequences.
    - `[5, 6, 3, 7]` is not possible since it contains an element greater than `6`.
    - `[1, 2, 3, 4]` is not possible since the differences are not correct.

Return _the number of **possible** hidden sequences there are._ If there are no possible sequences, return `0`.

### Example 1:

**Input:** `differences = [1,-3,4], lower = 1, upper = 6`

**Output:** `2`

**Explanation:** The possible hidden sequences are:

- `[3, 4, 1, 5]`
- `[4, 5, 2, 6]`

Thus, we return 2.

### Example 2:

**Input:** `differences = [3,-4,5,1,-2], lower = -4, upper = 5`

**Output:** `4`

**Explanation:** The possible hidden sequences are:

- `[-3, 0, -4, 1, 2, 0]`
- `[-2, 1, -3, 2, 3, 1]`
- `[-1, 2, -2, 3, 4, 2]`
- `[0, 3, -1, 4, 5, 3]`

Thus, we return 4.

### Example 3:

**Input:** `differences = [4,-7,2], lower = 3, upper = 6`

**Output:** `0`

**Explanation:** There are no possible hidden sequences. Thus, we return 0.

### Constraints:

- `n == differences.length`
- `1 <= n <= 10^5`
- `-10^5 <= differences[i] <= 10^5`
- `-10^5 <= lower <= upper <= 10^5`

<CodeTabs :languages="[ { name: 'C++', slot: 'cpp' }, { name: 'Java', slot: 'java' } ]">

<template #java>

```java
class Solution {
    public int numberOfArrays(int[] arr, int lower, int upper) {
        int n = arr.length;
        int pref[] = new int[n];
        pref[0] = arr[0];
        for (int i = 1; i < n; i++)
            pref[i] = pref[i - 1] + arr[i];
        int a = 0, b = 0;
        for (int i = 0; i < n; i++) {
            a = Math.min(a, pref[i]);
            b = Math.max(b, pref[i]);
            if (b - a > upper - lower)
                return 0;
        }
        return (upper - lower) - (b - a) + 1;
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
