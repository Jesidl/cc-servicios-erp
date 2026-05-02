import React from 'react';

class ErrorBoundary extends React.Component {
  constructor(props) {
    super(props);
    this.state = { hasError: false, error: null };
  }

  static getDerivedStateFromError(error) {
    // Actualiza el estado para que el siguiente renderizado muestre la interfaz de repuesto
    return { hasError: true, error };
  }

  componentDidCatch(error, errorInfo) {
    // Aquí puedes registrar el error en un servicio como Sentry o LogRocket
    console.error("Error caught by ErrorBoundary:", error, errorInfo);
  }

  handleReset = () => {
    this.setState({ hasError: false, error: null });
    window.location.href = '/';
  };

  render() {
    if (this.state.hasError) {
      // Interfaz de repuesto personalizada con el estilo de Cuentas Claras
      return (
        <div style={{ 
          display: 'flex', 
          flexDirection: 'column', 
          alignItems: 'center', 
          justifyContent: 'center', 
          height: '100vh', 
          textAlign: 'center',
          padding: '2rem',
          backgroundColor: '#f9fafb'
        }}>
          <h1 style={{ fontSize: '2rem', color: '#3A2A24', marginBottom: '1rem' }}>¡Ups! Algo salió mal.</h1>
          <p style={{ color: '#6B6B6B', marginBottom: '2rem' }}>
            Hubo un error inesperado al cargar esta sección. Por favor, intenta recargar la página.
          </p>
          <button onClick={this.handleReset} className="btn btn--primary">
            Volver al Inicio
          </button>
        </div>
      );
    }

    return this.props.children;
  }
}

export default ErrorBoundary;