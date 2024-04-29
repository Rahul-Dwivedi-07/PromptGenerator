document.getElementById('promptForm').addEventListener('submit', function (event) {
    event.preventDefault();

    // Get user inputs
    var devType = document.getElementById('devType').value;
    var numCustomFields = parseInt(document.getElementById('customFields').value);
    var customLogic = document.getElementById('customLogic').value;

    // Generate prompt
    var prompt = `You selected ${devType}. `;
    prompt += `Create ${numCustomFields} custom field${numCustomFields > 1 ? 's' : ''} `;
    prompt += `with the following names and types: `;

    var customFieldsInputs = document.querySelectorAll('#customFieldsInputs input');
    customFieldsInputs.forEach(function (input) {
        prompt += `${input.value}, `;
    });

    prompt += `and implement the following custom logic: "${customLogic}".`;

    // Display prompt
    document.getElementById('promptResult').innerText = prompt;
});

document.getElementById('customFields').addEventListener('input', function () {
    var numCustomFields = parseInt(this.value);
    var customFieldsInputs = document.getElementById('customFieldsInputs');
    customFieldsInputs.innerHTML = '';

    for (var i = 0; i < numCustomFields; i++) {
        var input = document.createElement('input');
        input.type = 'text';
        input.placeholder = `Custom Field Name ${i + 1}`;
        customFieldsInputs.appendChild(input);
    }
});
