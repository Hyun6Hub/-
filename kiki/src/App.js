import React from "react";
import { library } from "@fortawesome/fontawesome-svg-core";
import { fab } from "@fortawesome/free-brands-svg-icons";
import { faComment } from "@fortawesome/free-solid-svg-icons";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Photo from "./Photo"; // Photo 컴포넌트를 import 합니다

library.add(fab, faComment);

function App() {
  return (
    <div className="App">
      <Navbar />

      {/* Photo 컴포넌트를 추가합니다 */}
      <Photo src="/path/to/your/image.jpg" alt="멋진 사진 설명" />

      {/* 다른 컴포넌트들 */}
      <Footer />
    </div>
  );
}

export default App;
