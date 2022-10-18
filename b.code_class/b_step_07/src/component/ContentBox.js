// ContentBox.js

export default function ContentBox(props){
  // const myName = 'EDIYA';
  const h1Style = { color:'#f50', textTransform:'uppercase' }
  // -----------------------------------
  return (
    <article id="contentBox">
      <p>{props.name}는</p>
      <dl>
        <dt>{props.name} 이란</dt>
      </dl>
    </article>
  )
}


// ========================================================
// export default function ContentBox(){}는 기본 값이라고 생각

