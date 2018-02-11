import { SchemaValidator, Schema, Schemas, ValidatorResult } from "../schemas";
import singleLineString from "single-line-string";

export const SchemaAssertionsError = {
    DOES_NOT_CONFORM_TO_SCHEMA: (
        variableName: string,
        schemaId: string,
        value: any,
        validationResult: ValidatorResult,
    ) => singleLineString`
            Expected ${variableName} to conform to schema ${schemaId}

            Encountered: ${JSON.stringify(value, null, "\t")}

            Validation errors: ${validationResult.errors.join(", ")}
        `,
};

export class SchemaAssertions {
    private validator: SchemaValidator;

    constructor() {
        this.validator = new SchemaValidator();
    }

    public simpleInterestLoanOrder(variableName: string, value: any) {
        this.assertConformsToSchema(variableName, value, Schemas.simpleInterestLoanOrderSchema);
    }

    public debtOrder(variableName: string, value: any) {
        this.assertConformsToSchema(variableName, value, Schemas.debtOrderSchema);
    }

    public debtOrderWithTermsSpecified(variableName: string, value: any) {
        this.assertConformsToSchema(variableName, value, Schemas.debtOrderWithTermsSpecifiedSchema);
    }

    private assertConformsToSchema(variableName: string, value: any, schema: Schema): void {
        const validationResult = this.validator.validate(value, schema);
        const hasValidationErrors = validationResult.errors.length > 0;

        if (hasValidationErrors) {
            throw new Error(
                SchemaAssertionsError.DOES_NOT_CONFORM_TO_SCHEMA(
                    variableName,
                    schema.id,
                    value,
                    validationResult,
                ),
            );
        }
    }
}
