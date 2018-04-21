$(document).ready(function () {

//   1.Отправку форме
$('#form-new-task').on('submit', function (e) {
			e.preventDefault();
			//   2.Принемат текст с новом задание$
			var taskText = $('#addNewTask').val();
			console.log(taskText);
			//   3.Генерироват новая задача поставит текст!
var $taskHolder = $('<li class="list-group-item d-flex justify-content-between task-item">');
var $taskTitle = $('<span class="task-title">').text(taskText);
var $taskButtons = $('<div class="task-item_buttons"><button type="button" data-action="task-done" class="btn btn-light align-self-end button-done gray"><i class="fa fa-check"></i></button><button type="button" data-action="task-delete" class="btn btn-light align-self-end gray"><i class="fa fa-times"></i></button></div>');
$taskHolder.append($taskTitle).append($taskButtons);
$('#listOfTasks').append($taskHolder);
});

//   4.Обрабатоват клик по кнопке удалит, удаЛИТ  текущую задачу!
$('#listOfTasks').on('click', '[data-action="task-delete"]', function (e) {
				console.log('клик по кнопке УДАЛИТ!');
e.preventDefault();
$(this).parents('.task-item').remove();

});
//   5.Отмечат въйпалнены задач!
$('#listOfTasks').on('click', '[data-action="task-done"]', function (e) {
					console.log('клик по кнопке Готово!');
e.preventDefault();
$(this).parents('.task-item').find('.task-title').toggleClass('task-title--done');

});




});





//   6.Нотификация ПРИ ДОБАВЛЕНИЕ/удаление
//   7.Спецблок что списък дел пуст! Когада задачи нет!