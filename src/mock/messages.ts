import { type Message } from "../types/message";

export const mockMessages: Message[] = [
  {
    role: "user",
    content: "Привет\n\n",
  },
  {
    role: "assistant",
    content:
      'Здравствуйте! Добро пожаловать в отдел работы с экспертами сервиса "Astro7". Как я могу вам помочь сегодня?\n\n',
  },
  {
    role: "user",
    content: "Андрей Семёнов\n\n",
  },
  {
    role: "assistant",
    content:
      "Пожалуйста, поделитесь своим номером телефона, чтобы мы могли продолжить процесс.\n\n",
  },
  {
    role: "assistant",
    content: "",
    tool_calls: [
      {
        name: "send_contact_share_button",
        args: {
          followingUpPhrase:
            "Пожалуйста, поделитесь своим номером телефона, чтобы мы могли продолжить процесс.",
          buttonText: "Поделиться номером телефона",
        },
        type: "tool_call",
        id: "call_FLyXnE3AUfPvI3MhXUn95PFs",
      },
    ],
  },
  {
    role: "tool",
    content: "",
    tool_call_id: "call_FLyXnE3AUfPvI3MhXUn95PFs",
    name: "send_contact_share_button",
  },
  {
    role: "user",
    content: "+79954080078\n\n",
  },
  {
    role: "assistant",
    content:
      "Спасибо, что поделились своим номером телефона. Пожалуйста, предоставьте ваш адрес электронной почты.\n\n",
  },
  {
    role: "assistant",
    content: "",
    tool_calls: [
      {
        name: "collect_contact_phone_number_astro",
        args: {
          phoneNumber: "+79954080078",
          successMessage:
            "Спасибо, что поделились своим номером телефона. Пожалуйста, предоставьте ваш адрес электронной почты.",
          errorMessage:
            "К сожалению, мы не смогли принять предоставленный номер телефона. Пожалуйста, попробуйте еще раз.",
        },
        type: "tool_call",
        id: "call_M93GohzN0w85ghuX6jm2LQDP",
      },
    ],
  },
  {
    role: "tool",
    content: "",
    tool_call_id: "call_M93GohzN0w85ghuX6jm2LQDP",
    name: "collect_contact_phone_number_astro",
  },
  {
    role: "user",
    content: "нема\n\n",
  },
  {
    role: "assistant",
    content:
      "Хорошо, давайте продолжим. Пожалуйста, укажите вашу дату рождения.\n\n",
  },
  {
    role: "user",
    content: "да тоже нема\n\n",
  },
  {
    role: "assistant",
    content:
      'Пожалуйста, укажите вашу специализацию. Выберите из следующих вариантов: "Астролог", "Таролог", "Экстрасенс", "Рунолог", "Биоэнергет", или "Другое".\n\n',
  },
  {
    role: "user",
    content: "астролог\n\n",
  },
  {
    role: "assistant",
    content:
      'Отлично, вы выбрали специализацию "Астролог". Пожалуйста, предоставьте краткое резюме вашего опыта в этой области.\n\n',
  },
  {
    role: "user",
    content: "нету\n\n",
  },
  {
    role: "assistant",
    content:
      "Пожалуйста, уточните, есть ли у вас опыт работы удаленно? Если да, приведите примеры.\n\n",
  },
  {
    role: "user",
    content: "неа\n\n",
  },
  {
    role: "assistant",
    content: "",
    tool_calls: [
      {
        name: "primary_screening_astro",
        args: {
          fields: {
            first_name_last_name: "Андрей Семёнов",
            date_of_birth: "0000-00-00",
            specialization: "Астролог",
            experience_summary: "нету",
            remote_work_experience: false,
          },
        },
        type: "tool_call",
        id: "call_db56smCNzNpnwptlzhjWPqyS",
      },
    ],
  },
  {
    role: "tool",
    content:
      "There is missing information from above.\nFor each highlighted error, please ask a clarifying question explaining what you believe is incorrect. One question per message. \nNote that you're given a description of why each field is invalid:\ndate_of_birth : Invalid date\nexperience_summary : The summary of working experience should contain at least a couple of words.",
    tool_call_id: "call_db56smCNzNpnwptlzhjWPqyS",
    name: "primary_screening_astro",
  },
  {
    role: "assistant",
    content:
      "Пожалуйста, уточните вашу дату рождения в формате ДД.ММ.ГГГГ.\n\n",
  },
  {
    role: "user",
    content: "01 01 2001\n\n",
  },
  {
    role: "assistant",
    content:
      "Пожалуйста, предоставьте более подробное резюме вашего опыта в области астрологии. Например, где вы работали, какие достижения у вас есть, или что значимого вы сделали в своей предыдущей работе.\n\n",
  },
  {
    role: "user",
    content: "новичок\n\n",
  },
  {
    role: "assistant",
    content: "",
    tool_calls: [
      {
        name: "primary_screening_astro",
        args: {
          fields: {
            first_name_last_name: "Андрей Семёнов",
            date_of_birth: "2001-01-01",
            specialization: "Астролог",
            experience_summary: "новичок",
            remote_work_experience: false,
          },
        },
        type: "tool_call",
        id: "call_iUBoNe5I1dGpNJXbXIe2Qzcl",
      },
    ],
  },
  {
    role: "tool",
    content:
      "There is missing information from above.\nFor each highlighted error, please ask a clarifying question explaining what you believe is incorrect. One question per message. \nNote that you're given a description of why each field is invalid:\nexperience_summary : The summary of working experience should contain at least a couple of words.",
    tool_call_id: "call_iUBoNe5I1dGpNJXbXIe2Qzcl",
    name: "primary_screening_astro",
  },
  {
    role: "assistant",
    content:
      "Пожалуйста, уточните ваш опыт в области астрологии. Например, какие навыки вы уже освоили или какие курсы прошли.\n\n",
  },
  {
    role: "user",
    content: "Ничё не делал\n\n",
  },
  {
    role: "assistant",
    content:
      "Пожалуйста, посмотрите короткое видео о нашем сервисе и напишите мне после просмотра. Мы согласуем с вами время для интервью. https://www.youtube.com/watch?v=vbLH9VLpBe4\n\n",
  },
  {
    role: "assistant",
    content:
      "Спасибо за информацию. Теперь я отправлю вам видео о нашем сервисе. Пожалуйста, посмотрите его и напишите мне, когда будете готовы обсудить возможные даты для интервью.",
    tool_calls: [
      {
        name: "send_video_link_astro",
        args: {
          videoUrl: "https://www.youtube.com/watch?v=vbLH9VLpBe4",
          videoMessageStatement:
            "Пожалуйста, посмотрите короткое видео о нашем сервисе и напишите мне после просмотра. Мы согласуем с вами время для интервью.",
          followUpMessage:
            "Вы посмотрели видео? Давайте согласуем время для интервью. Скажите, пожалуйста, когда вам будет удобно?",
        },
        type: "tool_call",
        id: "call_T0o8EXIQHTt7nD1ySadxjRzp",
      },
    ],
  },
  {
    role: "tool",
    content: "",
    tool_call_id: "call_T0o8EXIQHTt7nD1ySadxjRzp",
    name: "send_video_link_astro",
  },
  {
    role: "user",
    content: "норм видос\n\n",
  },
  {
    role: "assistant",
    content:
      "Отлично, рад, что вам понравилось! Давайте согласуем время для интервью. Пожалуйста, сообщите, когда вам будет удобно, и я проверю доступные варианты.\n\n",
  },
];
