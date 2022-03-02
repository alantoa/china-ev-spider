import datetime
import json

import pandas as pd
import requests

config = {
    "openid": "You wechat openid",
    "search_key": "You wechat key_id",
}

car_list = [
    "蔚来 ES6",
    "比亚迪 汉",
    "特斯拉 Model 3",
    "比亚迪 宋",
    "小鹏 P7",
    "理想 ONE",
    "特斯拉 Model S",
    "蔚来 ES8",
    "比亚迪 秦",
    "比亚迪 唐",
    "特斯拉Modely",
    "比亚迪元",
    "特斯拉ModelX",
    "奇瑞小蚂蚁",
    "几何A",
    "宝骏E100",
    "小鹏g3",
    "宝马i3",
    "荣威ei5",
    "帝豪ev",
    "荣威ei6",
    "erx5",
    "荣威erx5",
    "帝豪gse",
    "传祺ge3",
    "marvel x",
    '智己L7',
    '威马M7',
    '机甲龙',
    '小鹏G9',
    '阿维塔11',
    '蔚来ET7',
    '岚图FREE',
    '岚图梦想家',
]
com_list = [
    "蔚来汽车",
    "小鹏汽车",
    "理想汽车",
    "威马汽车",
    "零跑汽车",
    "哪吒汽车",
    "恒驰汽车",
    "爱驰汽车",
    "天际汽车",
    "华人运通",
    '智己汽车',
    '沙龙汽车',
    '阿维塔汽车',
    '岚图汽车',

]

url = 'https://search.weixin.qq.com/cgi-bin/wxaweb/wxindex'


def asyncData(key_list, table_name):
    resp = requests.post(url, json.dumps({
        'openid': config.get('openid'),
        'search_key': config.get('search_key'),
        "cgi_name": "GetDefaultIndex",
        "query": key_list,
        "start_ymd": "20200913",
        "end_ymd": datetime.datetime.now().strftime('%Y%m%d'),
    }))
    result = []
    lists = json.loads(resp.text).get('content').get('resp_list')
    print(lists)
    # 天数
    days = 7
    for x in lists:
        for y in x.get('indexes'):
            score = y.get('time_indexes')
            s = 0
            for z in score[-days:]:
                s += z.get('score')
            temp = [x.get('query'), int(s / days)]
            result.append(temp)

    result = pd.DataFrame(columns=['关键词', '指数'], data=result)
    date = datetime.datetime.now().strftime('%Y-%m-%d')
    result.to_csv('./files/微信指数-{}-{}.csv'.format(table_name, date))


asyncData(com_list, '车企')
asyncData(car_list, '车型')
