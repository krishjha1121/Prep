# 🔄 Rotations in AVL Tree

AVL trees are self-balancing binary search trees where the height difference between left and right subtrees (balance factor) is at most 1 for every node. When this balance is violated due to insertions or deletions, rotations are performed to restore balance.

**Balance Factor** = Height of Left Subtree - Height of Right Subtree
- Valid range: {-1, 0, 1}
- If BF > 1: Left heavy (needs right rotation)
- If BF < -1: Right heavy (needs left rotation)

## Types of Rotations

There are four types of rotations in AVL trees:

1. Right Rotation (LL case)
2. Left Rotation (RR case) 
3. Left-Right Rotation (LR case)
4. Right-Left Rotation (RL case)

## Right Rotation (LL Case)

**When to use**: When a node has a balance factor > 1 and the left child has balance factor ≥ 0 (Left-Left case).

### Before Rotation (Imbalanced Tree)

```mermaid
graph TD
    A["30<br/>BF=2"] --> B["20<br/>BF=1"]
    A --> C["null"]
    B --> D["10<br/>BF=0"]
    B --> E["25<br/>BF=0"]
    D --> F["5<br/>BF=0"]
    D --> G["null"]
    
    style A fill:#ff6b6b,stroke:#333,stroke-width:3px
    style B fill:#4ecdc4,stroke:#333,stroke-width:2px
    style D fill:#45b7d1,stroke:#333,stroke-width:2px
    style E fill:#96ceb4,stroke:#333,stroke-width:1px
    style F fill:#96ceb4,stroke:#333,stroke-width:1px
    style C fill:#ddd,stroke:#333,stroke-width:1px
    style G fill:#ddd,stroke:#333,stroke-width:1px
```

### After Right Rotation (Balanced Tree)

```mermaid
graph TD
    B["20<br/>BF=0"] --> D["10<br/>BF=-1"]
    B --> A["30<br/>BF=0"]
    D --> F["5<br/>BF=0"]
    D --> G["null"]
    A --> E["25<br/>BF=0"]
    A --> C["null"]
    
    style A fill:#96ceb4,stroke:#333,stroke-width:2px
    style B fill:#4ecdc4,stroke:#333,stroke-width:3px
    style D fill:#45b7d1,stroke:#333,stroke-width:2px
    style E fill:#96ceb4,stroke:#333,stroke-width:1px
    style F fill:#96ceb4,stroke:#333,stroke-width:1px
    style C fill:#ddd,stroke:#333,stroke-width:1px
    style G fill:#ddd,stroke:#333,stroke-width:1px
```

## Left Rotation (RR Case)

**When to use**: When a node has a balance factor < -1 and the right child has balance factor ≤ 0 (Right-Right case).

### Before Rotation (Imbalanced Tree)

```mermaid
graph TD
    A["10<br/>BF=-2"] --> B["null"]
    A --> C["20<br/>BF=-1"]
    C --> D["15<br/>BF=0"]
    C --> E["30<br/>BF=0"]
    E --> F["null"]
    E --> G["35<br/>BF=0"]
    
    style A fill:#ff6b6b,stroke:#333,stroke-width:3px
    style C fill:#4ecdc4,stroke:#333,stroke-width:2px
    style E fill:#45b7d1,stroke:#333,stroke-width:2px
    style D fill:#96ceb4,stroke:#333,stroke-width:1px
    style G fill:#96ceb4,stroke:#333,stroke-width:1px
    style B fill:#ddd,stroke:#333,stroke-width:1px
    style F fill:#ddd,stroke:#333,stroke-width:1px
```

### After Left Rotation (Balanced Tree)

```mermaid
graph TD
    C["20<br/>BF=0"] --> A["10<br/>BF=0"]
    C --> E["30<br/>BF=1"]
    A --> B["null"]
    A --> D["15<br/>BF=0"]
    E --> F["null"]
    E --> G["35<br/>BF=0"]
    
    style A fill:#96ceb4,stroke:#333,stroke-width:2px
    style C fill:#4ecdc4,stroke:#333,stroke-width:3px
    style E fill:#45b7d1,stroke:#333,stroke-width:2px
    style D fill:#96ceb4,stroke:#333,stroke-width:1px
    style G fill:#96ceb4,stroke:#333,stroke-width:1px
    style B fill:#ddd,stroke:#333,stroke-width:1px
    style F fill:#ddd,stroke:#333,stroke-width:1px
```

## Left-Right Rotation (LR Case)

**When to use**: When a node has a balance factor > 1 and the left child has balance factor < 0 (Left-Right case).

This is a double rotation: first left rotate the left child, then right rotate the root.

### Before Rotation (Imbalanced Tree)

```mermaid
graph TD
    A["30<br/>BF=2"] --> B["10<br/>BF=-1"]
    A --> C["null"]
    B --> D["null"]
    B --> E["20<br/>BF=0"]
    E --> F["15<br/>BF=0"]
    E --> G["25<br/>BF=0"]
    
    style A fill:#ff6b6b,stroke:#333,stroke-width:3px
    style B fill:#4ecdc4,stroke:#333,stroke-width:2px
    style E fill:#45b7d1,stroke:#333,stroke-width:2px
    style F fill:#96ceb4,stroke:#333,stroke-width:1px
    style G fill:#96ceb4,stroke:#333,stroke-width:1px
    style C fill:#ddd,stroke:#333,stroke-width:1px
    style D fill:#ddd,stroke:#333,stroke-width:1px
```

### After First Rotation (Left on 10)

```mermaid
graph TD
    A["30<br/>BF=2"] --> E["20<br/>BF=1"]
    A --> C["null"]
    E --> B["10<br/>BF=1"]
    E --> G["25<br/>BF=0"]
    B --> D["null"]
    B --> F["15<br/>BF=0"]
    
    style A fill:#ff6b6b,stroke:#333,stroke-width:3px
    style B fill:#96ceb4,stroke:#333,stroke-width:2px
    style E fill:#45b7d1,stroke:#333,stroke-width:2px
    style F fill:#96ceb4,stroke:#333,stroke-width:1px
    style G fill:#96ceb4,stroke:#333,stroke-width:1px
    style C fill:#ddd,stroke:#333,stroke-width:1px
    style D fill:#ddd,stroke:#333,stroke-width:1px
```

### After Second Rotation (Right on 30) - Balanced Tree

```mermaid
graph TD
    E["20<br/>BF=0"] --> B["10<br/>BF=1"]
    E --> A["30<br/>BF=0"]
    B --> D["null"]
    B --> F["15<br/>BF=0"]
    A --> G["25<br/>BF=0"]
    A --> C["null"]
    
    style A fill:#96ceb4,stroke:#333,stroke-width:2px
    style B fill:#96ceb4,stroke:#333,stroke-width:2px
    style E fill:#4ecdc4,stroke:#333,stroke-width:3px
    style F fill:#96ceb4,stroke:#333,stroke-width:1px
    style G fill:#96ceb4,stroke:#333,stroke-width:1px
    style C fill:#ddd,stroke:#333,stroke-width:1px
    style D fill:#ddd,stroke:#333,stroke-width:1px
```

## Right-Left Rotation (RL Case)

**When to use**: When a node has a balance factor < -1 and the right child has balance factor > 0 (Right-Left case).

This is a double rotation: first right rotate the right child, then left rotate the root.

### Before Rotation (Imbalanced Tree)

```mermaid
graph TD
    A["10<br/>BF=-2"] --> B["null"]
    A --> C["30<br/>BF=1"]
    C --> D["20<br/>BF=0"]
    C --> E["null"]
    D --> F["15<br/>BF=0"]
    D --> G["25<br/>BF=0"]
    
    style A fill:#ff6b6b,stroke:#333,stroke-width:3px
    style C fill:#4ecdc4,stroke:#333,stroke-width:2px
    style D fill:#45b7d1,stroke:#333,stroke-width:2px
    style F fill:#96ceb4,stroke:#333,stroke-width:1px
    style G fill:#96ceb4,stroke:#333,stroke-width:1px
    style B fill:#ddd,stroke:#333,stroke-width:1px
    style E fill:#ddd,stroke:#333,stroke-width:1px
```

### After First Rotation (Right on 30)

```mermaid
graph TD
    A["10<br/>BF=-2"] --> B["null"]
    A --> D["20<br/>BF=-1"]
    D --> F["15<br/>BF=0"]
    D --> C["30<br/>BF=-1"]
    C --> G["25<br/>BF=0"]
    C --> E["null"]
    
    style A fill:#ff6b6b,stroke:#333,stroke-width:3px
    style C fill:#96ceb4,stroke:#333,stroke-width:2px
    style D fill:#45b7d1,stroke:#333,stroke-width:2px
    style F fill:#96ceb4,stroke:#333,stroke-width:1px
    style G fill:#96ceb4,stroke:#333,stroke-width:1px
    style B fill:#ddd,stroke:#333,stroke-width:1px
    style E fill:#ddd,stroke:#333,stroke-width:1px
```

### After Second Rotation (Left on 10) - Balanced Tree

```mermaid
graph TD
    D["20<br/>BF=0"] --> A["10<br/>BF=1"]
    D --> C["30<br/>BF=-1"]
    A --> B["null"]
    A --> F["15<br/>BF=0"]
    C --> G["25<br/>BF=0"]
    C --> E["null"]
    
    style A fill:#96ceb4,stroke:#333,stroke-width:2px
    style C fill:#96ceb4,stroke:#333,stroke-width:2px
    style D fill:#4ecdc4,stroke:#333,stroke-width:3px
    style F fill:#96ceb4,stroke:#333,stroke-width:1px
    style G fill:#96ceb4,stroke:#333,stroke-width:1px
    style B fill:#ddd,stroke:#333,stroke-width:1px
    style E fill:#ddd,stroke:#333,stroke-width:1px
```

## Summary of AVL Tree Rotations

| Case | Rotation Type | When to Use | Steps |
|------|---------------|-------------|-------|
| LL | Right Rotation | Balance factor > 1 and left child has BF ≥ 0 | Single right rotation on the unbalanced node |
| RR | Left Rotation | Balance factor < -1 and right child has BF ≤ 0 | Single left rotation on the unbalanced node |
| LR | Left-Right Rotation | Balance factor > 1 and left child has BF < 0 | Left rotation on left child, then right rotation on root |
| RL | Right-Left Rotation | Balance factor < -1 and right child has BF > 0 | Right rotation on right child, then left rotation on root |

## Key Points to Remember

- **Red nodes** in diagrams indicate imbalanced nodes (BF > 1 or BF < -1)
- **Balance Factor (BF)** = Height of Left Subtree - Height of Right Subtree
- AVL trees maintain balance by ensuring all nodes have BF ∈ {-1, 0, 1}
- Single rotations fix LL and RR cases
- Double rotations fix LR and RL cases
- After rotations, the tree becomes balanced and maintains BST property
