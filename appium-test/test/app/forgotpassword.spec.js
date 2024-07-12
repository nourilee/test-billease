describe('Forgot Password Screen', () => {
    before(async () => {
        // Deny Notifications and Get Started
        await $('//android.widget.Button[@resource-id="com.android.permissioncontroller:id/permission_deny_button"]').click();
        await $('//android.widget.TextView[@text="GET STARTED"]').click();

        // Click on login
        await $('//android.widget.Button[@text="LOG IN"]').click();
    });

    it('should validate email and mobile number', async () => {
        // Click on forgot password
        await $('//android.widget.TextView[@resource-id="ph.billeasev2.mobile:id/forgot_password"]').click();
        
        const emailField = await $('//*[@class="android.widget.EditText"]');
        
        // Test invalid email
        await emailField.setValue('invalidEmail');

        const errorField = await $('//android.widget.TextView[@resource-id="ph.billeasev2.mobile:id/textinput_error"]');
        await errorField.waitForDisplayed({ timeout: 5000 });

        expect(await errorField.isDisplayed()).to.be.true;
        expect(await errorField.getAttribute("text")).to.equal('Please enter a valid email or mobile number.');

        // Clear the field
        await emailField.clearValue();

        // Test invalid mobile number
        await emailField.setValue('987654321');
        await errorField.waitForDisplayed({ timeout: 5000 });

        expect(await errorField.isDisplayed()).to.be.true;
        expect(await errorField.getAttribute("text")).to.equal('Please enter a valid email or mobile number.');
    });
});
