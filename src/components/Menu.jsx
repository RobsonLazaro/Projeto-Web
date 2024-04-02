import React from 'react'
import MenuSection from './MenuSection'
import MenuItem from './MenuItem'

function Menu() {
  return (
    <section className='flex items-center justify-center px-[15rem] py-10 text-white bg-center bg-cover bg-darker-gray' style={{ backgroundImage: "url('src/assets/menu-bg.png')" }}>
      <div className='flex flex-col flex-1 px-[10rem] py-10 bg-darker-gray'>
        <h1 className='mb-3 text-4xl text-center text-orange-400'>Cardápio</h1>
        <MenuSection text="Hambúrgueres">
          {/* {menuItems.map(item => (
            <MenuItem key={item.id} title={item.nome} description={item.descricao} />
          ))} */}
          <MenuItem id="1" title="burgão" description="burg daora" price="12,00" />
          <MenuItem id="1" title="burg" description="burg bom" price="11,00" />
        </MenuSection>
      </div>
    </section>
  )
}

export default Menu