import React from 'react';
import { DropdownItem } from 'reactstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import { NavLink as Link } from 'react-router-dom';
import { NavDropdown } from 'app/shared/layout/header/header-components';
import { Company } from 'app/modules/company/company.item';

export const CoverMenu = props => (
  // tslint:disable-next-line:jsx-self-close
  <NavDropdown icon="cubes" name="Cover" id="entity-menu">
    <DropdownItem tag={Link} to="/cover/default">
      <FontAwesomeIcon icon="cube" />
      &nbsp;Default
    </DropdownItem>
    <DropdownItem tag={Link} to="/cover/resume">
      <FontAwesomeIcon icon="cube" />
      &nbsp;Resume
    </DropdownItem>
    <DropdownItem tag={Link} to="/cover/company">
      <FontAwesomeIcon icon="cube" />
      &nbsp;Company
    </DropdownItem>
    {/* Default Nav-bar item*/}
    {/* jhipster-needle-add-entity-to-menu - JHipster will add entities to the menu here */}
  </NavDropdown>
);
