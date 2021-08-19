# Hotpack-proxy

proxy plugin for hotpack

a wrap for [koa-proxy](https://github.com/edorivai/koa-proxy) 


  ## Useage
  ```bash
  npm install --save-dev @duhongwei/hotpack-proxy 
  ```
  
  ```js
  import proxy from  '@duhongwei/hotpack-proxy'
  export defaut{
    plugin:[
      {
        name:'proxy',
        use:proxy,
        //config detail  https://github.com/edorivai/koa-proxy
        opt:{
          host: 'http://xxx.xx',
          match: /\/webapi\//,
          map: function (path) {
            return path.replace('/webapi', '');
          },
        }
      }
    ]
  }
  ```