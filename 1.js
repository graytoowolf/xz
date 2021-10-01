/*================Loon==============
[Script]
cron "30 7 * * *" script-path=https://raw.githubusercontent.com/asd920/Auto-jd/main/jd_ddly.js tag=东东乐园
*/
const $ = new Env('签到领现金');
const notify = $.isNode() ? require('./sendNotify') : '';
//Node.js用户请在jdCookie.js处填写京东ck;
const jdCookieNode = $.isNode() ? require('./jdCookie.js') : '';