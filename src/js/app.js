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
    fs.writeFileSync('./dist/index.html', createHTML(employeesData));
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

module.exports = createHTML;