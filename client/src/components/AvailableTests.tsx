
export default function AvailableTests() {
    fetch('https://graph.brokee.io/v1/graphql?q=GetTests', {
	method: 'POST',
	headers: {'Content-Type': 'application/json'},
    })
	.then(res => res.json())
	.then(res => console.log(res.data));
    
  return (
    <div>AvailableTests</div>
  )
}
