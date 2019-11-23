let table_body = document.getElementById('table_body');

document.addEventListener('DOMContentLoaded', async()=>{
    await fetch('http://localhost:3000/computers')
    .then(res => {
        return res.json()
        
  })
    
  .then(data=>{
      console.log(data[0].nombre)
      let new_row;
  
      for (let i = 0; i < data.length; i++) {
        new_row = document.createElement('tr');
        new_row.innerHTML =  
            `<th class='align-middle' scope = 'row'>
                <a href='users/show' class='a-modal' data-toggle='modal' data-target='#exampleModalCenter'>${object.Modelo}</a>
            </th>
            <td class='align-middle'>${object.Marca}</td>
            <td class='align-middle'>${object.Modelo}</td>
            <td class='align-middle'>${object.Memoria}</td>
            <td class='align-middle'>${object.precio}</td>
            <td class='align-middle'>${object.tipo}</td>
            <td class='align-middle'>${object.Sistema_Operativo}</td>
            <td class='align-middle' style='color: ${color}'>${stateU}</td>
            <td class='align-middle'>
                <a href='users/turn' class='${classN}' id='${object.carnet}'>${btn}</a>
            </td>`;  
        table_body.appendChild(new_row);
      }
  })
})