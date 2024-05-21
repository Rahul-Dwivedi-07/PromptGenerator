document.getElementById('workType').addEventListener('change', function () {
    var workType = document.getElementById('workType').value;
    var developmentFields = document.getElementById('developmentFields');
    var testingFields = document.getElementById('testingFields');
    if (workType === 'Development') {
        developmentFields.style.display = 'block';
        testingFields.style.display = 'none';
    } else if (workType === 'Testing') {
        developmentFields.style.display = 'none';
        testingFields.style.display = 'block';
    } else {
        developmentFields.style.display = 'none';
        testingFields.style.display = 'none';
    }
});

document.getElementById('devType').addEventListener('change', function () {
    var devType = document.getElementById('devType').value;
    var customFieldsSection = document.getElementById('customFieldsSection');
    var customFieldsInputs = document.getElementById('customFieldsInputs');
    customFieldsSection.style.display = (devType === "Apex Class" || devType === "Test Class") ? 'block' : 'none';
    if (devType === "Apex Class" || devType === "Test Class") {
        var numCustomFields = parseInt(document.getElementById('customFields').value) || 0;
        customFieldsInputs.innerHTML = '';
        for (var i = 0; i < numCustomFields; i++) {
            var input = document.createElement('input');
            input.type = 'text';
            input.id = 'customField' + i;
            input.placeholder = `Custom Field Name ${i + 1}`;
            customFieldsInputs.appendChild(input);
        }
    }
});

document.getElementById('testingType').addEventListener('change', function () {
    var testingType = document.getElementById('testingType').value;
    var testingNameSection = document.getElementById('testingNameSection');
    testingNameSection.style.display = (testingType === "Step Definition" || testingType === "Java Function" || testingType === "x-path") ? 'block' : 'none';
    document.getElementById('testingName').placeholder = `Enter the name of the ${testingType}`;
});

document.getElementById('promptForm').addEventListener('submit', function (event) {
    event.preventDefault();

    var workType = document.getElementById('workType').value || "None";

    if (workType === 'Development') {
        // Get user inputs for development
        var devType = document.getElementById('devType').value || "None";
        var customObject = document.getElementById('customObject').value || "None";
        var numCustomFields = parseInt(document.getElementById('customFields').value) || 0;
        var customFields = [];
        var customLogic = document.getElementById('customLogic').value || "None";

        // Get custom field names
        for (var i = 0; i < numCustomFields; i++) {
            var fieldName = document.getElementById('customField' + i).value || "None";
            customFields.push(fieldName);
        }

        // Generate prompt for development
        var prompt = `Create a ${devType} `;
        prompt += `with the following Custom Object: ${customObject}, `;
        prompt += `with the following custom fields: ${customFields.join(', ')} `;
        prompt += `and Implementing the following custom logic: "${customLogic}".`;

    } else if (workType === 'Testing') {
        // Get user inputs for testing
        var testingType = document.getElementById('testingType').value || "None";
        var testingName = document.getElementById('testingName').value || "None";
        var testingDetails = document.getElementById('testingDetails').value || "None";

        // Generate prompt for testing
        var prompt = `Create a ${testingType} `;
        prompt += `with the following name: ${testingName} `;
        prompt += `and implementing the following logic: "${testingDetails}".`;
    } else {
        var prompt = "No valid work type selected.";
    }

    // Display prompt
    document.getElementById('promptResult').innerText = prompt;
});

document.getElementById('customFields').addEventListener('input', function () {
    var numCustomFields = parseInt(this.value) || 0;
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
