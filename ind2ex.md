# leetcode461

### 461. Hamming Distance
#### 汉明距离 给定两个整数x,y，计算x和y的汉明距离。汉明距离是指x、y的二进制表示中，相同位置上数字不相同的所有情况数。


#### python:

```python
class Solution(object):
    def hammingDistance(self, x, y):
        """
        :type x: int
        :type y: int
        :rtype: int
        """
        return bin(x^y).count('1')
```

#### golang:
```golang

func hammingDistance(x int, y int) int {
    b2 := x^y
    b3 := fmt.Sprintf("%b",b2)
    sum :=0
    for i:=0;i<len(b3);i++{
        if(string(b3[i])=="1"){
           sum++
        }
    }
    return sum
}
```

#### c++:
```c++
class Solution {
public:
    int hammingDistance(int x, int y) {
        int dist = 0, n = x ^ y;
        while (n) {
            ++dist;
            n &= n - 1;
        }
        return dist;
    }
};
```

### java:
```java
public int hammingDistance(int x, int y) {
    int xor = x ^ y, count = 0;
    for (int i=0;i<32;i++) {
    count += (xor >> i) & 1;
    }
    return count;
}
```