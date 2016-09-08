import 'ts-helpers';

import 'core-js/es6';
import 'core-js/es6/promise';
import 'core-js/es7/reflect';
import 'zone.js/dist/zone';

if ('production' === ENV) {
    // Production


} else {
    // Development

    Error['stackTraceLimit'] = Infinity;

    require('zone.js/dist/long-stack-trace-zone');

}