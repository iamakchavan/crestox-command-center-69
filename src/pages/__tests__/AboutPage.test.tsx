`import { render, screen, fireEvent, waitFor } from '@testing-library/react';
import { BrowserRouter } from 'react-router-dom';
import { describe, it, expect, vi, beforeEach } from 'vitest';
import AboutPage from '../AboutPage';

// Mock the navigation hook
const mockNavigate = vi.fn();
vi.mock('react-router-dom', async () => {
  const actual = await vi.importActual('react-router-dom');
  return {
    ...actual,
    useNavigate: () => mockNavigate,
  };
});

// Test wrapper component
const TestWrapper = ({ children }: { children: React.ReactNode }) => (
  <BrowserRouter>{children}</BrowserRouter>
);

describe('AboutPage', () => {
  beforeEach(() => {
    mockNavigate.mockClear();
  });

  it('renders the main page title', () => {
    render(
      <TestWrapper>
        <AboutPage />
      </TestWrapper>
    );

    expect(screen.getByText(/About/)).toBeInTheDocument();
  });

  it('renders all tab triggers', () => {
    render(
      <TestWrapper>
        <AboutPage />
      </TestWrapper>
    );

    expect(screen.getByRole('tab', { name: /crestox/i })).toBeInTheDocument();
    expect(screen.getByRole('tab', { name: /founding partners/i })).toBeInTheDocument();
    expect(screen.getByRole('tab', { name: /advisory board/i })).toBeInTheDocument();
    expect(screen.getByRole('tab', { name: /careers/i })).toBeInTheDocument();
    expect(screen.getByRole('tab', { name: /tax & legal/i })).toBeInTheDocument();
  });

  it('displays Crestox tab content by default', () => {
    render(
      <TestWrapper>
        <AboutPage />
      </TestWrapper>
    );

    expect(screen.getByText('What is Crestox?')).toBeInTheDocument();
    expect(screen.getByText('Art Portfolio Tokenization')).toBeInTheDocument();
    expect(screen.getByText('Fractional Ownership')).toBeInTheDocument();
  });

  it('switches to Founding Partners tab when clicked', async () => {
    render(
      <TestWrapper>
        <AboutPage />
      </TestWrapper>
    );

    const foundingPartnersTab = screen.getByRole('tab', { name: /founding partners/i });
    fireEvent.click(foundingPartnersTab);

    await waitFor(() => {
      expect(screen.getByText('Prayush Shah')).toBeInTheDocument();
      expect(screen.getByText('Udit Shah')).toBeInTheDocument();
    });
  });

  it('has proper accessibility attributes', () => {
    render(
      <TestWrapper>
        <AboutPage />
      </TestWrapper>
    );

    // Check for tab accessibility
    const tabs = screen.getAllByRole('tab');
    tabs.forEach(tab => {
      expect(tab).toHaveAttribute('aria-selected');
    });
  });
});