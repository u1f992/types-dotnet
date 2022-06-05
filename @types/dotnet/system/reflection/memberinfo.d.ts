declare namespace System.Reflection {
    /**
     * Obtains information about the attributes of a member and provides access to member metadata.
     * @see [source](https://docs.microsoft.com/dotnet/api/system.reflection.memberinfo)
     */
    class MemberInfo extends Object implements ICustomAttributeProvider {
        /**
         * Initializes a new instance of the [MemberInfo](https://docs.microsoft.com/dotnet/api/system.reflection.memberinfo) class.
         * @see [source](https://docs.microsoft.com/dotnet/api/system.reflection.memberinfo.-ctor)
         */
        abstract constructor();
        /**
         * Gets a collection that contains this member's custom attributes.
         * @see [source](https://docs.microsoft.com/dotnet/api/system.reflection.memberinfo.customattributes)
         */
        abstract readonly CustomAttributes: Collections.Generic.IEnumerable<CustomAttributeData>;
    }
}
