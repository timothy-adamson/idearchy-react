import React from 'react'
import Card from './Card'
import StartTree from './StartTree'
import './Tree.css'
import Tree from 'react-d3-tree'

const IdeaTree = (props) => {

    const getChildren = (parent) => {

        const name = parent.ideaText
        const attributes = {
            text: parent.ideaText,
            key: parent.ideaID,
            date: parent.dateCreated,
            isConundrum: parent.isConundrum,
            location: parent.fromCountry,
            score: parent.score,
            getTree: props.getTree,
            archiveTree: props.archiveTree,
            apiUri: props.apiUri
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

    const treeParent = props.treesData !== undefined && props.treesData.find((idea) => {
        return idea.parentID === null
    })

    const treeConfig = treeParent ? getChildren(treeParent) : null

    const viewportSizes = {
        vw: window.screen.width / 100,
        vh: window.screen.height / 100,
    }

    return(
        <div className="tree">
            {treeConfig !== null ?
                <Tree
                    data={treeConfig}
                    orientation="vertical"
                    zoomable={true}
                    scaleExtent={{min: 1, max: 1}}
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
                        render: <Card/>,
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
                props.archiveTree ?
                    <div className="startTree">
                        <h1>
                            no tree was made on this day :(
                        </h1>
                    </div> :
                    <StartTree getTree={props.getTree}/>
            }
        </div>
    )
}

export default IdeaTree