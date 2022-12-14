import React from 'react'

const Profile = () => {
    const firstName = useSelector(selectFirstName)
    const lastName = useSelector(selectLastName)
    const phone = useSelector(selectPhone)
    const adress = useSelector(selectAdress)
    const gender = useSelector(selectGender)

  return (
    <div>Profile</div>
  )
}

export default Profile