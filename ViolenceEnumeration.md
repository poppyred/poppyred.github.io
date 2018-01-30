# leetcode666

### 666. ViolenceEnumeration
####
    1、Ａ、Ｂ、Ｃ、Ｄ、Ｅ五名学生有可能参加计算机竞赛，根据下列条件判断哪些

       人参加了竞赛：

        （１）Ａ参加时，Ｂ也参加；

        （２）Ｂ和Ｃ只有一个人参加；

        （３）Ｃ和Ｄ或者都参加，或者都不参加；

        （４）Ｄ和Ｅ中至少有一个人参加；

        （５）如果Ｅ参加，那么Ａ和Ｄ也都参加。


#### python:

```python
dic={"a":"", "b":"", "c":"", "d":"", "e":""}

a, b, c, d, e = 0, 0, 0, 0, 0
result = [[a, b, c, d, e] for a in range(2) for b in range(2) for c in range(2) for d in range(2) for e in range(2) if ((a == 1 and b == 1) or (a == 0 and b == 1) or (a == 0 and b == 0)) and ((b == 1 and c == 0) or (b == 0 and c == 1)) and ((c == 1 and d == 1) or (c == 0 and d == 0))  and ((d == 1 or e == 1))  and ((e == 1 and a == 1 and d == 1) or (e == 0))]
for i,di in enumerate(dic):
    dic[di]="参加了" if result[0][i]==1 else "没参加"

for dd in  dic:
    print dd,dic[dd]
```


# 目录:

---

[首页](./README.md)

---

[461. Hamming Distance ](./Hamming.md)

---

[657. Judge Route Circle ](./JudgeRouteCircle.md)

---


[666. Violence enumeration ](./ViolenceEnumeration.md)

---