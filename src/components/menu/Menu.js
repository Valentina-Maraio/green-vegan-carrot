import React from "react";
import { Menubar } from "primereact/menubar";
import Search from '../search/Search';


const Menu = () => {
  const items = [
    {
      label: 'Home',
      icon: 'pi pi-fw pi-home',
      url: '/'
    },
    {
      label: 'Favourite',
      icon: 'pi pi-fw pi-heart',
      url: '/favrecipes'
    },
    {
      label: 'Shopping List',
      icon: 'pi pi-fw pi-pencil',
      url: 'shoppinglist'
    }
  ]
  return (
    <div>
      <Menubar
      end={<Search />}
      model={items}/>
    </div>
  );
};

export default Menu;