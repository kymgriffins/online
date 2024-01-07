import React from 'react';
import { render, fireEvent } from '@testing-library/react';
import SkillsSummary from '../components/SkillsSummary';

describe('SkillsSummary Component', () => {
    it('toggles skills summary visibility on click', () => {
        const { getByText, container } = render(<SkillsSummary />);

        // Check that initially the details are not visible
        expect(container.querySelector('.skills-summary')).not.toHaveClass('show');

        // Click the toggle
        fireEvent.click(getByText('Skills summary'));

        // Check that details are now visible
        expect(container.querySelector('.skills-summary')).toHaveClass('show');

        // Click the toggle again
        fireEvent.click(getByText('Skills summary'));

        // Check that details are hidden again
        expect(container.querySelector('.skills-summary')).not.toHaveClass('show');
    });
});