---
title: 为什么 unsigned int 的输出是-1呢
icon: object-group
permalink: /zh/Q-and-A/answer/question1.html
category:
  - 问答
tag:
  - 回答
---

# 为什么 unsigned int 的输出是-1呢
## 问题描述：
请问一下unsigned int等于-1时为什么不像unsigned char等于-1输出是个正数(255)

我尝试了用while设置了两个unsigned int变量一个等于0，一个等于1，然后让两个数每次循环加一，知道第二个数加到零为止，最后输出第一个数也是-1

我搜索了哔哩哔哩，CSDN，和知乎上面好像有提到过隐式转换这个词，但是自己看不太明白所以想来请教一下。

::: code-tabs#shell
@tab c
```bash

#include <stdio.h>
int main()
{
    unsigned int c = -1;
    printf("%d", c);
    return 0;
}
```
:::

输出结果是-1.
请问为什么？

