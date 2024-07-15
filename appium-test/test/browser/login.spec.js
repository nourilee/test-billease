describe('Login Screen', () => {
    before(async () => {
        // Navigate to the URL
        await browser.url('https://billease.ph');

        // Open sidebar and click on Login
        await $('//button[@aria-label="Expand sidebar"]').click();
        await $('//div[2]//a[contains(text(),"Log in")]').click();
    });

    it('should redirect to the login screen', async () => {
        // Check if the NATIVE_APP context is available and switch to it
        const contexts = await browser.getContexts();
        const nativeAppContext = contexts.find(context => context.includes('NATIVE_APP'));
        if (nativeAppContext) {
            await browser.switchContext(nativeAppContext);

            // Verify the current context
            expect(await browser.getContext()).to.equal('NATIVE_APP');

            // Verify the existence of app elements
            const element = await browser.$('//android.widget.FrameLayout[@resource-id="android:id/content"]');
            expect(await element.isExisting()).to.be.true;

        } else {
            console.log('NATIVE_APP context not available');
        }
    });
});