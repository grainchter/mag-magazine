import { useEffect, useState } from 'react';
import s from './Item2.module.scss';

const Item2 = () => {

    const [financial, setFinancial] = useState({});
    const [sport, setSport] = useState({});
    const [promi, setPromi] = useState({});
    const [music, setMusic] = useState({});

    const [imgData, setImgData] = useState();

    const [isClicked, setClicked] = useState("finance");

    const [isLoad, setLoad] = useState(false);

    useEffect(() => {

        getFinancialData();
        getSportsData();
        getPromiData();
        getMusicData();

    }, []);

    const getFinancialData = () => {
        fetch('https://fakerapi.it/api/v1/texts?_quantity=4&_characters=99')
            .then(response => response.json())
            .then(data => {
                setFinancial(data.data);
                setLoad(true);
            });

        fetch('https://fakerapi.it/api/v1/images?_quantity=1&_type=tech')
            .then(response => response.json())
            .then(data => setImgData(data.data[0]));

    }

    const getSportsData = () => {
        fetch('https://fakerapi.it/api/v1/texts?_quantity=4&_characters=99')
            .then(response => response.json())
            .then(data => setSport(data.data));

        fetch('https://fakerapi.it/api/v1/images?_quantity=1&_type=tech')
            .then(response => response.json())
            .then(data => setImgData(data.data[0]));
    }


    const getPromiData = () => {
        fetch('https://fakerapi.it/api/v1/texts?_quantity=4&_characters=99')
            .then(response => response.json())
            .then(data => setPromi(data.data));

        fetch('https://fakerapi.it/api/v1/images?_quantity=1&_type=tech')
            .then(response => response.json())
            .then(data => setImgData(data.data[0]));
    }

    const getMusicData = () => {
        fetch('https://fakerapi.it/api/v1/texts?_quantity=4&_characters=99')
            .then(response => response.json())
            .then(data => setMusic(data.data));

        fetch('https://fakerapi.it/api/v1/images?_quantity=1&_type=tech')
            .then(response => response.json())
            .then(data => setImgData(data.data[0]));
    }



    return (
        <>

            {isLoad == false &&
                <div>
                    loading...
                </div>
            }

            {isLoad == true &&
                <div className={s.wrap_item2}>
                    <div>
                        <ul className={s.item2_links}>
                            <li className={s.item2_menu} onClick={() => { setClicked("finance") }}>FINANCIAL WORLD</li>
                            <li className={s.item2_menu} onClick={() => { setClicked("sport") }}>SPORTS WORLD</li>
                            <li className={s.item2_menu} onClick={() => { setClicked("promi") }}>PROMI WORLD</li>
                            <li className={s.item2_menu} onClick={() => { setClicked("music") }}>MUSIC & ARTS WORLD</li>
                        </ul>
                    </div>

                    {isClicked == "finance" &&
                        <div className={s.item2_items}>
                            {
                                financial.map(({ title, content, genre }) =>

                                    <div className={s.items_item} key={Math.floor(Math.random() * (10000 - 5000)) + 5000}>
                                        <h3>{title}</h3>
                                        <img className={s.items_img} src={imgData.url} />
                                        <p>
                                            {content}
                                        </p>
                                        <p>Tag: <a>{genre} »</a></p>
                                    </div>

                                )
                            }

                        </div>
                    }

                    {isClicked == "sport" &&
                        <div className={s.item2_items}>
                            {
                                sport.map(({ title, content, genre }) =>

                                    <div className={s.items_item} key={Math.floor(Math.random() * (10000 - 5000)) + 5000}>
                                        <h3>{title}</h3>
                                        <img className={s.items_img} src={imgData.url} />
                                        <p>
                                            {content}
                                        </p>
                                        <p>Tag: <a>{genre} »</a></p>
                                    </div>

                                )
                            }
                        </div>
                    }

                    {isClicked == "promi" &&
                        <div className={s.item2_items}>
                            {
                                promi.map(({ title, content, genre }) =>

                                    <div className={s.items_item} key={Math.floor(Math.random() * (10000 - 5000)) + 5000}>
                                        <h3>{title}</h3>
                                        <img className={s.items_img} src={imgData.url} />
                                        <p>
                                            {content}
                                        </p>
                                        <p>Tag: <a>{genre} »</a></p>
                                    </div>

                                )
                            }

                        </div>
                    }

                    {isClicked == "music" &&
                        <div className={s.item2_items}>
                            {
                                music.map(({ title, content, genre }) =>

                                    <div className={s.items_item} key={Math.floor(Math.random() * (10000 - 5000)) + 5000}>
                                        <h3>{title}</h3>
                                        <img className={s.items_img} src={imgData.url} />
                                        <p>
                                            {content}
                                        </p>
                                        <p>Tag: <a>{genre} »</a></p>
                                    </div>

                                )
                            }

                        </div>
                    }
                </div>
            }

        </>
    );
}

export default Item2;