class Empleado {
    constructor(cedul, salario, dia) {
        this.cedul = cedul;
        this.salario = salario;
        this.dia = dia;

        this.salariodia = salario * dia;
        this.auxTrans = 0;

        if (salario < 1400000) {
            var aux = (100000 / 30) * dia;
            this.auxTrans = aux;
        } else {
            this.auxTrans = 0;
        }

    };


};


class UI {

    addEmpleado(empleado) {
        const empleadoList = document.getElementById('empleado-list');
        const element = document.createElement('div');

        //return salariodia;

        element.innerHTML = `
          <div class = "card text-center mb-4">
              <div class = "card-body">
               <strong>Cedula</strong>: ${empleado.cedul}
               <strong>Salario</strong>: ${empleado.salario}
               <strong>dias</strong>: ${empleado.dia} 
               <strong>Salario</strong>: ${empleado.salariodia} 
               <strong>Auxilio de Transporte</strong>: ${empleado.auxTrans}   
               <a href = "#" class = "btn btn-danger" name="delete" >Delete</a>           
          </div>
            </div>
        `;
        empleadoList.appendChild(element);
        this.resetForm();

    }



    resetForm() {

        document.getElementById('empleado-form').reset();


    }


    deleteEmpleado(element) {

        if (element.name === 'delete') {
            element.parentElement.parentElement.parentElement.remove();
            this.showMessage('Empleado Deleted Successfully', 'danger');

        }



    }

    showMessage(message, cssClass) {
        const div = document.createElement('div');
        div.className = `alert alert-${cssClass} mt-2`;
        div.appendChild(document.createTextNode(message));
        //Showing in DOM
        const container = document.querySelector('.container');
        const app = document.querySelector('#App');
        container.insertBefore(div, app);
        setTimeout(function() {
            document.querySelector('.alert').remove();

        }, 2000)
    }


}

//DOM Events
document.getElementById('empleado-form').
addEventListener('submit', function(e) {
    const cedul = document.getElementById('cedul').value;
    const salario = document.getElementById('salario').value;
    const dia = document.getElementById('dia').value;

    // console.log(cedul, salario, dia);

    const empleado = new Empleado(cedul, salario, dia);

    const ui = new UI();

    if (cedul === '' || salario === '' || dia === '') {
        return ui.showMessage('Complete Fields Please', 'danger');

    }
    ui.addEmpleado(empleado);
    ui.resetForm();
    ui.showMessage('Empleado Add Successfully', 'success');

    e.preventDefault();


});

document.getElementById('empleado-list').addEventListener('click', function(e) {

    const ui = new UI();
    ui.deleteEmpleado(e.target);



});