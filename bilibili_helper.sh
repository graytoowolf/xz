#!/usr/bin/env bash
if ! [ -x "$(command -v java)" ]; then
   echo "开始安装Java运行环境........."
   apk update
   apk add openjdk8
fi
if [ ! -d "/ql/scripts/bilibili/" ]; then
   mkdir /ql/scripts/bilibili
   cp -f bilibili_helper.sh ./bilibili/bilibili_helper.sh  
fi
cd bilibili
token=$(cat /ql/config/auth.json | jq -r .token)
currentTimeStamp=$(date +%s)
data=$(curl -H "Authorization: Bearer $token" "http://0.0.0.0:5700/api/crons?searchValue=&t=$currentTimeStamp")
if [[ "$data" != *BILIBILI-HELPER* ]]
then
   api=$(
        curl -s --noproxy "*" "http://0.0.0.0:5600/api/crons?t=$currentTimeStamp" \
            -H "Accept: application/json" \
            -H "Authorization: Bearer $token" \
            -H "User-Agent: Mozilla/5.0 (Macintosh; Intel Mac OS X 11_2_3) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/89.0.4389.90 Safari/537.36" \
            -H "Content-Type: application/json;charset=UTF-8" \
            -H "Origin: http://0.0.0.0:5700" \
            -H "Referer: http://0.0.0.0:5700/crontab" \
            -H "Accept-Language: en-US,en;q=0.9,zh-CN;q=0.8,zh;q=0.7" \
            --data-raw "{\"name\":\"BILIBILI-HELPER\",\"command\":\"task ./bilibili/bilibili_helper.sh\",\"schedule\":\"0 8 * * *\"}" \
            --compressed
    )
    code=$(echo $api | jq -r .code)
    message=$(echo $api | jq -r .message)
    if [[ $code == 200 ]]; then
        echo -e "定时任务添加成功"
    else
        echo -e "定时任务添加失败"
    fi
fi

if [ -f "/tmp/bili-helper.log" ];then
  VERSION=$(grep "当前版本" "/tmp/bili-helper.log" | awk '{print $2}')
  else
  VERSION="0"
fi
echo "当前版本:"$VERSION
latest=$(curl -s https://api.github.com/repos/JunzhouLiu/BILIBILI-HELPER-PRE/releases/latest)

latest_VERSION=`echo $latest | jq '.tag_name' | sed 's/v\|"//g'`
echo "最新版本:"$latest_VERSION
download_url=`echo $latest | jq '.assets[0].browser_download_url' | sed 's/"//g'`
echo "https://ghproxy.com/$download_url"
function version_lt() { test "$(echo "$@" | tr " " "\n" | sort -rV | head -n 1)" != "$1"; }

if version_lt $VERSION $latest_VERSION; then
   echo "有新版本，开始更新"
   curl -L -o "./BILIBILI-HELPER.zip" "https://ghproxy.com/$download_url"
   mkdir ./tmp
   echo "正在解压文件......."
   unzip -o -d ./tmp/ BILIBILI-HELPER.zip
   cp -f ./tmp/BILIBILI-HELPER*.jar BILIBILI-HELPER.jar
   if [ ! -f "./config.json" ];then
        echo "配置文件不存在。"
        cp -f ./tmp/config.json config.json
    fi
   echo "清除缓存........."
   rm -rf tmp
   rm -rf BILIBILI-HELPER.zip
   echo "更新完成"
   else
   echo "已经是最新版本，不需要更新！！！"
fi
java -jar BILIBILI-HELPER.jar config.json