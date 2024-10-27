import React from 'react';
import {useTranslation} from "react-i18next";
import Slider from "../components/Slider/Slider";

const Home = () => {
    const {t} = useTranslation();

    return (
        <div>
            <div>
                <Slider/>
            </div>
        </div>
    );
};

export default Home;