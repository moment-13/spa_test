import { useRef } from 'react';


const FileUpload = () => {
  const emailRef = useRef(null);
  const passwordRef = useRef(null);

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(
      `emai:${emailRef.current.value}, password:${passwordRef.current.value}`
    );
  };

  return (
<>
      <h1>ログイン</h1>
      <form onSubmit={handleSubmit}>
        <div>
          <label htmlFor="email">Email</label>
          <input id="email" ref={emailRef} />
        </div>
        <div>
          <label htmlFor="password">パスワード</label>
          <input id="password" ref={passwordRef} type="password" />
        </div>
        <div>
          <button>ログイン</button>
        </div>
      </form>
      </>
  );
}



export default FileUpload;
