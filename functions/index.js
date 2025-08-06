export async function onRequest(context) {
    // 获取当前时间的分钟数
    const currentMinute = new Date().getMinutes();
    
    // 判断是否为偶数分钟
    const isEvenMinute = currentMinute % 2 === 0;
    
    // 如果是偶数分钟，返回404
    if (isEvenMinute) {
        return new Response('404 Not Found', {
            status: 404,
            headers: {
                'Content-Type': 'text/plain'
            }
        });
    }
    
    // 奇数分钟，正常显示页面
    return context.next();
}
