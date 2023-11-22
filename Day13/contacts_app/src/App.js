const { faker } = require('@faker-js/faker');

export default function App(){
  
  const USERS = faker.helpers.multiple(createRandomUser, {count: 10,});
  const comments = USERS.map((user)=>{
    return <Comment nama={user.username} img={user.avatar} registeredAt={user.registeredAt} komentar={user.comment}/>
  });

  return comments;
}

// function Person({nama, pekerjaan}){
//   return(
//     <>
//       <h1> Hi nama saya {nama},</h1>
//       <h2> dan pekerjaan saya adalah {pekerjaan}</h2>
//     </>
//   );
// }

function Comment({nama, img, registeredAt, komentar}){
  return (
    <div className="ui container comments">
      <div className="comment">
        <a href="/" className="avatar">
          <img alt="avatar" src={img}/>
        </a>
        <div className="content">
          <a href="/" className="author">
            {nama}
          </a>
          <div className="metadata">
            <span className="date">{registeredAt}</span> 
          </div>
          <div className="text">{komentar}</div>
        </div>
      </div>
    </div>
  );
}

function createRandomUser(){
  return {
    username: faker.internet.userName(),
    comment: faker.lorem.sentence(),
    avatar: faker.image.avatar(),
    registeredAt: faker.date.past().toLocaleTimeString(),
  };
}