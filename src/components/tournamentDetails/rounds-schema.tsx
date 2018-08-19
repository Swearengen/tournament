import * as React from 'react';
import { observer } from "mobx-react"
import cc from "classcat"

import { RoundSchemaItem } from '../../models/types'

import './rounds-schema.css'

interface Props {
    rounds: RoundSchemaItem[];
}

export const RoundsSchema: React.SFC<Props> = (props) => {    
    const renderMatchLines = (matchesNum: number) => {
        const array = [] as Array<{element:string, key: string}>;
        for (let index = 0; index < matchesNum; index++) {                        
            array.push({element: 'li', key: String(index)});
        }

        return array;
    }
    
    return (
        <div className="rounds-schema">
            {props.rounds.map((item: RoundSchemaItem) =>
                <div className="rounds-schema__item-cont" key={item.roundName}>            
                    <h3 className='rounds-schema__round-title'>{item.roundName}</h3>
                    <ul className={cc([
                        "rounds-schema__item",
                        {selected: item.selected}
                    ])}>                        
                        {renderMatchLines(item.matchesNumber).map((i: {element:string, key: string}) => 
                            React.createElement(i.element, {key: i.key})
                        )}                        
                    </ul>
                </div>                
            )}                    
        </div>
    );
}

export default observer(RoundsSchema)