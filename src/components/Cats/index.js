import LoadableImg from '../LoadableImg';
import { IMAGES } from '../../helpers/constants';

const Cats = () => {
    return (
        <div className='cat-container'>
            {
                IMAGES.map(cat => (
                    <div key={cat} className='cat-item'>
                        <LoadableImg src={cat} alt={'#'} />
                    </div>
                ))
            }
        </div>
    )
}

export default Cats;
