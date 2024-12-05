import React, { useState } from "react";
import "./AdminPage.css";
import btn1 from "../assets/image/btn1.png"; 
import btn2 from "../assets/image/btn2.png"; 
import { Link } from "react-router-dom"; 
import { useNavigate } from "react-router-dom";




const usersMock = [
  { id: 1, name: "Pizza Moda", deleted: false },
  { id: 2, name: "Pizza Pereroni", deleted: false },
  { id: 3, name: "Suco natural", deleted: false },
  { id: 4, name: "Pizza 4 Queijos", deleted: false },
  { id: 5, name: "Pizza Calabresa", deleted: false },
  { id: 6, name: "Refrigerante Coca-Cola 2L", deleted: false },
  { id: 7, name: "Pizza Frango com Bacon", deleted: false },
  { id: 8, name: "Refrigerante Coca-Cola Lata", deleted: false },
];

const AdminPage = () => {
  const [users, setUsers] = useState(usersMock);
  const [filter, setFilter] = useState("all"); 
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 5;
  const navigate = useNavigate(); 

  const handleLogout = () => {
    navigate("/"); 
  };

  const handleDelete = (id) => {
    setUsers((prevUsers) =>
      prevUsers.map((user) =>
        user.id === id ? { ...user, deleted: !user.deleted } : user
      )
    );
  };

  const filteredUsers =
    filter === "all"
      ? users.filter((user) => !user.deleted)
      : users.filter((user) => user.deleted);

  const paginatedUsers = filteredUsers.slice(
    (currentPage - 1) * itemsPerPage,
    currentPage * itemsPerPage
  );

  const totalPages = Math.ceil(filteredUsers.length / itemsPerPage);

  return (
    <div className="admin-page">
      <aside className="sidebar">
        <h2>adm</h2>
        <nav>
          <ul>
            <li > <Link to="/admin" className="link">Usuários</Link> </li>
            <li>Produtos</li>
             <li><Link to="/relatorios" className="link">Relatórios</Link></li>
          </ul>
        </nav>
        <button className="logout-button"onClick={handleLogout}>Sair</button>
      </aside>

      <main className="content">
        <header>
          <h2>Produtos</h2>
          
        </header>
        <div className="filter-buttons ">
            <div></div>
            <button
              className={filter === "all" ? "active" : ""}
              onClick={() => setFilter("all")}
            >
              TODOS
            </button>
            <button
              className={filter === "deleted" ? "active" : ""}
              onClick={() => setFilter("deleted")}
            >
              DELETADOS
            </button>
        </div>
        
        <table className="users-table">
            
          <thead className="head">
          <th className="nometh">Nome</th>
              <th></th>
              <th></th>
            
          </thead>
          <tbody >
            {paginatedUsers.map((user) => (
              <tr key={user.id}>
                <td>
                  <input type="checkbox" />
                </td>
                <td>
                  <span className="user-icon">🍕</span> {user.name}
                </td>
                <td>
                  <button
                    className="edit-button"
                    onClick={() => alert(`Editar: ${user.name}`)}
                  >
                     <img src={btn1} alt="Ilustração" />
                  </button>
                  <button
                    className="delete-button"
                    onClick={() => handleDelete(user.id)}
                  >
                     <img src={btn2} alt="Ilustração" />
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>

        <footer className="pagination">
          {Array.from({ length: totalPages }, (_, i) => (
            <button
              key={i}
              className={currentPage === i + 1 ? "active" : ""}
              onClick={() => setCurrentPage(i + 1)}
            >
              {i + 1}
            </button>
          ))}
          {currentPage < totalPages && (
            <button onClick={() => setCurrentPage(currentPage + 1)}className="btnp">
              PRÓXIMO →
            </button>
          )}
        </footer>
      </main>
    </div>
  );
};

export default AdminPage;
