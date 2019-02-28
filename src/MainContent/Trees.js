import React from 'react'
import Card from './Card'
import './Trees.css'


const Trees = (props) => {
    
    console.log(props.treesData)

    const cards = props.treesData.map((idea) => {
        return (
            <Card
                key={idea.ideaID}
                text={idea.ideaText}
                date={idea.dateCreated}
                isConundrum={idea.isConundrum}
                location={idea.fromCountry}/>
        )
    })

    const treeParent = props.treesData.find((idea) => {
        return idea.parentID === null
    })

    const getChildren = (parent) => {

        const text = {name: parent.ideaText}
        const children = props.treesData.filter((child) => child.parentID === parent.ideaID)
        
        if (children.length < 1){
            return text
        }
        else{
            return {
                text,
                children: children.map((child) => getChildren(child))
            }
        }
    }

    const nodeStructure = getChildren(treeParent)

    console.log(nodeStructure)

    return(
        <div>
            <div className="tree">
                {cards}
            </div>
        </div>
    )
}

export default Trees