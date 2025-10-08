<div align = "center">
<h style = "margin-bottom: 0px; margin-top: 0px; color : purple;" align = "center" class = "header">

## ⌨ 3625. Stone Removal Game

</h>
</div>

<h2><a href="https://leetcode.com/problems/stone-removal-game" target = "_blank">3625. Stone Removal Game</a></h2><h3>Easy</h3><hr><p>Alice and Bob are playing a game where they take turns removing stones from a pile, with <em>Alice going first</em>.</p>

<ul>
	<li>Alice starts by removing <strong>exactly</strong> 10 stones on her first turn.</li>
	<li>For each subsequent turn, each player removes <strong>exactly</strong> 1 fewer<strong> </strong>stone<strong> </strong>than the previous opponent.</li>
</ul>

<p>The player who cannot make a move loses the game.</p>

<p>Given a positive integer <code>n</code>, return <code>true</code> if Alice wins the game and <code>false</code> otherwise.</p>

<p>&nbsp;</p>
<p><strong class="example">Example 1:</strong></p>

<div class="example-block">
<p><strong>Input:</strong> <span class="example-io">n = 12</span></p>

<p><strong>Output:</strong> <span class="example-io">true</span></p>

<p><strong>Explanation:</strong></p>

<ul>
	<li>Alice removes 10 stones on her first turn, leaving 2 stones for Bob.</li>
	<li>Bob cannot remove 9 stones, so Alice wins.</li>
</ul>
</div>

<p><strong class="example">Example 2:</strong></p>

<div class="example-block">
<p><strong>Input:</strong> <span class="example-io">n = 1</span></p>

<p><strong>Output:</strong> <span class="example-io">false</span></p>

<p><strong>Explanation:</strong></p>

<ul>
	<li>Alice cannot remove 10 stones, so Alice loses.</li>
</ul>
</div>

<p>&nbsp;</p>
<p><strong>Constraints:</strong></p>

<ul>
	<li><code>1 &lt;= n &lt;= 50</code></li>
</ul>

<CodeTabs :languages="[ { name: 'C++', slot: 'cpp' }, { name: 'Java', slot: 'java' } ]">

<template #java>

```java
class Solution {
    public boolean canAliceWin(int n) {
        if (n < 10)
            return false;
        int turn = 2, req = 9;
        n -= 10;
        while (n >= req) {
            n -= req;
            req--;
            if (turn == 2)
                turn = 1;
            else
                turn = 2;
        }
        return turn == 2;
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
