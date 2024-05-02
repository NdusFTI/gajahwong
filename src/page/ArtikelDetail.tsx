import { useParams } from 'react-router-dom';

export const ArtikelDetail = () => {
    const { id } = useParams();

    return (
        <div>
            ArtikelDetail Component with ID: {id}
        </div>
    );
};
