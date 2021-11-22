import {
    IonAlert,
    IonBackButton,
    IonButton,
    IonButtons,
    IonCard,
    IonCardContent,
    IonCardHeader,
    IonCardSubtitle,
    IonCardTitle,
    IonContent,
    IonHeader,
    IonIcon,
    IonItem,
    IonLabel,
    IonList,
    IonPage,
    IonTitle,
    IonToast,
    IonToolbar
} from '@ionic/react';

import React, { useEffect, useState } from 'react';
import { useHistory, useParams } from 'react-router';
import { Properties } from '../model';
import { trash as trashIcon, createOutline as editIcon } from 'ionicons/icons';
import { getProperty, deleteProperty } from '../databaseHandler';

interface RouteParams {
    idRoute: string;
}

const formatDate = (isoStringDate: any) => {
    return new Date(isoStringDate).toLocaleDateString('en-US', {
        day: 'numeric', month: 'short', year: 'numeric'
    });
};

const Detail: React.FC = () => {
    const history = useHistory();
    const { idRoute } = useParams<RouteParams>(); 
    const [property, setProperty] = useState<Properties>()
    const [showAlertDelete, setShowAlertDelete] = useState(false); 
    const [showAlertEdit, setShowAlertEdit] = useState(false); 
    const [toastEditLater, setToastEditLater] = useState(false); 


    useEffect(() => {
        fetchData()
    }, []);


    async function fetchData() {
        const result=  await getProperty(parseInt(idRoute))
        setProperty(result)
      }

      console.log("Property",property)
    return (
        <IonPage>
            <IonHeader>
                <IonToolbar>

                    <IonButtons slot="start">
                        <IonBackButton />
                    </IonButtons>
                    <IonTitle>{property?.name}</IonTitle>
                    <IonTitle></IonTitle>
                    <IonButtons slot="end">
                        <IonButton onClick={() => setShowAlertEdit(true)}>
                            <IonIcon icon={editIcon} slot="icon-only" />
                        </IonButton>
                        <IonButton onClick={() => setShowAlertDelete(true)}>
                            <IonIcon icon={trashIcon} slot="icon-only" />
                        </IonButton>
                    </IonButtons>
                </IonToolbar>
                <IonAlert
                    isOpen={showAlertDelete}
                    onDidDismiss={() => setShowAlertDelete(false)}
                    header={'Confirm Delete ?'}
                    message={'Do you really want to <strong>Delete</strong> this item ?'}
                    buttons={[
                        {
                            text: 'Cancel',
                            role: 'cancel',
                            cssClass: 'secondary',
                            handler: () => {
                            }
                        }, {
                            text: 'Delete',
                            handler: () => {
                                deleteProperty(parseInt(idRoute))
                                history.push('/list')
                            }
                        }
                    ]}
                />
                <IonAlert
                    isOpen={showAlertEdit}
                    onDidDismiss={() => setShowAlertEdit(false)}
                    header={'Confirm Edit ?'}
                    message={'Do you really want to <strong>Edit</strong> this item ?'}
                    buttons={[
                        {
                            text: 'Cancel',
                            role: 'cancel',
                            cssClass: 'secondary',
                            handler: () => {
                            }
                        }, {
                            text: 'Edit',
                            handler: () => {
                            }
                        }
                    ]}
                />
            </IonHeader>
            <IonContent className="ion-padding">
                <IonCard>
                    <IonCardHeader>
                        <IonCardTitle><h1>{property?.name}</h1></IonCardTitle>
                    </IonCardHeader>

                    <IonCardContent>
                        <IonList>
                            <IonItem>
                                <IonLabel>Type:</IonLabel>
                                <IonLabel slot="end">{property?.type}</IonLabel>
                            </IonItem>
                            <IonItem>
                                <IonLabel>Bedrooms:</IonLabel>
                                <IonLabel slot="end">{property?.bedrooms}</IonLabel>
                            </IonItem>
                            <IonItem>
                                <IonLabel>Date:</IonLabel>
                                <IonLabel slot="end">{formatDate(property?.date)}</IonLabel>
                            </IonItem>
                            <IonItem>
                                <IonLabel>Monthly Rent Price:</IonLabel>
                                <IonLabel slot="end">{property?.price}</IonLabel>
                            </IonItem>
                            <IonItem>
                                <IonLabel>Furniture types:</IonLabel>
                                <IonLabel slot="end">{property?.furnishType}</IonLabel>
                            </IonItem>

                            {property?.note != null ?
                                <IonItem>
                                    <IonLabel>Note:</IonLabel>
                                    <IonLabel slot="end">{property?.note}</IonLabel>
                                </IonItem>
                                : null} 

                            <IonItem>
                                <IonLabel>Reporter:</IonLabel>
                                <IonLabel slot="end">{property?.reporter}</IonLabel>
                            </IonItem>
                        </IonList>
                    </IonCardContent>
                </IonCard>
            </IonContent>
        </IonPage>
    );
};

export default Detail;