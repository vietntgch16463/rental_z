import React from 'react';
import {
  IonContent, IonHeader, IonPage, IonTitle, IonToolbar, IonInput, IonItem, IonLabel, IonList, IonSelect, IonSelectOption, IonDatetime, IonItemDivider, IonTextarea, IonButton,
} from '@ionic/react';
import * as yup from "yup";
import './Input.css';
import { Formik } from "formik";
import { useHistory } from 'react-router';
import { insertProperty } from '../databaseHandler';

const validationSchema = yup.object({
  name: yup
    .string()
    .nullable()
    .required("Name is required"),
  type: yup
    .string()
    .nullable()
    .required("Type is required"),
  bedrooms: yup
    .string()
    .nullable()
    .required("Bedrooms is required"),
  price: yup
    .number()
    .required("Price is required")
    .positive()
    .integer(),
  date: yup
    .string()
    .nullable()
    .required("Date is required"),
  furnishType: yup
    .string()
    .nullable()
    .required("Furnished type is required"),
  reporter: yup
    .string()
    .nullable()
    .required("Reporter is required"),

});

const Input: React.FC = () => {
  const history = useHistory();

  return (
    <IonPage>
      <IonHeader>
        <IonToolbar>
          <IonTitle>Input</IonTitle>
        </IonToolbar>
      </IonHeader>
      <Formik
        initialValues={{
          name: null,
          type: null,
          bedrooms: null,
          date: null,
          price: null,
          furnishType: null,
          reporter: null,
          note: null,
        }}
        validationSchema={validationSchema}
        onSubmit={values => {
          insertProperty(values)
          alert(JSON.stringify(values, null, 2));
          history.goBack();
        }}
      >
        {(formikProps) => (

          <IonContent>
            <form onSubmit={formikProps.handleSubmit}>
              <IonList>
                <IonItem class="main">
                  <IonLabel position="stacked">Name of property</IonLabel>
                  <IonInput type="text" name="name" value={formikProps.values.name} onIonChange={formikProps.handleChange}
                  ></IonInput>
                </IonItem>

                <p className="error">
                  {formikProps.touched.name && formikProps.errors.name}
                </p>
                <IonItem>
                  <IonLabel>Property Type</IonLabel>
                  <IonSelect value={formikProps.values.type} name="type" placeholder="Select Type" onIonChange={formikProps.handleChange}>
                    <IonSelectOption value="flat">Flat</IonSelectOption>
                    <IonSelectOption value="house">House</IonSelectOption>
                    <IonSelectOption value="bungalow">Bungalow</IonSelectOption>
                  </IonSelect>
                </IonItem>
                <p className="error">
                  {formikProps.touched.type && formikProps.errors.type}
                </p>
                <IonItem>
                  <IonLabel>Bedrooms</IonLabel>
                  <IonSelect value={formikProps.values.bedrooms} name="bedrooms" placeholder="Select Bedrooms" onIonChange={formikProps.handleChange}>
                    <IonSelectOption value="Studio">Studio</IonSelectOption>
                    <IonSelectOption value="One">One</IonSelectOption>
                    <IonSelectOption value="Two">Two</IonSelectOption>
                  </IonSelect>
                </IonItem>
                <p className="error">
                  {formikProps.touched.bedrooms && formikProps.errors.bedrooms}
                </p>
                <IonItem>
                  <IonLabel>Date and Time</IonLabel>
                  <IonDatetime value={formikProps.values.date} name="date" displayFormat="MMM DD, YYYY" placeholder="Select Date" onIonChange={formikProps.handleChange}></IonDatetime>
                </IonItem>
                <p className="error">
                  {formikProps.touched.date && formikProps.errors.date}
                </p>
                <IonItem>
                  <IonLabel position="stacked">Monthly Rent Price</IonLabel>
                  <IonInput value={formikProps.values.price} name="price" onIonChange={formikProps.handleChange}></IonInput>
                </IonItem>
                <p className="error">
                  {formikProps.touched.price && formikProps.errors.price}
                </p>
                <IonItem>
                  <IonLabel>Furniture type</IonLabel>
                  <IonSelect value={formikProps.values.furnishType} name="furnishType" placeholder="Select Type" onIonChange={formikProps.handleChange}>
                    <IonSelectOption value="furnished">Furnished</IonSelectOption>
                    <IonSelectOption value="part-Furnished">Part Furnished</IonSelectOption>
                    <IonSelectOption value="unfurnished">Unfurnished</IonSelectOption>
                  </IonSelect>
                </IonItem>
                <p className="error">
                  {formikProps.touched.furnishType && formikProps.errors.furnishType}
                </p> 

                <IonItem>
                  <IonLabel>Notes</IonLabel>
                  <IonTextarea rows={6} cols={20} name="note" placeholder="Enter any notes here..." value={formikProps.values.note} ></IonTextarea>
                </IonItem>
                <p className="error">
                  {formikProps.touched.note && formikProps.errors.note}
                </p>
                <IonItem>
                  <IonLabel position="stacked">Reporter</IonLabel>
                  <IonInput value={formikProps.values.reporter} name="reporter" onIonChange={formikProps.handleChange}></IonInput>
                </IonItem>
                <p className="error">
                  {formikProps.touched.reporter && formikProps.errors.reporter}
                </p>
              </IonList>
              <IonButton color="tertiary" expand="full" type="submit">Submit</IonButton>
              <IonButton color="tertiary" expand="full" onClick={formikProps.handleReset}>Reset</IonButton>
            </form>
          </IonContent>
        )}
      </Formik>
    </IonPage>
  );
};


export default Input;
