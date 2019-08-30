import React, { useState } from "react";
import CardModule from '../../components/CardModule'
import SectionTitle from '../../components/SectionTitle'
import CardEstatisticas from "../../components/CardEstatisticas";



export default function Dashboard() {
  const [modules, setModules] = useState(
    [
      { ico: 'people', path: '/dashboard/cliente', text: 'Clientes', favorite: true },
      { ico: 'format_list_bulleted', path: '/dashboard/', text: 'Tarefas', favorite: true },
      { ico: 'description', path: '/dashboard/', text: 'Relatórios', favorite: true },
      { ico: 'email', path: '/dashboard/', text: 'E-mail', favorite: true },
      { ico: 'contacts', path: '/dashboard/', text: 'Contatos', favorite: false },
      { ico: 'calendar_today', path: '/dashboard/', text: 'Calendário', favorite: true },
      { ico: 'people_outline', path: '/dashboard/', text: 'Usuários', favorite: true },
      { ico: 'account_circle', path: '/dashboard/', text: 'Perfil', favorite: false },
      { ico: 'settings', path: '/dashboard/', text: 'Configurações', favorite: false }
    ]
  );
  const [estatisticas, setEstatisticas] = useState(
    [
      { ico: 'people', path: '/dashboard', text: 'Clientes cadastrados', valueNumber: 1120 },
      { ico: 'attach_money', path: '/dashboard', text: 'Vendas fechadas neste mês', valueNumber: 32.69800 },
      { ico: 'list_alt', path: '/dashboard/', text: 'Novas tarefas', valueNumber: 9 },
      { ico: 'move_to_inbox', path: '/dashboard', text: 'E-mails não lidos', valueNumber: 12 }
    ]
  );

  return (
    <main>
      <div >
        <h2 className="moduleTitle">
          <i className="material-icons">
            dashboard
          </i>
          Dashboard
        </h2>
      </div>
      <div>
        <SectionTitle title="Estatísticas" />
        {estatisticas.map((item, index) => {
          return <CardEstatisticas key={index} ico={item.ico} path={item.path} text={item.text} valueNumber={item.valueNumber} />
        })}
      </div>
      <div>
        <SectionTitle title="Favoritos" />
        {modules.map((item, index) => {
          return item.favorite && <CardModule key={index} ico={item.ico} path={item.path} text={item.text} />
        })}
      </div>
      <div>
        <SectionTitle title="Módulos" />
        {modules.map((item, index) => {
          return !item.favorite && <CardModule key={index} ico={item.ico} path={item.path} text={item.text} />
        })}


      </div>
    </main>
  );
}