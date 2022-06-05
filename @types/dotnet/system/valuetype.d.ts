declare namespace System {
    /**
     * Provides the base class for value types.
     * @see [source](https://docs.microsoft.com/dotnet/api/system.valuetype)
     */
    class ValueType extends Object {
        /**
         * Initializes a new instance of the [ValueType](https://docs.microsoft.com/dotnet/api/system.valuetype) class.
         */
        protected constructor();
        /**
         * Indicates whether this instance and a specified object are equal.
         * @param obj The object to compare with the current instance.
         * @returns `true` if `obj` and this instance are the same type and represent the same value; otherwise, `false`.
         * @see [source](https://docs.microsoft.com/dotnet/api/system.valuetype.equals)
         */
        override Equals(obj: Object?): Boolean;
        /**
         * Returns the hash code for this instance.
         * @returns A 32-bit signed integer that is the hash code for this instance.
         * @see [source](https://docs.microsoft.com/dotnet/api/system.valuetype.gethashcode)
         */
        override GetHashCode(): Int32;
        /**
         * Returns the fully qualified type name of this instance.
         * @returns The fully qualified type name.
         * @see [source](https://docs.microsoft.com/dotnet/api/system.valuetype.tostring)
         */
        override ToString(): String?;
    }
}
