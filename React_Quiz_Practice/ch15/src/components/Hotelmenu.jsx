import Grid from '@mui/material/Grid'
import '../CSS/Hotelmenu.css'

function Hotelmenu() {
   return (
      <div className="header">
         <Grid container className="header_menu">
            <Grid minWidth={150} size={{ xs: 2, md: 3 }}>
               <img src="https://picsum.photos/150/50" alt="" />
            </Grid>
            <Grid size={{ xs: 4, md: 5 }}>
               <ul className="menu_list">
                  <li>CEO</li>
                  <li>Hotel</li>
                  <li>예약</li>
                  <li>위치</li>
               </ul>
            </Grid>
            <Grid size={{ xs: 6, md: 4 }}>
               <ul className="login_list">
                  <li>언어</li>
                  <li>로그인</li>
                  <li>고객센터</li>
               </ul>
            </Grid>
         </Grid>
      </div>
   )
}

export default Hotelmenu
