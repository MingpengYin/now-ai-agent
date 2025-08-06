export default async function onRequest(context) {
  // 从环境变量中读取 DISABLE_PAGE 的值
  const isPageDisabled = context.env.DISABLE_PAGE === 'true';

  if (isPageDisabled) {
    // 如果页面被禁用，返回 404
    return new Response('404 Not Found', { status: 404 });
  }

  // 否则，让 Pages 返回 index.html
  return context.next();
}
