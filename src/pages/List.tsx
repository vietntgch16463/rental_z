import {
  IonContent, IonHeader, IonPage, IonTitle, IonToolbar, IonGrid, IonRow, IonCol, IonSearchbar,
  IonList, IonItem
} from '@ionic/react';
import React, { useEffect, useState } from 'react';
import { getAllProperties } from '../databaseHandler';
import './List.css';
import { Properties } from '../model';

const List: React.FC = () => {
  const [listProperties, setProperties] = useState<Properties[]>([])

  useEffect(()=>{
    fetchData()
  },[])
  
  async function fetchData() {
    const result=  await getAllProperties() as Properties []
    setProperties(result)
  }

  console.log(listProperties)




  return (
    <IonPage>
      <IonHeader>
        <IonToolbar>
          <IonTitle>Rental Z</IonTitle>
        </IonToolbar>
      </IonHeader>
      <IonContent>
        {listProperties.length > 0 ?
          <IonList class="main">
            {listProperties.map((property) =>
              <IonItem button key={property.id} routerLink={`/list/view/${property.id}`}>
                <IonGrid>
                  <IonRow>
                    <IonCol size="8">
                      <h1>{property.name}</h1>
                      <h5>{property?.type}</h5>
                      <p>{property?.price}$/monthly</p>
                    </IonCol>
                  </IonRow>
                </IonGrid>
              </IonItem>
            )}
          </IonList>
          : <h3>No Properties found to show</h3>}
      </IonContent>
    </IonPage>
  );
};

export default List;
