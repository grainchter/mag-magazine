import s from './Content.module.scss';
import Item1 from './Item1/Item1';
import Item2 from './Item2/Item2';
import Item3 from './Item3/Item3';

const Content = () => {


    return (

        <div className={s.wrap}>
            <div className={s.item1}>
                <Item1 />
            </div>
            <div className={s.item2}>
                <Item2 />
            </div>
            <div className={s.item3}>
                <Item3 />
            </div>
        </div>

    );
}

export default Content;