import './css/MainCss.css';

const Home = () =>{
    return(<>
     <div className="Home-Boy">


<div className="search-area">
  <form className="search-box" role="search">
    <input className="search-input" placeholder="Search" aria-label="Search" />
    <button className="search-btn" type="submit">Search</button>
  </form>
</div>

<div className="recommendations">
<h2>
Best Sellers
</h2>

<div className="rec-container">
<div className="rec-blocks">
<img src="https://www.licious.in/blog/wp-content/uploads/2022/06/chicken-hyderabadi-biryani-01.jpg" className="rec-img" alt="fuck" />
<h4>Biryani Bsdk</h4>
</div>

<div className="rec-blocks">
<img src="https://www.licious.in/blog/wp-content/uploads/2022/06/chicken-hyderabadi-biryani-01.jpg" className="rec-img" alt="fuck" />
<h4>Biryani Bsdk</h4>
</div>
<div className="rec-blocks">
<img src="https://www.licious.in/blog/wp-content/uploads/2022/06/chicken-hyderabadi-biryani-01.jpg" className="rec-img" alt="fuck" />
<h4>Biryani Bsdk</h4>
</div>
<div className="rec-blocks">
<img src="https://www.licious.in/blog/wp-content/uploads/2022/06/chicken-hyderabadi-biryani-01.jpg" className="rec-img" alt="fuck" />
<h4>Biryani Bsdk</h4>
</div>
</div>
</div>



</div>

    </>)
}
export default Home;