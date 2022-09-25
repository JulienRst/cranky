import useDebounce from 'technical/debounce/hook';
import useWindowSize from 'technical/window/hook';
import variables from 'ui/variables.module.scss';

const DESKTOP = parseInt(variables.desktop.replace('px', ''));

interface BreakpointStatus {
  isHigherThanDesktop: boolean;
}

export default function useBreakpoint(): BreakpointStatus {
  const { width } = useWindowSize();
  const debouncedWidth = useDebounce(width, 300);

  let breakpointStatus = {
    isHigherThanDesktop: false,
  };

  if (debouncedWidth) {
    switch (true) {
      case debouncedWidth > DESKTOP:
        breakpointStatus.isHigherThanDesktop = true;
      // falls through
      default: {
        // do nothing
      }
    }
  }

  return breakpointStatus;
}
