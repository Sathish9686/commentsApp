// Write your code here
import {formatDistanceToNow} from 'date-fns'
import './index.css'

const CommentItem = props => {
  const {commentDetails, toggleIsFavorite, toggleIsFavorite1} = props
  const {name, comment, isFavorite, id} = commentDetails

  const starImgUrl = isFavorite
    ? 'https://assets.ccbp.in/frontend/react-js/comments-app/liked-img.png'
    : 'https://assets.ccbp.in/frontend/react-js/comments-app/like-img.png'

  const textColor = isFavorite ? 'blue-text' : ''

  const onClickFavoriteIcon = () => {
    toggleIsFavorite(id)
  }

  const onClickFavoriteIcon1 = () => {
    toggleIsFavorite1(id)
  }

  const date = formatDistanceToNow(new Date())

  return (
    <li className="item">
      <div>
        <div className="card3">
          <div className="box2">
            <p className="paragraph8">{name.charAt(0)}</p>
          </div>
          <button
            type="button"
            className="button2"
            onClick={onClickFavoriteIcon}
          >
            <img src={starImgUrl} alt="like" className="image2" />
          </button>
        </div>
      </div>

      <div>
        <div className="card4">
          <p className="paragraph2">{name}</p>
          <p className="paragraph3">{date}</p>
        </div>
        <p className="paragraph4">{comment}</p>
        <div className="card6">
          <p className={`"paragraph5" ${textColor}`}>Like</p>
          <button
            type="button"
            className="button1"
            onClick={onClickFavoriteIcon1}
            data-testid="delete"
          >
            <img
              src="https://assets.ccbp.in/frontend/react-js/comments-app/delete-img.png"
              alt="delete"
            />
          </button>
        </div>
      </div>
    </li>
  )
}
export default CommentItem
