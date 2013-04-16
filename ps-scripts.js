// Jim,
// You want to use listener code for File>Open as Smart Object to embed the original file as a Smart Object. Here's I'm placing a jpeg called "my.jpeg" from my desktop:

var idOpn = charIDToTypeID("Opn");
var desc1 = new ActionDescriptor();
var idnull = charIDToTypeID("null");
desc1.putPath(idnull, new File("/Users/jtranber/Desktop/my.jpg"));

var idAs = charIDToTypeID("As");
var desc2 = new ActionDescriptor();
var idEQlt = charIDToTypeID("EQlt");
desc2.putInteger(idEQlt, 12);

var idMttC = charIDToTypeID("MttC");
var idMttC = charIDToTypeID("MttC");
var idNone = charIDToTypeID("None");
desc2.putEnumerated(idMttC, idMttC, idNone);

var idJPEG = charIDToTypeID("JPEG");
desc1.putObject(idAs, idJPEG, desc2);

var idsmartObject = stringIDToTypeID("smartObject");
desc1.putBoolean(idsmartObject, true);
executeAction(idOpn, desc1, DialogModes.NO);

// To edit the contents of the Smart Object, use the command Layer>Smart Objects>Edit Contents via listener code:
var idplacedLayerEditContents = stringIDToTypeID("placedLayerEditContents");
var desc3 = new ActionDescriptor();
executeAction(idplacedLayerEditContents, desc3, DialogModes.NO);

// Hope that helps.
// You can also get help at: http://www.ps-scripts.com/bb/
