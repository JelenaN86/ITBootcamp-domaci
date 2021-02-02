
const Select = ({ launches, setYear }) => {

    let years = Array(...new Set(launches.map(launch => launch.date_utc.split('-')[0])))
   
    return(
        <select  onChange={(e) => setYear(e.target.value)}>
            <option value='' selected disabled>Select a year</option>
            {years.map(launchYear => <option key={launchYear} value={launchYear}>{launchYear}</option>)}
        </select>
    )
}
export default Select