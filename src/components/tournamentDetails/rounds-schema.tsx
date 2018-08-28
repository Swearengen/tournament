import * as React from 'react'
import { observer } from "mobx-react"
import cc from 'classcat'
import { Dropdown, DropdownToggle, DropdownMenu, DropdownItem } from 'reactstrap'
import * as _ from 'lodash'

import { RoundSchemaItem } from '../../models/types'

import './rounds-schema.css'

interface Props {
    rounds: RoundSchemaItem[];
    setSelectedRound: (roundNum: number) => void
}

interface State {
    dropdownOpen: boolean
}

class RoundsSchema extends React.Component<Props, State> {    

    public state: State = {
        dropdownOpen: false
    };

    public toggle = () => {
        this.setState(prevState => ({
            dropdownOpen: !prevState.dropdownOpen
        }));
    }

    public render() {
        return (
            <div className="rounds-schema">
                {this.props.rounds.map((item: RoundSchemaItem) =>
                    <div className="rounds-schema__item-cont" key={item.roundName}>            
                        <h3 className='rounds-schema__round-title'>{item.roundName}</h3>
                        <ul 
                            className={cc([
                                "rounds-schema__item",
                                {selected: item.selected}
                            ])}
                            onClick={() => this.onRoundClick(item.roundNumber, item.selected)}
                        >                        
                            {this.renderMatchLines(item.matchesNumber).map((i: {element:string, key: number}) => {
                                if (i.key >= 10) {
                                    return false
                                } 
                                return React.createElement(i.element, {key: i.key})                                                        
                            })}                        
                        </ul>
                    </div>                
                )} 
                <Dropdown isOpen={this.state.dropdownOpen} toggle={this.toggle} className="rounds-schema__dropdown">
                    <DropdownToggle caret={true} color='light'>
                        {this.getSelectedRoundName() ? this.getSelectedRoundName() : 'Select round'}
                    </DropdownToggle>
                    <DropdownMenu>
                        {this.props.rounds.map((item: RoundSchemaItem) =>
                            <DropdownItem 
                                active={item.selected}
                                key={item.roundName} 
                                onClick={() => this.onRoundClick(item.roundNumber, item.selected)}
                            >
                                {item.roundName}
                            </DropdownItem>                        
                        )}                        
                    </DropdownMenu>
                </Dropdown>                   
            </div>
        )
    }

    private getSelectedRoundName = () => {
        if (!_.isEmpty(this.props.rounds)) {
            const selectedRound = _.find(this.props.rounds, 'selected')
            console.log(selectedRound, this.props.rounds);
            return selectedRound ? selectedRound.roundName : undefined
            
            // return 'fdsds'
        }
        
        return undefined
    }

    private renderMatchLines = (matchesNum: number) => {
        const array = [] as Array<{element:string, key: number}>;
        for (let index = 0; index < matchesNum; index++) {                        
            array.push({element: 'li', key: index});
        }

        return array;
    }

    private onRoundClick = (roundNum: number, selected: boolean) => {
        if (!selected) {
            this.props.setSelectedRound(roundNum)
        }
    }
}

export default observer(RoundsSchema)