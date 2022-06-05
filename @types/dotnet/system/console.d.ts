declare namespace System {
    /**
     * Represents the standard input, output, and error streams for console applications. This class cannot be inherited.
     * @see [source](https://docs.microsoft.com/dotnet/api/system.console)
     */
    class Console extends Object {
        /**
         * Gets or sets the background color of the console.
         * @see [source](https://docs.microsoft.com/dotnet/api/system.console.backgroundcolor)
         */
        static BackgroundColor: ConsoleColor;
        /**
         * Gets or sets the height of the buffer area.
         * @see [source](https://docs.microsoft.com/dotnet/api/system.console.bufferheight)
         */
        static BufferHeight: Int32;
        /**
         * Gets or sets the width of the buffer area.
         * @see [source](https://docs.microsoft.com/dotnet/api/system.console.bufferwidth)
         */
        static BufferWidth: Int32;
        /**
         * Gets a value indicating whether the CAPS LOCK keyboard toggle is turned on or turned off.
         * @see [source](https://docs.microsoft.com/dotnet/api/system.console.capslock)
         */
        static readonly CapsLock: Boolean;
        /**
         * Gets or sets the column position of the cursor within the buffer area.
         * @see [source](https://docs.microsoft.com/dotnet/api/system.console.cursorleft)
         */
        static CursorLeft: Int32;
        /**
         * Gets or sets the height of the cursor within a character cell.
         * @see [source](https://docs.microsoft.com/dotnet/api/system.console.cursorsize)
         */
        static CursorSize: Int32;
        /**
         * Gets or sets the row position of the cursor within the buffer area.
         * @see [source](https://docs.microsoft.com/dotnet/api/system.console.cursortop)
         */
        static CursorTop: Int32;
        /**
         * Gets or sets a value indicating whether the cursor is visible.
         * @see [source](https://docs.microsoft.com/dotnet/api/system.console.cursorvisible)
         */
        static CursorVisible: Boolean;
        /**
         * Gets the standard error output stream.
         * @see [source](https://docs.microsoft.com/dotnet/api/system.console.error)
         */
        static readonly Error: IO.TextWriter;
        /**
         * Gets or sets the foreground color of the console.
         * @see [source](https://docs.microsoft.com/dotnet/api/system.console.foregroundcolor)
         */
        static ForegroundColor: ConsoleColor;
        /**
         * Gets the standard input stream.
         * @see [source](https://docs.microsoft.com/dotnet/api/system.console.in)
         */
        static readonly In: IO.TextReader;
        /**
         * Gets or sets the encoding the console uses to read input.
         * @see [source](https://docs.microsoft.com/dotnet/api/system.console.inputencoding)
         */
        static InputEncoding: Text.Encoding;
        /**
         * Gets a value that indicates whether the error output stream has been redirected from the standard error stream.
         * @see [source](https://docs.microsoft.com/dotnet/api/system.console.iserrorredirected)
         */
        static readonly IsErrorRedirected: Boolean;
        /**
         * Gets a value that indicates whether input has been redirected from the standard input stream.
         * @see [source](https://docs.microsoft.com/dotnet/api/system.console.isinputredirected)
         */
        static readonly IsInputRedirected: Boolean;
        /**
         * Gets a value that indicates whether output has been redirected from the standard output stream.
         * @see [source](https://docs.microsoft.com/dotnet/api/system.console.isoutputredirected)
         */
        static readonly IsOutputRedirected: Boolean;
        /**
         * Gets a value indicating whether a key press is available in the input stream.
         * @see [source](https://docs.microsoft.com/dotnet/api/system.console.keyavailable)
         */
        static readonly KeyAvailable: Boolean;
        /**
         * Gets the largest possible number of console window rows, based on the current font and screen resolution.
         * @see [source](https://docs.microsoft.com/dotnet/api/system.console.largestwindowheight)
         */
        static readonly LargestWindowHeight: Int32;
        /**
         * Gets the largest possible number of console window columns, based on the current font and screen resolution.
         * @see [source](https://docs.microsoft.com/dotnet/api/system.console.largestwindowwidth)
         */
        static readonly LargestWindowWidth: Int32;
        /**
         * Gets a value indicating whether the NUM LOCK keyboard toggle is turned on or turned off.
         * @see [source](https://docs.microsoft.com/dotnet/api/system.console.numberlock)
         */
        static readonly NumberLock: Boolean;
        /**
         * Gets the standard output stream.
         * @see [source](https://docs.microsoft.com/dotnet/api/system.console.out)
         */
        static readonly Out: IO.TextWriter;
        /**
         * Gets or sets the encoding the console uses to write output.
         * @see [source](https://docs.microsoft.com/dotnet/api/system.console.outputencoding)
         */
        static OutputEncoding: Text.Encoding;
        /**
         * Gets or sets the title to display in the console title bar.
         * @see [source](https://docs.microsoft.com/dotnet/api/system.console.title)
         */
        static Title: String;
        /**
         * Gets or sets a value indicating whether the combination of the Control modifier key and C console key (Ctrl+C) is treated as ordinary input or as an interruption that is handled by the operating system.
         * @see [source](https://docs.microsoft.com/dotnet/api/system.console.treatcontrolcasinput)
         */
        static TreatControlCAsInput: Boolean;
        /**
         * Gets or sets the height of the console window area.
         * @see [source](https://docs.microsoft.com/dotnet/api/system.console.windowheight)
         */
        static WindowHeight: Int32;
        /**
         * Gets or sets the leftmost position of the console window area relative to the screen buffer.
         * @see [source](https://docs.microsoft.com/dotnet/api/system.console.windowleft)
         */
        static WindowLeft: Int32;
        /**
         * Gets or sets the top position of the console window area relative to the screen buffer.
         * @see [source](https://docs.microsoft.com/dotnet/api/system.console.windowtop)
         */
        static WindowTop: Int32;
        /**
         * Gets or sets the width of the console window.
         * @see [source](https://docs.microsoft.com/dotnet/api/system.console.windowwidth)
         */
        static WindowWidth: Int32;
        /**
         * Plays the sound of a beep through the console speaker.
         * @see [source](https://docs.microsoft.com/dotnet/api/system.console.beep#system-console-beep)
         */
        static Beep(): void;
        /**
         * Plays the sound of a beep of a specified frequency and duration through the console speaker.
         * @param frequency The frequency of the beep, ranging from 37 to 32767 hertz.
         * @param duration The duration of the beep measured in milliseconds.
         * @see [source](https://docs.microsoft.com/dotnet/api/system.console.beep#system-console-beep#system-console-beep(system-int32-system-int32))
         */
        static Beep(frequency: Int32, duration: Int32): void;
        /**
         * Clears the console buffer and corresponding console window of display information.
         * @see [source](https://docs.microsoft.com/dotnet/api/system.console.clear)
         */
        static Clear(): void;
        /**
         * Gets the position of the cursor.
         */
        static GetCursorPosition(): { Item1: Int32, Item2: Int32 };
        /**
         * Copies a specified source area of the screen buffer to a specified destination area.
         */
        static MoveBufferArea(sourceLeft: Int32, sourceTop: Int32, sourceWidth: Int32, sourceHeight: Int32, targetLeft: Int32, targetTop: Int32): void;
        /**
         * Copies a specified source area of the screen buffer to a specified destination area.
         */
        static MoveBufferArea(Int32, Int32, Int32, Int32, Int32, Int32, Char, ConsoleColor, ConsoleColor): any;
        /**
         * Acquires the standard error stream.
         */
        static OpenStandardError(): any;
        /**
         * Acquires the standard error stream, which is set to a specified buffer size.
         */
        static OpenStandardError(Int32): any;
        /**
         * Acquires the standard input stream.
         */
        static OpenStandardInput(): any;
        /**
         * Acquires the standard input stream, which is set to a specified buffer size.
         */
        static OpenStandardInput(Int32): any;
        /**
         * Acquires the standard output stream.
         */
        static OpenStandardOutput(): any;
        /**
         * Acquires the standard output stream, which is set to a specified buffer size.
         */
        static OpenStandardOutput(Int32): any;
        /**
         * Reads the next character from the standard input stream.
         */
        static Read(): any;
        /**
         * Obtains the next character or function key pressed by the user. The pressed key is displayed in the console window.
         */
        static ReadKey(): any;
        /**
         * Obtains the next character or function key pressed by the user. The pressed key is optionally displayed in the console window.
         */
        static ReadKey(Boolean): any;
        /**
         * Reads the next line of characters from the standard input stream.
         */
        static ReadLine(): any;
        /**
         * Sets the foreground and background console colors to their defaults.
         */
        static ResetColor(): any;
        /**
         * Sets the height and width of the screen buffer area to the specified values.
         */
        static SetBufferSize(Int32, Int32): any;
        /**
         * Sets the position of the cursor.
         */
        static SetCursorPosition(Int32, Int32): any;
        /**
         * Sets the Error property to the specified TextWriter object.
         */
        static SetError(TextWriter): any;
        /**
         * Sets the In property to the specified TextReader object.
         */
        static SetIn(TextReader): any;
        /**
         * Sets the Out property to target the TextWriter object.
         */
        static SetOut(TextWriter): any;
        /**
         * Sets the position of the console window relative to the screen buffer.
         */
        static SetWindowPosition(Int32, Int32): any;
        /**
         * Sets the height and width of the console window to the specified values.
         */
        static SetWindowSize(Int32, Int32): any;
        /**
         * Writes the text representation of the specified Boolean value to the standard output stream.
         */
        static Write(value: Boolean): void;
        /**
         * Writes the specified Unicode character value to the standard output stream.
         */
        static Write(value: Char): void;
        /**
         * Writes the specified array of Unicode characters to the standard output stream.
         */
        static Write(buffer: Char[]?): void;
        /**
         * Writes the specified subarray of Unicode characters to the standard output stream.
         */
        static Write(buffer: Char[], index: Int32, count: Int32): void;
        /**
         * Writes the text representation of the specified Decimal value to the standard output stream.
         */
        static Write(value: Decimal): void;
        /**
         * Writes the text representation of the specified double-precision floating-point value to the standard output stream.
         */
        static Write(value: Double): void;
        /**
         * Writes the text representation of the specified 32-bit signed integer value to the standard output stream.
         */
        static Write(value: Int32): void;
        /**
         * Writes the text representation of the specified 64-bit signed integer value to the standard output stream.
         */
        static Write(value: Int64): void;
        /**
         * Writes the text representation of the specified object to the standard output stream.
         */
        static Write(value: Object?): void;
        /**
         * Writes the text representation of the specified single-precision floating-point value to the standard output stream.
         */
        static Write(value: Single): void;
        /**
         * Writes the specified string value to the standard output stream.
         */
        static Write(value: String?): void;
        /**
         * Writes the text representation of the specified object to the standard output stream using the specified format information.
         */
        static Write(format: String, arg0: Object?): void;
        /**
         * Writes the text representation of the specified objects to the standard output stream using the specified format information.
         */
        static Write(format: String, arg0: Object?, arg1: Object?): void;
        /**
         * Writes the text representation of the specified objects to the standard output stream using the specified format information.
         */
        static Write(format: String, arg0: Object?, arg1: Object?, arg2: Object?): void;
        /**
         * Writes the text representation of the specified array of objects to the standard output stream using the specified format information.
         */
        static Write(format: String, arg: (Object | null)[]?): void;
        /**
         * Writes the text representation of the specified 32-bit unsigned integer value to the standard output stream.
         */
        static Write(value: UInt32): void;
        /**
         * Writes the text representation of the specified 64-bit unsigned integer value to the standard output stream.
         */
        static Write(value: UInt64): void;
        /**
         * Writes the current line terminator to the standard output stream.
         */
        static WriteLine(): void;
        /**
         * Writes the text representation of the specified Boolean value, followed by the current line terminator, to the standard output stream.
         */
        static WriteLine(value: Boolean): void;
        /**
         * Writes the specified Unicode character, followed by the current line terminator, value to the standard output stream.
         */
        static WriteLine(value: Char): void;
        /**
         * Writes the specified array of Unicode characters, followed by the current line terminator, to the standard output stream.
         */
        static WriteLine(buffer: Char[]?): void;
        /**
         * Writes the specified subarray of Unicode characters, followed by the current line terminator, to the standard output stream.
         */
        static WriteLine(buffer: Char[], index: Int32, count: Int32): void;
        /**
         * Writes the text representation of the specified Decimal value, followed by the current line terminator, to the standard output stream.
         */
        static WriteLine(value: Decimal): void;
        /**
         * Writes the text representation of the specified double-precision floating-point value, followed by the current line terminator, to the standard output stream.
         */
        static WriteLine(value: Double): void;
        /**
         * Writes the text representation of the specified 32-bit signed integer value, followed by the current line terminator, to the standard output stream.
         */
        static WriteLine(value: Int32): void;
        /**
         * Writes the text representation of the specified 64-bit signed integer value, followed by the current line terminator, to the standard output stream.
         */
        static WriteLine(value: Int64): void;
        /**
         * Writes the text representation of the specified object, followed by the current line terminator, to the standard output stream.
         */
        static WriteLine(value: Object?): void;
        /**
         * Writes the text representation of the specified single-precision floating-point value, followed by the current line terminator, to the standard output stream.
         */
        static WriteLine(value: Single): void;
        /**
         * Writes the specified string value, followed by the current line terminator, to the standard output stream.
         */
        static WriteLine(value: String?): void;
        /**
         * Writes the text representation of the specified object, followed by the current line terminator, to the standard output stream using the specified format information.
         */
        static WriteLine(format: String, arg0: Object?): void;
        /**
         * Writes the text representation of the specified objects, followed by the current line terminator, to the standard output stream using the specified format information.
         */
        static WriteLine(format: String, arg0: Object?, arg1: Object?): void;
        /**
         * Writes the text representation of the specified objects, followed by the current line terminator, to the standard output stream using the specified format information.
         */
        static WriteLine(format: String, arg0: Object?, arg1: Object?, arg2: Object?): void;
        /**
         * Writes the text representation of the specified array of objects, followed by the current line terminator, to the standard output stream using the specified format information.
         */
        static WriteLine(format: String, arg: (Object | null)[]?): void;
        /**
         * Writes the text representation of the specified 32-bit unsigned integer value, followed by the current line terminator, to the standard output stream.
         */
        static WriteLine(value: UInt32): void;
        /**
         * Writes the text representation of the specified 64-bit unsigned integer value, followed by the current line terminator, to the standard output stream.
         */
        static WriteLine(value: UInt64): void;

    }
}
