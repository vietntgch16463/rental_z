import {
    IonContent, IonHeader, IonPage, IonTitle, IonToolbar, IonList, IonItem, IonButton
} from '@ionic/react';
import ReactAudioPlayer from 'react-audio-player';


const Notify: React.FC = () => {
    var apiRing: ReactAudioPlayer | null


    return (
        <IonPage>
            <IonHeader>
                <IonToolbar>
                    <IonTitle>Rental Z</IonTitle>
                </IonToolbar>
            </IonHeader>
            <IonContent>
                <IonList>
                    <IonItem>
                        <IonButton color="warning" onClick ={()=> alert("API Notification Here")}>API Notification</IonButton>
                        <ReactAudioPlayer
                            src="assets\apiRing.mp3"
                            ref={(element) => { apiRing = element }}
                        />
                        <IonButton color="primary" onClick={() => apiRing?.audioEl.current?.play()}>API Rings</IonButton>
                        <IonButton color="success" onClick={() => (navigator.vibrate(1000),alert("Api Vibartion"))}>API Vibration</IonButton>
                    </IonItem>
                </IonList>
            </IonContent>
        </IonPage>
    );
};

export default Notify;
