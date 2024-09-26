export default  function profileworkLayout({
    children,
    profilepic,
    houseaddress,
}:{
    children: React.ReactNode;
    profilepic: React.ReactNode;
    houseaddress: React.ReactNode;
}) {
    return (
        <>
          <div>{children}</div>
          <div style={{ display:"flex"}}>
            <div>{profilepic}</div>
            <div>{houseaddress}</div>
          </div>
          

        </>
    )
}