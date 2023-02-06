# Javascript UI Components

## 1. 컴포넌트 구성
- Accordion
- Tab
- Modal
- Form (Chekbox, Radio, Input)
- Tooltip
- Toast

## 2. 개발 환경
- Visual Studio Code(IDE)
- HTML5
- SCSS
- Javascript
- webpack
- babel

## 3. 설치

```sh
git clone https://github.com/whj0531/jscomponent.git

cd jscomponent

npm install

```

## 4. 서버실행
```

npm run dev

```

## 5. 디렉토리 구조
- .vscode
  ├── dist                      # Bundled Files
  ├── node_modules              # Node Modules
  ├── src                       # Source Directory
    ├── assets                  # App Assets and Styles
       ├── images               # Images
       ├── js                   # Javascript Files
          ├── accordion.js      # accordion script
          ├── common.js         # common script
          ├── form.js           # form script
          ├── modal.js          # modal script
          ├── tab.js            # tab script
          ├── toast.js          # toast script
          ├── tooltip.js        # tooltip script
       ├── scss                 # StyleSheet
          ├── _accordion.scss   # accordion stylesheet
          ├── _common.scss      # common stylesheet
          ├── _form.scss        # form stylesheet
          ├── _mixin.scss       # common mixin stylesheet
          ├── _modal.scss       # modal stylesheet
          ├── _reset.scss       # common reset stylesheet
          ├── _tab.scss         # tab stylesheet
          ├── _toast.scss       # toast stylesheet
          ├── _tooltip.scss     # tooltip stylesheet
          ├── _variables.scss   # common variables stylesheet
          ├── style.scss        # import stylesheet files
    ├── views                   # View Pages
       ├── accordion.html       # accordion page
       ├── form.html            # form page
       ├── header.html          # header page
       ├── modal.html           # modal page
       ├── tab.html             # tab page
       ├── toast.html           # toast page
       ├── tooltip.html         # tooltip page
  ├── babelrc.js                # babelrc.js
  ├── .gitignore                # gitignore
  ├── .postcssrc.js             # autoprefixer
  ├── babel.config.js           # babel.config.json 
  ├── index.html                # Main page.
  ├── package.json              # package.json
  ├── package-lock.json         # package-lock.json
  ├── README.md                 # README.md
  ├── webpack.config.js         # Webpack Config
  ...
