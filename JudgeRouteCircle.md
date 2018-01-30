# leetcode657

### 657. Judge Route Circle
#### 最初位置（0，0）处有一个机器人。给出它的一系列动作，判断这个机器人是否形成一个圆，相当于让它回到原点。移动序列用字符串表示。而每一个动作都是由一个字母表现。有效的机器人移动R（右），L（左），U（上）和D（下）。输出应该是真或假来表示机器人是否成圈。


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