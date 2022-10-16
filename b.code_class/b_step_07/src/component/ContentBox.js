// ContentBox.js

export default function ContentBox(){
  const myName = 'EDIYA';
  const h1Style = { color:'#f50', textTransform:'uppercase' }
  // -----------------------------------
  return (
    <article id="contentBox">
      <p>{myName}는</p>
      <dl>
        <dt>{myName} 이란</dt>
      </dl>
    </article>
  )
}


// ========================================================
// export default function ContentBox(){}는 기본 값이라고 생각