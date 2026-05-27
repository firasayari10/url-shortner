import '@testing-library/jest-dom';
import { render, screen, fireEvent, waitFor } from '@testing-library/react';
import UrlForm from './form';

global.fetch = jest.fn();

describe('UrlForm', () => {
  beforeEach(() => {
    jest.clearAllMocks();
  });

  it('affiche le champ de saisie et le bouton', () => {
    render(<UrlForm onShortned={() => {}} />);

    expect(screen.getByPlaceholderText('Coller votre URL ici !')).toBeInTheDocument();
    expect(screen.getByText('raccourcir')).toBeInTheDocument();
  });

  it('affiche le lien raccourci après soumission', async () => {
    (global.fetch as jest.Mock).mockResolvedValue({
      json: async () => ({ shortCode: 'abc123' }),
    });

    render(<UrlForm onShortned={() => {}} />);

    fireEvent.change(screen.getByPlaceholderText('Coller votre URL ici !'), {
      target: { value: 'https://github.com/facebook/react' },
    });

    fireEvent.click(screen.getByText('raccourcir'));

    await waitFor(() => {
      expect(screen.getByText(/abc123/)).toBeInTheDocument();
    });
  });

  it('appelle onShortned après soumission', async () => {
    (global.fetch as jest.Mock).mockResolvedValue({
      json: async () => ({ shortCode: 'abc123' }),
    });

    const onShortned = jest.fn();
    render(<UrlForm onShortned={onShortned} />);

    fireEvent.change(screen.getByPlaceholderText('Coller votre URL ici !'), {
      target: { value: 'https://github.com/facebook/react' },
    });

    fireEvent.click(screen.getByText('raccourcir'));

    await waitFor(() => {
      expect(onShortned).toHaveBeenCalled();
    });
  });
});