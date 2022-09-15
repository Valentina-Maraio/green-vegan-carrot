import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { InputText } from "primereact/inputtext";
import { Menubar } from "primereact/menubar";


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
      url: '/shoppinglist'
    }
  ];
  const [input, setInput] = useState("");

  const navigate = useNavigate();

  const submitHandler = (e) => {
      e.preventDefault();
      navigate('/searched/' + input)
  }
  return (
    <div>
      <Menubar
        end={
          <form onSubmit={submitHandler}>
            <div className="search-bar">
              <span className="p-input-icon-right">
                <i className="pi pi-search" />
                <InputText
                  value={input}
                  onChange={(e) => setInput(e.target.value)}
                  placeholder="Search"
                  type="text"
                />
              </span>{" "}
            </div>
          </form>
        }
        model={items} />
    </div>
  );
};

export default Menu;