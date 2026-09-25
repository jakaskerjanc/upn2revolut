import { LanguageToggle } from './LanguageToggle';
import { useT } from '../session/useT';

/** Wordmark and language control — shared by both views. */
function AppHeader() {
  const t = useT();
  return (
    <header className="mx-auto flex h-16 w-full max-w-5xl items-center justify-between gap-4 px-5 sm:px-8">
      <span className="font-display text-heading-sm font-medium">{t('app.title')}</span>
      <LanguageToggle />
    </header>
  );
}

export { AppHeader };
