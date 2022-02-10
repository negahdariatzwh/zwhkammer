import React, { useState, children } from "react";
import { toast } from "react-toastify";
import DynamicService from "../../service/DynamicService";

function DynamicFormAddObject({
  apiName,
  apiController,
  formInputs=[], //array of strings for each input name in form
  successMessage = "added",
}) {
  

  const handleAdd = async (e) => {
    e.preventDefault();
    const formPayload = new FormData();
    formInputs.map((input) => {
      return formPayload.append(input, formInputs.find(input));
    });

    DynamicService.add(apiName, apiController, formPayload)
      .then((response) => {
        toast.success(successMessage);
      })
      .catch((error) => {
        toast.error(error);
      });

    // let data=await InsTypeService.addInsTypes(insTypesPayload)
  };

  return <form>{children}</form>;
}

export default DynamicFormAddObject;
