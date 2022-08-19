// import { IonContent,  IonPage, IonTitle,IonCard,IonCardHeader,IonInput,IonText,IonLabel,IonButton, IonGrid,IonRow,IonCol, IonImg } from '@ionic/react';
// import { useState } from 'react';

// import './Home.css';





// const Home: React.FC = ({history}:any) => {
//   const goTo =(path:String)=>{
//     if(validate()){
//       history.push(path);
//     }else
//     {
//       console.log("invalid input")
//     }
//   }

//   let usname='manikanta';
//   let upswd='mani123';

//  const [Username,setusername] = useState('');
//  const [Userpassword,setuserpassword] = useState('');
   
//    const validate = ()=>{
//      if(usname===Username&&upswd===Userpassword){
//         console.log(true)
//         return true;
//      }
//      else{
//        console.log(false)
//        return false;
//      }
//    }
  
//   return (
//     <IonPage  >
      
//     <IonContent class='content' >

//      <IonCard id='ka' >
//      <IonGrid>
      
//       <IonCardHeader>
//       <IonRow>
//          <IonTitle id='k'>
//         <h1> Administrator Login</h1></IonTitle></IonRow>
//         <IonRow></IonRow>
        
//         </IonCardHeader>
//         <IonRow >
//         <IonLabel id='ma'>Please enter your admin credentials to gain access</IonLabel></IonRow>
//         <IonRow>
//          <IonInput id='input1'  placeholder='Username or email address' 
//          onIonChange={(e:any)=>setusername(e.target.value)}  > 
//          </IonInput></IonRow>
//          <IonRow><IonCol>
//          <IonInput id='input2'  placeholder='Password' onIonChange={(e:any)=>setuserpassword(e.target.value)}  >
         
    
//          </IonInput></IonCol></IonRow>
//          <IonRow><IonCol >
//          <IonButton  shape='round'  onClick={e => goTo('/Screen')} >Login</IonButton></IonCol></IonRow>
//          <IonRow> <p>
//         <IonText><a href='/Screen'>Forgot Password?</a></IonText>
//          </p></IonRow>
//          <IonRow> <p id=''>
//            <IonLabel ><a href='/Registration'>New to idigo? Register here</a></IonLabel>
//          </p>
//          </IonRow>
//          </IonGrid>
//        </IonCard>
    
     
//     </IonContent>
    
 
//   </IonPage>
//   );


// };
// export default Home;

import React from 'react';
import { IonList, IonItem, IonThumbnail, IonImg, IonLabel, IonContent } from '@ionic/react';

type Item = {
  src: string;
  text: string;
};
const items: Item[] = [{ src: 'http://anjaniputraestates.com/mapping/', text: 'a picture of a cat' }];

 const Home: React.FC = () => (
  <IonContent>
    <IonList>
      {items.map((image, i) => (
        <IonItem key={i}>
          <IonThumbnail slot="start">
            <IonImg src={image.src} />
          </IonThumbnail>
          <IonLabel>{image.text}</IonLabel>
        </IonItem>
      ))}
    </IonList>
  </IonContent>
);
export default Home;