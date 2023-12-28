const zh = {
  common: {
    ok: '好!',
    cancel: '取消',
    back: '返回',
    logOut: '退出',
  },
  welcomeScreen: {
    postscript:
      '嘘——这可能不是你的应用看起来的样子。(除非你的设计师给了你这些屏幕，在这种情况下，发布它!)',
    readyForLaunch: '您的应用程序，几乎准备好发布!',
    exciting: '(哦，这太令人兴奋了!)',
    letsGo: '让我们走吧',
  },
  errorScreen: {
    title: '出了点问题',
    friendlySubtitle:
      "这是当抛出错误时用户在生产环境中看到的屏幕。你会想要自定义这个消息(位于' app/i18n/en.ts ')和布局(' app/screens/ErrorScreen ')。如果你想完全删除它，点击“app/app”。<ErrorBoundary>组件的tsx '。",
    reset: '重新设置程序',
    traceTitle: ' %{name} 堆栈错误',
  },
  emptyStateComponent: {
    generic: {
      heading: '所以空…如此悲伤',
      content: '还没有找到数据。尝试点击按钮刷新或重新加载应用程序。',
      button: '我们再试一次',
    },
  },

  errors: {
    invalidEmail: '无效的电子邮件地址。',
  },
  loginScreen: {
    signIn: '登录',
    enterDetails:
      '在下面输入您的详细信息以解锁最高机密信息。你绝对猜不到我们在等什么。也许你会;这不是火箭科学。',
    emailFieldLabel: '电子邮件',
    passwordFieldLabel: '密码',
    emailFieldPlaceholder: '输入您的电子邮件地址',
    passwordFieldPlaceholder: '输入您的密码',
    tapToSignIn: '点击登录!',
    hint: '提示:您可以使用任何电子邮件地址和您最喜欢的密码',
  },
  demoNavigator: {
    componentsTab: '组件',
    debugTab: 'Debug',
    communityTab: '社区',
    podcastListTab: '博客',
  },
  demoCommunityScreen: {
    title: '与社区建立联系',
    tagLine: '加入Infinite Red的React Native工程师社区，与我们一起提升您的应用程序开发水平!',
    joinUsOnSlackTitle: '加入我们的Slack',
    joinUsOnSlack:
      '希望有一个地方可以与世界各地的React Native工程师联系?加入无限红社区Slack的对话!我们不断增长的社区是一个安全的空间，可以提出问题，向他人学习，并扩大您的网络。',
    joinSlackLink: '加入Slack社区',
    makeIgniteEvenBetterTitle: '让Ignite变得更好',
    makeIgniteEvenBetter:
      '你有什么想法可以让Ignite变得更好吗?我们很高兴听到这个消息!我们一直在寻找那些愿意帮助我们构建最好的React Native工具的人。在GitHub上加入我们，与我们一起建设Ignite的未来。',
    contributeToIgniteLink: '为Ignite做贡献',
    theLatestInReactNativeTitle: '最新的React Native',
    theLatestInReactNative: '我们在这里让您了解React Native提供的所有最新内容。',
    reactNativeRadioLink: 'React Native Radio',
    reactNativeNewsletterLink: 'React Native Newsletter',
    reactNativeLiveLink: 'React Native Live',
    chainReactConferenceLink: 'Chain React Conference',
    hireUsTitle: '在你的下一个项目中雇佣Infinite Red',
    hireUs:
      '无论是运行一个完整的项目，还是通过我们的实践培训让团队加快速度，Infinite Red都可以帮助任何React Native项目。',
    hireUsLink: '给我们捎个信',
  },
  demoShowroomScreen: {
    jumpStart: '组件来启动您的项目!',
    lorem2Sentences:
      '无占位权的荒漠荒漠，是一种不受控制的荒漠荒漠。除精英工场外，其他工场都是如此。',
    demoHeaderTxExample: 'Yay',
    demoViaTxProp: 'Via `tx` Prop',
    demoViaSpecifiedTxProp: 'Via `{{prop}}Tx` Prop',
  },
  demoDebugScreen: {
    howTo: 'HOW TO',
    title: 'Debug',
    tagLine: '恭喜你，你已经有了一个非常高级的React Native应用模板。充分利用这个样板文件!',
    reactotron: 'Send to Reactotron',
    reportBugs: 'Report Bugs',
    demoList: 'Demo List',
    demoPodcastList: 'Demo Podcast List',
    androidReactotronHint:
      '如果这不起作用，确保Reactotron桌面应用程序正在运行，在终端上运行adb reverse tcp:9090 tcp:9090，然后重新加载应用程序。',
    iosReactotronHint: '如果这不起作用，确保Reactotron桌面应用程序正在运行并重新加载应用程序。',
    macosReactotronHint: '如果这不起作用，确保Reactotron桌面应用程序正在运行并重新加载应用程序。',
    webReactotronHint: '如果这不起作用，确保Reactotron桌面应用程序正在运行并重新加载应用程序。',
    windowsReactotronHint: '如果这不起作用，确保Reactotron桌面应用程序正在运行并重新加载应用程序。',
  },
  demoPodcastListScreen: {
    title: 'React Native Radio episodes',
    onlyFavorites: 'Only Show Favorites',
    favoriteButton: 'Favorite',
    unfavoriteButton: 'Unfavorite',
    accessibility: {
      cardHint: '双击收听这一集。双击并按住本集的{{动作}}。',
      switch: '打开以只显示收藏夹',
      favoriteAction: 'Toggle Favorite',
      favoriteIcon: 'Episode not favorited',
      unfavoriteIcon: 'Episode favorited',
      publishLabel: 'Published {{date}}',
      durationLabel: 'Duration: {{hours}} hours {{minutes}} minutes {{seconds}} seconds',
    },
    noFavoritesEmptyState: {
      heading: '这看起来有点空',
      content: '还没有添加收藏夹。点击某一集的心脏，把它添加到你的最爱中!',
    },
  },
};

export default zh;

export type Translations = typeof zh;
