declare namespace Type {
    /**
     * Represents type declarations: class types, interface types, array types, value types, enumeration types, type parameters, generic type definitions, and open or closed constructed generic types.
     * @abstract
     * @see [source](https://docs.microsoft.com/dotnet/api/system.type)
     */
    class Type extends Reflection.MemberInfo implements Reflection.IReflect {
        /**
         * Initializes a new instance of the Type class.
         * @see [source](https://docs.microsoft.com/dotnet/api/system.type.-ctor)
         */
        constructor();
    }
}
