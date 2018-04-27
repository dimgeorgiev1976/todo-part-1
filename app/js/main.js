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
var $taskButtons = $('<div class="task-item_buttons"><button type="button" data-action="task-done" class="btn btn-light align-self-end 		button-done gray"><i class="fa fa-check"></i></button><button type="button" data-action="task-delete" class="btn btn-light align-self-end gray"><i class="fa fa-times"></i></button></div>');
			$taskHolder.append($taskTitle).append($taskButtons);
			$('#listOfTasks').append($taskHolder);
			showNotify('new');
			toggleEmptyList();
			$('#addNewTask').val(' ');

			});
				//4.Обрабатоват клик по кнопке удалит, удаЛИТ  текущую задачу!
$('#listOfTasks').on('click', '[data-action="task-delete"]', function (e) {
				console.log('клик по кнопке УДАЛИТ!');
e.preventDefault();
$(this).parents('.task-item').remove();
showNotify('delete');
toggleEmptyList();

});
				//5.Отмечат въйпалнены задач!
$('#listOfTasks').on('click', '[data-action="task-done"]', function (e) {
					console.log('клик по кнопке Готово!');
e.preventDefault();
$(this).parents('.task-item').find('.task-title').toggleClass('task-title--done');
showNotify('done');
});
			//6.Нотификация ПРИ ДОБАВЛЕНИЕ/удаление
		function showNotify(type) {
var $notifyNew = $('<div class="alert alert-warning" role="alert">Задач добавлена!</div>'),
		$notifyDone = $('	<div class="alert alert-success" role="alert">Задач выполнена!</div>'),
		$notifyDelete = $('<div class="alert alert-danger" role="alert">Задач удалена!</div>');
		$notifyError = $('<div class="alert alert-danger" role="alert">Нету такого удалена!!</div>');

		switch(type){
			case'new':
								$notifyBlock = $notifyNew;
					break;
			case'done':
								$notifyBlock = $notifyDone;
					break;
			case'delete':
								$notifyBlock = $notifyDelete;
					break;
					default:
								$notifyBlock = $notifyError;
						break;
		}
			console.log('Задачa добавлена!');
			// if ( $ ('#notifyholder .alert')) {
			$('#notifyholder .alert').fadeOut();
			$notifyBlock.hide();
			$('#notifyholder').append($notifyBlock);
			$notifyBlock.fadeIn();
			setTimeout(function() {
			$notifyBlock.fadeOut();
			setTimeout(function() {
			$notifyBlock.remove();
			},2000);
			},2000);
		}
function toggleEmptyList() {
		if ( $('#listOfTasks').children().length > 1 ) {
					console.log('Have Task!');
					$('#emptyList').hide();
		} else {
					console.log('No Task!');
					$('#emptyList').show();
		}
}
});
// 7.Спецблок что списък дел пуст! Когада задачи нет!