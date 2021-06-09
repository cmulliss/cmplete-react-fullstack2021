import React from 'react'

const Title = () => {
	console.log('1 Title mounted')
	return (
		<div>
			<h1>MyApp</h1>
			<hr />
		</div>
	)
}

// memo will listen for props
export default React.memo(Title)

// all 5 components mount, using a LOT of resources, see console logs:
// forcing a rerender of the components.
// only the appropriate one should rerender, ie whichever is incrementing, but not the other, or the title.
// first fix the title with memo
// memo will listen for props, if not getting any new props, when parent component is trying to rerender, it will not rerender.
