export interface Lib {
  id: string,
  lib: string
  desc: string
  icon: string
  url: string
}

export const libs: Lib[] = [
  {
    id: 'React',
    lib: 'React',
    desc: 'Using create-react-app without ejecting',
    icon: 'https://www.shareicon.net/download/2016/07/10/119874_apps_512x512.png',
    url: 'https://reactjs.org/'
  },
  {
    id: 'AntD',
    lib: 'AntD',
    desc: 'Out-of-box UI solution. Added configuration options to customize theme',
    icon: 'https://gw.alipayobjects.com/zos/rmsportal/KDpgvguMpGfqaHPjicRK.svg',
    url: 'https://ant.design/'
  },
  {
    id: 'MobX',
    lib: 'MobX',
    desc: 'Simple, scalable state management',
    icon: 'https://mobx.js.org/docs/mobx.png',
    url: 'https://mobx.js.org/index.html'
  },
  {
    id: 'Styled Components',
    lib: 'Styled Components',
    desc: 'Best way to style Components in React',
    icon: 'https://raw.githubusercontent.com/styled-components/brand/master/styled-components.png',
    url: 'https://www.styled-components.com/'
  },
  {
    id: 'Styled Systems',
    lib: 'Styled Systems',
    desc: 'Design system utilities for styled-components and other css-in-js libraries',
    icon: 'SS',
    url: 'http://jxnblk.com/styled-system/'
  },
  {
    id: 'React Router',
    lib: 'React Router',
    desc: 'Declarative routing for React',
    icon: 'http://booborguru.com/wp-content/uploads/2017/02/complex-layouts.jpg',
    url: 'https://reacttraining.com/react-router/'
  },
  {
    id: 'TypeScript',
    lib: 'TypeScript',
    desc: 'Typed superset of Javascript that compiles to plain Javascript',
    icon: 'https://seeklogo.com/images/T/typescript-logo-B29A3F462D-seeklogo.com.png',
    url: 'https://www.typescriptlang.org/index.html'
  }
]
