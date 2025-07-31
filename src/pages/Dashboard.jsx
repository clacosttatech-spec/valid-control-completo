import React from 'react';
import Header from '../components/Header';

function Dashboard() {
  return (
    <div>
      <Header />
      <main style={{ padding: '2rem' }}>
        <h1>Painel Administrativo</h1>
        <p>Você está logado e acessando uma rota protegida.</p>
      </main>
    </div>
  );
}

export default Dashboard;