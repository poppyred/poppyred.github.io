# leetcode

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