//https://github.com/edorivai/koa-proxy
import proxy from 'koa-proxy';
export default async function ({ opt }) {
  if (!opt || !opt.host) {
    throw new Error('host required!')
  }
  this.on('beforeServer', webApp => {
    webApp.use(proxy(opt));
  })
}
