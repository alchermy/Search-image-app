import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import Picture from "./Components/Picture";

function App() {
  const [keyword, setKeyword] = useState("");
  const [photos, setPhotos] = useState([]);
  const [page, setPage] = useState(1);

  function searchImage(e) {
    e.preventDefault();
    if (!keyword) {
      alert("กรุณาป้อนข้อมูล");
    } else {
      fetchImageAPI();
    }
  }
  function moreImage(){
    setPage(page + 1)
    fetchImageAPI()
    window.scrollTo({ top: 0, behavior: "smooth" });
    
  }

  async function fetchImageAPI() {
    const url = `${
      import.meta.env.VITE_API_URL
    }?page=${page}&query=${keyword}&client_id=${
      import.meta.env.VITE_API_KEY
    }&per_page=15`;
    const res = await fetch(url);
    const data = await res.json();
    const result = data.results;
    if (result.length == 0) {
      alert("ไม่มีข้อมูลรูปภาพ");
      setKeyword("");
    } else {
      setPhotos(result);
      console.log(result);
    }
  }
  return (
    <>
      <h1>ระบบค้นหารูปรูป API Unsplash</h1>
      <form onSubmit={searchImage}>
        <input
          type="text"
          placeholder="ป้อนชื่อรูปภาพที่ต้องการ"
          value={keyword}
          onChange={(e) => setKeyword(e.target.value)}
        />
        <button type="submit">ค้นหา</button>
      </form>
      <div className="search-result">
        {photos.map((data, index) => (
          <Picture key={index} data={data} />
        ))}
      </div>
      <button className="btn-more" onClick={moreImage} style={{ display: photos.length === 0 ? 'none' : 'block'}}>เพิ่มเติม</button>
    </>
  );
}

export default App;
