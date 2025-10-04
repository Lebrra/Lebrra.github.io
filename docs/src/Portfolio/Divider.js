import '../App.css';

function Divider() {
    const dividerStyle = {
      marginTop: "4px", 
      marginBottom: "5px", 
      borderBottom: '5px dotted #0c0c0cff', 
      width: '60%',
      justifySelf: "center"
    };
    
  return <>
        <div className="text-block-spacer"/>
        <div style={dividerStyle}/>
        <div className="text-block-spacer"/>
    </>
}

export default Divider;
