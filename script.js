window.onload = function() {
  const supabaseUrl = 'https://xpxaqlgasrlnxmpuhpgn.supabase.co';
  const supabaseKey = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InhweGFxbGdhc3JsbnhtcHVocGduIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NTE4NzQ3NDcsImV4cCI6MjA2NzQ1MDc0N30.nNaxdj6AKGA8HiLso8iwnZl1uMFKOdXWn5bmfoTowWs';
  const supabase = window.supabase.createClient(supabaseUrl, supabaseKey);

  // Обновленный массив вопросов с 3 категориями
  const questions = [
    // Поставки
    { id: 1, category: 'Поставки', task: 'Обработать на 15% больше поставок, чем назначено за неделю', points: 10 },
    { id: 2, category: 'Поставки', task: 'Обработать на 17% больше поставок, чем назначено за неделю', points: 20 },
    { id: 3, category: 'Поставки', task: 'Обработать на 20% больше поставок, чем назначено за неделю', points: 30 },
    { id: 4, category: 'Поставки', task: 'Обработать на 23% больше поставок, чем назначено за неделю', points: 40 },
    { id: 5, category: 'Поставки', task: 'Поделиться рабочим лайфхаком на ускорение/эффективность рабочего процесса (Стафф)', points: 50 },

    // Телефония
    { id: 7, category: 'Телефония', task: 'Обработать на 10% больше звонков, чем назначено за неделю', points: 10 },
    { id: 8, category: 'Телефония', task: 'Обработать на 12% больше звонков, чем назначено за неделю', points: 20 },
    { id: 9, category: 'Телефония', task: 'Обработать на 15% больше звонков, чем назначено за неделю', points: 30 },
    { id: 10, category: 'Телефония', task: 'Обработать на 18% больше звонков, чем назначено за неделю', points: 40 },
    { id: 11, category: 'Телефония', task: 'Поделиться рабочим лайфхаком на ускорение/эффективность рабочего процесса (Стафф)', points: 50 },

    // Уникальные участки
    { id: 13, category: 'Уникальные участки', task: 'Перевыполнить норму на 10% за неделю', points: 10 },
    { id: 14, category: 'Уникальные участки', task: 'Перевыполнить норму на 15% за неделю', points: 20 },
    { id: 15, category: 'Уникальные участки', task: 'Завести лид по любому продукту за неделю на своем участке (1 штука)', points: 30 },
    { id: 16, category: 'Уникальные участки', task: 'Завести лид по любому продукту за неделю на своем участке (2 штуки)', points: 40 },
    { id: 17, category: 'Уникальные участки', task: 'Поделиться рабочим лайфхаком на ускорение/эффективность рабочего процесса (Стафф)', points: 50 },

    
    // Дополнительные вопросы для Поставки (10 баллов)
    { id: 19, category: 'Поставки', task: 'Завести за неделю лидов более чем норма на 1%', points: 10 },
    { id: 20, category: 'Поставки', task: 'Прослушать звонок коллеги и дать ОС', points: 10 },
    { id: 21, category: 'Поставки', task: 'Оставить три спасибки в Стаффе (с благодарностями, за конкретную помощь)', points: 10 },

    
    // Дополнительные вопросы для Поставки (20 баллов)
    { id: 23, category: 'Поставки', task: 'Завести за неделю лидов более чем норма на 2%', points: 20 },
    { id: 24, category: 'Поставки', task: 'Опубликовать в сообществе в Стаффе интересную/смешную ситуацию, связанную с работой/клиентом', points: 20 },
    { id: 25, category: 'Поставки', task: 'Написать в Стаффе статью-рекомендацию (кафе, ресторан, кино, место и тд)', points: 20 },
    { id: 26, category: 'Поставки', task: 'Баллы "за красивые глаза"', points: 20 },
    
    // Дополнительные вопросы для Поставки (30 баллов)
    { id: 27, category: 'Поставки', task: 'Завести за неделю лидов более чем норма на 3%', points: 30 },
    { id: 28, category: 'Поставки', task: 'Провести собрание по рассылкам за неделю внутри офиса', points: 30 },
    { id: 29, category: 'Поставки', task: 'Помоги коллеге - Смена участка на 4 часа', points: 30 },

    { id: 31, category: 'Поставки', task: 'Удача на твоей стороне. Дарим тебе 30 баллов.', points: 30 },
    
    // Дополнительные вопросы для Поставки (40 баллов)
    { id: 32, category: 'Поставки', task: 'Завести за неделю лидов более чем норма на 4%', points: 40 },
    { id: 33, category: 'Поставки', task: 'Получить именной отзыв (разовое)', points: 40 },
    { id: 34, category: 'Поставки', task: 'Придумай сценарий для ближайшего поздравления именинника', points: 40 },

    
    // Дополнительные вопросы для Поставки (50 баллов)
    { id: 36, category: 'Поставки', task: 'Завести за неделю лидов более чем норма на 5%', points: 50 },
    { id: 37, category: 'Поставки', task: 'Как бы ты оптимизировал свой участок работы?', points: 50 },
    { id: 38, category: 'Поставки', task: 'Провести активность на сплочение коллектива в секторе. Оценивает коллектив по 5-балльной шкале (где 1 это 10 баллов - а 5 это 50 баллов), выводим среднюю - это и будет кол-во баллов за активность', points: 50 },

    
    // Дополнительные вопросы для Телефонии (10 баллов)
    { id: 39, category: 'Телефония', task: 'Завести за неделю лидов более чем норма на 1%', points: 10 },
    { id: 40, category: 'Телефония', task: 'Прослушать звонок коллеги и дать ОС', points: 10 },
    { id: 41, category: 'Телефония', task: 'Оставить три спасибки в Стаффе (с благодарностями, за конкретную помощь)', points: 10 },

    
    // Дополнительные вопросы для Телефонии (20 баллов)
    { id: 43, category: 'Телефония', task: 'Завести за неделю лидов более чем норма на 2%', points: 20 },
    { id: 44, category: 'Телефония', task: 'Опубликовать в сообществе в Стаффе интересную/смешную ситуацию, связанную с работой/клиентом', points: 20 },
    { id: 45, category: 'Телефония', task: 'Написать в Стаффе статью-рекомендацию (кафе, ресторан, кино, место и тд)', points: 20 },
    { id: 46, category: 'Телефония', task: 'Баллы "за красивые глаза"', points: 20 },
    { id: 47, category: 'Телефония', task: 'Удача на твоей стороне. Дарим тебе 20 баллов.', points: 20 },
    
    // Дополнительные вопросы для Телефонии (30 баллов)
    { id: 48, category: 'Телефония', task: 'Завести за неделю лидов более чем норма на 3%', points: 30 },
    { id: 49, category: 'Телефония', task: 'Провести собрание по рассылкам за неделю внутри офиса', points: 30 },
    { id: 50, category: 'Телефония', task: 'Помоги коллеге - Смена участка на 4 часа', points: 30 },

    
    // Дополнительные вопросы для Телефонии (40 баллов)
    { id: 52, category: 'Телефония', task: 'Завести за неделю лидов более чем норма на 4%', points: 40 },
    { id: 53, category: 'Телефония', task: 'Получить именной отзыв (разовое)', points: 40 },
    { id: 54, category: 'Телефония', task: 'Придумай сценарий для ближайшего поздравления именинника', points: 40 },

    
    // Дополнительные вопросы для Телефонии (50 баллов)
    { id: 56, category: 'Телефония', task: 'Завести за неделю лидов более чем норма на 5%', points: 50 },
    { id: 57, category: 'Телефония', task: 'Как бы ты оптимизировал свой участок работы?', points: 50 },
    { id: 58, category: 'Телефония', task: 'Провести активность на сплочение коллектива в секторе. Оценивает коллектив по 5-балльной шкале (где 1 это 10 баллов - а 5 это 50 баллов), выводим среднюю - это и будет кол-во баллов за активность', points: 50 },

    
    // Дополнительные вопросы для Уникальных участков (10 баллов)

    { id: 61, category: 'Уникальные участки', task: 'Прослушать звонок коллеги и дать ОС', points: 10 },
    { id: 62, category: 'Уникальные участки', task: 'Оставить три спасибки в Стаффе (с благодарностями, за конкретную помощь)', points: 10 },

    
    // Дополнительные вопросы для Уникальных участков (20 баллов)

    { id: 65, category: 'Уникальные участки', task: 'Опубликовать в сообществе в Стаффе интересную/смешную ситуацию, связанную с работой/клиентом', points: 20 },
    { id: 66, category: 'Уникальные участки', task: 'Написать в Стаффе статью-рекомендацию (кафе, ресторан, кино, место и тд)', points: 20 },
    { id: 67, category: 'Уникальные участки', task: 'Баллы "за красивые глаза"', points: 20 },
    
    // Дополнительные вопросы для Уникальных участков (30 баллов)

    { id: 69, category: 'Уникальные участки', task: 'Провести собрание по рассылкам за неделю внутри офиса', points: 30 },
    { id: 70, category: 'Уникальные участки', task: 'Помоги коллеге - Смена участка на 4 часа', points: 30 },

    { id: 72, category: 'Уникальные участки', task: 'Удача на твоей стороне. Дарим тебе 30 баллов.', points: 30 },
    
    // Дополнительные вопросы для Уникальных участков (40 баллов)

    { id: 74, category: 'Уникальные участки', task: 'Получить именной отзыв (разовое)', points: 40 },
    { id: 75, category: 'Уникальные участки', task: 'Придумай сценарий для ближайшего поздравления именинника', points: 40 },

    
    // Дополнительные вопросы для Уникальных участков (50 баллов)

    { id: 78, category: 'Уникальные участки', task: 'Как бы ты оптимизировал свой участок работы?', points: 50 },
    { id: 79, category: 'Уникальные участки', task: 'Провести активность на сплочение коллектива в секторе. Оценивает коллектив по 5-балльной шкале (где 1 это 10 баллов - а 5 это 50 баллов), выводим среднюю - это и будет кол-во баллов за активность', points: 50 },

  ];

  const selectedTasks = [];
  const results = {};

  // Функция для получения случайного вопроса из доступных для категории и баллов
  function getRandomQuestion(category, points) {
    const availableQuestions = questions.filter(q => 
      q.category === category && Number(q.points) === Number(points)
    );
    if (availableQuestions.length === 0) return null;
    const randomIndex = Math.floor(Math.random() * availableQuestions.length);
    return availableQuestions[randomIndex];
  }
  // window.addEventListener('DOMContentLoaded', renderResultsTable);

  // Кэшируем часто используемые DOM-элементы
  const board = document.querySelector('.jeopardy-board');
  const modal = document.getElementById('modal');
  const modalCategory = document.getElementById('modalCategory');
  const modalTask = document.getElementById('modalTask');
  const modalPoints = document.getElementById('modalPoints');
  const acceptTaskBtn = document.getElementById('acceptTaskBtn');
  const rejectTaskBtn = document.getElementById('rejectTaskBtn');
  const closeModalBtn = document.getElementById('closeModalBtn');
  const surnameInput = document.getElementById('surnameInput');
  const rulesModal = document.getElementById('rulesModal');
  const showRulesBtn = document.getElementById('showRulesBtn');
  const closeRulesModalBtn = document.getElementById('closeRulesModalBtn');
  const resultsSection = document.getElementById('resultsSection');
  const resultsTableBody = document.getElementById('resultsTableBody');

  // Оптимизированный рендер доски
  const categories = ['Поставки', 'Телефония', 'Уникальные участки'];
  const pointsOrder = [10, 20, 30, 40, 50];
  
  // Создаём HTML строку для быстрого рендера
  let boardHTML = '';
  
  // Заголовки категорий
  categories.forEach(cat => {
    boardHTML += `<div class="category">${cat}</div>`;
  });
  
  // Вопросы
  pointsOrder.forEach(pointsValue => {
    categories.forEach(cat => {
      const q = questions.find(q => q.category === cat && Number(q.points) === pointsValue);
      if (q) {
        boardHTML += `<div class="question" data-category="${q.category}" data-task="${q.task}" data-points="${q.points}">${q.points}</div>`;
      } else {
        boardHTML += `<div class="question disabled"></div>`;
      }
    });
  });
  
  board.innerHTML = boardHTML;

  // Оптимизированные обработчики событий
  showRulesBtn.onclick = function() {
    rulesModal.style.display = 'flex';
    document.body.style.overflow = 'hidden';
  };
  
  closeRulesModalBtn.onclick = function() {
    rulesModal.style.display = 'none';
    document.body.style.overflow = '';
  };

  // Навешиваем обработчики на вопросы после рендера
  bindQuestionHandlers();

  document.getElementById('exportExcelBtn').onclick = function() {
    if (selectedTasks.length === 0) {
      alert('Нет данных для экспорта!');
      return;
    }
    const ws = XLSX.utils.json_to_sheet(selectedTasks);
    const wb = XLSX.utils.book_new();
    XLSX.utils.book_append_sheet(wb, ws, 'Выбор заданий');
    XLSX.writeFile(wb, 'vybor_zadaniy.xlsx');
  };

  function renderResultsTable() {
    resultsTableBody.innerHTML = '';
    const sorted = Object.entries(results).sort((a, b) => b[1].points - a[1].points);
    
    // Создаём HTML строку для быстрого рендера
    let tableHTML = '';
    for (const [surname, data] of sorted) {
      tableHTML += `<tr><td class="px-4 py-2 font-bold">${surname}</td><td class="px-4 py-2">${data.points}</td><td class="px-4 py-2">${data.count}</td></tr>`;
    }
    resultsTableBody.innerHTML = tableHTML;
  }

  document.getElementById('showResultsBtn').addEventListener('click', function() {
    if (resultsSection.classList.contains('hidden')) {
      resultsSection.classList.remove('hidden');
      resultsSection.classList.add('flex');
    } else {
      resultsSection.classList.add('hidden');
      resultsSection.classList.remove('flex');
    }
  });

  function bindQuestionHandlers() {
    document.querySelectorAll('.question').forEach(question => {
      question.addEventListener('click', () => {
        const category = question.getAttribute('data-category');
        const points = question.getAttribute('data-points');
        
        // Получаем случайный вопрос для данной категории и баллов
        const randomQuestion = getRandomQuestion(category, points);
        if (!randomQuestion) return;
        
        const task = randomQuestion.task;

        modalCategory.textContent = category;
        modalTask.textContent = task;
        modalPoints.textContent = `${points} баллов`;
        surnameInput.value = '';
        acceptTaskBtn.disabled = true;
        acceptTaskBtn.classList.add('opacity-50', 'cursor-not-allowed');
        rejectTaskBtn.disabled = true;
        rejectTaskBtn.classList.add('opacity-50', 'cursor-not-allowed');
        modal.style.display = 'flex';
        closeModalBtn.style.display = 'none'; // скрыть кнопку закрытия при выборе задания

        surnameInput.oninput = function() {
          if (surnameInput.value.trim().length > 0) {
            acceptTaskBtn.disabled = false;
            acceptTaskBtn.classList.remove('opacity-50', 'cursor-not-allowed');
            rejectTaskBtn.disabled = false;
            rejectTaskBtn.classList.remove('opacity-50', 'cursor-not-allowed');
          } else {
            acceptTaskBtn.disabled = true;
            acceptTaskBtn.classList.add('opacity-50', 'cursor-not-allowed');
            rejectTaskBtn.disabled = true;
            rejectTaskBtn.classList.add('opacity-50', 'cursor-not-allowed');
          }
        };

        acceptTaskBtn.onclick = async () => {
          const surname = surnameInput.value.trim();
          if (!surname) return;
          
          console.log('Принятие задания:', { surname, category, task, points });
          
          alert(`Задание "${task}" принято!\nФамилия: ${surname}\nБаллы: ${points}`);

          try {
            // Отправка в Supabase
            const { data, error } = await supabase.from('OSP').insert([{
              surname: surname,
              category: category,
              task: task,
              points: Number(points),
              status: 'accepted',
              created_at: new Date().toISOString()
            }]);
            
            if (error) {
              console.error('Ошибка при отправке в Supabase:', error);
              alert('Ошибка при сохранении принятия: ' + error.message);
            } else {
              console.log('Принятие успешно сохранено в Supabase:', data);
            }
          } catch (err) {
            console.error('Ошибка при отправке принятия:', err);
            alert('Ошибка при сохранении принятия: ' + err.message);
          }

          // Локальное обновление (можно оставить для отображения)
          selectedTasks.push({
            Фамилия: surname,
            Категория: category,
            Задание: task,
            Баллы: points,
            Статус: 'Принято',
            Время: new Date().toLocaleString()
          });
          if (!results[surname]) {
            results[surname] = { points: 0, count: 0 };
          }
          results[surname].points += Number(points);
          results[surname].count += 1;
          renderResultsTable();
          modal.style.display = 'none';
          closeModalBtn.style.display = '';
        };

        rejectTaskBtn.onclick = async function() {
          const surname = surnameInput.value.trim();
          if (!surname) return;
          
          console.log('Отказ от задания:', { surname, category, task, points });
          
          alert(`Задание "${task}" отклонено!\nФамилия: ${surname}`);

          try {
            // Отправка в Supabase
            const { data, error } = await supabase.from('OSP').insert([{
              surname: surname,
              category: category,
              task: task,
              points: -Number(points), // Отрицательные баллы за отказ
              status: 'rejected',
              created_at: new Date().toISOString()
            }]);
            
            if (error) {
              console.error('Ошибка при отправке в Supabase:', error);
              alert('Ошибка при сохранении отказа: ' + error.message);
            } else {
              console.log('Отказ успешно сохранен в Supabase:', data);
            }
          } catch (err) {
            console.error('Ошибка при отправке отказа:', err);
            alert('Ошибка при сохранении отказа: ' + err.message);
          }

          // Локальное обновление
          selectedTasks.push({
            Фамилия: surname,
            Категория: category,
            Задание: task,
            Баллы: -Number(points),
            Статус: 'Отклонено',
            Время: new Date().toLocaleString()
          });
          if (!results[surname]) {
            results[surname] = { points: 0, count: 0 };
          }
          results[surname].points -= Number(points); // Вычитаем баллы
          results[surname].count += 1;
          renderResultsTable();
          modal.style.display = 'none';
          closeModalBtn.style.display = '';
        };

        closeModalBtn.onclick = function() {
          modal.style.display = 'none';
          closeModalBtn.style.display = '';
        };
      });
    });
  }
}; 
