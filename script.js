class Empleado {
    constructor(codigo, nombre, apellido, correo, cargo) {
        this.codigo = codigo;
        this.nombre = nombre;
        this.apellido = apellido;
        this.correo = correo;
        this.cargo = cargo;
    }

    sueldoBruto() {
        switch (this.cargo.toLowerCase()) {
            case 'jefe':
                return 5000;
            case 'analista':
                return 4000;
            case 'programador':
                return 3000;
            case 'soporte':
                return 2000;
            case 'asistente':
                return 1500;
            default:
                return 0;
        }
    }

    descuento() {
        return this.sueldoBruto() * 0.125;
    }

    sueldoNeto() {
        return this.sueldoBruto() - this.descuento();
    }
}

document.getElementById('empleadoForm').addEventListener('submit', function(event) {
    event.preventDefault();

    const codigo = document.getElementById('codigo').value;
    const nombre = document.getElementById('nombre').value;
    const apellido = document.getElementById('apellido').value;
    const correo = document.getElementById('correo').value;
    const cargo = document.getElementById('cargo').value;

    const empleado = new Empleado(codigo, nombre, apellido, correo, cargo);

    if (!cargo) {
        alert('Seleccione un cargo.');
        return;
    }

    const resultados = `
        <p><strong>Sueldo Bruto:</strong> S/ ${empleado.sueldoBruto().toFixed(2)}</p>
        <p><strong>Descuento:</strong> S/ ${empleado.descuento().toFixed(2)}</p>
        <p><strong>Sueldo Neto:</strong> S/ ${empleado.sueldoNeto().toFixed(2)}</p>
    `;

    document.getElementById('resultados').innerHTML = resultados;
});