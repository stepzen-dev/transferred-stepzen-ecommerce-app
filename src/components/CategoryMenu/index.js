import React from 'react';

import { Link } from 'react-router-dom';
import { useParams } from 'react-router-dom';
import { useQuery } from '@apollo/react-hooks';

import { GET_CATEGORIES_QUERY } from '../../queries/category.queries';

const CategoryMenu = () => {
  const { categoryId } = useParams();

  const { data, error, loading } = useQuery(GET_CATEGORIES_QUERY);

  if (error) {
    return null;
  }

  if (loading) {
    return null;
  }

  const categories = data?.listCategories[0]?.children || [];

  return (
    <>
      <aside className="menu">
        {categories.map((category) => (
          <React.Fragment key={`category_menu_item_${category.id}`}>
            <p className="menu-label">{category.label}</p>
            <ul className="menu-list">
              {category.children.map((child) => (
                <li key={`category_menu_item_child_${child.id}`}>
                  <Link
                    className={`${categoryId === child.id ? 'is-active' : ''}`}
                    to={`/category/${child.id}`}
                  >
                    {child.label}
                  </Link>
                </li>
              ))}
            </ul>
          </React.Fragment>
        ))}
      </aside>
    </>
  );
};

export default CategoryMenu;
