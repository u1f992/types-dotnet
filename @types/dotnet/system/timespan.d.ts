declare namespace System {
    /**
     * Represents a time interval.
     * @see [source](https://docs.microsoft.com/dotnet/api/system.timespan)
     */
    class TimeSpan extends ValueType implements IComparable, IComparable<TimeSpan>, IEquatable<TimeSpan>, IFormattable, ISpanFormattable {
        /**
         * Initializes a new instance of the [TimeSpan](https://docs.microsoft.com/dotnet/api/system.timespan) structure to a specified number of hours, minutes, and seconds.
         * @param hours Number of hours.
         * @param minutes Number of minutes.
         * @param seconds Number of seconds.
         * @see [source](https://docs.microsoft.com/dotnet/api/system.timespan.-ctor#system-timespan-ctor(system-int32-system-int32-system-int32))
         */
        constructor(hours: Int32, minutes: Int32, seconds: Int32);
        /**
         * Initializes a new instance of the [TimeSpan](https://docs.microsoft.com/dotnet/api/system.timespan) structure to a specified number of days, hours, minutes, and seconds.
         * @param days Number of days.
         * @param hours Number of hours.
         * @param minutes Number of minutes.
         * @param seconds Number of seconds.
         * @see [source](https://docs.microsoft.com/dotnet/api/system.timespan.-ctor#system-timespan-ctor(system-int32-system-int32-system-int32-system-int32))
         */
        constructor(days: Int32, hours: Int32, minutes: Int32, seconds: Int32);
        /**
         * Initializes a new instance of the [TimeSpan](https://docs.microsoft.com/dotnet/api/system.timespan) structure to a specified number of days, hours, minutes, seconds, and milliseconds.
         * @param days Number of days.
         * @param hours Number of hours.
         * @param minutes Number of minutes.
         * @param seconds Number of seconds.
         * @param milliseconds Number of milliseconds.
         * @see [source](https://docs.microsoft.com/dotnet/api/system.timespan.-ctor#system-timespan-ctor(system-int32-system-int32-system-int32-system-int32-system-int32))
         */
        constructor(days: Int32, hours: Int32, minutes: Int32, seconds: Int32, milliseconds: Int32);
        /**
         * Initializes a new instance of the [TimeSpan](https://docs.microsoft.com/dotnet/api/system.timespan) structure to the specified number of ticks.
         * @param ticks A time period expressed in 100-nanosecond units.
         * @see [source](https://docs.microsoft.com/dotnet/api/system.timespan.-ctor#system-timespan-ctor(system-int64))
         */
        constructor(ticks: Int64);
        /**
         * Represents the maximum [TimeSpan](https://docs.microsoft.com/dotnet/api/system.timespan) value. This field is read-only.
         * @see [source](https://docs.microsoft.com/dotnet/api/system.timespan.maxvalue)
         */
        static readonly MaxValue: TimeSpan;
        /**
         * Represents the minimum [TimeSpan](https://docs.microsoft.com/dotnet/api/system.timespan) value. This field is read-only.
         * @see [source](https://docs.microsoft.com/dotnet/api/system.timespan.minvalue)
         */
        static readonly MinValue: TimeSpan;
        /**
         * Represents the number of ticks in 1 day. This field is constant.
         * @see [source](https://docs.microsoft.com/dotnet/api/system.timespan.ticksperday)
         */
        static readonly TicksPerDay: Int64;
        /**
         * Represents the number of ticks in 1 hour. This field is constant.
         * @see [source](https://docs.microsoft.com/dotnet/api/system.timespan.ticksperhour)
         */
        static readonly TicksPerHour: Int64;
        /**
         * Represents the number of ticks in 1 millisecond. This field is constant.
         * @see [source](https://docs.microsoft.com/dotnet/api/system.timespan.tickspermillisecond)
         */
        static readonly TicksPerMillisecond: Int64;
        /**
         * Represents the number of ticks in 1 minute. This field is constant.
         * @see [source](https://docs.microsoft.com/dotnet/api/system.timespan.ticksperminute)
         */
        static readonly TicksPerMinute: Int64;
        /**
         * Represents the number of ticks in 1 second.
         * @see [source](https://docs.microsoft.com/dotnet/api/system.timespan.tickspersecond)
         */
        static readonly TicksPerSecond: Int64;
        /**
         * Represents the zero [TimeSpan](https://docs.microsoft.com/dotnet/api/system.timespan) value. This field is read-only.
         * @see [source](https://docs.microsoft.com/dotnet/api/system.timespan.zero)
         */
        static readonly Zero: TimeSpan;
        /**
         * Gets the days component of the time interval represented by the current [TimeSpan](https://docs.microsoft.com/dotnet/api/system.timespan) structure.
         * @see [source](https://docs.microsoft.com/dotnet/api/system.timespan.days)
         */
        readonly Days: Int32;
        /**
         * Gets the hours component of the time interval represented by the current [TimeSpan](https://docs.microsoft.com/dotnet/api/system.timespan) structure.
         * @see [source](https://docs.microsoft.com/dotnet/api/system.timespan.hours)
         */
        readonly Hours: Int32;
        /**
         * Gets the milliseconds component of the time interval represented by the current [TimeSpan](https://docs.microsoft.com/dotnet/api/system.timespan) structure.
         * @see [source](https://docs.microsoft.com/dotnet/api/system.timespan.milliseconds)
         */
        readonly Milliseconds: Int32;
        /**
         * Gets the minutes component of the time interval represented by the current [TimeSpan](https://docs.microsoft.com/dotnet/api/system.timespan) structure.
         * @see [source](https://docs.microsoft.com/dotnet/api/system.timespan.minutes)
         */
        readonly Minutes: Int32;
        /**
         * Gets the seconds component of the time interval represented by the current [TimeSpan](https://docs.microsoft.com/dotnet/api/system.timespan) structure.
         * @see [source](https://docs.microsoft.com/dotnet/api/system.timespan.seconds)
         */
        readonly Seconds: Int32;
        /**
         * Gets the number of ticks that represent the value of the current [TimeSpan](https://docs.microsoft.com/dotnet/api/system.timespan) structure.
         * @see [source](https://docs.microsoft.com/dotnet/api/system.timespan.ticks)
         */
        readonly Ticks: Int64;
        /**
         * Gets the value of the current [TimeSpan](https://docs.microsoft.com/dotnet/api/system.timespan) structure expressed in whole and fractional days.
         * @see [source](https://docs.microsoft.com/dotnet/api/system.timespan.totaldays)
         */
        readonly TotalDays: Int64;
        /**
         * Gets the value of the current [TimeSpan](https://docs.microsoft.com/dotnet/api/system.timespan) structure expressed in whole and fractional hours.
         * @see [source](https://docs.microsoft.com/dotnet/api/system.timespan.totalhours)
         */
        readonly TotalHours: Int64;
        /**
         * Gets the value of the current [TimeSpan](https://docs.microsoft.com/dotnet/api/system.timespan) structure expressed in whole and fractional milliseconds.
         * @see [source](https://docs.microsoft.com/dotnet/api/system.timespan.totalmilliseconds)
         */
        readonly TotalMilliseconds: Int64;
        /**
         * Gets the value of the current [TimeSpan](https://docs.microsoft.com/dotnet/api/system.timespan) structure expressed in whole and fractional minutes.
         * @see [source](https://docs.microsoft.com/dotnet/api/system.timespan.totalminutes)
         */
        readonly TotalMinutes: Int64;
        /**
         * Gets the value of the current [TimeSpan](https://docs.microsoft.com/dotnet/api/system.timespan) structure expressed in whole and fractional seconds.
         * @see [source](https://docs.microsoft.com/dotnet/api/system.timespan.totalseconds)
         */
        readonly TotalSeconds: Int64;
    }
}
