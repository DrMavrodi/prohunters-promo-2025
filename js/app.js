// Speaker Database
const speakersData = {
  'renata-nureyeva': {
    name: 'Рената Нуреева',
    position: 'CEO & Founder ProHunters',
    photo: 'img/renata_nureyeva.jpg',
    bio: `<p>Компания ProHunters работает со средним и крупным бизнесом, находит ключевых сотрудников в Казахстане, Центральной Азии, ОАЭ, Европе и Африке.</p>
          <p>Закрывает вакансии топ-менеджеров для компаний: Сбер, Beeline, Аскона, БЦК банк, Freedom и др.</p>
          <p>Ежегодно проводит исследование «Лучший работодатель Казахстана».</p>
          <p>Авторизированный и сертифицированный реселлер оценки Hogan.</p>`,
    topic: null
  },
  'zaura-karakozhaeva': {
    name: 'Заура Каракожаева',
    position: 'Консультант-аналитик ProHunters,<br>HR Advisor в NCOC',
    photo: 'img/zaura_karakozhaeva.jpg',
    bio: `<p>15 лет опыта в HR (Total Rewards) в FMCG, Telecom, Mining, Oil & Gas.</p>
          <p><strong>Экспертиза:</strong></p>
          <ul>
            <li>Компенсации и льготы.</li>
            <li>Бюджетирование.</li>
            <li>Аналитика заработных плат.</li>
            <li>HR-аналитика.</li>
            <li>Грейдирование.</li>
          </ul>`,
    topic: null
  },
  'natalia-timofeeva': {
    name: 'Наталья Тимофеева',
    position: 'Внешний консультант ProHunters',
    photo: 'img/natalia_timofeeva.jpg',
    bio: 'HRD, C&B директор с 20-летним опытом в KPMG, Veon, «Абсолют Банк» и других компаниях.',
    topic: null
  },
  'rada-islamova': {
    name: 'Рада Исламова',
    position: 'Основательница Heartful Leadership Academy',
    photo: 'img/rada_islamova.jpg',
    bio: `<p>Международный тренер по медитации и йоге Heartfulness.</p>
          <p>Основательница Wonder Women и менторской программы Wonder Women Mentorship.</p>
          <p>Соавтор первого в Казахстане исследования «Гендерный баланс в IT-индустрии Казахстана».</p>`,
    topic: '«Сотрудник в 2025: я выбираю себя. Как компаниям превратить этот тренд в пользу для бизнеса.»'
  },
  'lana-chuksina': {
    name: 'Лана Чуксина',
    position: 'Тимлид отдела PR & Communications',
    photo: 'img/lana_chuksina.jpg',
    bio: '',
    topic: '«Inside Out: как внутренняя культура формирует внешний имидж компании»'
  }
};

// Modal Elements
const modal = document.getElementById('speaker-modal');
const modalOverlay = modal.querySelector('.modal-overlay');
const modalClose = modal.querySelector('.modal-close');
const modalPhoto = modal.querySelector('#modal-speaker-photo');
const modalName = modal.querySelector('.modal-name');
const modalPosition = modal.querySelector('.modal-position');
const modalBio = modal.querySelector('.modal-bio');
const modalTopic = modal.querySelector('.modal-topic');
const modalTopicText = modal.querySelector('.modal-topic-text');

// Open Modal Function
function openModal(speakerId) {
  const speaker = speakersData[speakerId];

  if (!speaker) return;

  // Populate content
  modalPhoto.src = speaker.photo;
  modalPhoto.alt = speaker.name;
  modalName.textContent = speaker.name;
  modalPosition.innerHTML = speaker.position;
  modalBio.innerHTML = speaker.bio;

  // Show/hide topic section
  if (speaker.topic) {
    modalTopicText.textContent = speaker.topic;
    modalTopic.style.display = 'block';
  } else {
    modalTopic.style.display = 'none';
  }

  // Show modal
  modal.classList.add('active');
  document.body.style.overflow = 'hidden';

  // Focus on close button for accessibility
  setTimeout(() => modalClose.focus(), 100);
}

// Close Modal Function
function closeModal() {
  modal.classList.remove('active');
  document.body.style.overflow = '';
}

// Event Listeners - Speaker Cards
document.addEventListener('DOMContentLoaded', () => {
  const speakerCards = document.querySelectorAll('.speaker-mini-card');

  speakerCards.forEach(card => {
    card.addEventListener('click', () => {
      const speakerId = card.dataset.speaker;
      openModal(speakerId);
    });

    // Keyboard accessibility
    card.setAttribute('tabindex', '0');
    card.setAttribute('role', 'button');
    card.addEventListener('keydown', (e) => {
      if (e.key === 'Enter' || e.key === ' ') {
        e.preventDefault();
        const speakerId = card.dataset.speaker;
        openModal(speakerId);
      }
    });
  });
});

// Event Listeners - Modal Close
modalClose.addEventListener('click', closeModal);
modalOverlay.addEventListener('click', closeModal);

// Keyboard Navigation
document.addEventListener('keydown', (e) => {
  if (e.key === 'Escape' && modal.classList.contains('active')) {
    closeModal();
  }
});

// Prevent modal body scroll from closing
modal.querySelector('.modal-content').addEventListener('click', (e) => {
  e.stopPropagation();
});
