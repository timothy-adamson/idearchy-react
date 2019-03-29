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

    const aspectRatio = window.screen.height / window.screen.width

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
                        x: (viewportSizes.vw * 50),
                        y: (viewportSizes.vh * 20)
                    }}
                    nodeSize={{
                        x: 500,
                        y: 250
                    }}
                    textLayout={{
                        textAnchor: "middle",
                        x: 0,
                        y: 0,
                        transform: undefined
                    }}
                    allowForeignObjects
                    nodeLabelComponent={{
                        render: <Card/>,
                        foreignObjectWrapper: {
                            x: -250,
                            y: -100
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
                            no tree was made this week :(
                        </h1>
                    </div> :
                    <StartTree getTree={props.getTree} apiUri={props.apiUri}/>
            }
        </div>
    )
}

export default IdeaTree