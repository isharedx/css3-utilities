# CSS3 Utilities

>  A few common CSS3 tool classes are encapsulated in this project.
> 
> [https://cjiali.github.io/css3-utilities/](https://cjiali.github.io/css3-utilities/)


## Layout

### position

The classes are named using the format {notation}-{style}.

Where notation is one of:<br/>
-  position - for classes that set postion<br/>
-  fixed - for classes that set postion<br/>
-  sticky - for classes that set postion<br/>

Where style is one of:<br/>
- static - for classes that set position style<br/>
- relative - for classes that set position style<br/>
- absolute - for classes that set position style<br/>
- fixed - for classes that set position style<br/>
- sticky - for classes that set position style<br/><br/>
- top - for classes that set position style with absolute or sticky to top<br/>
- bottom - for classes that set position style with absolute or sticky to bottom<br/>
- left - for classes that set position style with absolute or sticky to left<br/>
- right- for classes that set position style with absolute or sticky to right<br/>

### display

The classes are named using the format .display{style}.

Where style is one of:<br/>
- -head - for classes that set flex<br/>
- -body - for classes that set flex<br/>
- -foot - for classes that set flex<br/>
- blank - for classes that apply flex layout with flex-direction:column on the element


### flex

The classes are named using the format {notation}{style}.

Where notation is one of:<br/>
- flex - for classes that set flex<br/>
- justify - for classes that set justify-content<br/>
- align - for classes that set align-content<br/>
- align - for classes that set align-content<br/>
- items - for classes that set align-items<br/>
- self - for classes that set align-self

Where style is one of:<br/>
- row - for classes that set flex style<br/>
- col - for classes that set flex style<br/>
- row-reverse - for classes that set flex style<br/>
- col-reverse - for classes that set flex style<br/>
- wrap - for classes that set flex style<br/>
- nowrap - for classes that set flex style<br/>
- wrap-reverse - for classes that set flex style<br/><br/>
- start - for classes that set justify-content style<br/>
- end - for classes that set justify-content style<br/>
- center - for classes that set justify-content style<br/>
- between - for classes that set justify-content style<br/>
- around - for classes that set justify-content style<br/><br/>
- start - for classes that set align-content style<br/>
- end - for classes that set align-content style<br/>
- center - for classes that set align-content style<br/>
- between - for classes that set align-content style<br/>
- around - for classes that set align-content style<br/>
- stretch - for classes that set align-content style<br/><br/>
- start - for classes that set align-items style<br/>
- end - for classes that set align-items style<br/>
- center - for classes that set align-items style<br/>
- baseline - for classes that set align-items style<br/>
- stretch - for classes that set align-items style<br/><br/>
- auto - for classes that set align-self style<br/>
- start - for classes that set align-self style<br/>
- end - for classes that set align-self style<br/>
- center - for classes that set align-self style<br/>
- baseline - for classes that set align-self style<br/>
- stretch - for classes that set align-self style<br/>

### float

The classes are named using the format {notation}{style}.

Where notation is one of:<br/>
- float - for classes that set float<br/>
- clear - for classes that set clear<br/>

Where style is one of:<br/>
- left - for classes that set float style<br/>
- right - for classes that set float style<br/>
- top - for classes that set float style<br/>
- bottom - for classes that set float style<br/>
- start - for classes that set float style<br/>
- end - for classes that set float style<br/>
- none} - for classes that set float style<br/><br/>
- top - for classes that set clear style<br/>
- right - for classes that set clear style<br/>
- bottom - for classes that set clear style<br/>
- left - for classes that set clear style<br/>
- none - for classes that set clear style<br/>
- both} - for classes that set clear style<br/>

In particular, you can use .clearfix to clear floating at both ends.


### grid

The classes are named using the format {breakpoint}col-<1|2|3|4|5|6|7|8|9|10|11|12>.

Where breakpoint is one of:<br/>
- xs- - for classes that set the column width for xs(min-width:0px)<br/>
- sm- - for classes that set the column width for sm(min-width:576px)<br/>
- md- - for classes that set the column width for md(min-width:768px)<br/>
- lg- - for classes that set the column width for lg(min-width:992px)<br/>
- xl- - for classes that set the column width for xl(min-width:1200px)<br/>
- blank - for classes that set the column width for xs(min-width:0px)

Notice: the column classes should be used as .row or .row-condensed element's children.


## Box


### sizing

The classes are named using the format:

| Notation | width&#124;height|min-width&#124;min-height|max-width&#124;max-height|视口宽高|
|:--:|:--:|:--:|:--:|:--:|
|Format|{notation}-{size}|{notation}-min-{size}|{notation}-max-{size}|{notation}-{size}-{unit}|

Where notation is one of:<br/>
- w,width - for classes that set width<br/>
- h,height - for classes that set height

Where size is one of:<br/>
- 0 - for classes that set the width or height to 0%<br/>
- 20 - for classes that set the width or height to 20%<br/>
- 25 - for classes that set the width or height to 25%<br/>
- 33 - for classes that set the width or height to 33%<br/>
- 40 - for classes that set the width or height to 40%<br/>
- 50 - for classes that set the width or height to 50%<br/>
- 60 - for classes that set the width or height to 60%<br/>
- 66 - for classes that set the width or height to 66%<br/>
- 75 - for classes that set the width or height to 75%<br/>
- 80 - for classes that set the width or height to 80%<br/>
- 100 - for classes that set the width or height to 100%


Where unit is one of:<br/>
- vw - for classes that set width to {size}*100vw<br/>
- vh - for classes that set height to {size}*100vh


### spacing

The classes are named using the format {notation}{side}-{size}.

Where notation is one of:<br/>
- m,margin - for classes that set margin<br/>
- p,padding - for classes that set padding<br/>

Where side is one of:<br/>
- -t,-top - for classes that set margin-top or padding-top<br/>
- -b,-bottom - for classes that set margin-bottom or padding-bottom<br/>
- -l,-left - for classes that set margin-left or padding-left<br/>
- -r,-right- for classes that set margin-right or padding-right<br/>
- -x - for classes that set both *-left and *-right<br/>
- -y - for classes that set both *-top and *-bottom<br/>
- blank - for classes that set a margin or padding on all 4 sides of the element


Where size is one of:<br/>
- no - for classes that set the margin or padding it to 0<br/>
- xs - for classes that set the margin or padding to $spacer * .25<br/>
- sm - for classes that set the margin or padding to $spacer * .5<br/>
- md - for classes that set the margin or padding to $spacer<br/>
- lg - for classes that set the margin or padding to $spacer * 1.5<br/>
- xl - for classes that set the margin or padding to $spacer * 3<br/>
- auto - for classes that set the margin to auto



### border

The classes are named using the format {notation}{side}-{size} or {notation}-{color}.

Where notation is one of:<br/>
- b,border - for classes that set border

Where side is one of:<br/>
- -t,-top - for classes that set border-top<br/>
- -b,-bottom - for classes that set border-bottom<br/>
- -l,-left - for classes that set border-left
- -r,-right- for classes that set border-right<br/>
- -x - for classes that set both *-left and *-right<br/>
- -y - for classes that set both *-top and *-bottom<br/>
- blank - for classes that set a border on all 4 sides of the element

Where size is one of:<br/>
- no - for classes that set the border to 0<br/>
- xs - for classes that set the border to $spacer * .25<br/>
- sm - for classes that set the border to $spacer * .5<br/>
- md - for classes that set the border to $spacer<br/>
- lg - for classes that set the border to $spacer * 1.5<br/>
- xl - for classes that set the border to $spacer * 3<br/>
- blank - for classes that set the border to 1px

Where color is one of:<br/>
- red - for classes that set the border-color to red<br/>
- orange - for classes that set the border-color to orange<br/>
- yellow - for classes that set the border-color to yellow<br/>
- olive - for classes that set the border-color to olive<br/>
- green - for classes that set the border-color to green<br/>
- cyan - for classes that set the border-color to cyan<br/>
- blue - for classes that set the border-color to blue<br/>
- purple - for classes that set the border-color to purple<br/>
- mauve - for classes that set the border-color to mauve<br/>
- pink - for classes that set the border-color to pink<br/>
- brown - for classes that set the border-color to brown<br/>
- grey - for classes that set the border-color to grey<br/>
- gray - for classes that set the border-color to gray<br/>
- silver - for classes that set the border-color to silver<br/>
- black - for classes that set the border-color to black<br/>
- dark - for classes that set the border-color to dark<br/>
- white - for classes that set the border-color to white<br/>
- theme - for classes that set the border-color to theme color<br/>

### radius

The classes are named using the format {notation}{side}-{size} or {notation}{side}-<circle|rounded>.

Where notation is one of:<br/>
- r,radius - for classes that set border-radius

Where side is one of:<br/>
- -t,-top - for classes that set both border-top-left-radius and border-top-right-radius<br/>
- -b,-bottom - for classes that set both border-bottom-left-radius and border-bottom-right-radius<br/>
- -l,-left - for classes that set both border-top-left-radius and border-bottom-left-radius<br/>
- -r,-right- for classes that set both border-top-right-radius and border-bottom-right-radius<br/>
- blank - for classes that set a border on all 4 sides of the element

Where size is one of:<br/>
- no - for classes that set the border to 0<br/>
- xs - for classes that set the border to $spacer * .25<br/>
- sm - for classes that set the border to $spacer * .5<br/>
- md - for classes that set the border to $spacer<br/>
- lg - for classes that set the border to $spacer * 1.5<br/>
- xl - for classes that set the border to $spacer * 3<br/>
- blank - for classes that set the border to 1px

### shadow

.sha,
.shadow


## Color

### theme

The classes are named using the format .theme-{color}.

Where color is one of:<br/>
- red - for classes that set the system theme to red<br/>
- orange - for classes that set the system theme to orange<br/>
- yellow - for classes that set the system theme to yellow<br/>
- olive - for classes that set the system theme to olive<br/>
- green - for classes that set the system theme to green<br/>
- cyan - for classes that set the system theme to cyan<br/>
- blue - for classes that set the system theme to blue<br/>
- purple - for classes that set the system theme to purple<br/>
- mauve - for classes that set the system theme to mauve<br/>
- pink - for classes that set the system theme to pink<br/>
- brown - for classes that set the system theme to brown<br/>
- grey - for classes that set the system theme to grey<br/>
- gray - for classes that set the system theme to gray<br/>
- silver - for classes that set the system theme to silver<br/>
- black - for classes that set the system theme to black<br/>
- dark - for classes that set the system theme to dark<br/>
- white - for classes that set the system theme to white<br/>
- theme - for classes that set the system theme to theme color<br/>
- primary - for classes that set the system theme to primary color<br/>


### color

The classes are named using the format {color}.

Where color is one of:<br/>
- red - for classes that set the color to red<br/>
- orange - for classes that set the color to orange<br/>
- yellow - for classes that set the color to yellow<br/>
- olive - for classes that set the color to olive<br/>
- green - for classes that set the color to green<br/>
- cyan - for classes that set the color to cyan<br/>
- blue - for classes that set the color to blue<br/>
- purple - for classes that set the color to purple<br/>
- mauve - for classes that set the color to mauve<br/>
- pink - for classes that set the color to pink<br/>
- brown - for classes that set the color to brown<br/>
- grey - for classes that set the color to grey<br/>
- gray - for classes that set the color to gray<br/>
- silver - for classes that set the color to silver<br/>
- black - for classes that set the color to black<br/>
- dark - for classes that set the color to dark<br/>
- white - for classes that set the color to white<br/>
- theme - for classes that set the color to theme color<br/>
- primary - for classes that set the color to primary color<br/>


### background

The classes are named using the format {notation}-{color}.

Where notation is one of:<br/>
- bg,background - for classes that set background-color

Where color is one of:<br/>
- red - for classes that set the background-color to red<br/>
- orange - for classes that set the background-color to orange<br/>
- yellow - for classes that set the background-color to yellow<br/>
- olive - for classes that set the background-color to olive<br/>
- green - for classes that set the background-color to green<br/>
- cyan - for classes that set the background-color to cyan<br/>
- blue - for classes that set the background-color to blue<br/>
- purple - for classes that set the background-color to purple<br/>
- mauve - for classes that set the background-color to mauve<br/>
- pink - for classes that set the background-color to pink<br/>
- brown - for classes that set the background-color to brown<br/>
- grey - for classes that set the background-color to grey<br/>
- gray - for classes that set the background-color to gray<br/>
- silver - for classes that set the background-color to silver<br/>
- black - for classes that set the background-color to black<br/>
- dark - for classes that set the background-color to dark<br/>
- white - for classes that set the background-color to white<br/>
- theme - for classes that set the background-color to theme color<br/>


### gradient

The classes are named using the format {notation}-{color}.

Where notation is one of:<br/>
- gra,gradient - for classes that set background-image

Where color is one of:<br/>
- red - for classes that set the background-image to line-gradient with red color<br/>
- orange - for classes that set the background-image to line-gradient with orange color<br/>
- yellow - for classes that set the background-image to line-gradient with yellow color<br/>
- olive - for classes that set the background-image to line-gradient with olive color<br/>
- green - for classes that set the background-image to line-gradient with green color<br/>
- cyan - for classes that set the background-image to line-gradient with cyan color<br/>
- blue - for classes that set the background-image to line-gradient with blue color<br/>
- purple - for classes that set the background-image to line-gradient with purple color<br/>
- mauve - for classes that set the background-image to line-gradient with mauve color<br/>
- pink - for classes that set the background-image to line-gradient with pink color<br/>
- brown - for classes that set the background-image to line-gradient with brown color<br/>
- grey - for classes that set the background-image to line-gradient with grey color<br/>
- gray - for classes that set the background-image to line-gradient with gray color<br/>
- silver - for classes that set the background-image to line-gradient with silver color<br/>
- black - for classes that set the background-image to line-gradient with black color<br/>
- dark - for classes that set the background-image to line-gradient with dark color<br/>
- white - for classes that set the background-image to line-gradient with white color<br/>
- theme - for classes that set the background-image to line-gradient with theme color<br/>


### focus

The classes are named using the format {notation}{color}.

Where notation is one of:<br/>
- focus - for classes that set box-shadow on :focus element

Where color is one of:<br/>
- -red - for classes that set the box-shadow to red<br/>
- -orange - for classes that set the box-shadow to orange<br/>
- -yellow - for classes that set the box-shadow to yellow<br/>
- -olive - for classes that set the box-shadow to olive<br/>
- -green - for classes that set the box-shadow to green<br/>
- -cyan - for classes that set the box-shadow to cyan<br/>
- -blue - for classes that set the box-shadow to blue<br/>
- -purple - for classes that set the box-shadow to purple<br/>
- -mauve - for classes that set the box-shadow to mauve<br/>
- -pink - for classes that set the box-shadow to pink<br/>
- -brown - for classes that set the box-shadow to brown<br/>
- -grey - for classes that set the box-shadow to grey<br/>
- -gray - for classes that set the box-shadow to gray<br/>
- -silver - for classes that set the box-shadow to silver<br/>
- -black - for classes that set the box-shadow to black<br/>
- -dark - for classes that set the box-shadow to dark<br/>
- -white - for classes that set the box-shadow to white<br/>
- -theme - for classes that set the box-shadow to theme color<br/>
- blank -  for classes that set the box-shadow to primary color<br/>


### hover

The classes are named using the format {notation}{color}.

Where notation is one of:<br/>
- hover - for classes that set box-shadow on :hover element

Where color is one of:<br/>
- -red - for classes that set the box-shadow to red<br/>
- -orange - for classes that set the box-shadow to orange<br/>
- -yellow - for classes that set the box-shadow to yellow<br/>
- -olive - for classes that set the box-shadow to olive<br/>
- -green - for classes that set the box-shadow to green<br/>
- -cyan - for classes that set the box-shadow to cyan<br/>
- -blue - for classes that set the box-shadow to blue<br/>
- -purple - for classes that set the box-shadow to purple<br/>
- -mauve - for classes that set the box-shadow to mauve<br/>
- -pink - for classes that set the box-shadow to pink<br/>
- -brown - for classes that set the box-shadow to brown<br/>
- -grey - for classes that set the box-shadow to grey<br/>
- -gray - for classes that set the box-shadow to gray<br/>
- -silver - for classes that set the box-shadow to silver<br/>
- -black - for classes that set the box-shadow to black<br/>
- -dark - for classes that set the box-shadow to dark<br/>
- -white - for classes that set the box-shadow to white<br/>
- -theme - for classes that set the box-shadow to theme color<br/>
- blank -  for classes that set the box-shadow to primary color<br/>


## Text

The classes are named using the format {notation}-{style}.

Where notaion is one of:<br/>
- txt,text - for classes that set the text

Where style is one of:<br/>
- nowrap - for classes that set the text to not wrap<br/>
- truncate - for classes that set the text to truncate with ...<br/>
- hide - for classes that set the text to replace by image<br/>
- RMB - for classes that set the text to insert character ￥ before <br/>
- dollar - for classes that set the text to insert character $ before<br/>
- justify - for classes that set the text to vertical center<br/>
- left - for classes that set the text to left justification<br/>
- right - for classes that set the text to right justification<br/>
- center - for classes that set the text to justify center<br/>
- abc,lowercase  - for classes that set the text to lowercase<br/>
- ABC,uppercase - for classes that set the text to uppercase<br/>
- Abc,capitalize - for classes that set the text to capitalize<br/>
- light - for classes that set the text to light<br/>
- bold - for classes that set the text to bold<br/>

In particular, you can use .txt or .text to reset the text style.


### font-size

You can use the classes .h<1|2|3|4|5|6> to set the text's font size.


### text-shadow

The classes are named using the format <txt|text>-<sha|shadow>-{color}.

Where color is one of:<br/>
- red - for classes that set the text-shadow to red(#e54d42)<br/>
- orange - for classes that set the text-shadow to orange(#f37b1d)<br/>
- yellow - for classes that set the text-shadow to yellow(#fbbd08)<br/>
- olive - for classes that set the text-shadow to olive(#8dc63f)<br/>
- green - for classes that set the text-shadow to green(#39b54a)<br/>
- cyan - for classes that set the text-shadow to cyan(#1cbbb4)<br/>
- blue - for classes that set the text-shadow to blue(#007bff)<br/>
- purple - for classes that set the text-shadow to purple(#6739b6)<br/>
- mauve - for classes that set the text-shadow to mauve(#9c26b0)<br/>
- pink - for classes that set the text-shadow to pink(#e03997)<br/>
- brown - for classes that set the text-shadow to brown(#a5673f)<br/>
- grey - for classes that set the text-shadow to grey(#eee)<br/>
- gray - for classes that set the text-shadow to gray(#aaa)<br/>
- silver - for classes that set the text-shadow to silver(#777)<br/>
- black - for classes that set the text-shadow to black(#333)<br/>
- dark - for classes that set the text-shadow to dark(#000)<br/>
- white - for classes that set the text-shadow to white(#fff)<br/>
- theme - for classes that set the text-shadow to theme color(#39b54a)<br/>
- primary - for classes that set the text-shadow to primary color(#007bff)<br/>


## Button

@import "button";


.btn,
.button



## Component

### page

The classes are named using the format .page{component}.

Where component is one of:<br/>
- -head - for classes that set some style as the .page children element<br/>
- -body - for classes that set some style as the .page children element<br/>
- -foot - for classes that set some style as the .page children element<br/>
- blank - for classes that apply flex layout with flex-direction:column on the element

### container

The classes are named using the format .container{component}.

Where component is one of:<br/>
- head - for classes that set some style as the .container children element<br/>
- body - for classes that set some style as the .container children element<br/>
- foot - for classes that set some style as the .container children element<br/>
- aside - for classes that set some style as the .container children element<br/>
- blank - for classes that apply flex layout with flex-direction:column on the element

In particular,  you can use .container--vertical to change the flex-direction value (default:row).


### panel

The classes are named using the format .panel{component} or panel--{status}.

Where component is one of:<br/>
- -head - for classes that set some style as the .panel children element<br/>
- -body - for classes that set some style as the .panel children element<br/>
- -foot - for classes that set some style as the .panel children element<br/>
- blank - for classes that apply flex layout with flex-direction:column on the element

Where status is one of:<br/>
- rounded - for classes that set some style as the .panel children element<br/>
- bordered - for classes that set some style as the .panel children element<br/>
- filled - for classes that set some style as the .panel children element<br/>


### cell

The classes are named using the format .cell{component} or cell--{status}.

Where component is one of:<br/>
- -head - for classes that set the border-radius on .cell children element<br/>
- -body - for classes that set the border style on .cell children element<br/>
- -foot - for classes that set background-color on .cell children element<br/>
- blank - for classes that apply flex layout with flex-direction:row on the element

Where status is one of:<br/>
- rounded - for classes that set the border-radius on the .cell children element<br/>
- bordered - for classes that set the border on the .cell children element<br/>
- filled - for classes that set the background-color on the .cell children element<br/>


### table

The classes are named using the format .table--{status}.

Where component is one of:<br/>
- condensed - for classes that set a condensed table<br/>
- bordered - for classes that set a bordered table<br/>
- striped - for classes that set a zebra-striping table<br/>
- hoverable - for classes that set a hoverable table<br/>

Notice: the classes should be used on a table element with class .table.


### tips

The classes are named using the format {notation}{side}.

Where notation is one of:<br/>
- tips - for classes that set a animation on the element

Where side is one of:<br/>
- -top - for classes that set the tips showing side to top<br/>
- -right - for classes that set the tips showing side to right<br/>
- -bottom - for classes that set the tips showing side to bottom<br/>
- -left - for classes that set the tips showing side to left<br/>


### animation

The classes are named using the format {notation}-{type}.

Where notation is one of:<br/>
- ani,animation - for classes that set a animation on the element

Where type is one of:<br/>
- reverse - for classes that set the animation of reverse on the element<br/>
- fade-in - for classes that set the animation of fade-in on the element<br/>
- fade-out - for classes that set the animation of fade-out on the element<br/>
- scale-up - for classes that set the animation of scale-up on the element<br/>
- scale-down - for classes that set the animation of scale-down on the element<br/>
- slide-top - for classes that set the animation of slide-top on the element<br/>
- slide-bottom - for classes that set the animation of slide-bottom on the element<br/>
- slide-left - for classes that set the animation of slide-left on the element<br/>
- slide-right - for classes that set the animation of slide-right on the element<br/>
- shake - for classes that set the animation of shake on the element<br/>
- spin - for classes that set the animation of spin on the element<br/>


## Other

### overflow

The classes are named using the format .overflow{side}-{style}.

Where side is one of:<br/>
- -x - for classes that set overflow-x stlyle<br/>
- -y - for classes that set overflow-y stlyle<br/>
- blank - for classes that set overflow stlyle<br/>

Where style is one of:<br/>
- hidden - for classes that set overflow to hidden<br/>
- scroll - for classes that set overflow to scroll<br/>
- auto - for classes that set overflow to auto<br/>
- visible - for classes that set overflow to visible<br/>


### vertical

The classes are named using the format .overflow-{style}.

Where style is one of:<br/>
- baseline - for classes that set vertical-align to baseline<br/>
- top - for classes that set vertical-align to top<br/>
- middle - for classes that set vertical-align to middle<br/>
- bottom - for classes that set vertical-align to bottom<br/>
- text-bottom - for classes that set vertical-align to text<br/>
- text-top - for classes that set vertical-align to text<br/>
- sub - for classes that set vertical-align to sub<br/>
- super - for classes that set vertical-align to super<br/>


### cursor

The classes are named using the format .cusor-{style}.

Where style is one of:<br/>
- default - for classes that set cursor to default<br/>
- pointer - for classes that set cursor to pointer<br/>
- help - for classes that set cursor to help<br/>
- move - for classes that set cursor to move<br/>


### visibility

The classes are named using the format .visibility-{style}.

Where style is one of:<br/>
- visible - for classes that set visibility to visible<br/>
- hidden - for classes that set visibility to hidden<br/>
- collapse - for classes that set visibility to collapse<br/>


### zindex

The classes are named using the format .zindex{suffix}.

Where suffix is one of:<br/>
- -content - for classes that set z-index to 1000<br/>
- -static - for classes that set z-index to 1000<br/>
- -relative - for classes that set z-index to 1000<br/>
- -dropdown - for classes that set z-index to1010<br/>
- -sticky - for classes that set z-index to 1020<br/>
- -absolute - for classes that set z-index to 1030<br/>
- -fixed - for classes that set z-index to 1030<br/>
- -mask - for classes that set z-index to1040<br/>
- -modal - for classes that set z-index to 1050<br/>
- -popover - for classes that set z-index to 1060<br/>
- -tooltip - for classes that set z-index to 1070<br/>
- blank - for classes that set z-index to 0<br/>


