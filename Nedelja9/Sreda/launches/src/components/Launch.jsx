const Launch = ({launch}) => {

    return (
        <>
            <div>
                <img src={launch.links.patch.small} alt=''></img>
            </div>
            <div>
                <span>{launch.name}</span>
            </div>
        </>
    )
}

export default Launch