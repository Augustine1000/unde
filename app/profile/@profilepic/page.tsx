import photo from "./PHOTO.jpg";
export default function profilepic(){
    return <div style={{
        display: "flex",
        textAlign:"center",
        alignItems:"center",
        padding: "100px",
        margin:"15px",
    }}><img src="photo"></img></div>;
}