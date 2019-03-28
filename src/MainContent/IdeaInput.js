import React, {useState} from 'react'

const IdeaInput = (props) => {

    const [type, setType] = useState("idea")
    const [inputText, setInputText] = useState("")

    const handleClick = (targetType) => {
        if (targetType !== type){
            setType(targetType)
        }
    }

    const handleChange = (e) => {
        setInputText(e.target.value)
    }

    const handleSubmit = (e) => {

        const sendIdeaData = (userCountry) => {

            const currentDate = new Date()

            const ideaDTO = {
                parentID: (props.cardID !== undefined ? props.cardID : null),
                isConundrum: type !== "idea",
                ideaText: inputText,
                dateCreated: currentDate.toISOString(),
                fromCountry: userCountry,
                colour: null
            }

            const ideaJson = JSON.stringify(ideaDTO);

            console.log(ideaJson);

            fetch(`${props.apiUri}/api/ideas`,{
                method: "POST",
                mode: "cors",
                body: ideaJson,
                headers: {
                    "Content-Type": "application/json"
                }
            }).then((res) => {
                console.log(res)
                props.getTree(new Date())
            })
        }
        
        const ipStackAccessKey = '5f599eda3eaa8a332e1a1aa5421181ff'

        if (inputText !== ""){
            fetch('https://api.ipify.org?format=json')
            .then(res => res.json())
            .then(userIP => {
                return fetch(`http://api.ipstack.com/${userIP.ip}?access_key=${ipStackAccessKey}`)
                    .then(res => res.json())
                    .then(ipData => sendIdeaData(ipData.country_name))
            })
        }

        e.preventDefault();
    }

    return (
        <div className={"inputArea " + (props.startCard ? "inputCard " + type : "treeInput")}>
            <h5
                className={"cardType idea" + (type !== "idea" ? " inactive" : "")}
                onClick={() => handleClick("idea")}>
                idea</h5>
            <form onSubmit={handleSubmit}>
                <input
                    placeholder={type === "idea" ?
                        "Your one of a kind idea..." : 
                        "A befuddling conundrum..."}
                    onChange={handleChange}></input>
                <input type="submit" value="Share"></input>
            </form>
            <h5
                className={"cardType conundrum" + (type !== "conundrum" ? " inactive" : "")}
                onClick={() => handleClick("conundrum")}>
                conundrum</h5>
        </div>
    )
}

export default IdeaInput