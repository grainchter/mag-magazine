import { useEffect, useState } from 'react';
import s from './Item2.module.scss';

const Item2 = () => {

    const [textData, setTextData] = useState({});

    useEffect(() => {
        getData();
    }, []);

    const getData = () => {

        fetch('https://fakerapi.it/api/v1/books?_quantity=4')
            .then(response => response.json())
            .then(data => setTextData(data.data));
    }

    return (
        <>
            <div className={s.item2}>
                {
                    Object.entries(textData).map(([key, { title, description, image, id }]) =>

                        <div className={s.wrap} key={id}>
                            <div>
                                <img className={s.img_mini} src={image} />
                            </div>
                            <div>
                                <h3>{title}</h3>
                                <p>
                                    {description}
                                </p>
                            </div>
                        </div>

                    )
                }
            </div>
        </>
    );
}

export default Item2;