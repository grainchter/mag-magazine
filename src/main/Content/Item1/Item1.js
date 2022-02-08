import { useEffect, useState } from 'react';
import s from './Item1.module.scss';

const Item1 = () => {

    const [textData, setTextData] = useState([]);
    const [imgData, setImgData] = useState({});

    useEffect(() => {
        getData();
    }, []);

    const getData = () => {
        fetch('https://fakerapi.it/api/v1/texts?_quantity=3&_characters=99')
            .then(response => response.json())
            .then(data => setTextData(data.data));

        fetch('https://fakerapi.it/api/v1/images?_quantity=1&_type=kittens')
            .then(response => response.json())
            .then(data => setImgData(data.data[0]));
    }

    return (
        <div className={s.wrap}>
            <div>
                <div className={s.item_head}>
                    <p>LOREM IPSUM</p>
                </div>

                {

                    textData.map(({ title, content }) =>
                        <div className={s.img_item} key={Math.floor(Math.random() * (10000 - 5000)) + 5000}>
                            <div>
                                <img className={s.item_img_mini} src={imgData.url} />
                            </div>
                            <div>
                                <h3>{title}</h3>
                                <p>
                                    {content}
                                </p>
                                <a>READ MORE »</a>
                            </div>
                        </div>
                    )
                }


            </div>
            <div>
                <div className={s.item_head}>
                    <p>LOREM IPSUM</p>
                </div>

                {

                    textData.map(({ title, content }) =>
                        <div className={s.img_item} key={Math.floor(Math.random() * (10000 - 5000)) + 5000}>
                            <div>
                                <img className={s.item_img_mini} src={imgData.url} />
                            </div>
                            <div>
                                <h3>{title}</h3>
                                <p>
                                    {content}
                                </p>
                                <a>READ MORE »</a>
                            </div>
                        </div>
                    )
                }


            </div>
        </div>
    );
}

export default Item1;