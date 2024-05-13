// 加载Twikoo评论
function loadTwikoo(i) {
    let twikooEnv = i.getAttribute("data-env")
    let twikooPath = i.getAttribute("data-path")
    let twikooId = i.getAttribute("data-id")
    let twikooTime = i.getAttribute("data-time")
    let twikooDom = document.getElementById(`${Number(twikooTime)+Number(twikooId)}`);
    let twikooCon = "<div id='twikoo'></div>"
    if (twikooDom.classList.contains('d-none')) {
      document.querySelectorAll('.item-comment').forEach((item) => {item.classList.add('d-none');})
      if(document.getElementById("twikoo")){
        document.getElementById("twikoo").remove()
      }
      twikooDom.insertAdjacentHTML('beforeend', twikooCon);
      twikooDom.classList.remove('d-none');
      twikoo.init({
        envId: twikooEnv,
        el: '#twikoo', 
        path: twikooPath 
      });
    }else{
      twikooDom.classList.add('d-none');
      document.getElementById("twikoo").remove()
    }
  }