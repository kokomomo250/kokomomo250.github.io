// momo-cat.js

// 文档加载完成后执行
document.addEventListener('DOMContentLoaded', function() {
    // 获取 DOM 元素
    const cat = document.getElementById("momoCat");
    const resetBtn = document.getElementById("resetBtn");

    const earAudio = document.getElementById("earAudio");
    const earAudio2 = document.getElementById("earAudio2");
    const bellyAudio = document.getElementById("bellyAudio");
    const bellyAudio2 = document.getElementById("bellyAudio2");
    const pawAudio = document.getElementById("pawAudio");
    const pawAudio1 = document.getElementById("pawAudio1");
    const pawAudio2 = document.getElementById("pawAudio2");

    // 将所有音频放入数组
    const audioList = [earAudio, earAudio2, bellyAudio, bellyAudio2, pawAudio, pawAudio2];

    // 播放声音并做随机动画
    function playSoundAndAnimate(audioEl) {
        audioEl.currentTime = 0;
        audioEl.play();
        // 随机旋转 -30~30度，随机缩放 1~1+2
        const deg = (Math.random() - 0.5) * 60;
        const scale = 1 + Math.random() * 2;
        cat.style.transition = "transform 0.3s ease";
        cat.style.transform = `rotate(${deg}deg) scale(${scale})`;
        // 300ms 后复位
        setTimeout(() => {
            cat.style.transform = "";
        }, 300);
    }

    // 获取所有猫咪热点按钮
    const hotspotButtons = [
        document.getElementById("ear"),
        document.getElementById("belly"),
        document.getElementById("paw"),
        document.getElementById("ear-left"),
        document.getElementById("ear-right"),
        document.getElementById("forehead"),
        document.getElementById("chin"),
        document.getElementById("paw-left"),
        document.getElementById("paw-right"),
        document.getElementById("tail")
    ];

    // 给所有热点按钮绑定点击事件
    hotspotButtons.forEach(btn => {
        if (btn) { // 确保按钮存在
            btn.addEventListener("click", () => {
                // 随机选择一个音频
                const randomAudio = audioList[Math.floor(Math.random() * audioList.length)];
                playSoundAndAnimate(randomAudio);
            });
        }
    });

    // 切换躺/站
    resetBtn.addEventListener("click", () => {
        const lying = /lying/.test(cat.src);
        cat.src = lying
            ? "assets/momo_cat_standing.png"
            : "assets/momo_cat_lying.png";
    });
});