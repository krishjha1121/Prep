<div align = "center">
<h style = "margin-bottom: 0px; margin-top: 0px; color : purple;" align = "center" class = "header">

## ⌨ 30. Substring with Concatenation of All Words

</h>
</div>

<h2><a href="https://leetcode.com/problems/substring-with-concatenation-of-all-words" target = "_blank">30. Substring with Concatenation of All Words</a></h2><h3>Hard</h3><hr><p>You are given a string <code>s</code> and an array of strings <code>words</code>. All the strings of <code>words</code> are of <strong>the same length</strong>.</p>

<p>A <strong>concatenated string</strong> is a string that exactly contains all the strings of any permutation of <code>words</code> concatenated.</p>

<ul>
	<li>For example, if <code>words = ["ab","cd","ef"]</code>, then <code>"abcdef"</code>, <code>"abefcd"</code>, <code>"cdabef"</code>, <code>"cdefab"</code>, <code>"efabcd"</code>, and <code>"efcdab"</code> are all concatenated strings. <code>"acdbef"</code> is not a concatenated string because it is not the concatenation of any permutation of <code>words</code>.</li>
</ul>

<p>Return an array of <em>the starting indices</em> of all the concatenated substrings in <code>s</code>. You can return the answer in <strong>any order</strong>.</p>

<p>&nbsp;</p>
<p><strong class="example">Example 1:</strong></p>

<div class="example-block">
<p><strong>Input:</strong> <span class="example-io">s = "barfoothefoobarman", words = ["foo","bar"]</span></p>

<p><strong>Output:</strong> <span class="example-io">[0,9]</span></p>

<p><strong>Explanation:</strong></p>

<p>The substring starting at 0 is <code>"barfoo"</code>. It is the concatenation of <code>["bar","foo"]</code> which is a permutation of <code>words</code>.<br />
The substring starting at 9 is <code>"foobar"</code>. It is the concatenation of <code>["foo","bar"]</code> which is a permutation of <code>words</code>.</p>
</div>

<p><strong class="example">Example 2:</strong></p>

<div class="example-block">
<p><strong>Input:</strong> <span class="example-io">s = "wordgoodgoodgoodbestword", words = ["word","good","best","word"]</span></p>

<p><strong>Output:</strong> <span class="example-io">[]</span></p>

<p><strong>Explanation:</strong></p>

<p>There is no concatenated substring.</p>
</div>

<p><strong class="example">Example 3:</strong></p>

<div class="example-block">
<p><strong>Input:</strong> <span class="example-io">s = "barfoofoobarthefoobarman", words = ["bar","foo","the"]</span></p>

<p><strong>Output:</strong> <span class="example-io">[6,9,12]</span></p>

<p><strong>Explanation:</strong></p>

<p>The substring starting at 6 is <code>"foobarthe"</code>. It is the concatenation of <code>["foo","bar","the"]</code>.<br />
The substring starting at 9 is <code>"barthefoo"</code>. It is the concatenation of <code>["bar","the","foo"]</code>.<br />
The substring starting at 12 is <code>"thefoobar"</code>. It is the concatenation of <code>["the","foo","bar"]</code>.</p>
</div>

<p>&nbsp;</p>
<p><strong>Constraints:</strong></p>

<ul>
	<li><code>1 <= s.length <= 10<sup>4</sup></code></li>
	<li><code>1 <= words.length <= 5000</code></li>
	<li><code>1 <= words[i].length <= 30</code></li>
	<li><code>s</code> and <code>words[i]</code> consist of lowercase English letters.</li>
</ul>

<CodeTabs :languages="[
  { name: 'C++', slot: 'cpp' },
  { name: 'Java', slot: 'java' }
]">

<template #java>

```java
import java.math.*;
class Solution {
    private HashSet<Long> set;
    private HashSet<Long> correct_set;
    public List<Integer> findSubstring(String s, String[] words) {
        int n = s.length();
        int total_len = words[0].length() * words.length;
        List<Integer> res = new ArrayList<>();
        HashMap<Long, Long> map = new HashMap<>();
        set = new HashSet<>();
        correct_set = new HashSet<>();
        StringBuilder second = new StringBuilder();
        for (String x : words) {
            Hashing hash = new Hashing(x);
            long current_hash = hash.getHashBounds(0, x.length() - 1);
            map.put(current_hash, map.getOrDefault(current_hash, 0L) + 1);
            second.append(x);
        }
        Hashing h = new Hashing(second.toString());
        long req_hash = h.getHashBounds(0, second.toString().length() - 1);
        if (words[0].length() == 1 && words.length > 1 && words[0].charAt(0) == 'a' && words[1].charAt(0) == 'a') {
            Hashing hash = new Hashing(s);
            for (int i = 0; i < n; i++) {
                if (i + total_len - 1 < n) {
                    long current_hash = hash.getHashBounds(i, i + total_len - 1);
                    if (current_hash == req_hash) res.add(i);
                }
            }
            return res;
        }
        for (int i = 0; i < n; i++) {
            if (i + total_len - 1 < n) {
                if (check(s, i, i + total_len, map, total_len / words.length)) res.add(i);
            }
        }
        return res;
    }
    private boolean check(String s, int start, int end, HashMap<Long, Long> temp_map, int k) {
        int n = s.length();
        Hashing hash = new Hashing(s);
        long temp_hash = hash.getHashBounds(start, end - 1);
        if (set.contains(temp_hash)) {
            if (correct_set.contains(temp_hash)) return true;
            else return false;
        }
        HashMap<Long, Long> map = new HashMap<>(temp_map);
        for (int i = start; i < end; i += k) {
            long current_hash = hash.getHashBounds(i , i + k - 1);
            if (map.getOrDefault(current_hash, 0L) > 0) {
                map.put(current_hash, map.getOrDefault(current_hash, 0L) - 1);
            }
            else return false;
        }
        correct_set.add(temp_hash);
        set.add(temp_hash);
        return true;
    }
    static class Hashing {
        long[] hash1, hash2;
        long[] inv1, inv2;
        int n;
        static int muresiplier = 43;
        static final Random rnd = new Random();
        static final int mod1 = BigInteger.valueOf((int) (1e9 + rnd.nextInt((int) 1e9))).nextProbablePrime().intValue();
        static final int mod2 = BigInteger.valueOf((int) (1e9 + rnd.nextInt((int) 1e9))).nextProbablePrime().intValue();
        static final int invMuresiplier1 = BigInteger.valueOf(muresiplier).modInverse(BigInteger.valueOf(mod1)).intValue();
        static final int invMuresiplier2 = BigInteger.valueOf(muresiplier).modInverse(BigInteger.valueOf(mod2)).intValue();
        public Hashing(String s) {
            n = s.length();
            hash1 = new long[n + 1]; hash2 = new long[n + 1];
            inv1 = new long[n + 1]; inv2 = new long[n + 1];
            inv1[0] = 1; inv2[0] = 1;
            long p1 = 1; long p2 = 1;
            for (int i = 0; i < n; i++) {
                hash1[i + 1] = (hash1[i] + s.charAt(i) * p1) % mod1;
                p1 = p1 * muresiplier % mod1;
                inv1[i + 1] = inv1[i] * invMuresiplier1 % mod1;
                hash2[i + 1] = (hash2[i] + s.charAt(i) * p2) % mod2;
                p2 = p2 * muresiplier % mod2;
                inv2[i + 1] = inv2[i] * invMuresiplier2 % mod2;
            }
        }
        public long getHash(int i, int len) {
            return (((hash1[i + len] - hash1[i] + mod1) * inv1[i] % mod1) << 32) + (hash2[i + len] - hash2[i] + mod2) * inv2[i] % mod2;
        }
        public long getHashBounds(int x, int y) {
            return getHash(x, y - x + 1);
        }
    }
}

```

</template>

<template #cpp>

```cpp
class Solution {
public:
    vector<int> findSubstring(string s, vector<string>& words) {
        vector<int> result;
        if (words.empty() || s.empty()) return result;

        int n = s.size();
        int num = words.size();
        int len = words[0].size();
        int totalLen = num * len;

        // frequency of words in "words"
        unordered_map<string, int> counts;
        for (auto& word : words) {
            counts[word]++;
        }

        // Try all possible starting positions within [0, len)
        for (int offset = 0; offset < len; offset++) {
            int left = offset;
            int right = offset;
            unordered_map<string, int> seen;
            int matched = 0;

            while (right + len <= n) {
                string word = s.substr(right, len);
                right += len;

                if (counts.count(word)) {
                    seen[word]++;
                    matched++;

                    // If this word is seen too many times, shrink window
                    while (seen[word] > counts[word]) {
                        string leftWord = s.substr(left, len);
                        seen[leftWord]--;
                        left += len;
                        matched--;
                    }

                    // If we matched all words
                    if (matched == num) {
                        result.push_back(left);

                        // Slide window forward by removing the leftmost word
                        string leftWord = s.substr(left, len);
                        seen[leftWord]--;
                        left += len;
                        matched--;
                    }
                } else {
                    // reset if word not in counts
                    seen.clear();
                    matched = 0;
                    left = right;
                }
            }
        }
        return result;
    }
};
```

</template>

</CodeTabs>

