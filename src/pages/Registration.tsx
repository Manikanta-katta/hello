import { IonPage,IonContent,IonInput,IonGrid,IonRow,IonButton,IonIcon, IonToolbar,IonTitle, IonHeader} from "@ionic/react";
import React from "react";
import{calendarNumber} from 'ionicons/icons'

const Registrtion: React.FC = () =>{
    return(
        <IonPage>

            <IonContent>
                <IonHeader>
                <IonToolbar><IonTitle>Registration Page</IonTitle></IonToolbar></IonHeader>
            <IonGrid>
                <IonRow>
                    <IonInput placeholder="FirstName"></IonInput>
                    <IonInput placeholder="LastName"></IonInput>
                </IonRow>
                <IonRow> <IonInput placeholder="Mobile Number"></IonInput></IonRow>
                <IonRow> <IonInput placeholder="Email Id"></IonInput></IonRow>
                <IonRow> <IonInput placeholder="Dateofbirth"><IonIcon  icon={calendarNumber}></IonIcon></IonInput></IonRow>
                <IonRow> <IonInput></IonInput></IonRow>
                <IonRow><IonButton href="/screen">Register</IonButton></IonRow>

            </IonGrid>
            </IonContent>
        </IonPage>
    )
}
export default Registrtion;