import React from 'react';
import { render, fireEvent } from '@testing-library/react';
import ProjectCard from '../components/ProjectCard';


describe('ProjectCard Component', () => {
    const testData = {
        imgPath: 'test-img.jpg',
        title: 'Test Project',
        tags: ['React', 'Testing'],
        description: 'Test project description',
        repoLink: 'https://github.com/test/test-repo',
        demoLink: 'https://test-demo.com',
        tabs: [],
    };

    it('renders without crashing', () => {
        render(<ProjectCard data={testData} />);
    });

    it('renders project details correctly', () => {
        const { getByText, getByAltText } = render(<ProjectCard data={testData} />);

        // We can't test the title renders, due to the animation
        expect(getByText('React')).toBeInTheDocument();
        expect(getByText('Testing')).toBeInTheDocument();
        expect(getByText('Test project description')).toBeInTheDocument();
        expect(getByAltText('')).toBeInTheDocument(); // Assuming alt text is empty in this case
        expect(getByText('More info')).toBeInTheDocument();
        expect(getByText('Repo')).toBeInTheDocument();
        expect(getByText('Live demo')).toBeInTheDocument();
    });

    it('opens modal on click', () => {
        const { getByText, queryByText } = render(<ProjectCard data={testData} />);

        // Ensure modal is closed initially
        expect(queryByText('Modal content')).toBeNull();
        expect(document.querySelector('.modal-content')).toBeNull();

        // Now click on the card and check modal opens
        fireEvent.click(getByText('More info'));
        expect(document.querySelector('.modal-content')).toBeInTheDocument(); // Modal is open
    });
});
