// Gnb.js

export default function Gnb(){

  const navLists = ['about', 'product', 'gallery'];

  return (
    <nav className="gnb">
      <h2>navigation</h2>
      <ul>
        {/* <li><a href="about"> about</a></li>
        <li><a href="product"> product</a></li>
        <li><a href="gallery"> gallery</a></li> */}
        {navLists.map((li ,idx)=>{return <li key={idx}>{li}</li>})}
      </ul>
    </nav>
  )
}