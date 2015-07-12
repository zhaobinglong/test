// 弹出层函数
function Poplayer(width){

    this.width=width;
    // 弹出文本信息
    Poplayer.prototype.str=function(str){
        var obj=document.createElement("div");
        obj.style.position="fixed";
        obj.style.height="30px";
        obj.style.width=this.width+'px';
        obj.style.top="35%";
        obj.style.padding="0 10px";
        obj.style.margin="0 auto";
        obj.style.left="0";
        obj.style.right="0";
        obj.style.textAlign="center";
        obj.style.fontSize="16px";
        obj.style.lineHeight="30px";
        obj.style.borderRadius="6px";
        obj.style.backgroundColor="rgba(0,0,0,.5)";
        obj.style.color="#fff";
        obj.innerHTML=str;
        document.body.appendChild(obj);

        setTimeout(function(){
            obj.parentNode.removeChild(obj);
        },3000);
    }

}




