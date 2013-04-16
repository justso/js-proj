$(function(){
    $('body').append('<h1 id="qunit-header">' + document.title + '</h1>'    +
        '<h2 id="qunit-banner"></h2><div id="qunit-testrunner-toolbar">'    +
        '<a target="_blank" href="http://docs.jquery.com/QUnit">Docs</a>'   +
        ' </div><h2 id="qunit-userAgent"></h2><ol id="qunit-tests"></ol>'   +
        '<div id="qunit-fixture"></div>');
});

test("a basic test example", function() {
    ok( true, "this test is fine" );
    var value = "hello";
    equal( value, "hello", "We expect value to be hello" );
});

module("Module A");
test("first test within module", function() {
    ok( true, "all pass" );
});
test("second test within module", function() {
    ok( true, "all pass" );
});

module("Module B");
test("some other test", function() {
    expect(2);
    equal( true, false, "failing test" );
    equal( true, true, "passing test" );
});
