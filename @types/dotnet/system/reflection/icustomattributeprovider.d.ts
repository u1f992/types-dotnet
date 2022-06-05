declare namespace System.Reflection {
    /**
     * Provides custom attributes for reflection objects that support them.
     * @see [source](https://docs.microsoft.com/dotnet/api/system.reflection.icustomattributeprovider)
     */
    interface ICustomAttributeProvider {
        /**
         * Returns an array of all of the custom attributes defined on this member, excluding named attributes, or an empty array if there are no custom attributes.
         * @param inherit When `true`, look up the hierarchy chain for the inherited custom attribute.
         * @returns An array of Objects representing custom attributes, or an empty array.
         * @see [source](https://docs.microsoft.com/dotnet/api/system.reflection.icustomattributeprovider.getcustomattributes#system-reflection-icustomattributeprovider-getcustomattributes(system-boolean))
         */
        GetCustomAttributes(inherit: Boolean): Object[];
        /**
         * Returns an array of custom attributes defined on this member, identified by type, or an empty array if there are no custom attributes of that type.
         * @param attributeType The type of the custom attributes.
         * @param inherit When `true`, look up the hierarchy chain for the inherited custom attribute.
         * @see [source](https://docs.microsoft.com/dotnet/api/system.reflection.icustomattributeprovider.getcustomattributes#system-reflection-icustomattributeprovider-getcustomattributes(system-type-system-boolean))
         */
        GetCustomAttributes(attributeType: Type, inherit: Boolean): Object[];
        /**
         * Indicates whether one or more instance of `attributeType` is defined on this member.
         * @param attributeType The type of the custom attributes.
         * @param inherit When `true`, look up the hierarchy chain for the inherited custom attribute.
         * @returns `true` if the `attributeType` is defined on this member; `false` otherwise.
         * @see [source](https://docs.microsoft.com/dotnet/api/system.reflection.icustomattributeprovider.isdefined)
         */
        IsDefined(attributeType: Type, inherit: Boolean): Boolean;
    }
}
