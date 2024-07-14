$(document).ready(function() {
    $('#task-form').on('submit', function(e) {
        e.preventDefault();
        const task = $('#task-input').val();
        if (task) {
            addTask(task);
            $('#task-input').val('');
        }
    });

    function addTask(task) {
        const li = $('<li></li>').text(task);
        const deleteBtn = $('<button></button>').text('Deletar').addClass('delete-btn');

        deleteBtn.on('click', function() {
            li.remove();
        });

        li.on('click', function() {
            $(this).toggleClass('completed');
        });

        li.append(deleteBtn);
        $('#task-list').append(li);
    }
});