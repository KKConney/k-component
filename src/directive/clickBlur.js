export const clickBlur = {
	bind(el, bindding, vnode){
		document.addEventListener('click',(e)=>{
			if(el.contains(e.target)){
				return false;
			}
			if(bindding.expression){
				bindding.value(e);
			}
			
		})
	}
}

