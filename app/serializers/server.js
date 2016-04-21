import DS from 'ember-data';

export default DS.RESTSerializer.extend({
    normalizeResponse(store, primaryModelClass, payload, id, requestType) {
        var keys = Object.keys(payload);
        if (payload[keys[0]].constructor !== Object) {
            var new_data = {
                type: "result",
                id: 1,
                attributes: {
                    raw_json: JSON.stringify(payload),
                }
            };
            return {data:new_data};
        } else if (Array.isArray(payload)) {
            var wrap_data = {};
            wrap_data[primaryModelClass.modelName] = payload;
            payload = wrap_data;
        }

        return this._super(store, primaryModelClass, payload, id, requestType);
    },
    serializeIntoHash(hash, typeClass, snapshot, options) {
        var sub_hash = this.serialize(snapshot, options);
        Object.keys(sub_hash).forEach((key) => {
            console.log(key);
            hash[key] = sub_hash[key];
        });
        console.log(hash);
    },
});