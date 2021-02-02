import Launch from './Launch'

const LaunchList = ({launches, year}) => {

    const filtered = launches.filter(launch => launch.date_utc.startsWith(year))

    return (
        <div>
            {filtered.map(launch => <Launch launch={launch} key={launch.id}/>)}
        </div>
    )
}
export default LaunchList