import {
    IonContent, IonHeader, IonPage, IonTitle, IonToolbar, IonGrid, IonRow, IonCol, IonSearchbar,
    IonList, IonItem
} from '@ionic/react';
import React, { useEffect, useState } from 'react';
import { getAllProperties } from '../databaseHandler';
import './List.css';
import { Properties } from '../model';

const Search: React.FC = () => {
    const [searchText, setSearchText] = useState('')
    const [listProperties, setProperties] = useState<Properties[]>([])

    useEffect(() => {
        fetchData()
    }, [])

    async function fetchData() {
        const result = await getAllProperties() as Properties[]

        setProperties(result)
    }

    const propSearch = listProperties.filter((property) => {
        return (
            property.name.match(searchText)
        );
    })

    console.log("propSearch", propSearch)

    console.log(listProperties)


    return (
        <IonPage>
            <IonHeader>
                <IonToolbar>
                    <IonTitle>Rental Z</IonTitle>
                </IonToolbar>
            </IonHeader>
            <IonContent>
                <IonSearchbar value={searchText} onIonChange={e => setSearchText(e.detail.value!)}></IonSearchbar>
                {searchText.length > 0 ?
                    <IonList class="main">
                        {propSearch.map((property) =>
                            <IonItem button key={property.id} routerLink={`/search/view/${property.id}`}>
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
                    : <IonList class="main">
                        {listProperties.map((property) =>
                            <IonItem button key={property.id} routerLink={`/search/view/${property.id}`}>
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
                    </IonList>}
            </IonContent>

        </IonPage>
    );
};

export default Search;
