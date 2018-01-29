// 自定义变量
var $carouselBox = $('.carousel'),
$slidesUl = $('.slides-img'),
$slidesLi = $('.slides-img > li'),
$prev = $('.btn.prev'),
$next = $('.btn.next'),
$shullingBtn = $('.shulling-btn > li');

var $firstLi = $slidesLi.first(),
$lastLi = $slidesLi.last(),
$slidesNum = $slidesLi.length,
$slidesWidth = $slidesLi.width(),
$index = 0;  

$slidesUl.append($firstLi.clone());      // 添加克隆元素
$slidesUl.prepend($lastLi.clone());      // 添加克隆元素
$slidesUl.css({
width: $slidesUl.children().length * $slidesWidth + 'px',
left: -$slidesWidth
});
// 绑定事件
$carouselBox.on('mouseenter', stopTime);    // 鼠标移动到图片上轮播停止
$carouselBox.on('mouseleave',auto);         // 鼠标移开后开始轮播

$prev.on('click', function(e) {
e.preventDefault();
prev();
});

$next.on('click', function(e) {
e.preventDefault();
next();
});

$shullingBtn.on('click', function() {
$BtnIndex = $(this).index();
if($index === $BtnIndex) return;
console.log($BtnIndex),
($index > $BtnIndex) ? prev($index - $BtnIndex) : next($BtnIndex - $index);
})

var lock = true;        //  状态锁防止连续点击重复执行函数

//  处理函数
function prev(n=1) {
if(!lock) return;
lock = false;
$slidesUl.animate({ 'left': '+=' + $slidesWidth * n + 'px'}, function() {
    $index -= n;
    if($index < 0) {
        $('.slides-img').css({ 'left': -($slidesWidth * $slidesNum)});
        $index = $slidesNum - 1;
    }
    lock = true;
    gotoBtn();
});
}

function next(n=1) {
if(!lock) return;
lock = false;
$slidesUl.animate({ 'left': '-=' + $slidesWidth * n + 'px'}, function() {
    $index += n;
    if($index === $slidesNum) {
        $('.slides-img').css({ 'left': -$slidesWidth});
        $index = 0;
    }
    lock = true;
    gotoBtn();
})
}

function gotoBtn() {
$shullingBtn.removeClass('active').eq($index).addClass('active');
}

//  自动轮播
function auto() {
check = setInterval(next, 3500);
}
//  停止自动轮播
function stopTime() {
clearInterval(check);
}
auto();