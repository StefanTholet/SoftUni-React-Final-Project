import './Form.css'

const Form = (props) => {
    let count = 0;
    const adultsOptions = Array(30).fill(null).map((option) => <option value={count}>{count += 1}</option>);
    count = 0;
    const childrenOptions = Array(10).fill(null).map((option) => <option value={count}>{count += 1}</option>);
    count = 0;
    const roomOptions = Array(30).fill(null).map((option) => <option value={count}>{count += 1}</option>);
    return(
        <div className="form-wrapper">
        <div className="form-parent">
            <form action="" className="booking-form">
                <label htmlFor="check-in">Check-in date</label>
                <input type="date" name="check-in"  value={props.today} />
                <label htmlFor="Check-out">Check-out date</label>
                <input type="date" name="Check-out" id="" />
                <label htmlFor="group-adults">Adults</label>
                <select name="group-adults" id="">
                    {adultsOptions}
                </select>
                <label htmlFor="group-children">Children</label>
                <select name="group-children" id="">
                    <option value="" selected>No children</option>
                    {childrenOptions}
                </select>
                <label htmlFor="group-adults">Rooms</label>
                <select name="rooms" id="">
                    {roomOptions}
                </select>
                <input className="submit-booking" type="submit" value="Book"/>
            </form>
        </div>
       </div>
    );
}

export default Form;