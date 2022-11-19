import './index.css'

const ResultView = props => {
  const {itemDetails} = props
  const {userText, count} = itemDetails
  return (
    <li className="list">
      <p>
        {userText}: {count}
      </p>
    </li>
  )
}
export default ResultView
