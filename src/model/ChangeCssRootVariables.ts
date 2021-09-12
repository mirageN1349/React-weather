import { Theme } from '../context/ThemeContext';

export function changeCssRootVariables(theme: Theme) {
  const root = document.querySelector(':root') as HTMLElement;

  const components = [
    'body-background',
    'components-background',
    'card-background',
    'card-shadow',
    'text-color',
  ];

  components.forEach(component => {
    root.style.setProperty(
      `--${component}-default`,
      `var(--${component}-${theme})`
    );
  });
}
