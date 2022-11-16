(function dsbuilder(attr) {

    const urlBuilder = "jdbc:tiledb-cloud:" + attr["v-namespace"];

    return [urlBuilder];
})