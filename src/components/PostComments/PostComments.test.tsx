import { fireEvent, render, screen } from '@testing-library/react';
import Post from '.';
import PostComment from '.';

describe('Teste para o componente PostComment', () => {
    it('Deve renderizar o componente corretamente', () => {
        render(<PostComment/>);
        expect(screen.getByText('Comentar')).toBeInTheDocument();
    });
    test('inserindo dois comentários', () => {
        render(<Post />);
        
        const textarea = screen.getByTestId('comment-textarea');
        const submitButton = screen.getByTestId('comment-submit-button');
        
        fireEvent.change(textarea, { target: { value: 'Primeiro comentário' } });
        fireEvent.click(submitButton);
        
        screen.getByText('Primeiro comentário');
        
        fireEvent.change(textarea, { target: { value: 'Segundo comentário' } });
        fireEvent.click(submitButton);
        
        screen.getByText('Segundo comentário');
    });
});

