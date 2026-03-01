/ 1. 获取你想放大的中间元素（例如 id 为 "feature-box" 的 div）
const featureBox = document.getElementById('feature-box');
let isZoomed = false; // 记录当前缩放状态

// 2. 监听全局键盘按下事件
document.addEventListener('keydown', (event) => {
    // 检查是否按下了 'c' 键（不分大小写）
    if (event.key.toLowerCase() === 'c') {
        if (!isZoomed) {
            // 放大 1.5 倍，并确保有平滑过渡效果
            featureBox.style.transform = "scale(1.5)";
            featureBox.style.transition = "transform 0.3s ease";
            isZoomed = true;
        } else {
            // 恢复原状
            featureBox.style.transform = "scale(1)";
            isZoomed = false;
        }
    }
});
