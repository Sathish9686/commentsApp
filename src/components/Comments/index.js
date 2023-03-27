import {Component} from 'react'
import {v4 as uuidv4} from 'uuid'
import CommentItem from '../CommentItem'

import './index.css'

const initialContainerBackgroundClassNames = [
  'amber',
  'blue',
  'orange',
  'emerald',
  'teal',
  'red',
  'light-blue',
]

class Comments extends Component {
  state = {commentList: [], name: '', comment: '', index: 0}

  toggleIsFavorite = id => {
    this.setState(prevState => ({
      commentList: prevState.commentList.map(each => {
        if (id === each.id) {
          return {...each, isFavorite: !each.isFavorite}
        }
        return each
      }),
    }))
  }

  toggleIsFavorite1 = id => {
    const {commentList} = this.state
    const filterResult = commentList.filter(eachmeber => eachmeber.id !== id)

    this.setState({commentList: filterResult})
  }

  onAddContact = event => {
    event.preventDefault()
    const {name, comment} = this.state

    const newContact = {
      id: uuidv4(),
      name,
      comment,
      isFavorite: false,
    }

    this.setState(prevState => ({
      commentList: [...prevState.commentList, newContact],
      name: '',
      comment: '',
    }))
  }

  onChangeName = event => {
    this.setState({name: event.target.value})
  }

  onChangeMobileNo = event => {
    this.setState(prevState => ({
      index: prevState.index + 1,
    }))
    this.setState({comment: event.target.value})
  }

  render() {
    const {commentList, name, comment, index} = this.state

    return (
      <div className="bg-Container">
        <div className="Container">
          <div>
            <h1 className="heading">Comments</h1>
            <p className="paragraph">Say something about 4.0 Technologies</p>
            <form className="form-container" onSubmit={this.onAddContact}>
              <input
                type="text"
                placeholder="Your Name"
                value={name}
                className="input"
                onChange={this.onChangeName}
              />
              <textarea
                rows="8"
                cols="50"
                placeholder="Your Comment"
                value={comment}
                className="input1"
                onChange={this.onChangeMobileNo}
              />
              <button type="submit" className="button">
                Add Comment
              </button>
            </form>
          </div>
          <div>
            <img
              src="https://assets.ccbp.in/frontend/react-js/comments-app/comments-img.png"
              alt="comments"
              className="image"
            />
          </div>
        </div>
        <div className="card2">
          <div className="box">
            <p className="paragraph1">{commentList.length}</p>
          </div>
          <p className="paragraph2">Comments</p>
        </div>
        <ul>
          {commentList.map(eachItem => (
            <CommentItem
              key={eachItem.id}
              commentDetails={eachItem}
              bgColor={initialContainerBackgroundClassNames[index]}
              toggleIsFavorite={this.toggleIsFavorite}
              toggleIsFavorite1={this.toggleIsFavorite1}
            />
          ))}
        </ul>
      </div>
    )
  }
}

export default Comments
