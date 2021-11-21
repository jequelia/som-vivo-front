import React from 'react';
import { useSegurancaContext } from '../context/context';

export default function IsAuth({children, rolesPermitidos}) {
  const {loggedIn, roles} = useSegurancaContext();

  const contemRoles = () => {
    return rolesPermitidos.every(elem => roles.indexOf(elem) > -1);
  };

  return (
    <>
      {loggedIn && contemRoles() && children}
    </>
  )
}