import { IonHeader, IonPage, IonToolbar, IonTitle, IonContent, IonGrid, IonRow, IonCol } from "@ionic/react";
import React from "react";


const AllActivities:React.FC = () => {
    return (
        <IonPage>
            <IonHeader>
                <IonToolbar>
                    <IonTitle>Todas las actividades</IonTitle>
                </IonToolbar>
            </IonHeader>
            <IonContent>
                <IonGrid>
                    <IonRow>
                        <IonCol>
                            <h1></h1>
                        </IonCol>
                    </IonRow>
                </IonGrid>
            </IonContent>
        </IonPage>
    );
};
