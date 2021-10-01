/*
签到领现金，每日2毛～5毛
可互助，助力码每日不变，只变日期
活动入口：京东APP搜索领现金进入
更新时间：2021-06-07
已支持IOS双京东账号,Node.js支持N个京东账号
脚本兼容: QuantumultX, Surge, Loon, JSBox, Node.js
============Quantumultx===============
[task_local]
#签到领现金
2 0-23/4 * * * jd_cash.js, tag=签到领现金, img-url=https://raw.githubusercontent.com/Orz-3/mini/master/Color/jd.png, enabled=true

================Loon==============
[Script]
cron "2 0-23/4 * * *" script-path=jd_cash.js,tag=签到领现金

===============Surge=================
签到领现金 = type=cron,cronexp="2 0-23/4 * * *",wake-system=1,timeout=3600,script-path=jd_cash.js

============小火箭=========
签到领现金 = type=cron,script-path=jd_cash.js, cronexpr="2 0-23/4 * * *", timeout=3600, enable=true
 */