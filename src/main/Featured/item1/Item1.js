import { useEffect, useState } from 'react';
import s from './Item1.module.scss';

const Item1 = () => {

    const [textData, setTextData] = useState({});
    const [imgData, setImgData] = useState({});

    useEffect(() => {
        getData();
    }, []);

    const getData = () => {
        fetch('https://fakerapi.it/api/v1/texts?_quantity=1&_characters=500')
            .then(response => response.json())
            .then(data => setTextData(data.data[0]));

        fetch('https://fakerapi.it/api/v1/images?_quantity=1&_type=kittens')
            .then(response => response.json())
            .then(data => setImgData(data.data[0]));
    }

    return (
        <>

            <div className={s.container}>
                <div className={s.item1}>
                    <img className={s.img1} src={imgData.url} />
                    <h3>
                        {textData.title}
                    </h3>
                    <p>
                        {textData.content}
                    </p>
                </div>
            </div>

        </>
    );
}

export default Item1;