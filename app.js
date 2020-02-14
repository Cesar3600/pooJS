
class Product{
  constructor(name,description,price,year){
    this.name = name
    this.description = description
    this.price = price
    this.year = year
  }
}


class Ui{
  validate(name,description,price,year){
    if(name =='' || description == '' || price == '' || year == ''){
      this.validateMsj('Ingrese los datos faltantes','danger')
    }else{
      const product = new Product(name,description,price,year)
      this.validateMsj('Datos Correctos','info')
      this.resetForm()
      this.addtoList(product)
      console.log(product)     
    }
  }

  validateMsj(msj,type){
    const validateDiv = 
    `<div class="alert alert-${type} mt-3" role="alert">
      ${msj}
    </div>`
    document.getElementById('validate-msj').innerHTML=validateDiv

  }

  resetForm(){
    document.getElementById('form-product').reset()
  }

  addtoList(product){
    const {name,description,price,year} = product
    const listItem = 
    `<a href="#" class="list-group-item list-group-item-action mb-3">
      <div class="d-flex w-100 justify-content-between">
        <h5 class="mb-1">${name}</h5>
        <small>${year}</small>
        <button class="btn btn-danger btn-sm" type="button" name="delete">Delete</button>
      </div>
      <p class="mb-1">${description}</p>
      <small><b>${price}</b> USD.</small>
    </a>`

//    const listGroup = document.getElementById('list-group')
    const listGroup = document.createElement('DIV')
    listGroup.className="list-group"
    listGroup.innerHTML = listItem
    console.log(listGroup)
    const list = document.getElementById('list-group').appendChild(listGroup)
  }

  deleteProduct(product){
    product.parentElement.parentElement.remove()
  }

}

const ui = new Ui() 

document.getElementById('form-product').addEventListener('submit', e => {
  //ui.validate()
  const name = document.getElementById('name').value
  const description = document.getElementById('description').value
  const price = document.getElementById('price').value
  const year = document.getElementById('year').value

  ui.validate(name,description,price,year)
  e.preventDefault()
})

document.addEventListener('click', e => {
  if (e.target.name == 'delete'){
    console.log("eliminando!!")
    ui.deleteProduct(e.target)
  }
})














