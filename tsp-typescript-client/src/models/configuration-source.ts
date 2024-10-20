
/**
 * Model of a configuration source type
 */
export interface ConfigurationSourceType {
    /**
     * Unique identifier of the configuration source type
     */
    id: string;

    /**
     * The name of the configuration source type
     */
    name: string;

    /**
     * A short description of this configuration source type.
     */
    description?: string;

    /**
     * A list of query parameter keys to be passed when creating
     * configuration instance of this type. Use this instead of
     * schema. Omit if not used.
     */
    parameterDescriptors?: ConfigurationParameterDescriptor[];

    /**
     * a JSON schema that describes the parameters that the front-end
     * needs to provide with corresponding values. Use this for complex
     * parameter descriptions instead of parameterDescriptors.
     */
    schema?: object;
}

/**
 * Model of a configuration parameter descriptor
 */
export interface ConfigurationParameterDescriptor {
    /**
     * The unique name of the key
     */
    keyName: string;

    /**
     * A short description.
     */
    description?: string;

    /**
     * The data type string, e.g. use NUMBER for numbers, or STRING as strings
     */
    dataType?: string;

    /**
     * If parameter needs to in the query parameters or not. Default is false. 
     */
    isRequired?: boolean;
}
