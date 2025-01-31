import React from 'react'
import {Avatar, Menu } from '@mantine/core'

const ProfileMenu = ({user, logout}) => {
  return (
    <div>
      <Menu>

        <Menu.Target>
            <Avatar src={user?.picture} alt='user image' radius={'xl'}/>
        </Menu.Target>

        <Menu.Dropdown>
            <Menu.Item>
                Favourites
            </Menu.Item>

            <Menu.Item>
                Saved Blogs
            </Menu.Item>
            
            <Menu.Item
            onClick={()=> {
                localStorage.clear();
                logout()
            }}
            >
                Logout
            </Menu.Item>

        </Menu.Dropdown>

      </Menu>
    </div>
  )
}

export default ProfileMenu
