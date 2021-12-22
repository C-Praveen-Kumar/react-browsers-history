import './index.css'

const History = props => {
  const {historyList, onDelete} = props
  const {id, timeAccessed, logoUrl, title, domainUrl} = historyList
  const onClickDelete = () => {
    onDelete(id)
  }

  return (
    <li className="history-card">
      <p className="time">{timeAccessed}</p>
      <img className="logo" alt="Domain logo" src={logoUrl} />
      <p className="history">{title}</p>
      <p className="domain-url">{domainUrl}</p>
      <button
        className="delete-button"
        type="button"
        testid="delete"
        onClick={onClickDelete}
      >
        <img
          src="https://assets.ccbp.in/frontend/react-js/delete-img.png"
          alt="delete"
          className="delete"
        />
      </button>
    </li>
  )
}
export default History
