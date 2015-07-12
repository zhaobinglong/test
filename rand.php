<?php

// 随机函数类
// 返回可控概率的一个数字
class rand{
    
    public function num(){
    	$arr=array(0,0,0,0,4);
    	return $arr[array_rand($arr)];
    }
}

?>