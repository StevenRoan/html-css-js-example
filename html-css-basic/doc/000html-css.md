# Html CSS
### HTML
```
<!DOCTYPE <!DOCTYPE html>
<html>
<head>
  <title></title>
</head>
<body>

</body>
</html>
```
### CSS
* Basic

- selector - select DOM
    - Descendent selector
    - Direct child selector

### BOX MODEL
[reference](https://www.udacity.com/course/viewer#!/c-ud304/l-2617868617/e-2771378569/m-2792478544)
* Content, Padding,  Broader and Margin (from inner to outer)
 * Content: in very center
 * Padding: Distance between content and broader. Color is the background color of the box.
 * Broader: Goes around padding and content
 * Margein: outtest, no color completely transparent
* Related CSS
 * `box-sizing`: 決定box model大小怎麼算(包含padding or not ...etc)
 * `width` `height`: 可填 **大小單位 (px), or (%)**
  * `max-width`: 百分比, 最大width,


### Position Element
* NOTE: Difference between `position` and `flex` [ref](https://www.zhihu.com/question/19588854)
* display: 此性質描述的是 **child DOM 的排列關係** (?:待確認，目前沒有很好的結論, inline或是blocking似乎不是描述 child dom)
  * flex: child DOMs horizontally ordered
* `top, bottom, left, right`, relative position between **boxes**
* position (?: 似乎不是best practice) box model 的參數會以position為基礎 [ref](http://www.see-design.com.tw/i/css_position.html)
    - absolute 不會參與排列
    - relative 放在parent-> 影響到child的absolute
    - margin-left (box model::margin) 和left (position 互相影像）
    - display: flex ( display next to each other)
 * relative, 相對座標是附近的 box
 * absolute, 相對座標是整個Browser page

### Font
* `font-size`
* `font-famliy`

### Convention
* `.row`
  * `.col-1`
