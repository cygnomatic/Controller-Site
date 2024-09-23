---
title: 电控培训第一课
icon: object-group
permalink: /zh/lesson-file/lesson_one.html
order: 1
category:
  - 课程
tag:
  - 培训
---
# 电控培训第一课

## 什么是编程语言？
对于零基础的同学，这是我们最先要思考的问题。

先对“编程语言”中的“语言”二字进行我们最直观的理解。语言是我们人与人之间相互沟通交流、传递信息、表达思想和情感的工具。由此我们可以联想，编程语言是用于实现人与机器间“交流”的工具。而“编程”，则是编程语言诞生的目的，或者说，意义。

编写程序的过程某种意义上可以说是与电子设备交流的过程。我们希望通过这场交流让计算机运行，做我们想让它做的事，以完成我们的目标。

C/C++是一门编程语言，更是一门高级的编程语言，它的使用者是程序员。相应地，这里存在着低级编程语言，如汇编语言，它同样可供人编辑，但是不便于人的学习和理解。机器语言则是电脑所能读懂的语言，人几乎无法理解。

一切编程语言最终都会被转化为机器语言。将编程语言转化为机器语言的东西叫做编译器，如MinGW就是windows系统下的C/C++编译器。

## 第一个程序
::: code-tabs#shell
@tab c
```bash

#include <iostream> // 引入输入输出流库

using namespace std; // 使用标准命名空间

int sum; // 定义全局变量

int main() {
    int a, b; // 定义局部变量
    cin >> a >> b; // 输入两个整数
    sum = a + b; // 计算两个整数的和
    cout << sum; // 输出两个整数的和
    return 0; // 程序结束，返回0
}
```
:::

1. 字符集：字母，数字，运算符，空格，括号（作用域，复合语句），分号...
2. 标识符：关键字（int，main，return，const ...），自定义标识符（sum，a，b ...)
3. 数据类型：
![image.png](https://s2.loli.net/2024/09/23/JyfrDeKUG587jPI.png)
4. 表达式：sum = a + b
![image.png](https://s2.loli.net/2024/09/23/3lk2QYdhIq9ctgH.png)
5. 输入输出：cin，cout，scanf，printf ...
![image.png](https://s2.loli.net/2024/09/23/59RbEsvAfDUNwLu.png)
## 判断与循环
### 选择判断语句表达式
  1. if表达式1

::: code-tabs#shell
@tab c
```bash
#include <iostream>

using namespace std;

int main() {
    int num;
    cin >> num;
    if (num > 0)
        cout << "greater than 0";
    return 0;
}
```
:::

  2. if表达式2

::: code-tabs#shell
@tab c
```bash

#include <iostream>

using namespace std;

int main() {
    int num;
    cin >> num;
    if (num > 0)
        cout << "greater than 0";
    else
        cout << "less than or equal to 0";
    return 0;
}
```
:::

  3. if表达式3

::: code-tabs#shell
@tab c
```bash

#include <iostream>

using namespace std;

int main() {
    int num;
    cin >> num;
    if (num > 0)
        cout << "greater than 0";
    else if (num < 0)
        cout << "less than 0";
    else
        cout << "equal to 0";
    return 0;
}
```
:::

  4. if表达式4

  ::: code-tabs#shell
@tab c
```bash

#include <iostream>

using namespace std;

int main() {
    int num;
    cin >> num;
    if (num > 0) {
        cout << "num is " << num << " and it is ";
        cout << "greater than 0";
    }
    else if (num < 0) {
        cout << "num is " << num << " and it is ";
        cout << "less than 0";
    }
    else {
        cout << "equal to 0";
    }
    return 0;
}
```
:::

  5. switch表达式1

  ::: code-tabs#shell
@tab c
```bash

#include <iostream>

using namespace std;

int main() {
    int num;
    cin >> num;
    switch (num)
    {
    case 1:
        cout << "You select 1" << endl;
        break;
    case 2:
        cout << "You select 2" << endl;
        break;
    case 3:
        cout << "You select 3" << endl;
        break;
    default:
        cout << "You select other" << endl;
        break;
    }
    return 0;
}
```
:::

#### 循环语句表达式
  1. for循环表达式

  ::: code-tabs#shell
@tab c
```bash

#include <iostream>

using namespace std;

int main() {
    int num;
    cin >> num;
    for (int i = 1; i <= num; i++) {
        cout << i << " ";
    }
    return 0;
}
```
:::

  2. for嵌套循环表达式

  ::: code-tabs#shell
@tab c
```bash

#include <iostream>

using namespace std;

int main() {
    int num;
    cin >> num;
    for (int i = 1; i <= num; i++) {
        for (int j = 1; j <= i; j++) {
            cout << j << " ";
        }
        cout << endl;
    }
    return 0;
}
```
:::

  3. while循环表达式

  ::: code-tabs#shell
@tab c
```bash

#include <iostream>

using namespace std;

int main() {
    int num;
    cin >> num;
    int i = 1;
    while (i <= num) {
        cout << i << " ";
        i++;
    }
    return 0;
}
```
:::

  4. do-while循环表达式

  ::: code-tabs#shell
@tab c
```bash

#include <iostream>

using namespace std;

int main() {
    int num;
    cin >> num;
    int i = 1;
    do {
        cout << i << " ";
        i++;
    } while (i <= num);
    return 0;
}
```
:::

#### 循环+判断语句表达式
  1. 循环+判断表达式

  ::: code-tabs#shell
@tab c
```bash

#include <iostream>

using namespace std;

int main() {
    int num;
    cin >> num;
    for (int i = 1; i <= num; i++) {
        if (i % 2) {
            cout << i << " ";
        }
    }
    return 0;
}
```
:::

### 数组与结构体
1. 数组
  1. 一般数组（定义，大小，初始，调用）

  ::: code-tabs#shell
@tab c
```bash

#include <iostream>

using namespace std;

int main() {
    int num;
    cin >> num;
    int a[num+1]={1, 2, 3, 4, 5};
    for (int i = 1; i <= num; i++) {
        cout << a[i] << " ";
    }
    for (int i = 1; i <= num; i++) {
        a[i] = i & 1;
    }
    for (int i = 1; i <= num; i++) {
        cout << a[i] << " ";
    }
    return 0;
}
```
:::

  2. 字符串（初始化，结束符，输入，输出）

  ::: code-tabs#shell
@tab c
```bash

#include <iostream>

using namespace std;

int main() {
    int num;
    cin >> num;
    char s[num+1]="HelloWorld";
    cout << s << endl;
    for (int i = 1; i <= num; i++) {
        s[i] = s[i] + 1;
    }
    cout << s << endl;
    return 0;
}

::: code-tabs#shell
@tab c
```bash

#include <iostream>
#include <string.h>

using namespace std;

int main() {
    string s;
    cin >> s;
    cout << s << endl;
    for (int i = 1; i <= s.length(); i++) {
        s[i] = s[i] + 1;
    }
    cout << s << endl;
    return 0;
}
```
:::

  3. 多维数组（初始化）

  ::: code-tabs#shell
@tab c
```bash

#include <iostream>

using namespace std;

int main() {
    int num;
    cin >> num;
    int a[2][num]={{1, 2, 3, 4, 5}, {6, 7, 8, 9, 10}};
    for (int i = 0; i < 2; i++) {
        for (int j = 0; j < num; j++) {
            cout << a[i][j] << " ";
        }
        cout << endl;
    }
    
    return 0;
}
```
:::

2. 结构体（初始化）

::: code-tabs#shell
@tab c
```bash

#include <iostream>
#include <string.h>

using namespace std;

struct Student {
    string name;
    int age;
    int score;
};

int main() {
    Student stu;
    stu.name = "Tom";
    stu.age = 18;
    stu.score = 100;
    cout << "Name: " << stu.name << endl;
    cout << "Age: " << stu.age << endl;
    cout << "Score: " << stu.score << endl;
    return 0;
}
```
:::

3. 枚举类型（初始化，赋值）

::: code-tabs#shell
@tab c
```bash

#include <iostream>

using namespace std;

enum Weekday {
    Monday=1, Tuesday, Wednesday, Thursday, Friday, Saturday, Sunday
};

int main() {
    int num;
    cin >> num;
    Weekday day;
    switch (num%7) {
        case 1:
            day = Monday;
            break;
        case 2:
            day = Tuesday;
            break;
        case 3:
            day = Wednesday;
            break;
        case 4:
            day = Thursday;
            break;
        case 5:
            day = Friday;
            break;
        case 6:
            day = Saturday;
            break;
        case 7:
            day = Sunday;
            break;
        default:
            cout << "Invalid input" << endl;
            break;
    }
    
    return 0;
}

```
:::