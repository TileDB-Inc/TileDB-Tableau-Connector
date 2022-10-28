(function propertiesbuilder(attr) {
    "use strict";

    const props = {};

    props["username"] = attr[connectionHelper.attributeUsername];
    props["password"] = attr[connectionHelper.attributePassword];

    return props;
})
