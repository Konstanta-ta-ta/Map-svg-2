import React from "react";

export function Dict() {

    const dict = {
        STP: "Санкт-Петербург",
        SVP: "Севастополь",
        KRM: "Республика Крым",
        KAR: "Республика Карелия",
        LEN: "Ленинградская область",
        ADI: "Республика Адыгея",
        KHK: "Республика Хакасия",
        KEM: "Кемеровская область - Кузбасс",
        TOM: "Томская область",
        KYA: "Красноярский край",
        SAK: "Республика Саха (Якутия)",
        KHM: "Ханты-Мансийский АО - Югра",
        SVE: "Свердловская область",
        IRK: "Иркутская область",
        ZBK: "Забакальский край",
        BUR: "Республика Бурятия",
        PER: "Пермский край",
        KOM: "Республика Коми",
        UDM: "Удмуртская Республика",
        TAT: "Республика Татарстан",
        MEL: "Республика Марий-Эл",
        KIR: "Кировская область",
        CUK: "Чувашская Республика - Чувашия",
        NIZ: "Нижегородская область",
        VLA: "Владимирская область",
        IVA: "Ивановская область",
        KOS: "Костромская область",
        YAR: "Ярославская область",
        VLG: "Вологодская область",
        BAK: "Республика Башкортостан",
        KGN: "Курганская область",
        SAM: "Самарская область",
        ULY: "Ульяновская область",
        SAR: "Саратовская область",
        PNZ: "Пензенская область",
        MOR: "Республика Мордовия",
        TAM: "Тамбовская область",
        RYA: "Рязанская область",
        TUL: "Тульская область",
        LIP: "Липецкая область",
        ORL: "Орловская область",
        AST: "Астраханская область",
        ROS: "Ростовская область",
        VGG: "Волгоградская область",
        KBB: "Кабардино-Балкарская республика",
        CEC: "Чеченская Республика",
        STA: "Ставропольский край",
        KDA: "Краснодарский край",
        KHA: "Хабаровский край",
        YAN: "Ямало-Ненецкий АО",
        MOW: "Москва",
        MOS: "Московская область",
        TVE: "Тверская область",
        NGR: "Новгородская область",
        KLU: "Калужская область",
        KGD: "Калининградская область",
        CHU: "Чукотский АО",
        KAM: "Камчатский край",
        SHL: "Сахалинская область",
        ARK: "Архангелская область",
        MAG: "Магаданская область",
        PRI: "Приморский край",
        YEV: "Еврейская АО",
        AMU: "Амурская область",
        TYV: "Республика Тыва",
        GLT: "Республика Алтай",
        ALT: "Алтайский край",
        NVS: "Новосибирская область",
        TYM: "Тюменская область",
        OMS: "Омская область",
        CHE: "Челябинская область",
        ORE: "Оренбургская область",
        KLM: "Республика Калмыкия",
        DAG: "Республика Дагестан",
        ING: "Республика Ингушетия",
        SEO: "Республика Северная Осетия - Алания",
        KCR: "Карачаево-Черкесская республика",
        VOR: "Воронежская область",
        BEL: "Белгородская область",
        KRS: "Курская область",
        BRY: "Брянская область",
        SMO: "Смоленская область",
        PSK: "Псковская область",
        MUR: "Мурманская область",
        NEN: "Ненецкий АО"
    };

    return (
        <div>
            <ol>
                {
                    Object.entries(dict)
                        .map(([key, value]) => <li key={value}>{value}</li>)
                }
            </ol>
        </div>
    );
}