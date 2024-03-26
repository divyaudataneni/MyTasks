import './index.css'

const Tag = props => {
  const {tag, tagsSelected} = props
  const {optionId, displayText} = tag
  const tagss = () => {
    tagsSelected(optionId)
  }

  return (
    <button type="button" className="tag-btn" onClick={tagss}>
      {displayText}
    </button>
  )
}

export default Tag
