import "./App.css";

const members = [
  { id: 1, name: "짱구", role: "유치원생", likes: 44, content: "프론트엔드 찍먹 중 👅" },
  { id: 2, name: "철수", role: "유치원생", likes: 30, content: "디자인 공부 중 🎨" },
  { id: 3, name: "유리", role: "유치원생", likes: 25, content: "운동 중 💪" },
];

function Profile(props){
  return(
    <header className="post-profile">
          <img className="profile-image" src="/images/eden-avatar.png" alt="eden 프로필" />

          <strong className="profile-username">{props.username}</strong>

          <button className="more-button" type="button" aria-label="더 보기">
            <span></span>
            <span></span>
            <span></span>
          </button>
        </header>
  );
}

function PostImage() {
  return(
    <img className="post-image" src="/images/wow.png" alt="홍익대학교 마스코트" />
  );
}


function PostActions() {
  return(
    <>
    <div className="left-actions">
      <button type="button" aria-label="좋아요">
        <svg viewBox="0 0 24 24" aria-hidden="true">
          <path d="M20.8 4.6a5.5 5.5 0 0 0-7.8 0L12 5.7l-1.1-1.1a5.5 5.5 0 0 0-7.8 7.8L12 21l8.8-8.6a5.5 5.5 0 0 0 0-7.8Z" />
        </svg>
      </button>

      <button type="button" aria-label="댓글">
        <svg viewBox="0 0 24 24" aria-hidden="true">
          <path d="M21 11.6a9.2 9.2 0 1 0-4.8 8.1L22 22l-1.9-5.7a9.1 9.1 0 0 0 .9-4.7Z" />
        </svg>
      </button>

      <button type="button" aria-label="공유">
        <svg viewBox="0 0 24 24" aria-hidden="true">
          <path d="m22 2-8.5 20-4-11L1 2h21ZM9.5 11 22 2" />
        </svg>
      </button>
    </div>

    <button type="button" aria-label="저장">
      <svg viewBox="0 0 24 24" aria-hidden="true">
        <path d="M4 2h16v20l-8-6-8 6V2Z" />
      </svg>
    </button>
    </>
  );
}

function PostContent(props) {
  return(
    <>
    <p className="like-count">
            좋아요 <strong>{props.likes}</strong>개
          </p>

          <p className="caption">
            <strong>{props.username}</strong>
            <span>{props.content}</span>
          </p>
    </>
  );
}

function Post(props) {
  return(
    <article className="post">
        <Profile key={props.id} username={props.username} />
        <div className="post-image-area">
          <PostImage />
        </div>
        <div className="post-actions">
          <PostActions />
        </div>
        <section className="post-content">
          <PostContent likes={props.likes} username={props.username} content={props.content} />
        </section>
      </article>
  );
}

function App() {
  return (
    <main className="page">
      {members.map((member) => (
        <Post 
          key={member.id} 
          username={member.name} 
          likes={member.likes} 
          content={member.content} 
        />
      ))}
    </main>
  );
}

export default App;
