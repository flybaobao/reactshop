let baseUrl = 'https://aitest.life.cntaiping.com/aimarket/api/';
let env = process.env.NODE_ENV === "production" ? 'pre' : 'uat';
let obj = {
    rootUrl: baseUrl + 'small-tools/' + env + '/instructions/select-instructions-menu',
    path: '/', //为了以后上传至 服务器 请求路由的文件夹
}
export default obj