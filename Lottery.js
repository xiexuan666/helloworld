window.onload=function(){ 

    alert("初始化加载"); 
    
    }; 

<script>
// 获取元素
var begin = document.querySelector ('.begin');
var pointer  = document.querySelector ('.pointer');
// 注册事件
begin.addEventListener  ('click', function fn () {
// 解绑事件
begin.removeEventListener ('click', fn);


// 获取角度
var r = Math.random () * 360;
// 修改 指针的transform属性
pointer.style.transform = 'rotate('+ r +'deg)';

})
</script>


