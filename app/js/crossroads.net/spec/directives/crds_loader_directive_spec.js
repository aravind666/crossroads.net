describe("crds progress bar directive", function() {
    beforeEach(module('crosroads'));

    beforeEach(inject(function($compile, $rootScope){
        this.scope = $rootScope;
        this.compile = $compile;
        it('Replaces the element with the progress bar', function() {

            var element = $compile("<crds-progress-bar percentage='31'></crds-progress-bar>")($rootScope);

            $rootScope.$digest();
            // Check that the compiled element contains the templated content
            expect(element.html()).toContain("31%");
        });

    }));


});