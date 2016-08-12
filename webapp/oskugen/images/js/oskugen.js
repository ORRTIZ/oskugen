function retrieveSkuInfo(){
    areaId="resultDetails";
    target="productValidation";
    targetParams = "";
    productId = "";
    waitSpinnerShow();
    if(document.Test.productId.value){
        productId = document.Test.productId.value;
        targetParams = targetParams + '&productId=' + productId;
    }
    ajaxUpdateArea(areaId, 'productResult', targetParams);
    waitSpinnerHide();
}
