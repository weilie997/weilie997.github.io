window.onload=function(){
    var canvas=document.getElementsByTagName('canvas')[0];
    var cc=canvas.getContext('2d');

    cc.translate(250,250);

    function watch(){
        cc.clearRect(-250,-250,500,500);
        cc.save();
        cc.beginPath();
        cc.lineWidth=4;
        cc.strokeStyle='#000';
        cc.arc(0,0,200,0,Math.PI*2,true);
        cc.closePath();
        cc.stroke();
        cc.restore();

        for(var i=1;i<=12;i++){
            cc.save();
            cc.beginPath();
            cc.rotate(Math.PI*2/12*i);
            cc.moveTo(0,-180);
            cc.lineTo(0,-200);
            cc.closePath();
            cc.stroke();
            cc.restore();

            cc.font='24px 微软雅黑';
            cc.textAlign="center";
            cc.textBaseline='middle';
            var x=Math.sin(Math.PI*2/12*i)*160;
            var y=-Math.cos(Math.PI*2/12*i)*160;
            cc.fillText(i,x,y);
        }

        for(var j=0;j<60;j++){
            if(j%5!==0){
                cc.save();
                cc.beginPath();
                cc.rotate(Math.PI*2/60*j);
                cc.moveTo(0,-190);
                cc.lineTo(0,-200);
                cc.closePath();
                cc.strokeStyle='red';
                cc.stroke();
                cc.restore();
            }
        }

        var d=new Date();
        var hour=d.getHours();
        var minute=d.getMinutes();
        var second=d.getSeconds();
        //时针
        cc.save();
        cc.beginPath();
        cc.rotate(Math.PI*2/12*(hour+minute/60+second/3600));
        cc.moveTo(0,20);
        cc.lineTo(0,-120);
        cc.closePath();
        cc.strokeStyle="#000";
        cc.lineWidth=10;
        cc.stroke();
        cc.restore();
        //分针
        cc.save();
        cc.beginPath();
        cc.rotate(Math.PI*2/60*(minute+second/60));
        cc.moveTo(0,20);
        cc.lineTo(0,-150);
        cc.closePath();
        cc.strokeStyle="#000";
        cc.lineWidth=8;
        cc.stroke();
        cc.restore();
        // 秒针
        cc.save();
        cc.beginPath();
        cc.rotate(Math.PI*2/60*second);
        cc.moveTo(0,20);
        cc.lineTo(0,-170);
        cc.closePath();
        cc.strokeStyle='red';
        cc.lineWidth=2;
        cc.stroke();
        cc.restore();
        //圆点
        cc.save();
        cc.beginPath();
        cc.arc(0,0,10,0,Math.PI*2,true);
        cc.fillStyle="#000";
        cc.fill();
        cc.closePath();
        cc.restore();
    }
    watch();
    setInterval(watch,1000);
}