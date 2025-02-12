// Добавляем обработчик события для поля Тип
document.addEventListener('DOMContentLoaded', function () {
    const typeField = document.querySelector('select[name="type_val"]');
    console.log(typeField);
    if (typeField) {
        // Добавляем обработчик изменения значения
        typeField.addEventListener('change', function (e) {
            updateFields(e.target.value);
        });

        // Вызываем функцию для начального состояния
        updateFields(typeField.value);
    }
});

// Функция для фильтрации и отображения элементов
function updateFields(selectedValue) {
    // Получаем все элементы input и button
    const allElements = document.querySelectorAll('input');

    // Показываем элементы, соответствующие выбранному значению
    allElements.forEach(element => {

        const parentP = element.closest('p');
        if (parentP) {
            if (element.name.includes(selectedValue)) {
                // По заданию не очень понятно "в атрибуте name которых есть значение "
                // то есть присутствует значение или строго соответствует после "_"
                // Оставил проверку только на присутствие
                // Либо необходимо добавить split('_') для name и проверку строго соответствия 
                parentP.style.display = 'block';
            } else {
                parentP.style.display = 'none';
            }
        }
    });
}