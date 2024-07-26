/**
 *
 **/
export function Etc() {
  return (
    <div>
      <h1>문의하기</h1>
      <p>※ 아래 양식에 메모를 남겨주시면 연락 드리도록 하겠습니다.</p>
      <h1>이름</h1>
      <div class="input-container">
        <label htmlFor="user-input">&nbsp;&nbsp;</label>
        <input
          type="text"
          id="user-input"
          class="input-box"
          placeholder="여기에 입력하세요"
        />
      </div>
      <h1>이메일주소</h1>
      <div class="input-container">
        <label htmlFor="user-input">&nbsp;&nbsp;</label>
        <input
          type="text"
          id="user-input"
          class="input-box"
          placeholder="여기에 입력하세요"
        />
      </div>
      <h1>내용</h1>
      <div class="input-container">
        <label htmlFor="user-input">&nbsp;&nbsp;</label>
        <input
          type="text"
          id="user-input"
          class="input-box"
          placeholder="여기에 입력하세요"
        />
      </div>
      <button class="send-button">보내기</button>
    </div>
  );
}
