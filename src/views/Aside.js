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
import { FaTachometerAlt, FaList, FaInbox, FaBug } from 'react-icons/fa';
import defectdogologo from "../assets/images/defect.png";

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

            <MenuItem>Add Product 
            <Link to={{
              pathname: '/product/add',
              state: {modal:true}
              }}/>
            </MenuItem>


            <MenuItem>All Product Types
            <Link to="/producttypes"/>
            </MenuItem>

            <MenuItem>Add Product Type 
            <Link to={{
              pathname: '/producttype/add',
              state: {modal:true}
              }}/>
            </MenuItem>

          </SubMenu>


          <SubMenu
            prefix={<span className="badge gray">3</span>}
            title="withPrefix"
            icon={<FaInbox />}
          >
            <MenuItem>
              All Engagements
              <Link to="/engagements/all"/>
            </MenuItem>
            <MenuItem>
              Active Engagements
              <Link to="/engagements/active"/>
            </MenuItem>
            <MenuItem>
              Test Types
              <Link to="/testtype"/>
            </MenuItem>
            <MenuItem>
            Environments
            <Link to="/environments"/>
            </MenuItem>
          </SubMenu>

	<SubMenu
	    prefix={<span className="badge gray">3</span>}
	    title="withPrefix"
	    icon={<FaBug />}
	  >
            <MenuItem>
              Open Findings
              <Link to="/findings/open"/>
            </MenuItem>
            <MenuItem>
              All Findings
              <Link to="/findings/all"/>
            </MenuItem>
            <MenuItem>
              Closed Findings
              <Link to="/findings/closed"/>
            </MenuItem>
            <MenuItem>
             Risk Accepted Findings
            <Link to="/findings/accepted"/>
            </MenuItem>
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
