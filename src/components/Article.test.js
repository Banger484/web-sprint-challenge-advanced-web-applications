import React from 'react';
import '@testing-library/jest-dom';
import { screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import MutationObserver from 'mutationobserver-shim';

import Article from './Article';
import { render } from 'react-dom';

const testArticle = {
    id: 'stuff',
    headline: 'something',
    author: 'someone',
    summary: 'stuff happened',
    body: 'more stuff',
    image: 175,
    createdOn: 'now'
}
// const handleDelete = jest.fn()
// const handleEditSelect = jest.fn()

test('renders component without errors', () => {
    render (<Article article={testArticle} />)
});

// test('renders headline, author from the article when passed in through props', ()=> {
// });

// test('renders "Associated Press" when no author is given', ()=> {
// });

test('executes handleDelete when the delete button is pressed', async ()=> {
    const handleDelete = jest.fn() 
    render (<Article article={testArticle} handleDelete={handleDelete} />)
    const button = screen.getByTestId(/deleteButton/i)
    userEvent.click(button)
    await waitFor(() => {
        expect(handleDelete).toHaveBeenCalled();
    })
});

//Task List:
//1. Complete all above tests. Create test article data when needed.