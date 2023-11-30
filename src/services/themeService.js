let isDarkModeEnabled = false;

export const isDarkModeActive = () => {
  return isDarkModeEnabled;
};

export const toggleDarkMode = () => {
  isDarkModeEnabled = !isDarkModeEnabled;
  // Lógica para aplicar o tema dark/light ao aplicativo
  // Aqui você pode implementar a lógica para alterar a aparência do aplicativo com base no tema
};
