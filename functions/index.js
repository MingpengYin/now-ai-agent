addEventListener('fetch', (event) => {
  event.respondWith(handleRequest(event));
});


async function handleRequest(event) {
  // 从环境变量取配置（注意： Workers 中通过 event.env 或单独的 env 对象获取，需确认绑定）
  const isPageDisabled = event.env.DISABLE_PAGE === 'true';
  
  if (isPageDisabled) {
    return new Response('404 Not Found', { status: 404 });
  }
  
  // 继续传递请求（类似 context.next()，但 Workers 中需用 fetch 原请求）
  return fetch(event.request);
}

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
