$(function(){
    //定义画布的宽高和生成点的个数
    var canvas = document.getElementById("canvasbg");
    var context = canvas.getContext("2d");
    var W,
        H,
        POINT = 30;
    var circleArr = [];//储存所有的圆

    //动态设置canvas宽高
    function wh(){
        W = canvas.parentNode.offsetWidth;
        H = canvas.parentNode.offsetHeight;
        canvas.width = W;
        canvas.height = H;
    }
    var t;
    wh();
    window.addEventListener("resize", function() {
        clearTimeout(t);
        t = setTimeout(function(){
            wh();
            redraw();
        }, 100);
    });
    // 设置动画
    function begin(){
        context.strokeStyle = "rgba(25,25,25,.04)";
        context.lineWidth = 1;
        context.fillStyle = "rgba(25,25,25,.08)";
    }
    //线：起点坐标xy 结束点坐标_x,_y,透明度opacity
    function Line(x1,y1,x2,y2,opacity) {
        this.beginX = x1;
        this.beginY = y1;
        this.endX = x2;
        this.endY = y2;
        this.opacity = opacity;
    }
    //圆心点： 圆心坐标，半径，移动速度
    function Circle(x,y,r,vX,vY) {
        this.x = x;
        this.y = y;
        this.r = r;
        this.vX = vX;
        this.vY = vY;
    }
    //生成max和min之间的随机数
    function num (max, min) {
        return Math.floor(Math.random()*(max-min+1)+min);
    }

    //画圆：
    function drawCircle(ctx,x,y,r,vX,vY) {
        var circle = new Circle(x,y,r,vX,vY);
        ctx.beginPath();
        ctx.arc(x,y,r,0,2*Math.PI);
        ctx.fill();
        return circle;
    }
    //连线：
    function drawLine(ctx,x1,y1,x2,y2,opacity) {
        var line = Line(x1,y1,x2,y2,opacity);
        ctx.beginPath();
        ctx.strokeStyle = "rgba(25,25,25,"+opacity+")";
        ctx.moveTo(x1,y1);
        ctx.lineTo(x2,y2);
        ctx.stroke()
    }

    //初始化 生成圆数组
    function init() {
        for(var i=0;i<POINT;i++){
            circleArr.push(drawCircle(context,num(W,0),num(H,0),num(15,6),num(10,-10)/10,num(10,-10)/10))
        }
        draw();
    }
    function draw() {
        context.clearRect(0,0,W,H);
        //绘制出每个圆
        for(var i=0;i<POINT;i++){
            drawCircle(context,circleArr[i].x,circleArr[i].y,circleArr[i].r)
        }
        //连线
        for(var i=0;i<POINT;i++){
            for(var j=0;j<POINT;j++){
                if(i+j<POINT){//减少线数??
                    var A = Math.abs(circleArr[i+j].x - circleArr[i].x);
                    var B = Math.abs(circleArr[i+j].y - circleArr[i].y);
                    var lineLength = Math.sqrt(A*A + B*B);
                    var C = 1/lineLength*10-0.009;//???
                    var lineOpacity = C > 0.03 ? 0.06 : C;//????
                    if (lineOpacity > 0){
                        drawLine(context,circleArr[i].x,circleArr[i].y,circleArr[i+j].x,circleArr[i+j].y,lineOpacity)
                    }
                }
            }
        }

    }
    function redraw(){
        begin();
        init();
        setInterval(function () {
            for(var i=0;i<POINT;i++){
                var cir = circleArr[i];
                cir.x += cir.vX;
                cir.y += cir.vY;
                if(cir.x>W){
                    cir.x = 0;
                }else if(cir.x<0){
                    cir.x = W;
                }
                if(cir.y>H){
                    cir.y = 0;
                }else if(cir.y<0){
                    cir.y = H;
                }
            }
            draw()
        },10)
    }
    //调用执行
    redraw();

})
    
