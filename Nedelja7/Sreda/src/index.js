import axios from 'axios'
//https://api.spacexdata.com/v3/launches/past
//https://api.spacexdata.com/v3/ships
//https://api.spacexdata.com/v3/info

const app = document.querySelector('#app')

//header
const getCompInfo = () => {
    return axios.get("https://api.spacexdata.com/v3/info")
}

const Header = () =>{
    const header = document.createElement(`header`)
    const compName = document.createElement('h3')
    getCompInfo().then(res => {
        //console.log(res.data.name)
        compName.textContent = res.data.name
    })
    header.appendChild(compName)
    return header
}
app.append(Header())

//select
const divSelect = document.createElement('div')
const select = document.createElement(`select`)
const optionS = document.createElement(`option`)
optionS.value = 'ship'
optionS.textContent = 'Prikaz brodova'
const optionL = document.createElement(`option`)
optionS.value = 'launch'
optionS.textContent = 'Prikaz prethodnih lansiranja'
select.append(optionL,optionS)
divSelect.append(select)
app.append(divSelect)


const addShips = () => {
    axios.get(`https://api.spacexdata.com/v3/ships`)
     .then(res => 
        //console.log(res.data)
        res.data.forEach(ship => addShipToDOM(ship))
    )
}

const addLaunch = () =>{
    axios.get('https://api.spacexdata.com/v3/launches/past')
        .then(res =>
            //console.log(res.data)
            res.data.forEach(launch =>{
                addLaunchToDOM(launch)
            })
            )
}

const addShipToDOM = (ship) =>{
    const divShip = document.createElement('div')
    const imgShip = document.createElement('img')
    imgShip.src = ship.image ? ship.image : 'http://via.placeholder.com/150'
    const nameShip = document.createElement('p')
    nameShip.textContent = ship.ship_name
    divShip.append(imgShip,nameShip)
    app.append(divShip)

}

const addLaunchToDOM = (launch) => {
    const divLaunch = document.createElement('div')
    const img = document.createElement('img')
    img.src = launch.links.mission_patch_small ? launch.links.mission_patch_small : 'https://via.placeholder.com/150'
    const year = document.createElement('p')
    year.textContent = launch.launch_year
    divLaunch.append(img,year)
    app.append(divLaunch)
}

select.addEventListener('change', () =>{
    select.value == 'ship' ? addShips() : addLaunch()
})
