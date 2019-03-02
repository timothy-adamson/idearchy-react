import React, {useState} from 'react'

const StartTree = () => {

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
        if (inputText !== ""){

        }
        e.preventDefault();
    }

    return (
        <div className="startTree">
            <h1>today's tree hasn't been started yet</h1>
            <h2>spark it here</h2>
            <div className={"startCard " + type}>
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

export default StartTree