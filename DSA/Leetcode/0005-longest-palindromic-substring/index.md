<div align = "center">
<h style = "margin-bottom: 0px; margin-top: 0px; color : purple;" align = "center" class = "header">

## ⌨ 5. Longest Palindromic Substring

</h>
</div>

<h2><a href="https://leetcode.com/problems/longest-palindromic-substring" target = "_blank">5. Longest Palindromic Substring</a></h2><h3>Medium</h3><hr><p>Given a string <code>s</code>, return <em>the longest</em> <span data-keyword="palindromic-string"><em>palindromic</em></span> <span data-keyword="substring-nonempty"><em>substring</em></span> in <code>s</code>.</p>

<p>&nbsp;</p>
<p><strong class="example">Example 1:</strong></p>

<pre>
<strong>Input:</strong> s = &quot;babad&quot;
<strong>Output:</strong> &quot;bab&quot;
<strong>Explanation:</strong> &quot;aba&quot; is also a valid answer.
</pre>

<p><strong class="example">Example 2:</strong></p>

<pre>
<strong>Input:</strong> s = &quot;cbbd&quot;
<strong>Output:</strong> &quot;bb&quot;
</pre>

<p>&nbsp;</p>
<p><strong>Constraints:</strong></p>

<ul>
	<li><code>1 &lt;= s.length &lt;= 1000</code></li>
	<li><code>s</code> consist of only digits and English letters.</li>
</ul>

<CodeTabs :languages="[
  { name: 'C++', slot: 'cpp' },
  { name: 'Java', slot: 'java' }
]">

<template #java>

```java
import java.math.BigInteger;
import java.util.Random;

class Solution {
    public String longestPalindrome(String s) {
        int n = s.length();
        for (int i = n; i >= 1; i--) {
            String res = check(s, i);
            if (!res.equals(""))
                return res;
        }
        String res = "";
        res += s.charAt(0);
        return res;
    }
    private static String check(String s, int len) {
        int n = s.length();
        StringBuilder t = new StringBuilder(s);
        Hashing hash1 = new Hashing(s);
        Hashing hash2 = new Hashing(t.reverse().toString());
        for (int i = 0; i < n; i++) {
            if (i + len - 1 < n) {
                long Hash1 = hash1.getHashbounds(i, i + len / 2 - 1);
                long Hash2 = hash2.getHashbounds(n - (i + len), (n - (i + len) + len / 2 - 1));
                if (Hash1 == Hash2) {
                    StringBuilder res = new StringBuilder();
                    for (int j = i; j <= i + len - 1; j++)
                        res.append(s.charAt(j));
                    return res.toString();
                }
            }
        }
        return "";
    }
    static class Hashing {
        long[] hash1, hash2;
        long[] inv1, inv2;
        int n;
        static int muresiplier = 43;
        static final Random rnd = new Random();
        static final int mod1 = BigInteger.valueOf((int)(1e9 + rnd.nextInt((int) 1e9))).nextProbablePrime().intValue();
        static final int mod2 = BigInteger.valueOf((int)(1e9 + rnd.nextInt((int) 1e9))).nextProbablePrime().intValue();
        static final int invMuresiplier1 = BigInteger.valueOf(muresiplier).modInverse(BigInteger.valueOf(mod1)).intValue();
        static final int invMuresiplier2 = BigInteger.valueOf(muresiplier).modInverse(BigInteger.valueOf(mod2)).intValue();
        public Hashing(String s) {
            n = s.length();
            hash1 = new long[n + 1];
            hash2 = new long[n + 1];
            inv1 = new long[n + 1];
            inv2 = new long[n + 1];
            inv1[0] = 1;
            inv2[0] = 1;
            long p1 = 1;
            long p2 = 1;
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
        public long getHashbounds(int x, int y) {
            return getHash(x, y - x + 1);
        }
    }
}
```

</template>

<template #cpp>

```cpp
#include <bits/stdc++.h>
using namespace std;

struct RollingHash {
    int n;
    uint64_t mod1, mod2;
    uint64_t mul;
    vector<uint64_t> h1, h2;
    vector<uint64_t> inv1, inv2;

    static uint64_t modPow(uint64_t a, uint64_t e, uint64_t mod) {
        uint64_t res = 1;
        a %= mod;
        while (e) {
            if (e & 1) res = (__uint128_t)res * a % mod;
            a = (__uint128_t)a * a % mod;
            e >>= 1;
        }
        return res;
    }

    RollingHash(const string &s,
                uint64_t _mul = 43,
                uint64_t _mod1 = 1000000007ULL,
                uint64_t _mod2 = 1000000009ULL)
        : n((int)s.size()), mod1(_mod1), mod2(_mod2), mul(_mul) {
        h1.assign(n + 1, 0);
        h2.assign(n + 1, 0);
        inv1.assign(n + 1, 0);
        inv2.assign(n + 1, 0);

        uint64_t p1 = 1, p2 = 1;
        uint64_t invMul1 = modPow(mul, mod1 - 2, mod1); // mod1 is prime
        uint64_t invMul2 = modPow(mul, mod2 - 2, mod2); // mod2 is prime

        inv1[0] = 1;
        inv2[0] = 1;

        for (int i = 0; i < n; ++i) {
            h1[i + 1] = (h1[i] + (uint64_t)(unsigned char)s[i] * p1) % mod1;
            p1 = (p1 * mul) % mod1;
            inv1[i + 1] = (inv1[i] * invMul1) % mod1;

            h2[i + 1] = (h2[i] + (uint64_t)(unsigned char)s[i] * p2) % mod2;
            p2 = (p2 * mul) % mod2;
            inv2[i + 1] = (inv2[i] * invMul2) % mod2;
        }
    }

    // return combined 64-bit hash for substring [i, i+len-1]
    uint64_t getHash(int i, int len) const {
        uint64_t x1 = ( (h1[i + len] + mod1) - h1[i] ) % mod1;
        x1 = (__uint128_t)x1 * inv1[i] % mod1;

        uint64_t x2 = ( (h2[i + len] + mod2) - h2[i] ) % mod2;
        x2 = (__uint128_t)x2 * inv2[i] % mod2;

        return (x1 << 32) ^ x2; // pack into 64-bit
    }

    uint64_t getHashBounds(int l, int r) const { // inclusive bounds
        return getHash(l, r - l + 1);
    }
};

class Solution {
public:
    string longestPalindrome(const string &s) {
        int n = (int)s.size();
        if (n == 0) return "";
        for (int len = n; len >= 1; --len) {
            string res = check(s, len);
            if (!res.empty()) return res;
        }
        // fallback (shouldn't reach if input non-empty)
        return string(1, s[0]);
    }

private:
    static string check(const string &s, int len) {
        int n = (int)s.size();
        string rev = s;
        reverse(rev.begin(), rev.end());

        // You can randomize mods/multiplier but using fixed primes is fine.
        RollingHash hS(s);
        RollingHash hR(rev);

        for (int i = 0; i < n; ++i) {
            if (i + len - 1 < n) {
                // In Java code you compared first half hashes with reversed counterpart:
                int halfLen = len / 2;
                if (halfLen == 0) { // len == 1
                    // single character always palindrome
                    return s.substr(i, 1);
                }
                uint64_t hash1 = hS.getHashBounds(i, i + halfLen - 1);
                // compute corresponding indices in reversed string:
                // original substring is s[i..i+len-1]
                // in reversed string, starting index for that substring is n - (i + len)
                int revStart = n - (i + len);
                if (revStart < 0 || revStart + halfLen - 1 >= n) continue;
                uint64_t hash2 = hR.getHashBounds(revStart, revStart + halfLen - 1);

                if (hash1 == hash2) {
                    // verify by direct extract (to be safe against collisions)
                    string candidate = s.substr(i, len);
                    string rc = candidate;
                    reverse(rc.begin(), rc.end());
                    if (candidate == rc) return candidate;
                }
            }
        }
        return "";
    }
};

// Example usage:
int main() {
    ios::sync_with_stdio(false);
    cin.tie(nullptr);

    Solution sol;
    string s;
    // read a single line input (string)
    if (getline(cin, s)) {
        cout << sol.longestPalindrome(s) << '\n';
    }
    return 0;
}



```

</template>

</CodeTabs>

