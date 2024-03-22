import React from 'react';
import { render, screen, waitFor } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import axios from 'axios';
import '@testing-library/jest-dom';
import BackgroundVideoPage from './backgroundVideoPage';

jest.mock('axios');

describe('BackgroundVideoPage', () => {
    beforeEach(() => {
        // Mock setup if needed before each test
    });

    afterEach(() => {
        // Cleanup if needed after each test
    });

    it('renders without crashing', () => {
        render(<BackgroundVideoPage />);
        expect(screen.getByRole('button', { name: /pause/i })).toBeInTheDocument();
        expect(screen.getByText(/important/i)).toBeInTheDocument();
    });

    it('toggles play/pause on video', async () => {
        render(<BackgroundVideoPage />);
        const pauseButton = screen.getByRole('button', { name: /pause/i });
        userEvent.click(pauseButton);
        expect(pauseButton).toHaveTextContent(/resume/i);
    });

    it('allows editing user data', async () => {
        render(<BackgroundVideoPage />);
        const editButton = screen.getByRole('button', { name: /edit/i });
        userEvent.click(editButton);
        const firstNameField = screen.getByLabelText('First Name');
        userEvent.clear(firstNameField);
        userEvent.type(firstNameField, 'New Name');
        expect(firstNameField).toHaveValue('New Name');
    });

    it('fetches user data on mount', async () => {
        const userData = { firstName: 'John', lastName: 'Doe' };
        axios.get.mockResolvedValue({ data: userData });
        render(<BackgroundVideoPage />);
        expect(axios.get).toHaveBeenCalledWith(expect.stringContaining('/user/byId/'));
        await waitFor(() => {
            expect(screen.getByText(userData.firstName)).toBeInTheDocument();
        });
    });

    it('displays an error message if the user data fetch fails', async () => {
        axios.get.mockRejectedValue(new Error('Network Error'));
        render(<BackgroundVideoPage />);
        await waitFor(() => {
            expect(screen.getByText(/error fetching user data/i)).toBeInTheDocument();
        });
    });

    // Add more tests as needed...
});
