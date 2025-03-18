document.addEventListener('DOMContentLoaded', () => {
    const expenseForm = document.getElementById('expense-form');
    const inputName = document.getElementById('expense-name');
    const inputAmt = document.getElementById('expense-amount');
    const expenseList = document.getElementById('expense-list');
    const displayTotalAmt = document.getElementById('total-amount');

    let expenses = JSON.parse(localStorage.getItem('expense-list')) || [];
    let totalAmount = calculateTotal();

    expenseForm.addEventListener('submit', (e) => {
        e.preventDefault();
        const name = inputName.value.trim();
        const amount = parseFloat(inputAmt.value.trim());

        if(name !== "" && !isNaN(amount) && amount > 0) {
            const newExpense = {
                id: Date.now(),
                name,
                amount,
            }
            expenses.push(newExpense);
            saveExpense();
            updateTotal();
            inputName.value = "";
            inputAmt.value = "";
            renderExpenses();
        }
    });

    function renderExpenses() {
        expenseList.innerHTML = "";
        expenses.forEach(expense => {
            const li = document.createElement('li');
            li.innerHTML = `
            ${expense.name} - ₹${expense.amount}
            <button data-id="${expense.id}">Delete</buttton>
            `;
            expenseList.appendChild(li);
            updateTotal();
        });
    }

    expenseList.addEventListener('click', (e) => {
        if(e.target.tagName === 'BUTTON') {
            const expenseId = parseInt(e.target.getAttribute('data-id'));
            expenses = expenses.filter(expense => expense.id !== expenseId);
            saveExpense();
            renderExpenses();
            updateTotal();
        }
    })

    function calculateTotal() {
        return expenses.reduce((sum, expense) => sum + expense.amount, 0);
    }

    function updateTotal() {
        totalAmount = calculateTotal();
        displayTotalAmt.textContent = totalAmount.toFixed(2);
    }

    function saveExpense() {
        localStorage.setItem('expense-list', JSON.stringify(expenses));
    }
    renderExpenses();
});