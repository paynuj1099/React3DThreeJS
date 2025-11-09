import { Component } from 'react';
import type { ReactNode } from 'react';

interface Props {
  children: ReactNode;
}

interface State {
  hasError: boolean;
  error: Error | null;
}

export default class ErrorBoundary extends Component<Props, State> {
  constructor(props: Props) {
    super(props);
    this.state = { hasError: false, error: null };
  }

  static getDerivedStateFromError(error: Error): State {
    return { hasError: true, error };
  }

  componentDidCatch(error: Error, errorInfo: any) {
    console.error('3D Scene Error:', error, errorInfo);
  }

  render() {
    if (this.state.hasError) {
      return (
        <div style={{
          width: '100%',
          height: '100%',
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          justifyContent: 'center',
          background: 'linear-gradient(135deg, #1a1a2e, #16213e)',
          borderRadius: '24px',
          padding: '2rem',
          color: 'white'
        }}>
          <div style={{ fontSize: '3rem', marginBottom: '1rem' }}>👟</div>
          <h3 style={{ margin: '0 0 0.5rem 0' }}>3D View Unavailable</h3>
          <p style={{ margin: 0, opacity: 0.7, textAlign: 'center' }}>
            WebGL is having trouble rendering the 3D model.
            <br />
            Try refreshing the page or updating your graphics drivers.
          </p>
          <button 
            onClick={() => window.location.reload()} 
            style={{
              marginTop: '1.5rem',
              padding: '0.75rem 1.5rem',
              background: '#e74c3c',
              border: 'none',
              borderRadius: '8px',
              color: 'white',
              fontSize: '1rem',
              cursor: 'pointer',
              fontWeight: 600
            }}
          >
            Reload Page
          </button>
        </div>
      );
    }

    return this.props.children;
  }
}
