function retrieveSkuInfo(){
    areaId="resultDetails";
    target="productValidation";
    targetParams = "";
    productId = "";
    
    if(document.Test.productId.value){
        productId = document.Test.productId.value;
        alert( productId );
        targetParams = targetParams + '&productId=' + productId;
    }
    ajaxUpdateArea(areaId, 'productResult', targetParams);
    waitSpinnerShow();
    jQuery.ajax({
        url: target,
        data: { productId : productId },
        async: true,
        type: "POST",
        success: function(json){
            postcodeData = json._EVENT_MESSAGE_;
            var data = JSON.parse(postcodeData)
            jQuery('#PostCodeResult_postCode').val(data.postcode);
            jQuery('#PostCodeResult_street').val(data.street);
            jQuery('#PostCodeResult_houseNumber').val(data.houseNumber);
            jQuery('#PostCodeResult_houseNumberAddition').val(data.houseNumberAddition);
            jQuery('#PostCodeResult_city').val(data.city);
            jQuery('#PostCodeResult_municipality').val(data.municipality);
            jQuery('#PostCodeResult_province').val(data.province);
            jQuery('#PostCodeResult_rdX').val(data.rdX);
            jQuery('#PostCodeResult_rdY').val(data.rdY);
            jQuery('#PostCodeResult_latitude').val(data.latitude);
            jQuery('#PostCodeResult_longitude').val(data.longitude);
            jQuery('#PostCodeResult_bagNumberDesignationId').val(data.bagNumberDesignationId);
            jQuery('#PostCodeResult_bagAddressableObjectId').val(data.bagAddressableObjectId);
            jQuery('#PostCodeResult_addressType').val(data.addressType);
            jQuery('#PostCodeResult_surfaceArea').val(data.surfaceArea);
            jQuery('#PostCodeResult_purposes').val(data.purposes);
            jQuery('#PostCodeResult_houseNumberAdditions').val(data.houseNumberAdditions);
        }
    });
    waitSpinnerHide();
}
