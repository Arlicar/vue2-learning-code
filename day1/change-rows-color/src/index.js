//! 使用ES6导入语法，导入jQuery
import $ from 'jquery'
//! 导入样式（在webpack中，一切皆模块，都可以通过ES6导入语法进行导入和使用）

import './css/index.css'
$(function () {
    //! 注意这里的条件选择
    $("li:odd").css('background-color', 'red')
    $("li:even").css('background-color', 'blue')
})

//! 这样写之后浏览器控制台说语法报错，所以得用webpack