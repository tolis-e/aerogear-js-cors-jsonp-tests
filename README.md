## aerogear-js-cors-jsonp-tests [![Build Status](https://travis-ci.org/tolis-e/aerogear-js-cors-jsonp-tests.png?branch=master)](https://travis-ci.org/tolis-e/aerogear-js-cors-jsonp-tests)
This project contains CORS and JSOP [QUnit](http://qunitjs.com/) tests for the [Aerogear-JS](https://github.com/aerogear/aerogear-js) Pipeline REST adapter.

## How it works
The [aerogear-js-qunit-cors-jsonp-tests](https://github.com/tolis-e/aerogear-js-cors-jsonp-tests/tree/master/aerogear-js-qunit-cors-jsonp-tests) project contains the QUnit JavaScript unit tests [pipeline-rest-cors-jsonp-tests.js](https://github.com/tolis-e/aerogear-js-cors-jsonp-tests/blob/master/aerogear-js-qunit-cors-jsonp-tests/src/main/webapp/assets/js/test/pipeline-rest-cors-jsonp-tests.js) and an [Arquillian-QUnit](https://github.com/arquillian/arquillian-extension-qunit) test case [AerogearJsRestAdapterTestCase.java](https://github.com/tolis-e/aerogear-js-cors-jsonp-tests/blob/master/aerogear-js-qunit-cors-jsonp-tests/src/test/java/org/jboss/aerogear/js/pipeline/rest/AerogearJsRestAdapterTestCase.java).

[Arquillian QUnit](https://github.com/arquillian/arquillian-extension-qunit) is an [Arquillian](http://arquillian.org/) extension which automates the QUnit JavaScript testing and transparently integrates with the JUnit testing framework. Therefore it can be easily used to execute QUnit JavaScript unit tests in continuous integration environments.

[aerogear-rest-service](https://github.com/tolis-e/aerogear-js-cors-jsonp-tests/tree/master/aerogear-rest-service) project contains a REST web service which produces some valid dummy responses.

The archives produced from the above mentioned projects are deployed on JBoss 7.1.1 Application Server instances with different ports. The archive produced from the [aerogear-js-cors-jsonp-test](https://github.com/tolis-e/aerogear-js-cors-jsonp-tests/tree/master/aerogear-js-qunit-cors-jsonp-tests) project is deployed on a JBoss 7.1.1 AS instance with port 8080 and the one produced from the [aerogear-rest-service](https://github.com/tolis-e/aerogear-js-cors-jsonp-tests/tree/master/aerogear-rest-service) is deployed on a JBoss 7.1.1 AS instance with port 8081.

## Travis CI execution
Apparently, a browser is needed in order to execute the QUnit tests on [Travis CI](http://travis-ci.org/). [Travis CI](http://travis-ci.org/) environment contains X Virtual Framebuffer and Firefox pre-installed. The X Virtual Framebuffer X is an X11 server that performs all graphical operations in memory, not showing any screen output and can be used to run a real GUI application or web browser on a headless machine, as if a proper display were attached. Since the default version of Mozilla Firefox which is pre-installed on Travis CI machines is not the latest one, we manually install a newer version using the addons command.

