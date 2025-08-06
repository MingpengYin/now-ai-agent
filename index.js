// This is the code for functions/index.js

export async function onRequest(context) {
  // 从环境变量中读取 DISABLE_PAGE 的值
  const isPageDisabled = context.env.DISABLE_PAGE === 'true';

  // 如果页面被禁用
  if (isPageDisabled) {
    // 返回 404 Not Found 响应
    return new Response('404 Not Found', { status: 404 });
  }

  // 如果页面没有被禁用，则正常处理请求，返回 index.html
  // context.next() 会执行正常的 Pages 路由，返回 index.html
  return context.next();
}