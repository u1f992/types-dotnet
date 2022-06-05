declare namespace System.Reflection {
    /**
     * Provides access to custom attribute data for assemblies, modules, types, members and parameters that are loaded into the reflection-only context.
     * @see [source](https://docs.microsoft.com/dotnet/api/system.reflection.customattributedata)
     */
    class CustomAttributeData extends Object {
        /**
         * Initializes a new instance of the [CustomAttributeData](https://docs.microsoft.com/dotnet/api/system.reflection.customattributedata) class.
         * @see [source](https://docs.microsoft.com/dotnet/api/system.reflection.customattributedata.-ctor)
         */
        protected constructor();
        /**
         * Gets the type of the attribute.
         * @see [source](https://docs.microsoft.com/dotnet/api/system.reflection.customattributedata.attributetype)
         */
        abstract readonly AttributeType: Type;
        /**
         * Gets a [ConstructorInfo](https://docs.microsoft.com/dotnet/api/system.reflection.constructorinfo) object that represents the constructor that would have initialized the custom attribute.
         * @see [source](https://docs.microsoft.com/dotnet/api/system.reflection.customattributedata.constructor)
         */
        abstract readonly Constructor: ConstructorInfo;
        /**
         * Gets the list of positional arguments specified for the attribute instance represented by the [CustomAttributeData](https://docs.microsoft.com/dotnet/api/system.reflection.customattributedata) object.
         * @see [source](https://docs.microsoft.com/dotnet/api/system.reflection.customattributedata.constructorarguments)
         */
        abstract readonly ConstructorArguments: Collections.Generic.IList<CustomAttributeTypedArgument>;
        /**
         * Gets the list of named arguments specified for the attribute instance represented by the [CustomAttributeData](https://docs.microsoft.com/dotnet/api/system.reflection.customattributedata) object.
         * @see [source](https://docs.microsoft.com/dotnet/api/system.reflection.customattributedata.namedarguments)
         */
        abstract readonly NamedArguments: Collections.Generic.IList<CustomAttributeNamedArgument>;
    }
}
