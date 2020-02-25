# CSS3 Utilities
Markdown 转义 |==> &#124;
CSS3 Utilities 带有两个不同的容器：

`.container`，它在每个响应断点处设置一个最大宽度； 

`.container-fluid`，即宽度：在所有断点处为100％ 

## 配色系统
CSS3 Utilities 配色系统的类名格式为：{prefix}-{color},
prefix 有：

| prefix | 说明|
|:--:|:--:|
|background(bg)  |背景|
|gradient(gra)   |渐变|
|shadow(sha)     |阴影|
|text(txt)       |文字|
|text-shadow(text-sha,txt-shadow,txt-sha)    |文字阴影|
|hover           |光标悬浮时背景色|
|focus           |光标聚焦时阴影色|


color 有：
| color | 说明|
|:--:|:--:|
|red     |  嫣红|
|orange  |  桔橙|
|yellow  |  明黄|
|olive   |  橄榄|
|green   |  森绿|
|cyan    |  天青|
|blue    |  天蓝|
|purple  |  姹紫|
|mauve   |  木槿|
|pink    |  桃粉|
|brown   |  棕褐|
|grey    |  玄灰 |
|gray    |  草灰|
|silver  |  银灰|
|black   |  墨黑 |
|dark    |  纯黑|
|white   |  雅白|
|theme   |  主题色|

## animation
类名的命名形式为： {ani&#124;animation}-{animation}
其中 ani-{animation} 为 animation-{animation} 的简写形式，除此外二者在样式上无差别；

animation 有:
| animation | 说明|
|:--:|:--:|
|reverse         | 反转|
|fade-in         | 渐现|
|fade-out        | 淡出|
|scale-up        | 放大|
|scale-down      | 缩小|
|slide-top       | 上滑|
|slide-bottom    | 下滑|
|slide-left      | 左滑|
|slide-right     | 右滑|
|shake           | 振动|
|spin            | 旋转|



## background
类名的命名形式为： {bg&#124;background}-{color}

其中 bg-{color} 为 background-{color} 的简写形式，除此外二者在样式上无差别；

color 有:
| color | 说明|
|:--:|:--:|
|red     |嫣红|
|orange  |桔橙|
|yellow  |明黄|
|olive   |橄榄|
|green   |森绿|
|cyan    |天青|
|blue    |天蓝|
|purple  |姹紫|
|mauve   |木槿|
|pink    |桃粉|
|brown   |棕褐|
|grey    |玄灰 |
|gray    |草灰|
|silver  |银灰|
|black   |墨黑 |
|dark    |纯黑|
|white   |雅白|
|theme   |主题色|

## border
类名的命名形式为：{b&#124;border}{side}{size} 或 {b&#124;border}{-color}

prefix 有：b|border
其中 b-{size} 为 border-{size} 的简写形式，除此外二者在样式上无差别；

side 有：-t&#124;-top&#124;-r&#124;-right&#124;-b&#124;-bottom&#124;-l&#124;-left
| side | 说明|
|:--:|:--:|
|-t&#124;-top     |上边框|
|-r&#124;-right   |右边框|
|-b&#124;-bottom  |下边框|
|-l&#124;-left    |左边框|

size 有: -xs&#124;-sm&#124;-md&#124;-lg&#124;-xl&#124;{color}
| size | 说明|
|:--:|:--:|
|xs  |极小（super small）|
|sm  |较小（small）|
|md  |中间（middle）|
|lg  |较大（large）|
|xl  |极大（super large）|

color 有: -red&#124;-orange&#124;-yellow&#124;-olive&#124;-green&#124;-cyan&#124;-blue&#124;-purple&#124;-mauve&#124;-pink&#124;-brown&#124;-grey&#124;-gray&#124;-silver&#124;-black&#124;-dark&#124;-white&#124;-theme 
| color | 说明|
|:--:|:--:|
|red     |嫣红|
|orange  |桔橙|
|yellow  |明黄|
|olive   |橄榄|
|green   |森绿|
|cyan    |天青|
|blue    |天蓝|
|purple  |姹紫|
|mauve   |木槿|
|pink    |桃粉|
|brown   |棕褐|
|grey    |玄灰 |
|gray    |草灰|
|silver  |银灰|
|black   |墨黑 |
|dark    |纯黑|
|white   |雅白|
|theme   |主题色|

## button

.btn,
.button
.btn-block,
.button-block
## display

## flex

.display

- 使用 flex{-type} 封装 flex-direction 属性，以规定灵活项目的方向。

> 其中 type 有: &#124;row&#124;col&#124;row-reverse&#124;col-reverse&#124;wrap&#124;nowrap&#124;wrap-reverse
>
> 注：类名 .flex （不带 {-type} 后缀）默认 flex-direction 属性值为 row 。

- 使用 justify-{side} 属性对齐主轴上的各项（水平）。

> 其中 side 有: start&#124;end &#124;center&#124;between &#124;around 

- 使用 align-{side} 封装 align-content 属性，以在弹性容器内的各项没有占用交叉轴上所有可用的空间时对齐容器内的各项（垂直）。

> 其中 side 有: &#124;start&#124;end&#124;center&#124;between&#124;around&#124;stretch

- 使用 items-{side} 封装 align-items 属性，以定义flex子项在flex容器的当前行的侧轴（纵轴）方向上的对齐方式。

> 其中 side 有: &#124;start&#124;end&#124;center&#124;baseline&#124;stretch

- 使用 self-{side} 封装 align-self 属性，以重写每个弹性对象元素的 align-items 属性。

> 其中 side 有: &#124;auto&#124;start&#124;end&#124;center&#124;baseline&#124;stretch

## float

.float

类名的命名形式为: clear{-top|-right|-bottom|-left|-none|-both|fix}
top     -
right   -
bottom  -
left    -
none    -
both    -
fix     - 
## focus

## functions

## gradient
类名的命名形式为: {gradient|gra}-{color}
color 有: -red|-orange|-yellow|-olive|-green|-cyan|-blue|-purple|-mauve|-pink|-brown|-grey|-gray|-silver|-black|-dark|-white|-theme 
red     -  嫣红
orange  -  桔橙
yellow  -  明黄
olive   -  橄榄
green   -  森绿
cyan    -  天青
blue    -  天蓝
purple  -  姹紫
mauve   -  木槿
pink    -  桃粉
brown   -  棕褐
grey    -  玄灰 
gray    -  草灰
silver  -  银灰
black   -  墨黑 
dark    -  纯黑
white   -  雅白
theme   -  主题色

## grid

.container
.container-fluid
.row
.row-condensed
类名的命名形式为: {breakpoint|""}-col-{1|2|3|4|5|6|7|8|9|10|11|12}

## hover

## index

## position

## radius

## reset

## root

## shadow

.sha,
.shadow
## sizing


.w-20,
.width-20
.w-25,
.width-25
.w-33,
.width-33
.w-40,
.width-40
.w-50,
.width-50
.w-60,
.width-60
.w-66,
.width-66
.w-75,
.width-75
.w-80,
.width-80
.w-100,
.width-100
.h-20,
.height-20
.h-25,
.height-25
.h-33,
.height-33
.h-40,
.height-40
.h-50,
.height-50
.h-60,
.height-60
.h-66,
.height-66
.h-75,
.height-75
.h-80,
.height-80
.h-100,
.height-100

## spacing

.m,
.margin
.m-no,
.margin-no
.m-xs,
.margin-xs
.m-sm,
.margin-sm
.m-md,
.margin-md
.m-lg,
.margin-lg
.m-xl,
.margin-xl
.m-t, .m-top,
.margin-t,
.margin-top
.m-t-no, .m-top-no,
.margin-t-no,
.margin-top-no
.m-t-xs, .m-top-xs,
.margin-t-xs,
.margin-top-xs
.m-t-sm, .m-top-sm,
.margin-t-sm,
.margin-top-sm
.m-t-md, .m-top-md,
.margin-t-md,
.margin-top-md
.m-t-lg, .m-top-lg,
.margin-t-lg,
.margin-top-lg
.m-t-xl, .m-top-xl,
.margin-t-xl,
.margin-top-xl
.m-r, .m-right,
.margin-r,
.margin-right
.m-r-no, .m-right-no,
.margin-r-no,
.margin-right-no
.m-r-xs, .m-right-xs,
.margin-r-xs,
.margin-right-xs
.m-r-sm, .m-right-sm,
.margin-r-sm,
.margin-right-sm
.m-r-md, .m-right-md,
.margin-r-md,
.margin-right-md
.m-r-lg, .m-right-lg,
.margin-r-lg,
.margin-right-lg
.m-r-xl, .m-right-xl,
.margin-r-xl,
.margin-right-xl
.m-b, .m-bottom,
.margin-b,
.margin-bottom
.m-b-no, .m-bottom-no,
.margin-b-no,
.margin-bottom-no
.m-b-xs, .m-bottom-xs,
.margin-b-xs,
.margin-bottom-xs
.m-b-sm, .m-bottom-sm,
.margin-b-sm,
.margin-bottom-sm
.m-b-md, .m-bottom-md,
.margin-b-md,
.margin-bottom-md
.m-b-lg, .m-bottom-lg,
.margin-b-lg,
.margin-bottom-lg
.m-b-xl, .m-bottom-xl,
.margin-b-xl,
.margin-bottom-xl
.m-l, .m-left,
.margin-l,
.margin-left
.m-l-no, .m-left-no,
.margin-l-no,
.margin-left-no
.m-l-xs, .m-left-xs,
.margin-l-xs,
.margin-left-xs
.m-l-sm, .m-left-sm,
.margin-l-sm,
.margin-left-sm
.m-l-md, .m-left-md,
.margin-l-md,
.margin-left-md
.m-l-lg, .m-left-lg,
.margin-l-lg,
.margin-left-lg
.m-l-xl, .m-left-xl,
.margin-l-xl,
.margin-left-xl
.p,
.padding
.p-no,
.padding-no
.p-xs,
.padding-xs
.p-sm,
.padding-sm
.p-md,
.padding-md
.p-lg,
.padding-lg
.p-xl,
.padding-xl
.p-t, .p-top,
.padding-t,
.padding-top
.p-t-no, .p-top-no,
.padding-t-no,
.padding-top-no
.p-t-xs, .p-top-xs,
.padding-t-xs,
.padding-top-xs
.p-t-sm, .p-top-sm,
.padding-t-sm,
.padding-top-sm
.p-t-md, .p-top-md,
.padding-t-md,
.padding-top-md
.p-t-lg, .p-top-lg,
.padding-t-lg,
.padding-top-lg
.p-t-xl, .p-top-xl,
.padding-t-xl,
.padding-top-xl
.p-r, .p-right,
.padding-r,
.padding-right
.p-r-no, .p-right-no,
.padding-r-no,
.padding-right-no
.p-r-xs, .p-right-xs,
.padding-r-xs,
.padding-right-xs
.p-r-sm, .p-right-sm,
.padding-r-sm,
.padding-right-sm
.p-r-md, .p-right-md,
.padding-r-md,
.padding-right-md
.p-r-lg, .p-right-lg,
.padding-r-lg,
.padding-right-lg
.p-r-xl, .p-right-xl,
.padding-r-xl,
.padding-right-xl
.p-b, .p-bottom,
.padding-b,
.padding-bottom
.p-b-no, .p-bottom-no,
.padding-b-no,
.padding-bottom-no
.p-b-xs, .p-bottom-xs,
.padding-b-xs,
.padding-bottom-xs
.p-b-sm, .p-bottom-sm,
.padding-b-sm,
.padding-bottom-sm
.p-b-md, .p-bottom-md,
.padding-b-md,
.padding-bottom-md
.p-b-lg, .p-bottom-lg,
.padding-b-lg,
.padding-bottom-lg
.p-b-xl, .p-bottom-xl,
.padding-b-xl,
.padding-bottom-xl
.p-l, .p-left,
.padding-l,
.padding-left
.p-l-no, .p-left-no,
.padding-l-no,
.padding-left-no
.p-l-xs, .p-left-xs,
.padding-l-xs,
.padding-left-xs
.p-l-sm, .p-left-sm,
.padding-l-sm,
.padding-left-sm
.p-l-md, .p-left-md,
.padding-l-md,
.padding-left-md
.p-l-lg, .p-left-lg,
.padding-l-lg,
.padding-left-lg
.p-l-xl, .p-left-xl,
.padding-l-xl,
.padding-left-xl

## table

## text


.h1,
.h2,
.h3,
.h4,
.h5,
.h6

## tips

.tips, .tips-top, .tips-right, .tips-bottom, .tips-left
## variables



.r-circle,
.radius-circle
.r-rounded,
.radius-rounded
.r,
.radius
.r-no,
.radius-no
.r-xs,
.radius-xs
.r-sm,
.radius-sm
.r-md,
.radius-md
.r-lg,
.radius-lg
.r-xl,
.radius-xl
.r-t-circle, .r-top-circle,
.radius-t-circle,
.radius-top-circle
.r-t-rounded, .r-top-rounded,
.radius-t-rounded,
.radius-top-rounded
.r-t, .r-top,
.radius-t,
.radius-top
.r-t-no, .r-top-no,
.radius-t-no,
.radius-top-no
.r-t-xs, .r-top-xs,
.radius-t-xs,
.radius-top-xs
.r-t-sm, .r-top-sm,
.radius-t-sm,
.radius-top-sm
.r-t-md, .r-top-md,
.radius-t-md,
.radius-top-md
.r-t-lg, .r-top-lg,
.radius-t-lg,
.radius-top-lg
.r-t-xl, .r-top-xl,
.radius-t-xl,
.radius-top-xl
.r-r-circle, .r-right-circle,
.radius-r-circle,
.radius-right-circle
.r-r-rounded, .r-right-rounded,
.radius-r-rounded,
.radius-right-rounded
.r-r, .r-right,
.radius-r,
.radius-right
.r-r-no, .r-right-no,
.radius-r-no,
.radius-right-no
.r-r-xs, .r-right-xs,
.radius-r-xs,
.radius-right-xs
.r-r-sm, .r-right-sm,
.radius-r-sm,
.radius-right-sm
.r-r-md, .r-right-md,
.radius-r-md,
.radius-right-md
.r-r-lg, .r-right-lg,
.radius-r-lg,
.radius-right-lg
.r-r-xl, .r-right-xl,
.radius-r-xl,
.radius-right-xl
.r-b-circle, .r-bottom-circle,
.radius-b-circle,
.radius-bottom-circle
.r-b-rounded, .r-bottom-rounded,
.radius-b-rounded,
.radius-bottom-rounded
.r-b, .r-bottom,
.radius-b,
.radius-bottom
.r-b-no, .r-bottom-no,
.radius-b-no,
.radius-bottom-no
.r-b-xs, .r-bottom-xs,
.radius-b-xs,
.radius-bottom-xs
.r-b-sm, .r-bottom-sm,
.radius-b-sm,
.radius-bottom-sm
.r-b-md, .r-bottom-md,
.radius-b-md,
.radius-bottom-md
.r-b-lg, .r-bottom-lg,
.radius-b-lg,
.radius-bottom-lg
.r-b-xl, .r-bottom-xl,
.radius-b-xl,
.radius-bottom-xl
.r-l-circle, .r-left-circle,
.radius-l-circle,
.radius-left-circle
.r-l-rounded, .r-left-rounded,
.radius-l-rounded,
.radius-left-rounded
.r-l, .r-left,
.radius-l,
.radius-left
.r-l-no, .r-left-no,
.radius-l-no,
.radius-left-no
.r-l-xs, .r-left-xs,
.radius-l-xs,
.radius-left-xs
.r-l-sm, .r-left-sm,
.radius-l-sm,
.radius-left-sm
.r-l-md, .r-left-md,
.radius-l-md,
.radius-left-md
.r-l-lg, .r-left-lg,
.radius-l-lg,
.radius-left-lg
.r-l-xl, .r-left-xl,
.radius-l-xl,
.radius-left-xl
.focus:focus
.focus-red:focus
.focus-orange:focus
.focus-yellow:focus
.focus-olive:focus
.focus-green:focus
.focus-cyan:focus
.focus-blue:focus
.focus-purple:focus
.focus-mauve:focus
.focus-pink:focus
.focus-brown:focus
.focus-grey:focus
.focus-gray:focus
.focus-silver:focus
.focus-black:focus
.focus-dark:focus
.focus-white:focus
.focus-theme:focus
.hover:hover
.hover-red:hover
.hover-orange:hover
.hover-yellow:hover
.hover-olive:hover
.hover-green:hover
.hover-cyan:hover
.hover-blue:hover
.hover-purple:hover
.hover-mauve:hover
.hover-pink:hover
.hover-brown:hover
.hover-grey:hover
.hover-gray:hover
.hover-silver:hover
.hover-black:hover
.hover-dark:hover
.hover-white:hover
.hover-theme:hover
.txt,
.text


The classes are named using the format {property}{sides}-{size} for xs and {property}{sides}-{breakpoint}-{size} for sm, md, lg, and xl.

Where property is one of:

m - for classes that set margin
p - for classes that set padding
Where sides is one of:

t - for classes that set margin-top or padding-top
b - for classes that set margin-bottom or padding-bottom
l - for classes that set margin-left or padding-left
r - for classes that set margin-right or padding-right
x - for classes that set both *-left and *-right
y - for classes that set both *-top and *-bottom
blank - for classes that set a margin or padding on all 4 sides of the element
Where size is one of:

0 - for classes that eliminate the margin or padding by setting it to 0
1 - (by default) for classes that set the margin or padding to $spacer * .25
2 - (by default) for classes that set the margin or padding to $spacer * .5
3 - (by default) for classes that set the margin or padding to $spacer
4 - (by default) for classes that set the margin or padding to $spacer * 1.5
5 - (by default) for classes that set the margin or padding to $spacer * 3
auto - for classes that set the margin to auto
(You can add more sizes by adding entries to the $spacers Sass map variable.)
