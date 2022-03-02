import codecs
import datetime
import json
from operator import itemgetter

from qdata.baidu_index import (get_search_index)
from time import sleep

brand_keywords_list = {
    '小鹏汽车': ["小鹏p7", "小鹏g3", "小鹏汽车", "小鹏"],
    '爱驰汽车': ["爱驰汽车"],
    '理想汽车': ["车和家", "理想one", "理想智造", "理想汽车"],
    '天际汽车': ["天际汽车"],
    '零跑汽车': ["零跑汽车"],
    '哪吒汽车': ["哪吒汽车", "合众汽车", "合众新能源"],
    '威马汽车': ["威马", "威马汽车"],
    '蔚来汽车': ["蔚来es8", "es8", "es6", "蔚来", "蔚来汽车", "nio"],
    '恒大汽车': ['恒驰', '恒大汽车'],
    '华人运通': ['华人运通'],
    '智己汽车': ['智己汽车'],
    '沙龙汽车': ['沙龙汽车'],
    '阿维塔汽车': ['阿维塔汽车'],
    '岚图汽车': ['岚图汽车'],
}

car_keywords_list = {
    '理想one': ["理想one"],
    '比亚迪汉': ["比亚迪汉"],
    '奇瑞小蚂蚁': ["奇瑞小蚂蚁"],
    '比亚迪宋': ["比亚迪宋"],
    '比亚迪唐': ["比亚迪唐"],
    '五菱宏光mini': ["五菱宏光mini"],
    '小鹏p7': ["小鹏p7"],
    'model y': ["model y"],
    '比亚迪秦': ["比亚迪秦"],
    '蔚来es6': ["蔚来es6"],
    'model x': ["model x"],
    '蔚来es8': ["蔚来es8"],
    '比亚迪元': ["比亚迪元"],
    '特斯拉Model3': ["特斯拉Model3"],
    '小鹏g3': ["小鹏g3"],
    'Model s': ["Model s"],
    '宝马i3': ["宝马i3"],
    '宝骏E100': ["宝骏E100"],
    '荣威ei5': ["荣威ei5"],
    '荣威erx5': ["荣威erx5"],
    '几何A': ["几何A"],
    '帝豪gse': ["帝豪gse"],
    '传祺ge3': ["传祺ge3"],
    '智己 L7': ['智己L7'],
    '威马M7': ['威马M7'],
    '机甲龙': ['机甲龙'],
    '小鹏G9': ['小鹏G9'],
    '阿维塔': ['阿维塔'],
    '蔚来 ET7': ['蔚来et7'],
    '岚图梦想家': ['岚图梦想家'],
}
cookies = """__yjs_duid=1_8e91dec211e0d848771083cedca3f0051619495491947; PSTM=1624420579; BIDUPSID=EACFBD1E705DCBE3FD37EF6234E1516A; BAIDUID=81A438D412F2CB05AC9B661A22990519:FG=1; H_WISE_SIDS=110085_114551_127969_164870_171234_174661_175755_176158_176194_176504_176589_176678_177093_177409_177949_178024_178073_178102_178296_178328_178493_178499_178629_178704_178754_178800_178853_178946_179201_179203_179336_179341_179349_179398_179450_179521_179575_179592_179860_180074_180115_180122_180324_180364_8000091_8000100_8000117_8000125_8000135_8000144_8000150_8000159_8000169; BDUSS=VldmR1N1lZbmJxVW1DS3RqTVV1N2drY0FzM1ZsbzhqdHh-Q1hERGhyMDVJVGhoSVFBQUFBJCQAAAAAAAAAAAEAAACgTfo1T05FUElFQ0XYvEFuYW4AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAADmUEGE5lBBhVF; BDUSS_BFESS=VldmR1N1lZbmJxVW1DS3RqTVV1N2drY0FzM1ZsbzhqdHh-Q1hERGhyMDVJVGhoSVFBQUFBJCQAAAAAAAAAAAEAAACgTfo1T05FUElFQ0XYvEFuYW4AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAADmUEGE5lBBhVF; BAIDUID_BFESS=B9B039ED78DDD982AD3B13042528937C:FG=1; H_PS_PSSID=35835_34429_35105_31660_34584_35872_35245_35948_35955_35321_26350_35884_35878_22159; Hm_lvt_d101ea4d2a5c67dab98251f0b5de24dc=1646032305; Hm_up_d101ea4d2a5c67dab98251f0b5de24dc={"uid_":{"value":"905596320","scope":1}}; bdindexid=n0kfc4cug0kpeeird2bmco3mf0; Hm_lpvt_d101ea4d2a5c67dab98251f0b5de24dc=1646032313; __yjs_st=2_Y2FjOGViYWYxMWRlYzZkNjAxYjRmZmNjMjE1YTA4MThhYjg2YzJkYmY3MGJjNTNkN2QyMGMxNjEzMTk3MGJlYmIxZDRhOWNjOTFmZGFkOTYyMzgyYjFlMDVhNzE3NzdjY2VjZDY2NzZlOTYzYWYwMWMyZDQ0OWVhMTcwODI0NWYxOTJhMmZmZjI2NDI1NTE3OTdiYzdkMWYwMjkwNGE4YTAyODc5ZjViYWU5NjM1YzZkYTg4ZGRkNWZiMWQ5NWU5XzdfOTVhOGVmYmE=; ab_sr=1.0.1_Y2M3OTI1OWI0ZTNhNTMzNjg4MzNhMTk5Nzg3OWQ5NTkwOWU0YjJhYWM3YTEwYzliYzkyODJkMmIwYmYyOWI2MTEwY2Y4MjEyMzYzOGJkOTU2YzE4OWQwN2QyY2ZjNjk4MzY2YmY3OTBiOWRlMDlkZmQyYTI5NzMyZGE3ZjRmNDNkNGZhNzYxZDI5NmFhNGI0ZWUyNDgzNTc3NDU1MWVlOA==; RT="z=1&dm=baidu.com&si=wghfqv6dand&ss=l06d4ulq&sl=4&tt=282&bcn=https://fclog.baidu.com/log/weirwood?type=perf&ld=8xk\""""
# 天数
total_days = 7
start_date = (datetime.datetime.now() - datetime.timedelta(days=1)
              )-datetime.timedelta(days=total_days - 1)
end_date = datetime.datetime.now() - datetime.timedelta(days=1)


def get_result(keywords):
    result = []
    for index in get_search_index(
            keywords_list=keywords,
            start_date=start_date.strftime('%Y-%m-%d'),
            end_date=end_date.strftime('%Y-%m-%d'),
            cookies=cookies
    ):
        result.append(index)
    print(result)
    return result


def print_data(x):
    print('{} {:d}\n'.format(x.get('name'), x.get('num')))
    return x


def get_car_keyword():
    data = []
    for key, value in car_keywords_list.items():
        size = 3
        page = 1
        result = []
        listLen = len(value)
        while ((page * size) - size < listLen):
            keywords = value[(page - 1) * size:page * size]
            result += get_result(keywords)
            page += 1
            sum = 0
            for j in result:
                sum += int(j.get('index'))
        data.append({
            'name': key,
            'num': int(sum / total_days)
        })
    data = sorted(data, key=itemgetter('num'), reverse=True)
    for x in data:
        print('{} {:d}'.format(x.get('name'), x.get('num')))


def get_brand_keyword():
    data = []
    for key, value in brand_keywords_list.items():
        size = 3
        page = 1
        listLen = len(value)
        result = []
        while ((page * size) - size < listLen):
            keywords = value[(page - 1) * size:page * size]
            result += get_result(keywords)
            page += 1
            sum = 0
            for j in result:
                sum += int(j.get('index'))
            print(sum)
        data.append({
            'name': key,
            'num': int(sum / total_days)
        })
    data = sorted(data, key=itemgetter('num'), reverse=True)
    for x in data:
        print('{} {:d}'.format(x.get('name'), x.get('num')))


if __name__ == "__main__":
    print(start_date.strftime('%Y-%m-%d'), end_date.strftime('%Y-%m-%d'))
    get_car_keyword()
    get_brand_keyword()
