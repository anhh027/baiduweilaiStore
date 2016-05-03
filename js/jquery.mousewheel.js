$.fn.extend({
	mouseWheel:function(upcallback,downcallback){
		//this=obj
		this.each(function(i,obj){
			if(document.addEventListener){
				obj.addEventListener("mousewheel",scrollFn,false);
      			//chrome,safari -webkit-
      			obj.addEventListener("DOMMouseScroll",scrollFn,false);
      //firefox -moz-
  			}else if(document.attachEvent){
    			obj.attachEvent("onmousewheel",scrollFn); //IE、 opera
			}
	function scrollFn(e){
		var ev=e||window.event;
		var val=ev.wheelDelta || ev.detail;
        	if(val==120 || val==-3 ||val==-1){               //向上滚动
        		upcallback&&upcallback.call(obj);
        	}else if(val==-120 || val==3 ||val==1){         //向下滚动
        		downcallback&&downcallback.call(obj);
        	}
    		//清除浏览器的默认动作
    		if(ev.preventDefault){
          		ev.preventDefault();   //阻止默认浏览器动作(W3C)
      		}else{
         	 	ev.returnValue=false;  //IE中阻止函数器默认动作的方式
      		}
  		}

	})
	}
})