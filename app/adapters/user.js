import DS from 'ember-data';

export default DS.RESTAdapter.extend({
    namespace: 'api',
    buildURL(modelName, id, snapshot, requestType, query) {
        var url = this._super(modelName, id, snapshot, requestType, query);
        if (url.substr(url.length -1) !== '/') {
            url += '/';
        }

        return url;
    },
    sortQueryParams(obj) {
        var keys = Object.keys(obj);
        var len = keys.length;
        if (len === 0) {
            return obj;
        } else if (len === 1 && obj[keys[0]].constructor === Object) {
            obj = obj[keys[0]];
            keys = Object.keys(obj);
        }

        var newQueryParams = {};
        var sortedKeys = keys.sort();

        for (var i = 0; i < len; i++) {
            newQueryParams[sortedKeys[i]] = obj[sortedKeys[i]];
        }
        return newQueryParams;
    },
    urlForQueryRecord(query, modelName) {
        var url = this._buildURL(modelName);
        var keys = Object.keys(query);
        if (keys.length === 1 && query[keys[0]].constructor === Object) {
            url += '/' + keys[0];
        }
        return url;
    },
});
