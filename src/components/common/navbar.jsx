import React from 'react';
import styled from 'styled-components';
import { Avatar, Badge, IconButton } from '@mui/material';
import NotificationsIcon from '@mui/icons-material/Notifications';
import SearchIcon from '@mui/icons-material/Search';
import FavoriteIcon from '@mui/icons-material/Favorite';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import { DomainRounded, HomeMax, HomeRounded, House, HouseOutlined, HouseSharp, HouseSidingRounded, OtherHouses, OtherHousesOutlined, OtherHousesRounded, WorkspacePremium } from '@mui/icons-material';

// Styled components using theme properties
const NavBar = styled.nav`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 10px 10%;
  background-color: ${(props) => props.theme.colors.ui.one};
  color: ${(props) => props.theme.colors.text.two};
`;

const NavLinks = styled.div`
  display: flex;
  align-items: center;
  justify-content: flex-end;
`;

const NavLink = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin: 0 15px;
  color: ${(props) => props.theme.colors.text.two};
  text-decoration: none;
  font-family: ${(props) => props.theme.fonts.body};
  font-size: ${(props) => props.theme.fontSizes.nav};
  font-weight: ${(props) => props.theme.fontWeights.normal};

  &:hover {
    color: ${(props) => props.theme.colors.text.four};
  }

  .icon {
    font-size: 24px;
  }

  .text {
    font-size: ${(props) => props.theme.fontSizes.nav};
  }
`;

const LogoContainer = styled.div`
  display: flex;
  align-items: center;
`;

const Logo = styled.img`
  max-width: 80%;
  max-height: 80%;
`;

function NavigationBar() {
  return (
    <NavBar>
      {/* Left side - Logo */}
      <LogoContainer>
        <Logo src={require('../../assets/logo.png')} alt="Logo" />
      </LogoContainer>

      {/* Right side - Navigation links and icons */}
      <NavLinks>
        <NavLink>
          <HomeRounded className="icon" />
          <span className="text">Home</span>
        </NavLink>
        <NavLink>
          <DomainRounded className="icon" />
          <span className="text">MyInternships</span>
        </NavLink>
        <NavLink>
          <ShoppingCartIcon className="icon" />
          <span className="text">MyApplicatios</span>
        </NavLink>
        <NavLink>
          <AccountCircleIcon className="icon" />
          <span className="text">Profile</span>
        </NavLink>
        
        {/* Avatar and notification bell icon */}
        <Avatar src={require('../../assets/3d_avatar_13.png')} alt="Avatar" />
        <IconButton>
          <Badge badgeContent={2} color="secondary">
            <NotificationsIcon style={{ color: 'white' }} />
          </Badge>
        </IconButton>
      </NavLinks>
    </NavBar>
  );
}

export default NavigationBar;
