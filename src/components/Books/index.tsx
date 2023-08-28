import { useQueries } from 'react-query';
import Carousel from 'better-react-carousel';
import { getBooks } from '../../services/api';
import { Spinner } from '../Spinner';
import { Card } from '../Card';
import * as S from './styles';

interface BooksProps {
    genre: string
}

export function Books({ genre }: BooksProps) {

    const [ { data: books, isLoading, isError } ] = useQueries([
        { queryKey: [genre], queryFn: () => getBooks(genre) }
    ]);

    const filteredBooks = books?.filter((book) => book.volumeInfo.imageLinks && book.saleInfo.listPrice);

    if (isLoading) return <Spinner />;

    if(isError) return <div>Algo deu errado...</div>;

    return (
        <S.BooksContainer>
            <h2>{genre}</h2>
            <Carousel cols={5} rows={1} gap={20} loop>
                {
                    filteredBooks &&
                    filteredBooks?.map((book) => (
                        <Carousel.Item key={book.id}>
                            <Card 
                                book={book}
                            />
                        </Carousel.Item>
                    ))
                }
            </Carousel>
        </S.BooksContainer>
    );
}
