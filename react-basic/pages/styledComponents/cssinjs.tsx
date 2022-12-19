
import Head from 'next/head'
import PageLink from '../../components/pageLink'

/*
  問題1: Styled Componentsを用いて下記要素を定義してみてください。

  要素： p
  スタイル: color: red, font-size: 18px
  表示するテキスト: 問題1
  ※最初にstyled-componentsを読み込む必要があります。
*/

/*
  問題2: propsを利用して背景色を動的に変更するStyled Componentsを作成してみてください。

  要素: button
  Props名： bgColor(string)
  スタイル:
    display: block,
    width: 200px,
    height: 40px,
    color: #fff,
    margin: 0 auto;
    background-color: propsから取得
*/

/*
  問題3: 問題1で作成したStyled Componentsを拡張して作成してみてください。

  要素: p
  追加スタイル: display: block, font-weight: bold, color: green;
*/

/*
  問題4: 問題3で作成したStyled Componentsをasを用いてspanタグに変換してみてください。

  要素： span
*/

/*
  問題5: attrsを用いてinputのtypeを動的に変更するStyled Componentsを作成してみてください

  要素： input
  属性指定: type(text, number, date) - 3つ作ります
  スタイル: display: block, width: 100px, margin: 0 auto;
*/

export default function Home() {
  return (
    <>
      <Head>
        <title>react-css - CSS in JS</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <PageLink current="CSS in JS" />

      {/* 問題1 */}

      {/* 問題2 */}
      <button>問題2 bgColor: #c00</button>
      <button>問題2 bgColor: #00c</button>

      {/* 問題3 */}
      <button>問題3</button>

      {/* 問題4 */}
      <button>問題4</button>

      {/* 問題5 */}
      <input type="text" />
      <input type="number" />
      <input type="date" />
    </>
  );
}



