import { Text, Image, Input, Button } from '@rneui/themed';
import React, { useState, useRef, useEffect, PropsWithChildren } from 'react';
import { View, ViewStyle, ImageStyle, TextStyle, TextInput } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome5';

import { getCodeImg } from '@/api/login';
import { Screen } from '@/components/Screen';
import { useUserStore, UserStore } from '@/store/userStore';

const logoPng = require('@/assets/logo.png');

console.log(logoPng);

interface ErrorMessages {
  [key: string]: string;
}

export default function Page() {
  const userStore = useUserStore() as UserStore;
  // 安全文本
  const [secureText, setSecureText] = useState<boolean>(true);
  // 验证错误信息
  const [errorMessages, setErrorMessages] = useState<ErrorMessages>({
    username: '',
    password: '',
    code: '',
  });
  // 登录表单
  const [loginForm, setLoginForm] = useState({
    username: 'admin',
    password: 'admin123',
    code: '',
    uuid: '',
  });
  // 验证码
  const [codeUrl, setCodeUrl] = useState<string>('');
  // ref=====
  const userNameRef = useRef<PropsWithChildren<TextInput> | null>(null);
  const passwordRef = useRef<PropsWithChildren<TextInput> | null>(null);
  const codeRef = useRef<PropsWithChildren<TextInput> | null>(null);
  // =====
  // 登录
  const handleLogin = async () => {
    const { username, password, code, uuid } = loginForm;
    if (username === '') {
      setErrorMessages({
        ...errorMessages,
        username: '请输入账号',
      });
    }
    if (password === '') {
      setErrorMessages({
        ...errorMessages,
        password: '请输入密码',
      });
    }
    if (code === '') {
      setErrorMessages({
        ...errorMessages,
        code: '请输入验证码',
      });
    }
    if (username && password && code && uuid) {
      setErrorMessages({
        ...errorMessages,
        username: '',
        password: '',
        code: '',
      });
    }
    const res = await userStore.Login({ username, password, code, uuid });
    console.log(res);
  };

  // 获取图形验证码
  const getCode = async () => {
    const res = await getCodeImg();
    console.log('getCode', res.data);

    setCodeUrl('data:image/gif;base64,' + res.data!.img);

    // if (this.captchaEnabled) {
    //   this.codeUrl = 'data:image/gif;base64,' + res.img;
    //   this.loginForm.uuid = res.uuid;
    // }
  };

  const initData = () => {
    userNameRef.current?.setNativeProps({ value: loginForm.username });
    passwordRef.current?.setNativeProps({ value: loginForm.password });
    codeRef.current?.setNativeProps({ value: loginForm.code });
  };

  useEffect(() => {
    getCode();
    // 初始化数据
    initData();
  }, []);

  return (
    <Screen>
      <View style={pageStyle}>
        <View style={logoContent}>
          <Image source={logoPng} style={logoStyle} />
          <Text style={titleStyle}>若依移动端登录</Text>
        </View>
        <Input
          ref={userNameRef}
          placeholder="请输入账号"
          label="账号"
          errorMessage={errorMessages.username}
          leftIcon={<Icon name="user" size={20} />}
        />
        <Input
          ref={passwordRef}
          errorMessage={errorMessages.password}
          label="密码"
          secureTextEntry={secureText}
          leftIcon={<Icon name="lock" size={20} />}
          rightIcon={
            <Icon.Button
              name="eye"
              size={20}
              backgroundColor="transparent"
              color="black"
              onPress={() => setSecureText(!secureText)}
            />
          }
          placeholder="请输入您的密码"
        />
        <View style={{ flexDirection: 'row' }}>
          <View style={{ flex: 2 }}>
            <Input
              ref={codeRef}
              errorMessage={errorMessages.code}
              label="验证码"
              leftIcon={<Icon name="code" size={20} />}
              placeholder="请输入验证码"
            />
          </View>
          <View style={{ flex: 1 }}>
            {codeUrl && (
              <Image source={{ uri: codeUrl }} style={{ width: 100, height: 38, marginLeft: 10 }} />
            )}
          </View>
        </View>

        <View style={pageStyle}>
          <Button color="#1890ff" title="登录" onPress={handleLogin} />
        </View>
      </View>
    </Screen>
  );
}

const pageStyle: ViewStyle = {
  padding: 10,
};

const logoContent: ViewStyle = {
  marginTop: '15%',
  marginEnd: 10,
  flexDirection: 'row',
  flexWrap: 'wrap',
  alignContent: 'center',
  justifyContent: 'center',
};

const logoStyle: ImageStyle = {
  width: 50,
  height: 50,
  borderRadius: 4,
};

const titleStyle: TextStyle = {
  fontSize: 21,
  textAlign: 'center',
  lineHeight: 45,
  marginLeft: 10,
};
