import { Component, type ReactNode } from 'react';

type Props = {
  children: ReactNode;
};

type State = {
  error?: unknown;
};

export class ErrorBoundary extends Component<Props, State> {
  state: State = {};

  static getDerivedStateFromError(error: unknown) {
    return { error };
  }

  componentDidCatch(error: unknown) {
    // Keep console output for debugging; Vite overlay may also show.
    console.error(error);
  }

  render() {
    const { error } = this.state;
    if (!error) return this.props.children;

    const message =
      error instanceof Error
        ? `${error.name}: ${error.message}\n${error.stack ?? ''}`
        : String(error);

    return (
      <div style={{ padding: 24, fontFamily: 'ui-monospace, SFMono-Regular, Menlo, Monaco, Consolas, monospace' }}>
        <h1 style={{ fontSize: 18, fontWeight: 700, marginBottom: 12 }}>Runtime error</h1>
        <pre style={{ whiteSpace: 'pre-wrap', lineHeight: 1.4 }}>{message}</pre>
      </div>
    );
  }
}

