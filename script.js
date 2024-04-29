document.getElementById('promptForm').addEventListener('submit', function (event) {
    event.preventDefault();

    // Get user inputs
    var devType = document.getElementById('devType').value;
    var customObject = document.getElementById('customObject').value;
    var numCustomFields = parseInt(document.getElementById('customFields').value);
    var customFields = [];
    var customLogic = document.getElementById('customLogic').value;

    // Get custom field names
    for (var i = 0; i < numCustomFields; i++) {
        var fieldName = document.getElementById('customField' + i).value;
        customFields.push(fieldName);
    }

    // Generate prompt
    var prompt = `You selected ${devType} development. `;
    prompt += `Working on ${customObject}, `;
    prompt += `with the following custom fields: ${customFields.join(', ')}. `;
    prompt += `Implementing the following custom logic: "${customLogic}".`;

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
        input.id = 'customField' + i;
        input.placeholder = `Custom Field Name ${i + 1}`;
        customFieldsInputs.appendChild(input);
    }
});
