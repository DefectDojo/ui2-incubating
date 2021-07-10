import React from 'react';
import { useIntl } from 'react-intl';
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
  const intl = useIntl();
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
          }}
        >
          <img src={defectdogologo} alt="logo" width="30"></img>
        </div>
      </SidebarHeader>

      <SidebarContent>
        <Menu iconShape="circle">
          <MenuItem
            icon={<FaTachometerAlt />}
            suffix={<span className="badge red">{intl.formatMessage({ id: 'new' })}</span>}
          >
            {intl.formatMessage({ id: 'dashboard' })}
          </MenuItem>
          <MenuItem icon={<FaGem />}> {intl.formatMessage({ id: 'components' })}</MenuItem>
        </Menu>
        <Menu iconShape="square">
          <SubMenu
            suffix={<span className="badge yellow">3</span>}
            title="product"
            icon={<FaList />}
          >
            <MenuItem>Product List
            <Link to="/products" />
            </MenuItem>
            <MenuItem>Add Product <Link to="/product/add"/></MenuItem>
            <MenuItem>{intl.formatMessage({ id: 'submenu' })} 3</MenuItem>
          </SubMenu>
          <SubMenu
            prefix={<span className="badge gray">3</span>}
            title={intl.formatMessage({ id: 'withPrefix' })}
            icon={<FaHeart />}
          >
            <MenuItem>{intl.formatMessage({ id: 'submenu' })} 1</MenuItem>
            <MenuItem>{intl.formatMessage({ id: 'submenu' })} 2</MenuItem>
            <MenuItem>{intl.formatMessage({ id: 'submenu' })} 3</MenuItem>
          </SubMenu>
          <SubMenu title={intl.formatMessage({ id: 'multiLevel' })} icon={<FaList />}>
            <MenuItem>{intl.formatMessage({ id: 'submenu' })} 1 </MenuItem>
            <MenuItem>{intl.formatMessage({ id: 'submenu' })} 2 </MenuItem>
            <SubMenu title={`${intl.formatMessage({ id: 'submenu' })} 3`}>
              <MenuItem>{intl.formatMessage({ id: 'submenu' })} 3.1 </MenuItem>
              <MenuItem>{intl.formatMessage({ id: 'submenu' })} 3.2 </MenuItem>
              <SubMenu title={`${intl.formatMessage({ id: 'submenu' })} 3.3`}>
                <MenuItem>{intl.formatMessage({ id: 'submenu' })} 3.3.1 </MenuItem>
                <MenuItem>{intl.formatMessage({ id: 'submenu' })} 3.3.2 </MenuItem>
                <MenuItem>{intl.formatMessage({ id: 'submenu' })} 3.3.3 </MenuItem>
              </SubMenu>
            </SubMenu>
          </SubMenu>
        </Menu>
      </SidebarContent>

      <SidebarFooter style={{ textAlign: 'center' }}>
            <span> Test</span>
      </SidebarFooter>
    </ProSidebar>
  );
};

export default Aside;
