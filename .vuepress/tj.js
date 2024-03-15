
import $ from "jquery"; //在vuepress所属package.json中安装jquery
var nowPageUrl = "";

//入口方法
export function getCount(path) {
  nowPageUrl = path;
  return new Promise((resolve, reject) => {
    getBaidu().then((res) => {
      resolve(res);
    });
  });
}

//请求百度统计公开接口获取统计数据
async function getBaidu() {
  var num = 0;
  await $.ajax({
    type: "get",
    dataType: "jsonp",
    url: "https://openapi.baidu.com/rest/2.0/tongji/report/getData",
    data: {
      access_token: "121.ab1b99392284b70f7b064e55224f0152.YnCGkvNxMS4qEimY_z9tfeIv6u_-Z2iShP5IV3T.AZK4zQ", //
      site_id: "19765492",
      method: "visit/toppage/a",
      start_date: "20200401",
      end_date: "20400401",
      metrics: "pv_count",
      max_results: '1000'
    },
    success: function(res) {
      num = visiteNum(res.result);
    },
    error: function(err) {
      console.log("error======", err);
    },
  });
  return num;
}
function removeLastStr(str) {
  if (str.charAt(str.length - 1) === '/') {
    return str.slice(0, -1); // 删除最后一位字符
  }
  return str; // 如果最后一位不是逗号，则返回原字符串
}
//计算对应页面的浏览量
function visiteNum(data) {
  let pv = 0
  //计算总浏览量
  if (data && data.items) {
    const items = data.items || []
    console.log(items)
    const page = items[0] || [], vis = items[1] || []
    // 主页统计全部
    if(nowPageUrl == '/') {
      page.forEach((value, index) => {
        // 只统计该域名下的，因为开发的时候访问也会被计算这里分开统计
        if(value[0].name.indexOf(window.location.origin) > -1) {
          pv += vis[index][0]
        }
      })
    } else {
      const pathUrl = removeLastStr(window.location.origin + nowPageUrl)
      // const pathUrl = removeLastStr('https://holazero.cn' + nowPageUrl)
      console.log(pathUrl)
      for(let i = 0, n = page.length; i < n; i++) {
        if(page[i][0].name == pathUrl) {
          pv = vis[i][0]
          break
        }
      }
    }
  }
  return pv;
}
