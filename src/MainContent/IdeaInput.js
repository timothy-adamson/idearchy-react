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

    const handleSubmit = async(e) => {

        const sendIdeaData = (userCountry) => {

            const currentDate = new Date()

            const ideaDTO = {
                parentID: null,
                isConundrum: type !== "idea",
                ideaText: inputText,
                dateCreated: currentDate.toISOString(),
                fromCountry: userCountry,
                colour: null
            }

            const ideaJson = JSON.stringify(ideaDTO);

            console.log(ideaJson);

            fetch('https://localhost:5001/api/ideas',{
                method: "POST",
                mode: "cors",
                body: ideaJson,
                headers: {
                    "Content-Type": "application/json"
                }
            }).then((res) => console.log(res))
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
        <div className={"inputCard " + type}>
            <div className="responseTarget">
                <h5>
                    Formulate your response to:
                </h5>
                <p>wiggy wiggy woo</p>
            </div>
            <div className="inputArea">
                <h5
                    className={"cardType idea" + (type !== "idea" ? " inactive" : "")}
                    onClick={() => handleClick("idea")}>
                    idea</h5>
                <form onSubmit={handleSubmit} className="startInput">
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
        </div>
    )
}

export default IdeaInput