import { Validator, AbstractControl, NG_VALIDATORS } from "@angular/forms";
import { Directive } from "@angular/core";

@Directive({
    selector: '[appConfirmEqualValidator]',
    providers: [{
        provide: NG_VALIDATORS,
        useExisting: ConfirmEqualValidatorDirective,
        multi: true
    }]
})
export class ConfirmEqualValidatorDirective implements Validator {
    validate(passwordGroup: AbstractControl): {[key: string]:any} | null {
        console.log('Equal validator validate')
        const passwordField = passwordGroup.get('password');
        const confirmPasswordField = passwordGroup.get('confirmPassword');
        if(passwordField == null || confirmPasswordField == null) {
        return null;
        }

        return passwordField.value === confirmPasswordField.value ? null : {'notEqual' : true };
    }
}
