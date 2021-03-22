import {useState} from 'react'
import DatePicker from 'react-datepicker'
import 'react-datepicker/dist/react-datepicker.css'

const AddTask = ({ onAdd }) => {
	const [text, setText] = useState('')
	const [date, setDate] = useState(null)
	const [reminder, setReminder] = useState(false)

	const onSubmit = (e) => {
		e.preventDefault()

		if(!text) {
			alert('Please add the task')
			return
		}

		onAdd({text, date, reminder})

		setText('')
		setDate(null)
		setReminder(false)

	}
	return (
		<form className='add-form' onSubmit={onSubmit}>
			<div className='form-control'>
				<label>Task</label>
				<input type='text' placeholder='Add Task' value={text} onChange={(e) => setText(e.target.value)}
				/>
			</div>
			<div className='form-control'>
				<label>Set Date</label>
				<DatePicker 
					selected={date} 
					onChange={(date) => setDate(date)}
					isClearable
					showYearDropdown
					scrollableMonthYearDropdown
				/>

			</div>
			<div className='form-control form-control-check'>
				<label>Set Reminder</label>
				<input type='checkbox' checked = {reminder} value={reminder} onChange={(e) => setReminder(e.currentTarget.checked)}/>
			</div>
			<input type='submit' value='Save Task' className='btn btn-block' 
			/>
		</form>
	)
}

export default AddTask