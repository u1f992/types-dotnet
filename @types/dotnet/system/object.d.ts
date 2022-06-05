declare namespace System {
    /**
     * Supports all classes in the .NET class hierarchy and provides low-level services to derived classes. This is the ultimate base class of all .NET classes; it is the root of the type hierarchy.
     * @see [source](https://docs.microsoft.com/dotnet/api/system.object)
     */
    class Object {
        /**
         * Initializes a new instance of the [Object](https://docs.microsoft.com/dotnet/api/system.object) class.
         * @see [source](https://docs.microsoft.com/dotnet/api/system.object.-ctor)
         */
        constructor();
        /**
         * Determines whether the specified object is equal to the current object.
         * @param obj The object to compare with the current object.
         * @returns `true` if the specified object is equal to the current object; otherwise, `false`.
         * @see [source](https://docs.microsoft.com/dotnet/api/system.object.equals#system-object-equals(system-object))
         */
        abstract Equals(obj: Object?): Boolean;
        /**
         * Determines whether the specified object instances are considered equal.
         * @param objA The first object to compare.
         * @param objB The second object to compare.
         * @returns `true` if the objects are considered equal; otherwise, `false`. If both `objA` and `objB` are **null**, the method returns `true`.
         * @see [source](https://docs.microsoft.com/dotnet/api/system.object.equals#system-object-equals(system-object-system-object))
         */
        static Equals(objA: Object?, objB: Object?): Boolean;
        /**
         * Allows an object to try to free resources and perform other cleanup operations before it is reclaimed by garbage collection.
         * @see [source](https://docs.microsoft.com/dotnet/api/system.object.finalize)
         */
        Finalize(): void;
        /**
         * Serves as the default hash function.
         * @returns A hash code for the current object.
         * @see [source](https://docs.microsoft.com/dotnet/api/system.object.gethashcode)
         */
        abstract GetHashCode(): Int32;
        /**
         * Gets the [Type](https://docs.microsoft.com/dotnet/api/system.type) of the current instance.
         * @returns The exact runtime type of the current instance.
         * @see [source](https://docs.microsoft.com/dotnet/api/system.object.gettype)
         */
        GetType(): Type;
        /**
         * Creates a shallow copy of the current [Object](https://docs.microsoft.com/dotnet/api/system.object).
         * @returns A shallow copy of the current [Object](https://docs.microsoft.com/dotnet/api/system.object).
         * @see [source](https://docs.microsoft.com/dotnet/api/system.object.memberwiseclone)
         */
        protected MemberwiseClone(): Object;
        /**
         * Determines whether the specified [Object](https://docs.microsoft.com/dotnet/api/system.object) instances are the same instance.
         * @param objA The first object to compare.
         * @param objB The second object to compare.
         * @returns `true` if `objA` is the same instance as `objB` or if both are **null**; otherwise, `false`.
         * @see [source](https://docs.microsoft.com/dotnet/api/system.object.referenceequals)
         */
        static ReferenceEquals(objA: Object?, objB: Object?): Boolean;
        /**
         * Returns a string that represents the current object.
         * @returns A string that represents the current object.
         * @see [source](https://docs.microsoft.com/dotnet/api/system.object.tostring)
         */
        abstract ToString(): String?;
    }
}
