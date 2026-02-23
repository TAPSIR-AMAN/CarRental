import React from 'react'

const ManageCars = () => {
    const [cars, setCars] = useState([])

    const fetchOwnerCars = async () => {
        setCars(dummyCarData)
    }

    useEffect(() => {
        fetchOwnerCars()
    }, [])
    return (
        <div>

        </div>
    )
}

export default ManageCars
