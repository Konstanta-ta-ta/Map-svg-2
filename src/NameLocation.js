import React from "react";
import {Map} from "./Map";

const dict = [
    {id: "STP", name: "Санкт-Петербург"},
    {id: "SVP", name: "Севастополь"},
    {id: "KRM", name: "Республика Крым"},
    {id: "KAR", name: "Республика Карелия"},
    {id: "LEN", name: "Ленинградская область"},
    {id: "ADI", name: "Республика Адыгея"},
    {id: "KHK", name: "Республика Хакасия"},
    {id: "KEM", name: "Кемеровская область - Кузбасс"},
    {id: "TOM", name: "Томская область"},
    {id: "KYA", name: "Красноярский край"},
    {id: "SAK", name: "Республика Саха (Якутия)"},
    {id: "KHM", name: "Ханты-Мансийский АО - Югра"},
    {id: "SVE", name: "Свердловская область"},
    {id: "IRK", name: "Иркутская область"},
    {id: "ZBK", name: "Забакальский край"},
    {id: "BUR", name: "Республика Бурятия"},
    {id: "PER", name: "Пермский край"},
    {id: "KOM", name: "Республика Коми"},
    {id: "UDM", name: "Удмуртская Республика"},
    {id: "TAT", name: "Республика Татарстан"},
    {id: "MEL", name: "Республика Марий-Эл"},
    {id: "KIR", name: "Кировская область"},
    {id: "CUK", name: "Чувашская Республика - Чувашия"},
    {id: "NIZ", name: "Нижегородская область"},
    {id: "VLA", name: "Владимирская область"},
    {id: "IVA", name: "Ивановская область"},
    {id: "KOS", name: "Костромская область"},
    {id: "YAR", name: "Ярославская область"},
    {id: "VLG", name: "Вологодская область"},
    {id: "BAK", name: "Республика Башкортостан"},
    {id: "KGN", name: "Курганская область"},
    {id: "SAM", name: "Самарская область"},
    {id: "ULY", name: "Ульяновская область"},
    {id: "SAR", name: "Саратовская область"},
    {id: "PNZ", name: "Пензенская область"},
    {id: "MOR", name: "Республика Мордовия"},
    {id: "TAM", name: "Тамбовская область"},
    {id: "RYA", name: "Рязанская область"},
    {id: "TUL", name: "Тульская область"},
    {id: "LIP", name: "Липецкая область"},
    {id: "ORL", name: "Орловская область"},
    {id: "AST", name: "Астраханская область"},
    {id: "ROS", name: "Ростовская область"},
    {id: "VGG", name: "Волгоградская область"},
    {id: "KBB", name: "Кабардино-Балкарская республика"},
    {id: "CEC", name: "Чеченская Республика"},
    {id: "STA", name: "Ставропольский край"},
    {id: "KDA", name: "Краснодарский край"},
    {id: "KHA", name: "Хабаровский край"},
    {id: "YAN", name: "Ямало-Ненецкий АО"},
    {id: "MOW", name: "Москва"},
    {id: "MOS", name: "Московская область"},
    {id: "TVE", name: "Тверская область"},
    {id: "NGR", name: "Новгородская область"},
    {id: "KLU", name: "Калужская область"},
    {id: "KGD", name: "Калининградская область"},
    {id: "CHU", name: "Чукотский АО"},
    {id: "KAM", name: "Камчатский край"},
    {id: "SHL", name: "Сахалинская область"},
    {id: "ARK", name: "Архангелская область"},
    {id: "MAG", name: "Магаданская область"},
    {id: "PRI", name: "Приморский край"},
    {id: "YEV", name: "Еврейская АО"},
    {id: "AMU", name: "Амурская область"},
    {id: "TYV", name: "Республика Тыва"},
    {id: "GLT", name: "Республика Алтай"},
    {id: "ALT", name: "Алтайский край"},
    {id: "NVS", name: "Новосибирская область"},
    {id: "TYM", name: "Тюменская область"},
    {id: "OMS", name: "Омская область"},
    {id: "CHE", name: "Челябинская область"},
    {id: "ORE", name: "Оренбургская область"},
    {id: "KLM", name: "Республика Калмыкия"},
    {id: "DAG", name: "Республика Дагестан"},
    {id: "ING", name: "Республика Ингушетия"},
    {id: "SEO", name: "Республика Северная Осетия - Алания"},
    {id: "KCR", name: "Карачаево-Черкесская республика"},
    {id: "VOR", name: "Воронежская область"},
    {id: "BEL", name: "Белгородская область"},
    {id: "KRS", name: "Курская область"},
    {id: "BRY", name: "Брянская область"},
    {id: "SMO", name: "Смоленская область"},
    {id: "PSK", name: "Псковская область"},
    {id: "MUR", name: "Мурманская область"},
    {id: "NEN", name: "Ненецкий АО"}
]

export class NameLocation extends React.Component{

    constructor (props) {
        super(props);
        this.state = {
            text: ``,
            x: 0,
            y: 0,
            display: 'none',
            color: ``,
            STP:'',
            SVP:'',
            KRM:'',
            KAR:'',
            LEN:'',
            ADI:'',
            KHK:'',
            KEM:'',
            TOM:'',
            PER:'',
            KOM:'',
            UDM:'',
            TAT:'',
            MEL:'',
            KIR:'',
            CUK:'',
            NIZ:'',
            VLA:'',
            IVA:'',
            KOS:'',
            YAR:'',
            VLG:'',
            BAK:'',
            KGN:'',
            SAM:'',
            ULY:'',
            SAR:'',
            PNZ:'',
            MOR:'',
            TAM:'',
            RYA:'',
            TUL:'',
            LIP:'',
            ORL:'',
            AST:'',
            ROS:'',
            VGG:'',
            KBB:'',
            CEC:'',
            STA:'',
            KDA:'',
            KHA:'',
            YAN:'',
            MOW:'',
            MOS:'',
            TVE:'',
            NGR:'',
            KLU:'',
            KGD:'',
            CHU:'',
            KAM:'',
            SHL:'',
            ARK:'',
            MAG:'',
            PRI:'',
            YEV:'',
            AMU:'',
            TYV:'',
            GLT:'',
            ALT:'',
            NVS:'',
            TYM:'',
            OMS:'',
            CHE:'',
            ORE:'',
            KLM:'',
            DAG:'',
            ING:'',
            SEO:'',
            KCR:'',
            VOR:'',
            BEL:'',
            KRS:'',
            BRY:'',
            SMO:'',
            PSK:'',
            MUR:'',
            NEN:'',
        }
    }
    
    clickMap = (e) => {
        const idToSearch = e.target.getAttribute("id");

        function b (needId) {
            return dict.filter(item => {
                    return item.id === needId
                }
            ).map(item =>{
                return item.name
            })
        }
        return(
            this.setState({ text: b(idToSearch), x: e.pageX, y: e.pageY, display:''})
        )
    }
    //Место, где менять цвета для каждого региона
    rdColor () {
        this.setState({
            STP: '#fff567',
            SVP:'',
            KRM:'',
            KAR:'',
            LEN: '',
            ADI:'',
            KHK:'',
            KEM:'',
            TOM:'',
            KYA:'#120a8f',
            SAK:'',
            KHM:'',
            SVE:'',
            IRK:'#000fff',
            ZBK:'',
            BUR:'',
            PER:'',
            KOM:'',
            UDM:'',
            TAT:'',
            MEL:'',
            KIR:'',
            CUK:'',
            NIZ:'',
            VLA:'',
            IVA:'',
            KOS:'',
            YAR:'',
            VLG:'',
            BAK:'',
            KGN:'',
            SAM:'',
            ULY:'',
            SAR:'',
            PNZ:'',
            MOR:'',
            TAM:'',
            RYA:'',
            TUL:'',
            LIP:'',
            ORL:'',
            AST:'',
            ROS:'',
            VGG:'',
            KBB:'',
            CEC:'',
            STA:'',
            KDA:'',
            KHA:'',
            YAN:'',
            MOW:'',
            MOS:'',
            TVE:'',
            NGR:'',
            KLU:'',
            KGD:'',
            CHU:'',
            KAM:'',
            SHL:'',
            ARK:'',
            MAG:'',
            PRI:'',
            YEV:'',
            AMU:'',
            TYV:'',
            GLT:'',
            ALT:'',
            NVS:'',
            TYM:'',
            OMS:'',
            CHE:'',
            ORE:'',
            KLM:'',
            DAG:'',
            ING:'',
            SEO:'',
            KCR:'',
            VOR:'',
            BEL:'',
            KRS:'',
            BRY:'',
            SMO:'',
            PSK:'',
            MUR:'',
            NEN:''
        })
    }

    componentDidMount() {
        this.rdColor()

    }

    render() {
        return (
            <Map    
                text={this.state.text} 
                x={this.state.x} 
                y={this.state.y} 
                display={this.state.display} 
                clickMap={this.clickMap}
                STP={this.state.STP}
                SVP={this.state.SVP}
                KRM={this.state.KRM}
                KAR={this.state.KAR}
                LEN={this.state.LEN}
                ADI={this.state.ADI}
                KHK={this.state.KHK}
                KEM={this.state.KEM}
                TOM={this.state.TOM}
                KYA={this.state.KYA}
                SAK={this.state.SAK}
                KHM={this.state.KHM}
                SVE={this.state.SVE}
                IRK={this.state.IRK}
                ZBK={this.state.ZBK}
                BUR={this.state.BUR}
                PER={this.state.PER}
                KOM={this.state.KOM}
                UDM={this.state.UDM}
                TAT={this.state.TAT}
                MEL={this.state.MEL}
                KIR={this.state.KIR}
                CUK={this.state.CUK}
                NIZ={this.state.NIZ}
                VLA={this.state.VLA}
                IVA={this.state.IVA}
                KOS={this.state.KOS}
                YAR={this.state.YAR}
                VLG={this.state.VLG}
                BAK={this.state.BAK}
                KGN={this.state.KGN}
                SAM={this.state.SAM}
                ULY={this.state.ULY}
                SAR={this.state.SAR}
                PNZ={this.state.PNZ}
                MOR={this.state.MOR}
                TAM={this.state.TAM}
                RYA={this.state.RYA}
                TUL={this.state.TUL}
                LIP={this.state.LIP}
                ORL={this.state.ORL}
                AST={this.state.AST}
                ROS={this.state.ROS}
                VGG={this.state.VGG}
                KBB={this.state.KBB}
                CEC={this.state.CEC}
                STA={this.state.STA}
                KDA={this.state.KDA}
                KHA={this.state.KHA}
                YAN={this.state.YAN}
                MOW={this.state.MOW}
                MOS={this.state.MOS}
                TVE={this.state.TVE}
                NGR={this.state.NGR}
                KLU={this.state.KLU}
                KGD={this.state.KGD}
                CHU={this.state.CHU}
                KAM={this.state.KAM}
                SHL={this.state.SHL}
                ARK={this.state.ARK}
                MAG={this.state.MAG}
                PRI={this.state.PRI}
                YEV={this.state.YEV}
                AMU={this.state.AMU}
                TYV={this.state.TYV}
                GLT={this.state.GLT}
                ALT={this.state.ALT}
                NVS={this.state.NVS}
                TYM={this.state.TYM}
                OMS={this.state.OMS}
                CHE={this.state.CHE}
                ORE={this.state.ORE}
                KLM={this.state.KLM}
                DAG={this.state.DAG}
                ING={this.state.ING}
                SEO={this.state.SEO}
                KCR={this.state.KCR}
                VOR={this.state.VOR}
                BEL={this.state.BEL}
                KRS={this.state.KRS}
                BRY={this.state.BRY}
                SMO={this.state.SMO}
                PSK={this.state.PSK}
                MUR={this.state.MUR}
                NEN={this.state.NEN}            
            />
        )
    }

}