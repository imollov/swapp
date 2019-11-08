export default text => (text.length > 200 ? `${text.slice(0, 200)}...` : text)
