import { useState } from "react";

function Style(){
       const [display, setDisplay] = useState(true)
       const [card, setCard] = useState(
        {color:'black', textAlign:'center', background: '#ccc', borderRadius:'15px', padding:'20px', marginTop: '20px'}
       )
              
       const themeChangeToBlack = (bgColor, textColor) => {
        setCard({...card, background: bgColor, color:textColor})
       }
       const themeChangeToWhite = (bgColor, textColor) => {
        setCard({...card, background: bgColor, color:textColor})
       }

    return(
        <>
        <div>

            <div style={{display:'flex', margin:'10px', gap:'20px', justifyContent: 'center'}}>
                <button onClick={()=>themeChangeToBlack('black', 'white')} style={{padding:'10px 20px', background:'white', borderRadius: '8px', cursor: 'pointer', fontWeight: 'bold'}}>Dark Theme</button>
                <button onClick={()=>themeChangeToWhite('#ccc', 'black')} style={{padding:'10px 20px', background:'white', borderRadius: '8px', cursor: 'pointer', fontWeight: 'bold'}}>White Theme</button>
                <button onClick={()=>setDisplay(!display)} style={{padding:'10px 20px', background:'white', borderRadius: '8px', cursor: 'pointer', fontWeight: 'bold'}}>Change Grid</button>
            </div>


            <div style={{display: display? 'flex':'block', flexWrap:'wrap', justifyContent:'center', padding:'50px', gap:'30px'}}>

                <div style={card}>
                    <img style={{position: 'relative', width: '200px', height:'120px'}} src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRNMsjCLc70yX1g_GkkQx8R2y3V-SvF2xC0j3Ayv-pb24XCbQEn83Qrd9c0KykbATlY9JE&usqp=CAU" alt="" />
                    <h1>User</h1>
                    <p>New Profile</p>
                </div>
                <div style={card}>
                    <img style={{position: 'relative', width: '200px', height:'120px'}} src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRNMsjCLc70yX1g_GkkQx8R2y3V-SvF2xC0j3Ayv-pb24XCbQEn83Qrd9c0KykbATlY9JE&usqp=CAU" alt="" />
                    <h1>User</h1>
                    <p>New Profile</p>
                </div>
                <div style={card}>
                    <img style={{position: 'relative', width: '200px', height:'120px'}} src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRNMsjCLc70yX1g_GkkQx8R2y3V-SvF2xC0j3Ayv-pb24XCbQEn83Qrd9c0KykbATlY9JE&usqp=CAU" alt="" />
                    <h1>User</h1>
                    <p>New Profile</p>
                </div>
                <div style={card}>
                    <img style={{position: 'relative', width: '200px', height:'120px'}} src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRNMsjCLc70yX1g_GkkQx8R2y3V-SvF2xC0j3Ayv-pb24XCbQEn83Qrd9c0KykbATlY9JE&usqp=CAU" alt="" />
                    <h1>User</h1>
                    <p>New Profile</p>
                </div>
                <div style={card}>
                    <img style={{position: 'relative', width: '200px', height:'120px'}} src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRNMsjCLc70yX1g_GkkQx8R2y3V-SvF2xC0j3Ayv-pb24XCbQEn83Qrd9c0KykbATlY9JE&usqp=CAU" alt="" />
                    <h1>User</h1>
                    <p>New Profile</p>
                </div>
                <div style={card}>
                    <img style={{position: 'relative', width: '200px', height:'120px'}} src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRNMsjCLc70yX1g_GkkQx8R2y3V-SvF2xC0j3Ayv-pb24XCbQEn83Qrd9c0KykbATlY9JE&usqp=CAU" alt="" />
                    <h1>User</h1>
                    <p>New Profile</p>
                </div>
                <div style={card}>
                    <img style={{position: 'relative', width: '200px', height:'120px'}} src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRNMsjCLc70yX1g_GkkQx8R2y3V-SvF2xC0j3Ayv-pb24XCbQEn83Qrd9c0KykbATlY9JE&usqp=CAU" alt="" />
                    <h1>User</h1>
                    <p>New Profile</p>
                </div>
                <div style={card}>
                    <img style={{position: 'relative', width: '200px', height:'120px'}} src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRNMsjCLc70yX1g_GkkQx8R2y3V-SvF2xC0j3Ayv-pb24XCbQEn83Qrd9c0KykbATlY9JE&usqp=CAU" alt="" />
                    <h1>User</h1>
                    <p>New Profile</p>
                </div>
                <div style={card}>
                    <img style={{position: 'relative', width: '200px', height:'120px'}} src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRNMsjCLc70yX1g_GkkQx8R2y3V-SvF2xC0j3Ayv-pb24XCbQEn83Qrd9c0KykbATlY9JE&usqp=CAU" alt="" />
                    <h1>User</h1>
                    <p>New Profile</p>
                </div>
                <div style={card}>
                    <img style={{position: 'relative', width: '200px', height:'120px'}} src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRNMsjCLc70yX1g_GkkQx8R2y3V-SvF2xC0j3Ayv-pb24XCbQEn83Qrd9c0KykbATlY9JE&usqp=CAU" alt="" />
                    <h1>User</h1>
                    <p>New Profile</p>
                </div>
            </div>

        </div>
        </>
    )
}

export default Style;