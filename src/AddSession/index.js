
const AddSession = ({data, setData}) => {
		
		return (
			<div className="date">
				<form>
					<p>
						dodaj sesję
					</p>
					<p>
						<input 
						type="date"
						value={data} 
						onChange={({target}) => setData(target.value)}
						/>
					</p>
				</form>
			</div>
		 )
		 }
		;

export default AddSession;

