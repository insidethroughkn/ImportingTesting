import React from "react";
import * as StyleConstants from '@fluentui/azure-themes/lib/azure/Constants';
//import * as StyleConstants from '../Constants'
type CustomProps = {
    id: string,
    level: number
}

const Custom : React.FC<CustomProps> = (props) => {
    const v1 = StyleConstants.MinimumScreenSelector;
    console.log(v1);

    return <div>Custom Information</div>
}

export default Custom