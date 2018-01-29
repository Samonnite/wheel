!function () {
    function writeCode(prefix, code, fn) {
        let container = document.querySelector('#code')
        let styleTag = document.querySelector('#styleTag')
        let n = 0
        let id = setInterval(() => {
            n++
            container.innerHTML = code.substring(0, n)
            styleTag.innerHTML = code.substring(0, n)
            container.scrollTop=container.scrollHeight
            if (n >= code.length) {
                window.clearInterval(id)
                fn && fn.call
            }
        }, 10)
    }
    let code=`.preview{
        height: 100%;
        display: flex;
        justify-content: center;
        align-items: center;
        background: #fee433;
    }
    .wrapper{
        width: 100%;
        height: 165px;
        position: relative;
    }
    
    .nose{
        width: 22px;
        height: 22px;
        border-radius: 11px;
        border: 11px solid #000;
        border-color: #000 transparent transparent;
        position: absolute;
        left: 50%;
        top: 28px;
        margin-left: -11px;
    }
    .eye{
        width: 49px;
        height: 49px;
        background: #2e2e2e;
        position: absolute;
        border-radius: 50%;
    }
    .eye::before{
        content: '';
        display: block;
        height: 24px;
        width: 24px;
        background: #fff;
        position: absolute;
        border-radius: 50%;
        left: 8px;
        top: 1px;
        border: 2px solid #000;
    }
    .eye.left{
        right: 50%;
        margin-right: 90px;
    }
    .eye.right{
        left: 50%;
        margin-left: 90px;
    }
    .face{
        width: 68px;
        height: 68px;
        background: #fc0d1c;
        border: 2px solid #000;
        border-radius: 50%;
        position: absolute;
        top: 85px;
    }
    .face.left{
        right: 50%;
        margin-right: 116px;
    }
    .face.right{
        left: 50%;
        margin-left: 116px;
    }
    .upperLip{
        height: 25px;
        width: 80px;
        border: 3px solid #000;
        position: absolute;
        top: 50px; 
        background: #fee433;
    }
    .upperLip.left{
        border-bottom-left-radius: 40px 25px;
        border-top: none;
        border-right: none;
        transform: rotate(-20deg);
        right: 50%;
    }
    .upperLip.right{
        left: 50%;
        border-bottom-right-radius: 40px 25px;
        border-top: none;
        border-left: none;
        transform: rotate(20deg);
    }
    .lowerLip-wrapper{
        position: absolute;
        bottom: 0;
        left: 50%;
        margin-left: -150px;
        z-index: 0;
        height: 110px;
        width: 300px;
        overflow: hidden;
    }
    .lowerLip{
        position: absolute;
        width: 300px;
        height: 3500px;
        background: #990513;
        border-radius: 200px/2000px;
        border: 2px solid #000;
        bottom: 0;
        overflow: hidden;
    }
    .lowerLip::after{
        content: '';
        position: absolute;
        bottom: -20px;
        width: 100px;
        height: 100px;
        background: #fc4a62;
        left: 50%;
        margin-left: -50px;
        border-radius: 50%;
        
    }`
    writeCode('', code)
}.call()