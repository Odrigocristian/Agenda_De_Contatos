    const addContactForm = document.getElementById('addContactForm');
    const nameInput = document.getElementById('nameInput');
    const phoneInput = document.getElementById('phoneInput');
    const searchInput = document.getElementById('searchInput');
    const contactsList = document.getElementById('contactsList');

    addContactForm.addEventListener('submit', function(event) {
    event.preventDefault();
    
    const name = nameInput.value;
    const phone = phoneInput.value;
    
    if (name.trim() !== '' && phone.trim() !== '') {
        const contactRow = document.createElement('tr');
        const nameCell = document.createElement('td');
        const phoneCell = document.createElement('td');
        
        nameCell.textContent = name;
        phoneCell.textContent = phone;
        
        contactRow.appendChild(nameCell);
        contactRow.appendChild(phoneCell);
        
        contactsList.appendChild(contactRow);
        
        nameInput.value = '';
        phoneInput.value = '';
    }
    });

    searchInput.addEventListener('input', function(event) {
    const searchTerm = event.target.value.toLowerCase();
    
    Array.from(contactsList.getElementsByTagName('tr')).forEach(function(row) {
        const name = row.getElementsByTagName('td')[0].textContent.toLowerCase();
        
        if (name.includes(searchTerm)) {
        row.style.display = 'table-row';
        } else {
        row.style.display = 'none';
        }
    });
    });
