import React, { Suspense } from 'react'
import Ad from '../Ad'
import FriendRequests from './FriendRequests'
import Birthdays from './Birthdays'
import UserMediaCard from './UserMediaCard'
import UserInfoCard from './UserInfoCard'

const RightMenu = (userId: {userId: string}) => {

  return (
    <div className='flex flex-col gap-6'>
      {userId ? (
        <>
          <Suspense fallback="loading...">
            <UserInfoCard user={userId} />
          </Suspense>
          <Suspense fallback="loading...">
            <UserMediaCard user={userId} />
          </Suspense>
        </>
      ) : null}
      {/* friend requests */}
      <FriendRequests />
      {/* birthdays  */}
      <Birthdays />
      {/* sponsored ads */}
      <Ad size='md' />
    </div>
    
  )
}

export default RightMenu