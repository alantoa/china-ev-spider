import json
import codecs
from qdata.baidu_index import (
    get_feed_index,
    get_news_index,
    get_search_index,
    get_live_search_index
)
from operator import itemgetter

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
    '华人运通': ['华人运通']
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
    '蔚来es8': ["蔚来es8"],
    '比亚迪元': ["比亚迪元"],
    '特斯拉Model3': ["特斯拉Model3"],
    '小鹏g3': ["小鹏g3"],
    'Model s': ["Model s"],
    '宝马i3': ["宝马i3"],
    '宝骏E100': ["宝骏E100"],
    '荣威ei5': ["荣威ei5"],
    '宝骏E100': ["特斯拉Model3"],
    '荣威ei5': ["荣威ei5"],
    '荣威erx5': ["荣威erx5"],
    '几何A': ["几何A"],
    '帝豪gse': ["帝豪gse"],
    '传祺ge3': ["传祺ge3"]
}
cookies=""" """

def get_result(keywords):
    result = []
    for index in get_search_index(
            keywords_list=keywords,
            start_date='2021-04-05',
            end_date='2021-04-11',
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
            page += 1;
            sum = 0
            for j in result:
                sum += int(j.get('index'))
        data.append({
            'name': key,
            'num': int(sum / 7)
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
            page += 1;
            sum = 0
            for j in result:
                sum += int(j.get('index'))
        data.append({
            'name': key,
            'num': int(sum / 7)
        })
    data = sorted(data, key=itemgetter('num'), reverse=True)
    for x in data:
        print('{} {:d}'.format(x.get('name'), x.get('num')))


if __name__ == "__main__":
    get_car_keyword()
