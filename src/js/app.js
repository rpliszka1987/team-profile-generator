const fs = require('fs');

function createHTML(employees) {

    var employeesData = '';
    for (var i = 0; i < employees.length; i++ ) {
        if (employees[i].getRole() === 'Manager') {
            employeesData += createManager(employees[i]);
        } else if ( employees[i].getRole() === 'Engineer') {
            employeesData += createEngineer(employees[i]);
        } else {
            employeesData += createIntern(employees[i]);
        }
    }

    // fs.writeFileSync('./dist/index.html', mainHTML());
    fs.writeFileSync('./dist/index.html', mainHTML(employeesData));
};

function mainHTML(data) {
    return `
    <!DOCTYPE html>
    <html lang="en">
        <head>
            <meta charset="UTF-8">
            <meta http-equiv="X-UA-Compatible" content="IE=edge">
            <meta name="viewport" content="width=device-width, initial-scale=1.0">
            <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.0.2/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-EVSTQN3/azprG1Anm3QDgpJLIm9Nao0Yz1ztcQTwFspd3yD65VohhpuuCOmLASjC" crossorigin="anonymous">
            <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bootstrap-icons@1.8.1/font/bootstrap-icons.css">
            <link rel="stylesheet" href="./src/css/style.css"/>
            <title>My Team</title>
        </head>
        <body>
            <header class="bg-danger text-center m-2">
                <h1 class="text-light">My Team</h1>
            </header>
            <main>
                <div class="row d-flex justify-content-center">
                    ${data}
                </div>
            </main>
        </body>
    
    </html>`
};

function createManager(data) {
    return `
    <div class="card col-2 m-2">
        <div class="card-header bg-primary">
            <h5 class="card-title text-white">${data.name}</h5>
            <h6 class="card-title text-white"><i class="bi bi-person-square"></i> Manager</h6>
        </div>
        <div class="bg-light text-dark">
            <ul class="list-group list-group-flush">
                <li class="list-group-item">ID: ${data.id}</li>
                <li class="list-group-item">Number: ${data.officeNumber}</li>
                <li class="list-group-item">Email: <a href="mailto:${data.email}" class="card-link">${data.email}</a></li>
            </ul>
        </div>
    </div>
    `
};

module.exports = createHTML;