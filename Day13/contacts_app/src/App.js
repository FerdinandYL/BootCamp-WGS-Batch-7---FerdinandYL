import React from 'react';
import { faker } from '@faker-js/faker';

class Comments extends React.Component {
  constructor(props){
    super(props);
  }
  render(){
    return this.props.data.map((dataComment, index) => (
        <div className='commentContainer' key={index}>
          <CommentContainer
            avatar = {dataComment.avatar}
            name = {dataComment.name}
            time = {dataComment.time}
            comment = {dataComment.comment}
            like = {dataComment.like}
            />
        </div>
      )
    )
  }
}

// constructor(props) {
//   super(props);
//   this.state = {
//     like: this.props.like || 0,
//   };
// }
class CommentContainer extends React.Component {

  state = {
    like: this.props.like
  }

  handleLikeClick = () => {
    this.setState((prevState) => ({ like: prevState.like + 1 }));
  }

  render(){
    return (
      <div className="ui container comments">
        <div className="comment">
          <a href="/" className="avatar">
            <img alt="avatar" src={this.props.avatar} />
          </a>
          <div className="content">
            <a href="/" className="author">
              {this.props.name}
            </a>
            <div className="metadata">
              <span className="date">{this.props.time}</span>
              <div className="rating">
                <i className="heart icon"></i>
                Liked:{this.state.like}
              </div>
            </div>
            <div className="text">{this.props.comment}</div>
            <div className="actions">
              <button className="likes" onClick={this.handleLikeClick}>Like</button>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default function CommentList() {
  const users = faker.helpers.multiple(generateRandomUser, { count: 10 });

  return (
    <div>
      <Comments data={users}/>
    </div>
  );
}

// function Comment({ name, img, registeredAt, comment }) {
//   return (
//     <div className="ui container comments">
//       <div className="comment">
//         <a href="/" className="avatar">
//           <img alt="avatar" src={img} />
//         </a>
//         <div className="content">
//           <a href="/" className="author">
//             {name}
//           </a>
//           <div className="metadata">
//             <span className="date">{time}</span>
//           </div>
//           <div className="text">{comment}</div>
//         </div>
//       </div>
//     </div>
//   );
// }

function generateRandomUser() {
  return {
    username: faker.internet.userName(),
    comment: faker.lorem.sentence(),
    avatar: faker.image.avatar(),
    time: faker.date.past().toLocaleDateString(),
    like: Math.floor(Math.random()*100)
  };
}
