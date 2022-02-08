import s from './Featured.module.scss';
import Item1 from './item1/Item1';
import Item2 from './item2/Item2';

const Featured = () => {


    return (
        <div className={s.container}>
            <Item1 />
            <Item2 />
        </div>
    );
}

export default Featured;