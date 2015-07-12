<?php
    
    // 
    setcookie('cookee','456',time()+3600);

    // 设置cookie有效期一个月，域名之下所有url都可以使用
    setcookie('user',$userInfo,time()+86400*30,"/");

?>