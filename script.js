window.onload = function() {
  const supabaseUrl = 'https://xpxaqlgasrlnxmpuhpgn.supabase.co';
  const supabaseKey = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InhweGFxbGdhc3JsbnhtcHVocGduIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NTE4NzQ3NDcsImV4cCI6MjA2NzQ1MDc0N30.nNaxdj6AKGA8HiLso8iwnZl1uMFKOdXWn5bmfoTowWs';
  const supabase = window.supabase.createClient(supabaseUrl, supabaseKey);

  // Звёзды на фоне
  const starCount = 30;
  for (let i = 0; i < starCount; i++) {
    const star = document.createElement('div');
    star.className = 'star';
    star.style.top = Math.random() * 30 + '%';
    star.style.left = Math.random() * 98 + '%';
    star.style.opacity = 0.5 + Math.random() * 0.5;
    star.style.width = star.style.height = (2 + Math.random() * 3) + 'px';
    document.body.appendChild(star);
  }

  // Обновленный массив вопросов
  const questions = [
    // Лиды
    { id: 1, category: 'Лиды', task: 'Завести за неделю лидов более чем норма на 1%', points: 10 },
    { id: 2, category: 'Лиды', task: 'Завести за неделю лидов более чем норма на 2%', points: 20 },
    { id: 3, category: 'Лиды', task: 'Завести за неделю лидов более чем норма на 3%', points: 30 },
    { id: 4, category: 'Лиды', task: 'Завести за неделю лидов более чем норма на 4%', points: 40 },
    { id: 5, category: 'Лиды', task: 'Завести за неделю лидов более чем норма на 5%', points: 50 },
    { id: 6, category: 'Лиды', task: 'Первому смельчаку достаются бесплатно, последующие получают задание (За смелость)', points: 100 },
    // Поставки
    { id: 7, category: 'Поставки', task: 'Обработать на 15% больше поставок, чем назначено за неделю', points: 10 },
    { id: 8, category: 'Поставки', task: 'Обработать на 17% больше поставок, чем назначено за неделю', points: 20 },
    { id: 9, category: 'Поставки', task: 'Обработать на 20% больше поставок, чем назначено за неделю', points: 30 },
    { id: 10, category: 'Поставки', task: 'Обработать на 23% больше поставок, чем назначено за неделю', points: 40 },
    { id: 11, category: 'Поставки', task: 'Поделиться рабочим лайфхаком на ускорение/эффективность рабочего процесса (Стафф?)', points: 50 },
    { id: 12, category: 'Поставки', task: 'Первому смельчаку достаются бесплатно, последующие получают задание (За смелость)', points: 100 },
    // Телефония
    { id: 13, category: 'Телефония', task: 'Обработать на 10% больше звонков, чем назначено за неделю', points: 10 },
    { id: 14, category: 'Телефония', task: 'Обработать на 12% больше звонков, чем назначено за неделю', points: 20 },
    { id: 15, category: 'Телефония', task: 'Обработать на 15% больше звонков, чем назначено за неделю', points: 30 },
    { id: 16, category: 'Телефония', task: 'Обработать на 18% больше звонков, чем назначено за неделю', points: 40 },
    { id: 17, category: 'Телефония', task: 'Поделиться рабочим лайфхаком на ускорение/эффективность рабочего процесса (Стафф?)', points: 50 },
    { id: 18, category: 'Телефония', task: 'Первому смельчаку достаются бесплатно, последующие получают задание (За смелость)', points: 100 },
    // Инициативы
    { id: 19, category: 'Инициативы', task: 'Прослушать звонок коллеги и дать ОС', points: 10 },
    { id: 20, category: 'Инициативы', task: 'Опубликовать в сообществе в Стаффе интересную/смешную ситуацию, связанную с работой/клиентом', points: 20 },
    { id: 21, category: 'Инициативы', task: 'Провести собрание по рассылкам за неделю внутри офиса', points: 30 },
    { id: 22, category: 'Инициативы', task: 'Получить именной отзыв (разовое)', points: 40 },
    { id: 23, category: 'Инициативы', task: 'Как бы ты оптимизировал свой участок работы?', points: 50 },
    { id: 24, category: 'Инициативы', task: 'Первому смельчаку достаются бесплатно, последующие получают задание (За смелость)', points: 100 },
    // Командный дух
    { id: 25, category: 'Командный дух', task: 'Оставить три спасибки в Стаффе (с благодарностями, за конкретную помощь)', points: 10 },
    { id: 26, category: 'Командный дух', task: 'Написать в Стаффе статью-рекомендацию (кафе, ресторан, кино, место и тд)', points: 20 },
    { id: 27, category: 'Командный дух', task: 'Помоги коллеге - Смена участка на 4 часа', points: 30 },
    { id: 28, category: 'Командный дух', task: 'Придумай сценарий для ближайшего поздравления именинника', points: 40 },
    { id: 29, category: 'Командный дух', task: 'Провести активность на сплочение коллектива в секторе. Оценивает коллектив по 5-балльной шкале (где 1 это 10 баллов - а 5 это 50 баллов), выводим среднюю - это и будет кол-во баллов за активность', points: 50 },
    { id: 30, category: 'Командный дух', task: 'Первому смельчаку достаются бесплатно, последующие получают задание (За смелость)', points: 100 },
    // Игровые сюрпризы
    { id: 31, category: 'Игровые сюрпризы', task: 'Оставить карточку себе или передать другому', points: 10 },
    { id: 32, category: 'Игровые сюрпризы', task: 'Баллы "за красивые глаза"', points: 20 },
    { id: 33, category: 'Игровые сюрпризы', task: 'Возьми еще одну карточку', points: 30 },
    { id: 34, category: 'Игровые сюрпризы', task: 'Придумать задание коллеге', points: 40 },
    { id: 35, category: 'Игровые сюрпризы', task: 'Кот в мешке', points: 50 },
    { id: 36, category: 'Игровые сюрпризы', task: 'Первому смельчаку достаются бесплатно, последующие получают задание (За смелость)', points: 100 },
    // Уникальные участки
    { id: 37, category: 'Уникальные участки', task: 'Перевыполнить норму на 10% за неделю', points: 10 },
    { id: 38, category: 'Уникальные участки', task: 'Перевыполнить норму на 15% за неделю', points: 20 },
    { id: 39, category: 'Уникальные участки', task: 'Завести лид по любому продукту за неделю на своем участке (1 штука)', points: 30 },
    { id: 40, category: 'Уникальные участки', task: 'Завести лид по любому продукту за неделю на своем участке (2 штуки)', points: 40 },
    { id: 41, category: 'Уникальные участки', task: 'Поделиться рабочим лайфхаком на ускорение/эффективность рабочего процесса (Стафф?)', points: 50 },
    { id: 42, category: 'Уникальные участки', task: 'Первому смельчаку достаются бесплатно, последующие получают задание (За смелость)', points: 100 }
  ];

  const selectedTasks = [];
  const results = {};
  // window.addEventListener('DOMContentLoaded', renderResultsTable);

  const modal = document.getElementById('modal');
  const modalCategory = document.getElementById('modalCategory');
  const modalTask = document.getElementById('modalTask');
  const modalPoints = document.getElementById('modalPoints');
  const acceptTaskBtn = document.getElementById('acceptTaskBtn');
  const closeModalBtn = document.getElementById('closeModalBtn');
  const surnameInput = document.getElementById('surnameInput');

  const rulesModal = document.getElementById('rulesModal');
  const showRulesBtn = document.getElementById('showRulesBtn');
  const closeRulesModalBtn = document.getElementById('closeRulesModalBtn');
  showRulesBtn.onclick = function() {
    rulesModal.style.display = 'flex';
    document.body.style.overflow = 'hidden';
  };
  closeRulesModalBtn.onclick = function() {
    rulesModal.style.display = 'none';
    document.body.style.overflow = '';
  };

  // Динамический рендер категорий и вопросов
  const board = document.querySelector('.jeopardy-board');
  board.innerHTML = '';

  // Получаем уникальные категории в нужном порядке
  const categories = [
    'Лиды',
    'Поставки',
    'Телефония',
    'Инициативы',
    'Командный дух',
    'Игровые сюрпризы',
    'Уникальные участки'
  ];

  // Для каждой категории рендерим заголовки
  categories.forEach(cat => {
    const div = document.createElement('div');
    div.className = 'category';
    div.textContent = cat;
    board.appendChild(div);
  });

  // Баллы, которые должны быть в каждой строке
  const pointsOrder = [10, 20, 30, 40, 50, 100];
  // Для каждого балла рендерим строку вопросов по всем категориям
  pointsOrder.forEach(pointsValue => {
    categories.forEach(cat => {
      const q = questions.find(q => q.category === cat && Number(q.points) === pointsValue);
      const div = document.createElement('div');
      div.className = 'question';
      if (q) {
        div.setAttribute('data-category', q.category);
        div.setAttribute('data-task', q.task);
        div.setAttribute('data-points', q.points);
        div.textContent = q.points;
      } else {
        div.classList.add('disabled');
        div.textContent = '';
      }
      board.appendChild(div);
    });
  });

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
    const tbody = document.getElementById('resultsTableBody');
    tbody.innerHTML = '';
    const sorted = Object.entries(results).sort((a, b) => b[1].points - a[1].points);
    for (const [surname, data] of sorted) {
      const tr = document.createElement('tr');
      tr.innerHTML = `<td class=\"px-4 py-2 font-bold\">${surname}</td><td class=\"px-4 py-2\">${data.points}</td><td class=\"px-4 py-2\">${data.count}</td>`;
      tbody.appendChild(tr);
    }
  }

  document.getElementById('showResultsBtn').addEventListener('click', function() {
    const section = document.getElementById('resultsSection');
    if (section.classList.contains('hidden')) {
      section.classList.remove('hidden');
      section.classList.add('flex');
    } else {
      section.classList.add('hidden');
      section.classList.remove('flex');
    }
  });

  function bindQuestionHandlers() {
    document.querySelectorAll('.question').forEach(question => {
      question.addEventListener('click', () => {
        const category = question.getAttribute('data-category');
        const task = question.getAttribute('data-task');
        const points = question.getAttribute('data-points');

        modalCategory.textContent = category;
        modalTask.textContent = task;
        modalPoints.textContent = `${points} баллов`;
        surnameInput.value = '';
        acceptTaskBtn.disabled = true;
        acceptTaskBtn.classList.add('opacity-50', 'cursor-not-allowed');
        modal.style.display = 'flex';
        closeModalBtn.style.display = 'none'; // скрыть кнопку закрытия при выборе задания

        surnameInput.oninput = function() {
          if (surnameInput.value.trim().length > 0) {
            acceptTaskBtn.disabled = false;
            acceptTaskBtn.classList.remove('opacity-50', 'cursor-not-allowed');
          } else {
            acceptTaskBtn.disabled = true;
            acceptTaskBtn.classList.add('opacity-50', 'cursor-not-allowed');
          }
        };

        acceptTaskBtn.onclick = async () => {
          const surname = surnameInput.value.trim();
          if (!surname) return;
          alert(`Задание "${task}" принято!\nФамилия: ${surname}\nБаллы: ${points}`);

          // Отправка в Supabase
          await supabase.from('OSP').insert([{
            surname: surname,
            category: category,
            task: task,
            points: Number(points),
            created_at: new Date().toISOString()
          }]);

          // Локальное обновление (можно оставить для отображения)
          selectedTasks.push({
            Фамилия: surname,
            Категория: category,
            Задание: task,
            Баллы: points,
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
        closeModalBtn.onclick = function() {
          modal.style.display = 'none';
          closeModalBtn.style.display = '';
        };
      });
    });
  }
}; 
