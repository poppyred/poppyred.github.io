# leetcode657

### 657. Judge Route Circle
#### 汉明距离 给定两个整数x,y，计算x和y的汉明距离。汉明距离是指x、y的二进制表示中，相同位置上数字不相同的所有情况数。


#### python:

```python
class Solution(object):
    def judgeCircle(self, moves):
        return moves.count("L")==moves.count("R") and moves.count("U")==moves.count("D")
```

#### golang:
```golang
func judgeCircle(moves string) bool {
    x:=0
    y:=0
    for i:=0;i<len(moves);i++ {
        m := moves[i]
        switch m {
            case 'U':
                    x++
            case 'D':
                    x--
            case 'L':
                    y++
            case 'R':
                    y--
        }
    }
    return x==0 && y==0
}
```

#### c++:
```c++
class Solution {
public:
    bool judgeCircle(string moves) {
        int x=0;
        int y=0;
        for(char m :moves){
            if (m=='U'){
                x++;
            }
            if (m=='D'){
                x--;
            }
            if (m=='L'){
                y++;
            }
            if (m=='R'){
                y--;
            }
        }
        return x==0&&y==0;
    }
};
```

### java:
```java
class Solution {
    public boolean judgeCircle(String moves) {
        int x=0,y=0;
        for(char m : moves.toCharArray()){
            if (m =='U') x++;
            if (m =='D') x--;
            if (m =='L') y++;
            if (m =='R') y--;
        }
        return (x==0 && y==0);
    }
}
```




### javascript:
```javascript
    // var x=0;var y=0;
    // for(a of moves){
    //     switch(a){
    //         case "U":
    //             x++
    //             break
    //         case "D":
    //             x--
    //             break
    //         case "L":
    //             y++
    //             break
    //         case "R":
    //             y--
    //             break
    //     }
    // }
    // return y==0 && x==0

        return moves.split("L").length == moves.split("R").length && moves.split("U").length == moves.split("D").length;
```