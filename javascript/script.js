$(document).ready(function() {
  $('#add-button').click(function() {
      addTodo();
  });
  function addTodo() {
      const todoText = $('#todo-input').val().trim();
      if (todoText === '') {
          alert('할 일을 입력하세요.');
          return;
      }
      const todoItem = `
          <li class="todo-item">
              ${todoText}
              <button class="delete-button">삭제</button>
          </li>
      `;

      $('#todo-list').append(todoItem);
      $('#todo-input').val('');
  }
  $('#todo-list').on('click', '.delete-button', function() {
      $(this).parent().remove();
  });
});
