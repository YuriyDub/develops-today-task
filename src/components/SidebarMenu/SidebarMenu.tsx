import React, { useState } from 'react';
import './SidebarMenu.css';

export type MenuItem = {
  id: string;
  label: string;
  children?: MenuItem[];
};

interface SidebarMenuProps {
  open: boolean;
  onClose: () => void;
  items: MenuItem[];
}

export const SidebarMenu: React.FC<SidebarMenuProps> = ({ open, onClose, items }) => {
  return (
    <>
      <div className={`dt-sidebar-backdrop ${open ? 'show' : ''}`} onClick={onClose} />
      <aside className={`dt-sidebar ${open ? 'open' : ''}`} role="dialog" aria-hidden={!open}>
        <div className="dt-sidebar-inner">
          <nav>
            <ul className="dt-menu-list">
              {items.map((it) => (
                <MenuNode key={it.id} item={it} />
              ))}
            </ul>
          </nav>
        </div>
      </aside>
    </>
  );
};

const MenuNode: React.FC<{ item: MenuItem }> = ({ item }) => {
  const [open, setOpen] = useState(false);
  const hasChildren = item.children && item.children.length > 0;

  return (
    <li className="dt-menu-item">
      <div className="dt-menu-row" onClick={() => (hasChildren ? setOpen((v) => !v) : undefined)}>
        <span>{item.label}</span>
        {hasChildren && <button className="dt-menu-toggle">{open ? '▾' : '▸'}</button>}
      </div>
      {hasChildren && open && (
        <ul className="dt-submenu">
          {item.children!.map((c) => (
            <MenuNode key={c.id} item={c} />
          ))}
        </ul>
      )}
    </li>
  );
};

export default SidebarMenu;
