![GooglePhotoMarkdowner](https://lh3.googleusercontent.com/VJeaj3tkhfHbpqDExWv8R8IIX0iejbAjo4MpwQcRijWqiDUphPXc9WCOH5SSSt3CKmX1HGdri6bHOSqV_s2run51KjlseQMunI7-hapA-z3AiNLFc63deC_DAQ06BN22UZe9_Gu85yI=s600 "GooglePhotoMarkdowner")

# GooglePhotoMarkdowner
GooglePhotoにアップロードした写真を、ブログなどで貼り付けられる形式に変換するアプリです。



## 概要
 - Google Photo上の画像への共有リンクを作成し、そのページのOGP画像のリンクを取得
 - そのリンクを取得したり、そのリンクを使ってMarkdown記法のリンクやHTML記法のリンクを生成します
 - Electronで実装されていますが、アプリ自体は各自でビルドして頂く必要があります


## ビルド方法


`npm`とかが利用可能であることが前提です。
まずはビルドに必要なファイルを`npm`をつかって取得します。


```bash
cd path/to/GooglePhotoMarkdowner/
npm install
cd ./src
npm install
```


`npm run build-macOS`でmacOS向けのバイナリをビルドします。`npm run build-windows`でWindows向けのバイナリも作れるかもしれませんが、試してないのでわかりません。


```bash
cd path/to/GooglePhotoMarkdowner/
npm run build-macOS
```


ビルドが終わると、`GooglePhotoMarkdowner-darwin-x64`というフォルダが作られ、その中にアプリ（`.app`ファイル）があります。それをタブルクリックで起動するか、`open`コマンドで起動します。


```bash
cd path/to/GooglePhotoMarkdowner/
open ./GooglePhotoMarkdowner-darwin-x64/GooglePhotoMarkdowner.app/
```


## 使い方


ブログなどで使いたい写真をGoogle Photoにアップロードします。その写真を開いて、共有ボタンを押します。


![GooglePhotoMarkdowner](https://lh3.googleusercontent.com/_HeT8euOoTY33ik1j7p3sF1x1ADTLnecod3K9it7oiIHb-4Yaujcctnbw57JCTUC5io95AmlE5s431Y1ToyPpQi-fG2qPXyDMMdAo4JmY622Sq9e0SCIBBY3X1Jt8QY0tYNY-E96Gnw=s600 "GooglePhotoMarkdowner")



リンクを取得します。



![GooglePhotoMarkdowner](https://lh3.googleusercontent.com/EvxhT5N-ui4cporNh-JhMISCNarXKYNbLFwqDO-xVHImaaGFyE0kpZNxrag7uQCefWx-S0ZEaQTI1XlDKGGNYdfdDOXsXN5LYdndHH5twlOYvDhSLHwcpk4zr_7_kUG_LlqNq7IzMK8=s600 "GooglePhotoMarkdowner")



生成されたURLをコピーします。


![GooglePhotoMarkdowner](https://lh3.googleusercontent.com/dGWEVWMyk0NgK01FEs7UxST0jV1hPG8s1jYuWGHrDtdsdmjLTuc9sgNlI-4EAjNX2qCNMyniOJsPzxxdwCsEgGiYlFBVWF38hXD7iiFoWnj9eeP-I7tFzgzqjFzqvIaIR4UFXmjx-Lo=s600 "GooglePhotoMarkdowner")



アプリを起動して、URLを貼り付けます。変換ボタンを押すと、種々の文字列を生成します。



![GooglePhotoMarkdowner](https://lh3.googleusercontent.com/K4OTMP2zEZ1q5eYV6PTbOk4yViaRU2iAywzbFSXImru_s8F2cV2G0NQe8JqpjsUeHbBQNc7Bs5rG2ZjhWJl-daB54mrhxNcFfDslXZ7MBpPyI_NsIqORQimrwLht_3Pwuhx918P7x6Y=s600 "GooglePhotoMarkdowner")



Google PhotoへのリンクURLから、下記のような誰でもアクセスできるURLを生成します。


```html
https://lh3.googleusercontent.com/xxxxx=s600
```


また、同時にMarkdown記法の文字列も生成します。


```markdown
![GooglePhotoMarkdowner](https://lh3.googleusercontent.com/xxxxx=s600 "GooglePhotoMarkdowner")
```


念のため、HTML記法の文字列も生成します。


```html
<img src="https://lh3.googleusercontent.com/xxxxx=s600" alt="GooglePhotoMarkdowner" title="GooglePhotoMarkdowner">
```



## その他

 - はじめてのElectronなので、よくわかってないです。
 - 本当はGoogle PhotoじゃなくてGoogle Photosでした。
 - もろもろ許してください。