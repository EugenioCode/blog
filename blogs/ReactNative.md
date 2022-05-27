---
title: React Native
date: 2022-05-27
sidebar: 'auto'
tags:

- React
- React Native
- IOS
---

<!-- more -->

## 报错解决

 ### 解决RN 运行报错 `No bundle url present`.错误解决方案

1. 检查本地是否配置了 host 一定需要配置。mac 上直接安装一个SwitchHosts.
```shell
127.0.0.1   localhost
```
2. 排查是不是端口被占用了
```shell
sudo lsof -i:8081 //查看端口 

sudo kill -9 [端口号]
```

### ios引入 `react-native-vector-icons` 报错

1. 安装包后 运行 `npx pod-install ios`关联到ios文件夹中
2. 使用xcode打开项目下的ios目录，将`node_modules/react-native-vector-icons/Fonts`文件夹复制到xcode的项目目录下
    > Add to target 中的项目名不要勾选

   ![](https://raw.githubusercontent.com/EugenioCode/picBed/main/20220527172138.png)
3. 打开Xcode，使用源代码模式编辑 info.plist 文件
```info
<key>UIAppFonts</key>
<array>
  <string>AntDesign.ttf</string>
  <string>Entypo.ttf</string>
  <string>EvilIcons.ttf</string>
  <string>Feather.ttf</string>
  <string>FontAwesome.ttf</string>
  <string>FontAwesome5_Brands.ttf</string>
  <string>FontAwesome5_Regular.ttf</string>
  <string>FontAwesome5_Solid.ttf</string>
  <string>Foundation.ttf</string>
  <string>Ionicons.ttf</string>
  <string>MaterialIcons.ttf</string>
  <string>MaterialCommunityIcons.ttf</string>
  <string>SimpleLineIcons.ttf</string>
  <string>Octicons.ttf</string>
  <string>Zocial.ttf</string>
  <string>Fontisto.ttf</string>
</array>
```
4. 使用Xcode编译一下iOS项目，如果没有任何错误就说明配置好了



