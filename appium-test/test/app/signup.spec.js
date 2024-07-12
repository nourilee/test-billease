describe('Login Screen', () => {
    before(async () => {
        // Deny Notifications and Get Started
        await $('//android.widget.Button[@resource-id="com.android.permissioncontroller:id/permission_deny_button"]').click();
        await $('//android.widget.TextView[@text="GET STARTED"]').click();

        // Click on login
        await $('//android.widget.Button[@text="SIGN UP"]').click();
    });

    it('should validate signup form', async () => {
        const emailField = await $('//android.widget.EditText[@resource-id="ph.billeasev2.mobile:id/sign_up_email_text"]');
        const mobileField = await $('//android.widget.EditText[@resource-id="ph.billeasev2.mobile:id/sign_up_mobile_text"]');
        const termsCheckbox = await $('//android.widget.CheckBox[@resource-id="ph.billeasev2.mobile:id/checkBox"]');
        const signupButton = await $('//android.widget.Button[@resource-id="ph.billeasev2.mobile:id/sign_up"]');
        
        // Test signup button is disabled by default
        expect(await signupButton.isEnabled()).to.be.false;

        // Test invalid email
        await emailField.setValue('invalidEmail');
        await termsCheckbox.click();
        await signupButton.click();

        const errorField = await browser.$('//android.widget.TextView[@resource-id="ph.billeasev2.mobile:id/textinput_error"]');
        await errorField.waitForDisplayed({ timeout: 5000 });

        expect(await errorField.isDisplayed()).to.be.true;
        expect(await errorField.getAttribute("text")).to.equal("Invalid email address");

        // Clear the field
        await emailField.clearValue();

        // Test invalid mobile number
        await emailField.setValue('test@abc.com');
        await mobileField.setValue('987654321');
        await signupButton.click();

        await errorField.waitForDisplayed({ timeout: 5000 });

        expect(await errorField.isDisplayed()).to.be.true;
        expect(await errorField.getAttribute("text")).to.equal("Invalid number");
    });
});
