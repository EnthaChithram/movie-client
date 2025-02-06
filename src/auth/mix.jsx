import Login from "./login"
import Signup from "./signup"

export const Mix = (() => {
    return (
        <div className="fixed flex justify-around " style={{}}>
            <div className="mr-50 ml-50" ><Signup /> </div>
            <div><Login /> </div>
        </div>
    )
})