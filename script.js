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

  const questions = [
    { id: 1, category: 'Лиды', task: 'Завести за неделю лидов более чем норма на 1%', points: 10 },
    { id: 2, category: 'Поставки', task: 'Обработать 20% больше поставок за неделю', points: 10 },
    { id: 3, category: 'Телефония', task: 'Обработать 15% больше звонков за неделю', points: 10 },
    { id: 4, category: 'Инициативы', task: 'Оставить 3 благодарности в Staff', points: 10 },
    { id: 5, category: 'Командный дух', task: 'Опубликовать историю в Staff', points: 10 },
    { id: 6, category: 'Игровые сюрпризы', task: 'Карточка "За красивые глаза"', points: 10 },
    { id: 7, category: 'Лиды', task: 'Завести за неделю лидов более чем норма на 2%', points: 20 },
    { id: 8, category: 'Поставки', task: 'Самое большое кол-во часов на дежурстве за месяц', points: 20 },
    { id: 9, category: 'Телефония', task: 'Смена участка на 4 часа', points: 20 },
    { id: 10, category: 'Инициативы', task: 'Поделиться лайфхаком в Staff', points: 20 },
    { id: 11, category: 'Командный дух', task: 'Провести активность на сплочение (оценка 3/5)', points: 20 },
    { id: 12, category: 'Игровые сюрпризы', task: 'Карточка "+1" (доп. задание)', points: 20 },
    { id: 13, category: 'Лиды', task: 'Завести за неделю лидов более чем норма на 3%', points: 30 },
    { id: 14, category: 'Поставки', task: 'Получить именной отзыв', points: 30 },
    { id: 15, category: 'Телефония', task: 'Прослушать звонок коллеги и дать ОС', points: 30 },
    { id: 16, category: 'Инициативы', task: 'Написать рекомендацию в Staff', points: 30 },
    { id: 17, category: 'Командный дух', task: 'Провести активность на сплочение (оценка 4/5)', points: 30 },
    { id: 18, category: 'Игровые сюрпризы', task: 'Придумать задание коллеге', points: 30 },
    { id: 19, category: 'Лиды', task: 'Завести за неделю лидов более чем норма на 4%', points: 40 },
    { id: 20, category: 'Поставки', task: 'Завести лид по любому продукту за неделю', points: 40 },
    { id: 21, category: 'Телефония', task: 'Перевыполнить норму на 10% за неделю', points: 40 },
    { id: 22, category: 'Инициативы', task: 'Составить план оптимизации участка', points: 40 },
    { id: 23, category: 'Командный дух', task: 'Провести активность на сплочение (оценка 5/5)', points: 40 },
    { id: 24, category: 'Игровые сюрпризы', task: 'Оставить или передать карточку', points: 40 },
    { id: 25, category: 'Лиды', task: 'Завести за неделю лидов более чем норма на 5%', points: 50 },
    { id: 26, category: 'Поставки', task: 'Завести 6 лидов по Компасу за неделю', points: 50 },
    { id: 27, category: 'Телефония', task: 'Завести 6 лидов по Фокусу за неделю', points: 50 },
    { id: 28, category: 'Инициативы', task: 'Подготовить список проблем и решений', points: 50 },
    { id: 29, category: 'Командный дух', task: 'Завести 6 лидов по Маниплейс за неделю', points: 50 },
    { id: 30, category: 'Игровые сюрпризы', task: 'Кот в мешке', points: 50 },
    { id: 31, category: 'Лиды', task: 'Суперзадание: Первому смельчаку', points: 100 },
    { id: 32, category: 'Поставки', task: 'Суперзадание: За смелость', points: 100 },
    { id: 33, category: 'Телефония', task: 'Суперзадание: За смелость', points: 100 },
    { id: 34, category: 'Инициативы', task: 'Провести собрание по рассылкам', points: 100 },
    { id: 35, category: 'Командный дух', task: 'Организовать тимбилдинг', points: 100 },
    { id: 36, category: 'Игровые сюрпризы', task: 'Аукцион: Выполнить задание от руководителя', points: 100 },
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
      };
    });
  });

  closeModalBtn.addEventListener('click', () => {
    modal.style.display = 'none';
  });

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
}; 