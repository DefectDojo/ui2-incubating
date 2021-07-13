import React from 'react';
import {Link} from 'react-router-dom';
import {
  ProSidebar,
  Menu,
  MenuItem,
  SubMenu,
  SidebarHeader,
  SidebarFooter,
  SidebarContent,
} from 'react-pro-sidebar';
import { FaTachometerAlt, FaGem, FaList, FaHeart } from 'react-icons/fa';
import defectdogologo from "../images/defect.png";

const Aside = () => {
  return (
    <ProSidebar
      collapsed="true"
    >
      <SidebarHeader>
        <div
          style={{
            padding: '24px',
            textTransform: 'uppercase',
            fontWeight: 'bold',
            fontSize: 14,
            letterSpacing: '1px',
            overflow: 'hidden',
            textOverflow: 'ellipsis',
            whiteSpace: 'nowrap',
            backgroundColor:'white',
          }}
        >
          <img src={defectdogologo} alt="logo" width="30"></img>
        </div>
      </SidebarHeader >

      <SidebarContent>
        <Menu iconShape="circle" >
          <MenuItem
            icon={<FaTachometerAlt />}
            suffix={<span className="badge red">Item</span>}
          >
            Dashboard
          </MenuItem>
          <MenuItem icon={<FaGem />}> components</MenuItem>
        </Menu>
        <Menu iconShape="square"  >
          <SubMenu
          
            suffix={<span className="badge yellow">3</span>}
            title="product"
            icon={<FaList />}
          >
            <MenuItem >Product List
            <Link to="/products" />
            </MenuItem>
            <MenuItem>Add Product <Link to="/product/add"/></MenuItem>
            <MenuItem>Submenu 3</MenuItem>
          </SubMenu>
          <SubMenu
            prefix={<span className="badge gray">3</span>}
            title="withPrefix"
            icon={<FaHeart />}
          >
            <MenuItem>submenu 1</MenuItem>
            <MenuItem>submenu 2</MenuItem>
            <MenuItem>submenu 3</MenuItem>
          </SubMenu>
          <SubMenu title="multlevel" icon={<FaList />}>
            <MenuItem>submenu 1 </MenuItem>
            <MenuItem>submenu 2 </MenuItem>
            <SubMenu title="submenu 3">
              <MenuItem>submenu 3.1 </MenuItem>
              <MenuItem>submenu 3.2 </MenuItem>
              <SubMenu title="submenu 4">
                <MenuItem>submenu 3.3.1 </MenuItem>
                <MenuItem>submenu 3.3.2 </MenuItem>
                <MenuItem>submenu 3.3.3 </MenuItem>
              </SubMenu>
            </SubMenu>
          </SubMenu>
        </Menu>
      </SidebarContent>

      <SidebarFooter style={{ textAlign: 'center', backgroundColor: 'white', color: '#0f4f76'}}>
            <span> Test</span>
      </SidebarFooter>
    </ProSidebar>
  );
};

export default Aside;
