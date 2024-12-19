export const validateField = (name, value, formData) => {
  let errorMessage = '';

  switch (name) {
    case 'name':
      if (!value.trim()) {
        errorMessage = 'Имя обязательно';
      } else if (!/^[А-Яа-яЁё\s-]+$/.test(value)) {
        errorMessage = 'Имя может содержать только кириллицу, пробелы и дефисы';
      }
      break;

    case 'phone':
      if (!value.trim()) {
        errorMessage = 'Телефон обязателен';
      } else if (!/^\+?\d{10,15}$/.test(value)) {
        errorMessage = 'Номер телефона должен быть в формате +XXXXXXXXXXX';
      }
      break;

    case 'email':
      if (!value.trim()) {
        errorMessage = 'Email обязателен';
      } else if (!/\S+@\S+\.\S+/.test(value)) {
        errorMessage = 'Некорректный email';
      }
      break;

    case 'password':
      if (value.trim() && !/^(?=.*[a-z])(?=.*[A-Z])(?=.*\d).{7,}$/.test(value)) {
        errorMessage = 'Пароль должен содержать минимум 7 символов, 1 цифру, 1 строчную и 1 заглавную букву';
      } else if (!value.trim()) {
        errorMessage = 'Пароль обязателен';
      }
      break;

    case 'password_confirmation':
      if (formData.password && value.trim() && formData.password !== value) {
        errorMessage = 'Пароли не совпадают';
      } else if (!value.trim()) {
        errorMessage = 'Подтверждение пароля обязательно';
      }
      break;

    case 'photo1':
      if (!value) {
        errorMessage = 'Фото 1 обязательно';
      } else if (value.name && !/\.(png)$/i.test(value.name)) {
        errorMessage = 'Фото 1 должно быть изображением (формат png)';
      }
      break;

    case 'photo2':
    case 'photo3':
      if (value && value.name && !/\.(png)$/i.test(value.name)) {
        errorMessage = 'Фото должно быть изображением (формат png)';
      }
      break;

    case 'kind':
      errorMessage = value.trim() === '' ? 'Укажите вид животного' : '';
      break;

    case 'district':
      errorMessage = value.trim() === '' ? 'Укажите район' : '';
      break;

    case 'mark':
      break;

    case 'description':
      break;

    case 'confirm':
      errorMessage = value === 0 ? 'Подтверждение обязательно' : '';
      break;

    default:
      break;
  }

  return errorMessage;
};