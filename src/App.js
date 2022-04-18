// routes
import MotionLazyContainer from './components/animate/MotionLazyContainer';
import { ProgressBarStyle } from './components/ProgressBar';
import RtlLayout from './components/RtlLayout';
import ScrollToTop from './components/ScrollToTop';

import Router from './routes';
// theme
import ThemeProvider from './theme';

// ----------------------------------------------------------------------

export default function App() {
  return (
    <ThemeProvider>
        <RtlLayout>
          <MotionLazyContainer>
            <ProgressBarStyle />
            <ScrollToTop />
            <Router />
          </MotionLazyContainer>
        </RtlLayout>
    </ThemeProvider>
  );
}
