function beton() {

var sheet = SpreadsheetApp.getActiveSheet();
var lat = sheet.getRange(1,8,86).getValues()
var lon = sheet.getRange(1,9,86).getValues()
var toit = sheet.getRange(1,7,86).getValues()
var beton = DriveApp.getFolderById('1xIVqFj9_zynl3cSbPopbo6tf7HN2eNjI')
var tuiles = DriveApp.getFolderById('1guQROHgyns0HR4dvovdIVKki0Hg7KT4p')
var zinc = DriveApp.getFolderById('1z1J3KQi4-yXdRiKEXBYo0titst4tJORX')

for (var i = 0; i < 86; i = i + 1) {
  if (toit="BETON"){
  var map = Maps.newStaticMap()
  .setMapType(Maps.StaticMap.Type.SATELLITE)
  .setCenter(lat[i],lon[i])
  .setZoom(20)
  .getBlob()
  DriveApp.createFile(map).moveTo(beton).getAs('image/png')
  }

  if (toit="BETON - TUILES"){
  var map = Maps.newStaticMap()
  .setMapType(Maps.StaticMap.Type.SATELLITE)
  .setCenter(lat[i],lon[i])
  .setZoom(20)
  .getBlob()
  DriveApp.createFile(map).moveTo(tuiles).getAs('image/png')
  }

  if (toit="ZINC ALUMINIUM - AUTRES"){
  var map = Maps.newStaticMap()
  .setMapType(Maps.StaticMap.Type.SATELLITE)
  .setCenter(lat[i],lon[i])
  .setZoom(20)
  .getBlob()
  DriveApp.createFile(map).moveTo(zinc).getAs('image/png')
  }

}

}
