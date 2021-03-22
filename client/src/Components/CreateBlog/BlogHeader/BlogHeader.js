

const BlogHeader = (props) => {
     return (
		<>
				<div className="input-container">
					<input placeholder={props.value} type="text" className="styled-input" required />
				</div>
				<style jsx>
				{`
					.styled-input {
						padding-block: 10px;
						margin-bottom: 5px;
						width: min(90% , 300px);
					}
				`}
				</style>
		</>	
     );
}

export default BlogHeader;

