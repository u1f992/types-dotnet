# @types/dotnet

**Pull Requests WANTED**

## Motivation

[ClearScript](https://github.com/microsoft/ClearScript) allows you using .NET assemblies from JavaScript.

```csharp
// Example of a minimal JavaScript runtime
using Microsoft.ClearScript;
using Microsoft.ClearScript.V8;

using (var engine = new V8ScriptEngine())
{
    engine.AddHostObject("dotnet", HostItemFlags.GlobalMembers, new HostTypeCollection("mscorlib", "System.Core"));
    engine.Execute(File.ReadAllText(args[0]));
}
```

```javascript
// Surprisingly, this is JavaScript
System.Console.WriteLine(`Hello ${System.Environment.UserName}`);
```

```powershell
dotnet run -- $PWD/index.js
# output: Hello mukai
```

## Basic policy

For further information/example, check [system/object.d.ts](./system/object.d.ts) out.

- All descriptions are taken from [Microsoft Docs](https://docs.microsoft.com/en-us/dotnet/api/system) and listed in the `@see` tag.
- The descriptions are marked up.
- Remove `en-us` and version information `?view=net-x.x` in the URLs.
- Leave the overload information in the URLs.

## List of uncertain things

- `const` -> `readonly` at [system/timespan.d.ts](./system/timespan.d.ts) line:54
- Could not get properties of ValueTuple by name, they can only be accessed via ItemN. [system/console.d.ts](./system/console.d.ts) line:162
- ClearScript seems to convert V8 arrays as some kind of special object implements `IList<T>`. Therefore, arguments or return values using array may not work. [info](https://github.com/microsoft/ClearScript/issues/374)

## References

- https://microsoft.github.io/ClearScript/Reference/html/M_Microsoft_ClearScript_ScriptEngine_Evaluate_2.htm
- https://microsoft.github.io/ClearScript/Reference/html/M_Microsoft_ClearScript_ScriptEngine_AddHostObject.htm
- https://microsoft.github.io/ClearScript/Reference/html/M_Microsoft_ClearScript_HostFunctions_newVar__1.htm