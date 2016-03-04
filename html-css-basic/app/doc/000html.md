* HTML

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

### 使用者input
[ref](http://www.cnblogs.com/polk6/archive/2013/05/22/3075699.html)
* `<input>, <textarea>,<select>,<label>,<fieldset>`

### `name class id`
* name, class 非唯一
 * name可用在表單欄位，多選一的input也是 name
  * id 每個label唯一

### Form

[ref](http://www.cnblogs.com/polk6/archive/2013/06/08/3124228.html)
* 快速創造一個完整的body 並送post給伺服器


### 佈局

[reference](http://www.cnblogs.com/polk6/p/3185692.html)
two kinds of element. (inline 內聯元素) (block 塊級元素)
* inline
  * `<a></a>,<label>, <input>, <img>`
  * 會根據瀏覽器的寬度做換行
* block
  * `<h1>~<h6>, <div>, <hr>`
  * 除了inline mode 的性質之外，當瀏覽器關渡減少時還會自動擴充**height**
  * if using `width` in `block element`, the horizontal scroll shows up when the width is too short. If no `width` property, the width of block will be shorter.

### Concept
css 是賦予html屬性，所以css 比較像是html的附屬
