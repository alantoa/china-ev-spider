### 文件说明

- brand_charge/\*.js (文件名对应品牌)
  特理蔚鹏的自营充电桩信息，理想暂时没有，小鹏暂无接口暴露

- brand_store/\*.js (文件名对应品牌)
  特理蔚鹏品牌门店信息

#### 使用方式

```sh
  npm i
  node ./brand_charge/*.js
```

### 文件说明

- baidu_index/baiduRank.py
  新能源新势力汽车最近一周百度指数

#### 使用方式

```sh
  pip uninstall pycrypto  # 避免与pycryptodome冲突
  pip install --upgrade qdata
  python3 ./baidu_index/baiduRank.py
```

### 文件说明

- wechat_index/getWechatRank.py
  新能源新势力汽车最近一周微信指数

#### 使用方式

```sh
  pip3 install pandas requests
  python3 ./wechat_index/getWechatRank.py
```
