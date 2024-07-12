describe('Login Screen', () => {
    before(async () => {
        // Deny Notifications and Get Started
        await $('//android.widget.Button[@resource-id="com.android.permissioncontroller:id/permission_deny_button"]').click();
        await $('//android.widget.TextView[@text="GET STARTED"]').click();

        // Click on login
        await $('//android.widget.Button[@text="LOG IN"]').click();
    });

    it('should validate email and mobile number', async () => {
        const emailField = await $('//android.widget.EditText[@resource-id="ph.billeasev2.mobile:id/input_username"]');
        
        // Test invalid email
        await emailField.setValue('invalidEmail');

        const errorField = await $('//android.widget.TextView[@resource-id="ph.billeasev2.mobile:id/textinput_error"]');
        await errorField.waitForDisplayed({ timeout: 5000 });

        expect(await errorField.isDisplayed()).to.be.true;
        expect(await errorField.getAttribute("text")).to.equal('Invalid email or mobile');

        // Clear the field
        await emailField.clearValue();

        // Test invalid mobile number
        await emailField.setValue('987654321');
        await errorField.waitForDisplayed({ timeout: 5000 });

        expect(await errorField.isDisplayed()).to.be.true;
        expect(await errorField.getAttribute("text")).to.equal('Invalid email or mobile');
    });
});
