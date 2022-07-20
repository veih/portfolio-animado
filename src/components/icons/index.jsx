import { IconsCursos } from "../iconsCursos";
import { IconsRedesSocias } from "../iconsRedesSocias/index";

import "./Icons.css";

export const Icons = () => {

    return (
        <>
            <div className="Container loader">
                <IconsRedesSocias />
            </div>
            <IconsCursos />
        </>
    )
}