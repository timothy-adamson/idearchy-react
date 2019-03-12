import React, {useState} from 'react'
import Card from './Card'
import StartTree from './StartTree'
import './Trees.css'
import Tree from 'react-d3-tree'


const Trees = (props) => {

    const [treeHeight,setTreeHeight] = useState(0)

    const addHeight = (height) => {
        setTreeHeight(treeHeight + height)
        console.log("adding height")
    }

    const treeParent = props.treesData.find((idea) => {
        return idea.parentID === null
    })

    const getChildren = (parent) => {

        const name = parent.ideaText
        const attributes = {
            text: parent.ideaText,
            key: parent.ideaID,
            date: parent.dateCreated,
            isConundrum: parent.isConundrum,
            location: parent.fromCountry,
            addHeight: addHeight
        }
        const children = props.treesData.filter((child) => child.parentID === parent.ideaID)
        
        if (children.length < 1 || children == undefined){
            return {name, attributes}
        }
        else{
            return {
                name,
                attributes,
                children: children.map((child) => getChildren(child))
            }
        }
    }
    
    const treeConfig = treeParent !== undefined ? getChildren(treeParent) : null

    const viewportSizes = {
        vw: window.screen.width / 100,
        vh: window.screen.height / 100,
    }

    return(
        <div className="tree" style={{height: "200vh"}}>
            <StartTree />
            {treeConfig !== null ?
                <Tree
                    data={treeConfig}
                    orientation="vertical"
                    zoomable={false}
                    collapsible={false}
                    translate={{
                        x: (viewportSizes.vw * 48),
                        y: (viewportSizes.vh * 10)
                    }}
                    nodeSize={{
                        x: viewportSizes.vw * 30,
                        y: viewportSizes.vh * 20
                    }}
                    textLayout={{
                        textAnchor: "middle",
                        x: 30,
                        y: 30,
                        transform: undefined
                    }}
                    allowForeignObjects
                    nodeLabelComponent={{
                        render: <Card />,
                        foreignObjectWrapper: {
                            x: -viewportSizes.vw * 15,
                            y: -viewportSizes.vh * 5
                        }
                    }}
                    styles={{
                        links:{
                            stroke: 'whitesmoke'
                        }
                    }}
                    /> :
                <StartTree />
            }
        </div>
    )
}

export default Trees