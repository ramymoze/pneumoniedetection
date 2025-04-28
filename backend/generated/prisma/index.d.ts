
/**
 * Client
**/

import * as runtime from './runtime/library.js';
import $Types = runtime.Types // general types
import $Public = runtime.Types.Public
import $Utils = runtime.Types.Utils
import $Extensions = runtime.Types.Extensions
import $Result = runtime.Types.Result

export type PrismaPromise<T> = $Public.PrismaPromise<T>


/**
 * Model radiologue
 * 
 */
export type radiologue = $Result.DefaultSelection<Prisma.$radiologuePayload>
/**
 * Model doctor
 * 
 */
export type doctor = $Result.DefaultSelection<Prisma.$doctorPayload>
/**
 * Model patient
 * 
 */
export type patient = $Result.DefaultSelection<Prisma.$patientPayload>
/**
 * Model Radio
 * 
 */
export type Radio = $Result.DefaultSelection<Prisma.$RadioPayload>

/**
 * Enums
 */
export namespace $Enums {
  export const RadioType: {
  Bones: 'Bones',
  Lung: 'Lung',
  Other: 'Other'
};

export type RadioType = (typeof RadioType)[keyof typeof RadioType]

}

export type RadioType = $Enums.RadioType

export const RadioType: typeof $Enums.RadioType

/**
 * ##  Prisma Client ʲˢ
 *
 * Type-safe database client for TypeScript & Node.js
 * @example
 * ```
 * const prisma = new PrismaClient()
 * // Fetch zero or more Radiologues
 * const radiologues = await prisma.radiologue.findMany()
 * ```
 *
 *
 * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client).
 */
export class PrismaClient<
  ClientOptions extends Prisma.PrismaClientOptions = Prisma.PrismaClientOptions,
  U = 'log' extends keyof ClientOptions ? ClientOptions['log'] extends Array<Prisma.LogLevel | Prisma.LogDefinition> ? Prisma.GetEvents<ClientOptions['log']> : never : never,
  ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs
> {
  [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['other'] }

    /**
   * ##  Prisma Client ʲˢ
   *
   * Type-safe database client for TypeScript & Node.js
   * @example
   * ```
   * const prisma = new PrismaClient()
   * // Fetch zero or more Radiologues
   * const radiologues = await prisma.radiologue.findMany()
   * ```
   *
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client).
   */

  constructor(optionsArg ?: Prisma.Subset<ClientOptions, Prisma.PrismaClientOptions>);
  $on<V extends U>(eventType: V, callback: (event: V extends 'query' ? Prisma.QueryEvent : Prisma.LogEvent) => void): PrismaClient;

  /**
   * Connect with the database
   */
  $connect(): $Utils.JsPromise<void>;

  /**
   * Disconnect from the database
   */
  $disconnect(): $Utils.JsPromise<void>;

  /**
   * Add a middleware
   * @deprecated since 4.16.0. For new code, prefer client extensions instead.
   * @see https://pris.ly/d/extensions
   */
  $use(cb: Prisma.Middleware): void

/**
   * Executes a prepared raw query and returns the number of affected rows.
   * @example
   * ```
   * const result = await prisma.$executeRaw`UPDATE User SET cool = ${true} WHERE email = ${'user@email.com'};`
   * ```
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $executeRaw<T = unknown>(query: TemplateStringsArray | Prisma.Sql, ...values: any[]): Prisma.PrismaPromise<number>;

  /**
   * Executes a raw query and returns the number of affected rows.
   * Susceptible to SQL injections, see documentation.
   * @example
   * ```
   * const result = await prisma.$executeRawUnsafe('UPDATE User SET cool = $1 WHERE email = $2 ;', true, 'user@email.com')
   * ```
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $executeRawUnsafe<T = unknown>(query: string, ...values: any[]): Prisma.PrismaPromise<number>;

  /**
   * Performs a prepared raw query and returns the `SELECT` data.
   * @example
   * ```
   * const result = await prisma.$queryRaw`SELECT * FROM User WHERE id = ${1} OR email = ${'user@email.com'};`
   * ```
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $queryRaw<T = unknown>(query: TemplateStringsArray | Prisma.Sql, ...values: any[]): Prisma.PrismaPromise<T>;

  /**
   * Performs a raw query and returns the `SELECT` data.
   * Susceptible to SQL injections, see documentation.
   * @example
   * ```
   * const result = await prisma.$queryRawUnsafe('SELECT * FROM User WHERE id = $1 OR email = $2;', 1, 'user@email.com')
   * ```
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $queryRawUnsafe<T = unknown>(query: string, ...values: any[]): Prisma.PrismaPromise<T>;


  /**
   * Allows the running of a sequence of read/write operations that are guaranteed to either succeed or fail as a whole.
   * @example
   * ```
   * const [george, bob, alice] = await prisma.$transaction([
   *   prisma.user.create({ data: { name: 'George' } }),
   *   prisma.user.create({ data: { name: 'Bob' } }),
   *   prisma.user.create({ data: { name: 'Alice' } }),
   * ])
   * ```
   * 
   * Read more in our [docs](https://www.prisma.io/docs/concepts/components/prisma-client/transactions).
   */
  $transaction<P extends Prisma.PrismaPromise<any>[]>(arg: [...P], options?: { isolationLevel?: Prisma.TransactionIsolationLevel }): $Utils.JsPromise<runtime.Types.Utils.UnwrapTuple<P>>

  $transaction<R>(fn: (prisma: Omit<PrismaClient, runtime.ITXClientDenyList>) => $Utils.JsPromise<R>, options?: { maxWait?: number, timeout?: number, isolationLevel?: Prisma.TransactionIsolationLevel }): $Utils.JsPromise<R>


  $extends: $Extensions.ExtendsHook<"extends", Prisma.TypeMapCb<ClientOptions>, ExtArgs, $Utils.Call<Prisma.TypeMapCb<ClientOptions>, {
    extArgs: ExtArgs
  }>>

      /**
   * `prisma.radiologue`: Exposes CRUD operations for the **radiologue** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Radiologues
    * const radiologues = await prisma.radiologue.findMany()
    * ```
    */
  get radiologue(): Prisma.radiologueDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.doctor`: Exposes CRUD operations for the **doctor** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Doctors
    * const doctors = await prisma.doctor.findMany()
    * ```
    */
  get doctor(): Prisma.doctorDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.patient`: Exposes CRUD operations for the **patient** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Patients
    * const patients = await prisma.patient.findMany()
    * ```
    */
  get patient(): Prisma.patientDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.radio`: Exposes CRUD operations for the **Radio** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Radios
    * const radios = await prisma.radio.findMany()
    * ```
    */
  get radio(): Prisma.RadioDelegate<ExtArgs, ClientOptions>;
}

export namespace Prisma {
  export import DMMF = runtime.DMMF

  export type PrismaPromise<T> = $Public.PrismaPromise<T>

  /**
   * Validator
   */
  export import validator = runtime.Public.validator

  /**
   * Prisma Errors
   */
  export import PrismaClientKnownRequestError = runtime.PrismaClientKnownRequestError
  export import PrismaClientUnknownRequestError = runtime.PrismaClientUnknownRequestError
  export import PrismaClientRustPanicError = runtime.PrismaClientRustPanicError
  export import PrismaClientInitializationError = runtime.PrismaClientInitializationError
  export import PrismaClientValidationError = runtime.PrismaClientValidationError

  /**
   * Re-export of sql-template-tag
   */
  export import sql = runtime.sqltag
  export import empty = runtime.empty
  export import join = runtime.join
  export import raw = runtime.raw
  export import Sql = runtime.Sql



  /**
   * Decimal.js
   */
  export import Decimal = runtime.Decimal

  export type DecimalJsLike = runtime.DecimalJsLike

  /**
   * Metrics
   */
  export type Metrics = runtime.Metrics
  export type Metric<T> = runtime.Metric<T>
  export type MetricHistogram = runtime.MetricHistogram
  export type MetricHistogramBucket = runtime.MetricHistogramBucket

  /**
  * Extensions
  */
  export import Extension = $Extensions.UserArgs
  export import getExtensionContext = runtime.Extensions.getExtensionContext
  export import Args = $Public.Args
  export import Payload = $Public.Payload
  export import Result = $Public.Result
  export import Exact = $Public.Exact

  /**
   * Prisma Client JS version: 6.6.0
   * Query Engine version: f676762280b54cd07c770017ed3711ddde35f37a
   */
  export type PrismaVersion = {
    client: string
  }

  export const prismaVersion: PrismaVersion

  /**
   * Utility Types
   */


  export import JsonObject = runtime.JsonObject
  export import JsonArray = runtime.JsonArray
  export import JsonValue = runtime.JsonValue
  export import InputJsonObject = runtime.InputJsonObject
  export import InputJsonArray = runtime.InputJsonArray
  export import InputJsonValue = runtime.InputJsonValue

  /**
   * Types of the values used to represent different kinds of `null` values when working with JSON fields.
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  namespace NullTypes {
    /**
    * Type of `Prisma.DbNull`.
    *
    * You cannot use other instances of this class. Please use the `Prisma.DbNull` value.
    *
    * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
    */
    class DbNull {
      private DbNull: never
      private constructor()
    }

    /**
    * Type of `Prisma.JsonNull`.
    *
    * You cannot use other instances of this class. Please use the `Prisma.JsonNull` value.
    *
    * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
    */
    class JsonNull {
      private JsonNull: never
      private constructor()
    }

    /**
    * Type of `Prisma.AnyNull`.
    *
    * You cannot use other instances of this class. Please use the `Prisma.AnyNull` value.
    *
    * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
    */
    class AnyNull {
      private AnyNull: never
      private constructor()
    }
  }

  /**
   * Helper for filtering JSON entries that have `null` on the database (empty on the db)
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const DbNull: NullTypes.DbNull

  /**
   * Helper for filtering JSON entries that have JSON `null` values (not empty on the db)
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const JsonNull: NullTypes.JsonNull

  /**
   * Helper for filtering JSON entries that are `Prisma.DbNull` or `Prisma.JsonNull`
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const AnyNull: NullTypes.AnyNull

  type SelectAndInclude = {
    select: any
    include: any
  }

  type SelectAndOmit = {
    select: any
    omit: any
  }

  /**
   * Get the type of the value, that the Promise holds.
   */
  export type PromiseType<T extends PromiseLike<any>> = T extends PromiseLike<infer U> ? U : T;

  /**
   * Get the return type of a function which returns a Promise.
   */
  export type PromiseReturnType<T extends (...args: any) => $Utils.JsPromise<any>> = PromiseType<ReturnType<T>>

  /**
   * From T, pick a set of properties whose keys are in the union K
   */
  type Prisma__Pick<T, K extends keyof T> = {
      [P in K]: T[P];
  };


  export type Enumerable<T> = T | Array<T>;

  export type RequiredKeys<T> = {
    [K in keyof T]-?: {} extends Prisma__Pick<T, K> ? never : K
  }[keyof T]

  export type TruthyKeys<T> = keyof {
    [K in keyof T as T[K] extends false | undefined | null ? never : K]: K
  }

  export type TrueKeys<T> = TruthyKeys<Prisma__Pick<T, RequiredKeys<T>>>

  /**
   * Subset
   * @desc From `T` pick properties that exist in `U`. Simple version of Intersection
   */
  export type Subset<T, U> = {
    [key in keyof T]: key extends keyof U ? T[key] : never;
  };

  /**
   * SelectSubset
   * @desc From `T` pick properties that exist in `U`. Simple version of Intersection.
   * Additionally, it validates, if both select and include are present. If the case, it errors.
   */
  export type SelectSubset<T, U> = {
    [key in keyof T]: key extends keyof U ? T[key] : never
  } &
    (T extends SelectAndInclude
      ? 'Please either choose `select` or `include`.'
      : T extends SelectAndOmit
        ? 'Please either choose `select` or `omit`.'
        : {})

  /**
   * Subset + Intersection
   * @desc From `T` pick properties that exist in `U` and intersect `K`
   */
  export type SubsetIntersection<T, U, K> = {
    [key in keyof T]: key extends keyof U ? T[key] : never
  } &
    K

  type Without<T, U> = { [P in Exclude<keyof T, keyof U>]?: never };

  /**
   * XOR is needed to have a real mutually exclusive union type
   * https://stackoverflow.com/questions/42123407/does-typescript-support-mutually-exclusive-types
   */
  type XOR<T, U> =
    T extends object ?
    U extends object ?
      (Without<T, U> & U) | (Without<U, T> & T)
    : U : T


  /**
   * Is T a Record?
   */
  type IsObject<T extends any> = T extends Array<any>
  ? False
  : T extends Date
  ? False
  : T extends Uint8Array
  ? False
  : T extends BigInt
  ? False
  : T extends object
  ? True
  : False


  /**
   * If it's T[], return T
   */
  export type UnEnumerate<T extends unknown> = T extends Array<infer U> ? U : T

  /**
   * From ts-toolbelt
   */

  type __Either<O extends object, K extends Key> = Omit<O, K> &
    {
      // Merge all but K
      [P in K]: Prisma__Pick<O, P & keyof O> // With K possibilities
    }[K]

  type EitherStrict<O extends object, K extends Key> = Strict<__Either<O, K>>

  type EitherLoose<O extends object, K extends Key> = ComputeRaw<__Either<O, K>>

  type _Either<
    O extends object,
    K extends Key,
    strict extends Boolean
  > = {
    1: EitherStrict<O, K>
    0: EitherLoose<O, K>
  }[strict]

  type Either<
    O extends object,
    K extends Key,
    strict extends Boolean = 1
  > = O extends unknown ? _Either<O, K, strict> : never

  export type Union = any

  type PatchUndefined<O extends object, O1 extends object> = {
    [K in keyof O]: O[K] extends undefined ? At<O1, K> : O[K]
  } & {}

  /** Helper Types for "Merge" **/
  export type IntersectOf<U extends Union> = (
    U extends unknown ? (k: U) => void : never
  ) extends (k: infer I) => void
    ? I
    : never

  export type Overwrite<O extends object, O1 extends object> = {
      [K in keyof O]: K extends keyof O1 ? O1[K] : O[K];
  } & {};

  type _Merge<U extends object> = IntersectOf<Overwrite<U, {
      [K in keyof U]-?: At<U, K>;
  }>>;

  type Key = string | number | symbol;
  type AtBasic<O extends object, K extends Key> = K extends keyof O ? O[K] : never;
  type AtStrict<O extends object, K extends Key> = O[K & keyof O];
  type AtLoose<O extends object, K extends Key> = O extends unknown ? AtStrict<O, K> : never;
  export type At<O extends object, K extends Key, strict extends Boolean = 1> = {
      1: AtStrict<O, K>;
      0: AtLoose<O, K>;
  }[strict];

  export type ComputeRaw<A extends any> = A extends Function ? A : {
    [K in keyof A]: A[K];
  } & {};

  export type OptionalFlat<O> = {
    [K in keyof O]?: O[K];
  } & {};

  type _Record<K extends keyof any, T> = {
    [P in K]: T;
  };

  // cause typescript not to expand types and preserve names
  type NoExpand<T> = T extends unknown ? T : never;

  // this type assumes the passed object is entirely optional
  type AtLeast<O extends object, K extends string> = NoExpand<
    O extends unknown
    ? | (K extends keyof O ? { [P in K]: O[P] } & O : O)
      | {[P in keyof O as P extends K ? P : never]-?: O[P]} & O
    : never>;

  type _Strict<U, _U = U> = U extends unknown ? U & OptionalFlat<_Record<Exclude<Keys<_U>, keyof U>, never>> : never;

  export type Strict<U extends object> = ComputeRaw<_Strict<U>>;
  /** End Helper Types for "Merge" **/

  export type Merge<U extends object> = ComputeRaw<_Merge<Strict<U>>>;

  /**
  A [[Boolean]]
  */
  export type Boolean = True | False

  // /**
  // 1
  // */
  export type True = 1

  /**
  0
  */
  export type False = 0

  export type Not<B extends Boolean> = {
    0: 1
    1: 0
  }[B]

  export type Extends<A1 extends any, A2 extends any> = [A1] extends [never]
    ? 0 // anything `never` is false
    : A1 extends A2
    ? 1
    : 0

  export type Has<U extends Union, U1 extends Union> = Not<
    Extends<Exclude<U1, U>, U1>
  >

  export type Or<B1 extends Boolean, B2 extends Boolean> = {
    0: {
      0: 0
      1: 1
    }
    1: {
      0: 1
      1: 1
    }
  }[B1][B2]

  export type Keys<U extends Union> = U extends unknown ? keyof U : never

  type Cast<A, B> = A extends B ? A : B;

  export const type: unique symbol;



  /**
   * Used by group by
   */

  export type GetScalarType<T, O> = O extends object ? {
    [P in keyof T]: P extends keyof O
      ? O[P]
      : never
  } : never

  type FieldPaths<
    T,
    U = Omit<T, '_avg' | '_sum' | '_count' | '_min' | '_max'>
  > = IsObject<T> extends True ? U : T

  type GetHavingFields<T> = {
    [K in keyof T]: Or<
      Or<Extends<'OR', K>, Extends<'AND', K>>,
      Extends<'NOT', K>
    > extends True
      ? // infer is only needed to not hit TS limit
        // based on the brilliant idea of Pierre-Antoine Mills
        // https://github.com/microsoft/TypeScript/issues/30188#issuecomment-478938437
        T[K] extends infer TK
        ? GetHavingFields<UnEnumerate<TK> extends object ? Merge<UnEnumerate<TK>> : never>
        : never
      : {} extends FieldPaths<T[K]>
      ? never
      : K
  }[keyof T]

  /**
   * Convert tuple to union
   */
  type _TupleToUnion<T> = T extends (infer E)[] ? E : never
  type TupleToUnion<K extends readonly any[]> = _TupleToUnion<K>
  type MaybeTupleToUnion<T> = T extends any[] ? TupleToUnion<T> : T

  /**
   * Like `Pick`, but additionally can also accept an array of keys
   */
  type PickEnumerable<T, K extends Enumerable<keyof T> | keyof T> = Prisma__Pick<T, MaybeTupleToUnion<K>>

  /**
   * Exclude all keys with underscores
   */
  type ExcludeUnderscoreKeys<T extends string> = T extends `_${string}` ? never : T


  export type FieldRef<Model, FieldType> = runtime.FieldRef<Model, FieldType>

  type FieldRefInputType<Model, FieldType> = Model extends never ? never : FieldRef<Model, FieldType>


  export const ModelName: {
    radiologue: 'radiologue',
    doctor: 'doctor',
    patient: 'patient',
    Radio: 'Radio'
  };

  export type ModelName = (typeof ModelName)[keyof typeof ModelName]


  export type Datasources = {
    db?: Datasource
  }

  interface TypeMapCb<ClientOptions = {}> extends $Utils.Fn<{extArgs: $Extensions.InternalArgs }, $Utils.Record<string, any>> {
    returns: Prisma.TypeMap<this['params']['extArgs'], ClientOptions extends { omit: infer OmitOptions } ? OmitOptions : {}>
  }

  export type TypeMap<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> = {
    globalOmitOptions: {
      omit: GlobalOmitOptions
    }
    meta: {
      modelProps: "radiologue" | "doctor" | "patient" | "radio"
      txIsolationLevel: Prisma.TransactionIsolationLevel
    }
    model: {
      radiologue: {
        payload: Prisma.$radiologuePayload<ExtArgs>
        fields: Prisma.radiologueFieldRefs
        operations: {
          findUnique: {
            args: Prisma.radiologueFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$radiologuePayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.radiologueFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$radiologuePayload>
          }
          findFirst: {
            args: Prisma.radiologueFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$radiologuePayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.radiologueFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$radiologuePayload>
          }
          findMany: {
            args: Prisma.radiologueFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$radiologuePayload>[]
          }
          create: {
            args: Prisma.radiologueCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$radiologuePayload>
          }
          createMany: {
            args: Prisma.radiologueCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.radiologueCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$radiologuePayload>[]
          }
          delete: {
            args: Prisma.radiologueDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$radiologuePayload>
          }
          update: {
            args: Prisma.radiologueUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$radiologuePayload>
          }
          deleteMany: {
            args: Prisma.radiologueDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.radiologueUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.radiologueUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$radiologuePayload>[]
          }
          upsert: {
            args: Prisma.radiologueUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$radiologuePayload>
          }
          aggregate: {
            args: Prisma.RadiologueAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateRadiologue>
          }
          groupBy: {
            args: Prisma.radiologueGroupByArgs<ExtArgs>
            result: $Utils.Optional<RadiologueGroupByOutputType>[]
          }
          count: {
            args: Prisma.radiologueCountArgs<ExtArgs>
            result: $Utils.Optional<RadiologueCountAggregateOutputType> | number
          }
        }
      }
      doctor: {
        payload: Prisma.$doctorPayload<ExtArgs>
        fields: Prisma.doctorFieldRefs
        operations: {
          findUnique: {
            args: Prisma.doctorFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$doctorPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.doctorFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$doctorPayload>
          }
          findFirst: {
            args: Prisma.doctorFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$doctorPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.doctorFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$doctorPayload>
          }
          findMany: {
            args: Prisma.doctorFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$doctorPayload>[]
          }
          create: {
            args: Prisma.doctorCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$doctorPayload>
          }
          createMany: {
            args: Prisma.doctorCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.doctorCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$doctorPayload>[]
          }
          delete: {
            args: Prisma.doctorDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$doctorPayload>
          }
          update: {
            args: Prisma.doctorUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$doctorPayload>
          }
          deleteMany: {
            args: Prisma.doctorDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.doctorUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.doctorUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$doctorPayload>[]
          }
          upsert: {
            args: Prisma.doctorUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$doctorPayload>
          }
          aggregate: {
            args: Prisma.DoctorAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateDoctor>
          }
          groupBy: {
            args: Prisma.doctorGroupByArgs<ExtArgs>
            result: $Utils.Optional<DoctorGroupByOutputType>[]
          }
          count: {
            args: Prisma.doctorCountArgs<ExtArgs>
            result: $Utils.Optional<DoctorCountAggregateOutputType> | number
          }
        }
      }
      patient: {
        payload: Prisma.$patientPayload<ExtArgs>
        fields: Prisma.patientFieldRefs
        operations: {
          findUnique: {
            args: Prisma.patientFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$patientPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.patientFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$patientPayload>
          }
          findFirst: {
            args: Prisma.patientFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$patientPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.patientFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$patientPayload>
          }
          findMany: {
            args: Prisma.patientFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$patientPayload>[]
          }
          create: {
            args: Prisma.patientCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$patientPayload>
          }
          createMany: {
            args: Prisma.patientCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.patientCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$patientPayload>[]
          }
          delete: {
            args: Prisma.patientDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$patientPayload>
          }
          update: {
            args: Prisma.patientUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$patientPayload>
          }
          deleteMany: {
            args: Prisma.patientDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.patientUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.patientUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$patientPayload>[]
          }
          upsert: {
            args: Prisma.patientUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$patientPayload>
          }
          aggregate: {
            args: Prisma.PatientAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregatePatient>
          }
          groupBy: {
            args: Prisma.patientGroupByArgs<ExtArgs>
            result: $Utils.Optional<PatientGroupByOutputType>[]
          }
          count: {
            args: Prisma.patientCountArgs<ExtArgs>
            result: $Utils.Optional<PatientCountAggregateOutputType> | number
          }
        }
      }
      Radio: {
        payload: Prisma.$RadioPayload<ExtArgs>
        fields: Prisma.RadioFieldRefs
        operations: {
          findUnique: {
            args: Prisma.RadioFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RadioPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.RadioFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RadioPayload>
          }
          findFirst: {
            args: Prisma.RadioFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RadioPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.RadioFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RadioPayload>
          }
          findMany: {
            args: Prisma.RadioFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RadioPayload>[]
          }
          create: {
            args: Prisma.RadioCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RadioPayload>
          }
          createMany: {
            args: Prisma.RadioCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.RadioCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RadioPayload>[]
          }
          delete: {
            args: Prisma.RadioDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RadioPayload>
          }
          update: {
            args: Prisma.RadioUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RadioPayload>
          }
          deleteMany: {
            args: Prisma.RadioDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.RadioUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.RadioUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RadioPayload>[]
          }
          upsert: {
            args: Prisma.RadioUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RadioPayload>
          }
          aggregate: {
            args: Prisma.RadioAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateRadio>
          }
          groupBy: {
            args: Prisma.RadioGroupByArgs<ExtArgs>
            result: $Utils.Optional<RadioGroupByOutputType>[]
          }
          count: {
            args: Prisma.RadioCountArgs<ExtArgs>
            result: $Utils.Optional<RadioCountAggregateOutputType> | number
          }
        }
      }
    }
  } & {
    other: {
      payload: any
      operations: {
        $executeRaw: {
          args: [query: TemplateStringsArray | Prisma.Sql, ...values: any[]],
          result: any
        }
        $executeRawUnsafe: {
          args: [query: string, ...values: any[]],
          result: any
        }
        $queryRaw: {
          args: [query: TemplateStringsArray | Prisma.Sql, ...values: any[]],
          result: any
        }
        $queryRawUnsafe: {
          args: [query: string, ...values: any[]],
          result: any
        }
      }
    }
  }
  export const defineExtension: $Extensions.ExtendsHook<"define", Prisma.TypeMapCb, $Extensions.DefaultArgs>
  export type DefaultPrismaClient = PrismaClient
  export type ErrorFormat = 'pretty' | 'colorless' | 'minimal'
  export interface PrismaClientOptions {
    /**
     * Overwrites the datasource url from your schema.prisma file
     */
    datasources?: Datasources
    /**
     * Overwrites the datasource url from your schema.prisma file
     */
    datasourceUrl?: string
    /**
     * @default "colorless"
     */
    errorFormat?: ErrorFormat
    /**
     * @example
     * ```
     * // Defaults to stdout
     * log: ['query', 'info', 'warn', 'error']
     * 
     * // Emit as events
     * log: [
     *   { emit: 'stdout', level: 'query' },
     *   { emit: 'stdout', level: 'info' },
     *   { emit: 'stdout', level: 'warn' }
     *   { emit: 'stdout', level: 'error' }
     * ]
     * ```
     * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/logging#the-log-option).
     */
    log?: (LogLevel | LogDefinition)[]
    /**
     * The default values for transactionOptions
     * maxWait ?= 2000
     * timeout ?= 5000
     */
    transactionOptions?: {
      maxWait?: number
      timeout?: number
      isolationLevel?: Prisma.TransactionIsolationLevel
    }
    /**
     * Global configuration for omitting model fields by default.
     * 
     * @example
     * ```
     * const prisma = new PrismaClient({
     *   omit: {
     *     user: {
     *       password: true
     *     }
     *   }
     * })
     * ```
     */
    omit?: Prisma.GlobalOmitConfig
  }
  export type GlobalOmitConfig = {
    radiologue?: radiologueOmit
    doctor?: doctorOmit
    patient?: patientOmit
    radio?: RadioOmit
  }

  /* Types for Logging */
  export type LogLevel = 'info' | 'query' | 'warn' | 'error'
  export type LogDefinition = {
    level: LogLevel
    emit: 'stdout' | 'event'
  }

  export type GetLogType<T extends LogLevel | LogDefinition> = T extends LogDefinition ? T['emit'] extends 'event' ? T['level'] : never : never
  export type GetEvents<T extends any> = T extends Array<LogLevel | LogDefinition> ?
    GetLogType<T[0]> | GetLogType<T[1]> | GetLogType<T[2]> | GetLogType<T[3]>
    : never

  export type QueryEvent = {
    timestamp: Date
    query: string
    params: string
    duration: number
    target: string
  }

  export type LogEvent = {
    timestamp: Date
    message: string
    target: string
  }
  /* End Types for Logging */


  export type PrismaAction =
    | 'findUnique'
    | 'findUniqueOrThrow'
    | 'findMany'
    | 'findFirst'
    | 'findFirstOrThrow'
    | 'create'
    | 'createMany'
    | 'createManyAndReturn'
    | 'update'
    | 'updateMany'
    | 'updateManyAndReturn'
    | 'upsert'
    | 'delete'
    | 'deleteMany'
    | 'executeRaw'
    | 'queryRaw'
    | 'aggregate'
    | 'count'
    | 'runCommandRaw'
    | 'findRaw'
    | 'groupBy'

  /**
   * These options are being passed into the middleware as "params"
   */
  export type MiddlewareParams = {
    model?: ModelName
    action: PrismaAction
    args: any
    dataPath: string[]
    runInTransaction: boolean
  }

  /**
   * The `T` type makes sure, that the `return proceed` is not forgotten in the middleware implementation
   */
  export type Middleware<T = any> = (
    params: MiddlewareParams,
    next: (params: MiddlewareParams) => $Utils.JsPromise<T>,
  ) => $Utils.JsPromise<T>

  // tested in getLogLevel.test.ts
  export function getLogLevel(log: Array<LogLevel | LogDefinition>): LogLevel | undefined;

  /**
   * `PrismaClient` proxy available in interactive transactions.
   */
  export type TransactionClient = Omit<Prisma.DefaultPrismaClient, runtime.ITXClientDenyList>

  export type Datasource = {
    url?: string
  }

  /**
   * Count Types
   */


  /**
   * Count Type RadiologueCountOutputType
   */

  export type RadiologueCountOutputType = {
    redio_liste: number
  }

  export type RadiologueCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    redio_liste?: boolean | RadiologueCountOutputTypeCountRedio_listeArgs
  }

  // Custom InputTypes
  /**
   * RadiologueCountOutputType without action
   */
  export type RadiologueCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the RadiologueCountOutputType
     */
    select?: RadiologueCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * RadiologueCountOutputType without action
   */
  export type RadiologueCountOutputTypeCountRedio_listeArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: RadioWhereInput
  }


  /**
   * Count Type DoctorCountOutputType
   */

  export type DoctorCountOutputType = {
    redio_liste: number
  }

  export type DoctorCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    redio_liste?: boolean | DoctorCountOutputTypeCountRedio_listeArgs
  }

  // Custom InputTypes
  /**
   * DoctorCountOutputType without action
   */
  export type DoctorCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the DoctorCountOutputType
     */
    select?: DoctorCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * DoctorCountOutputType without action
   */
  export type DoctorCountOutputTypeCountRedio_listeArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: RadioWhereInput
  }


  /**
   * Count Type PatientCountOutputType
   */

  export type PatientCountOutputType = {
    redio_liste: number
  }

  export type PatientCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    redio_liste?: boolean | PatientCountOutputTypeCountRedio_listeArgs
  }

  // Custom InputTypes
  /**
   * PatientCountOutputType without action
   */
  export type PatientCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PatientCountOutputType
     */
    select?: PatientCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * PatientCountOutputType without action
   */
  export type PatientCountOutputTypeCountRedio_listeArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: RadioWhereInput
  }


  /**
   * Models
   */

  /**
   * Model radiologue
   */

  export type AggregateRadiologue = {
    _count: RadiologueCountAggregateOutputType | null
    _min: RadiologueMinAggregateOutputType | null
    _max: RadiologueMaxAggregateOutputType | null
  }

  export type RadiologueMinAggregateOutputType = {
    id: string | null
    firstName: string | null
    lastName: string | null
    email: string | null
    password: string | null
  }

  export type RadiologueMaxAggregateOutputType = {
    id: string | null
    firstName: string | null
    lastName: string | null
    email: string | null
    password: string | null
  }

  export type RadiologueCountAggregateOutputType = {
    id: number
    firstName: number
    lastName: number
    email: number
    password: number
    _all: number
  }


  export type RadiologueMinAggregateInputType = {
    id?: true
    firstName?: true
    lastName?: true
    email?: true
    password?: true
  }

  export type RadiologueMaxAggregateInputType = {
    id?: true
    firstName?: true
    lastName?: true
    email?: true
    password?: true
  }

  export type RadiologueCountAggregateInputType = {
    id?: true
    firstName?: true
    lastName?: true
    email?: true
    password?: true
    _all?: true
  }

  export type RadiologueAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which radiologue to aggregate.
     */
    where?: radiologueWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of radiologues to fetch.
     */
    orderBy?: radiologueOrderByWithRelationInput | radiologueOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: radiologueWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` radiologues from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` radiologues.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned radiologues
    **/
    _count?: true | RadiologueCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: RadiologueMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: RadiologueMaxAggregateInputType
  }

  export type GetRadiologueAggregateType<T extends RadiologueAggregateArgs> = {
        [P in keyof T & keyof AggregateRadiologue]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateRadiologue[P]>
      : GetScalarType<T[P], AggregateRadiologue[P]>
  }




  export type radiologueGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: radiologueWhereInput
    orderBy?: radiologueOrderByWithAggregationInput | radiologueOrderByWithAggregationInput[]
    by: RadiologueScalarFieldEnum[] | RadiologueScalarFieldEnum
    having?: radiologueScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: RadiologueCountAggregateInputType | true
    _min?: RadiologueMinAggregateInputType
    _max?: RadiologueMaxAggregateInputType
  }

  export type RadiologueGroupByOutputType = {
    id: string
    firstName: string
    lastName: string
    email: string
    password: string
    _count: RadiologueCountAggregateOutputType | null
    _min: RadiologueMinAggregateOutputType | null
    _max: RadiologueMaxAggregateOutputType | null
  }

  type GetRadiologueGroupByPayload<T extends radiologueGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<RadiologueGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof RadiologueGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], RadiologueGroupByOutputType[P]>
            : GetScalarType<T[P], RadiologueGroupByOutputType[P]>
        }
      >
    >


  export type radiologueSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    firstName?: boolean
    lastName?: boolean
    email?: boolean
    password?: boolean
    redio_liste?: boolean | radiologue$redio_listeArgs<ExtArgs>
    _count?: boolean | RadiologueCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["radiologue"]>

  export type radiologueSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    firstName?: boolean
    lastName?: boolean
    email?: boolean
    password?: boolean
  }, ExtArgs["result"]["radiologue"]>

  export type radiologueSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    firstName?: boolean
    lastName?: boolean
    email?: boolean
    password?: boolean
  }, ExtArgs["result"]["radiologue"]>

  export type radiologueSelectScalar = {
    id?: boolean
    firstName?: boolean
    lastName?: boolean
    email?: boolean
    password?: boolean
  }

  export type radiologueOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "firstName" | "lastName" | "email" | "password", ExtArgs["result"]["radiologue"]>
  export type radiologueInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    redio_liste?: boolean | radiologue$redio_listeArgs<ExtArgs>
    _count?: boolean | RadiologueCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type radiologueIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}
  export type radiologueIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}

  export type $radiologuePayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "radiologue"
    objects: {
      redio_liste: Prisma.$RadioPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      firstName: string
      lastName: string
      email: string
      password: string
    }, ExtArgs["result"]["radiologue"]>
    composites: {}
  }

  type radiologueGetPayload<S extends boolean | null | undefined | radiologueDefaultArgs> = $Result.GetResult<Prisma.$radiologuePayload, S>

  type radiologueCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<radiologueFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: RadiologueCountAggregateInputType | true
    }

  export interface radiologueDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['radiologue'], meta: { name: 'radiologue' } }
    /**
     * Find zero or one Radiologue that matches the filter.
     * @param {radiologueFindUniqueArgs} args - Arguments to find a Radiologue
     * @example
     * // Get one Radiologue
     * const radiologue = await prisma.radiologue.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends radiologueFindUniqueArgs>(args: SelectSubset<T, radiologueFindUniqueArgs<ExtArgs>>): Prisma__radiologueClient<$Result.GetResult<Prisma.$radiologuePayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Radiologue that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {radiologueFindUniqueOrThrowArgs} args - Arguments to find a Radiologue
     * @example
     * // Get one Radiologue
     * const radiologue = await prisma.radiologue.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends radiologueFindUniqueOrThrowArgs>(args: SelectSubset<T, radiologueFindUniqueOrThrowArgs<ExtArgs>>): Prisma__radiologueClient<$Result.GetResult<Prisma.$radiologuePayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Radiologue that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {radiologueFindFirstArgs} args - Arguments to find a Radiologue
     * @example
     * // Get one Radiologue
     * const radiologue = await prisma.radiologue.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends radiologueFindFirstArgs>(args?: SelectSubset<T, radiologueFindFirstArgs<ExtArgs>>): Prisma__radiologueClient<$Result.GetResult<Prisma.$radiologuePayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Radiologue that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {radiologueFindFirstOrThrowArgs} args - Arguments to find a Radiologue
     * @example
     * // Get one Radiologue
     * const radiologue = await prisma.radiologue.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends radiologueFindFirstOrThrowArgs>(args?: SelectSubset<T, radiologueFindFirstOrThrowArgs<ExtArgs>>): Prisma__radiologueClient<$Result.GetResult<Prisma.$radiologuePayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Radiologues that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {radiologueFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Radiologues
     * const radiologues = await prisma.radiologue.findMany()
     * 
     * // Get first 10 Radiologues
     * const radiologues = await prisma.radiologue.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const radiologueWithIdOnly = await prisma.radiologue.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends radiologueFindManyArgs>(args?: SelectSubset<T, radiologueFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$radiologuePayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Radiologue.
     * @param {radiologueCreateArgs} args - Arguments to create a Radiologue.
     * @example
     * // Create one Radiologue
     * const Radiologue = await prisma.radiologue.create({
     *   data: {
     *     // ... data to create a Radiologue
     *   }
     * })
     * 
     */
    create<T extends radiologueCreateArgs>(args: SelectSubset<T, radiologueCreateArgs<ExtArgs>>): Prisma__radiologueClient<$Result.GetResult<Prisma.$radiologuePayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Radiologues.
     * @param {radiologueCreateManyArgs} args - Arguments to create many Radiologues.
     * @example
     * // Create many Radiologues
     * const radiologue = await prisma.radiologue.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends radiologueCreateManyArgs>(args?: SelectSubset<T, radiologueCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Radiologues and returns the data saved in the database.
     * @param {radiologueCreateManyAndReturnArgs} args - Arguments to create many Radiologues.
     * @example
     * // Create many Radiologues
     * const radiologue = await prisma.radiologue.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Radiologues and only return the `id`
     * const radiologueWithIdOnly = await prisma.radiologue.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends radiologueCreateManyAndReturnArgs>(args?: SelectSubset<T, radiologueCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$radiologuePayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Radiologue.
     * @param {radiologueDeleteArgs} args - Arguments to delete one Radiologue.
     * @example
     * // Delete one Radiologue
     * const Radiologue = await prisma.radiologue.delete({
     *   where: {
     *     // ... filter to delete one Radiologue
     *   }
     * })
     * 
     */
    delete<T extends radiologueDeleteArgs>(args: SelectSubset<T, radiologueDeleteArgs<ExtArgs>>): Prisma__radiologueClient<$Result.GetResult<Prisma.$radiologuePayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Radiologue.
     * @param {radiologueUpdateArgs} args - Arguments to update one Radiologue.
     * @example
     * // Update one Radiologue
     * const radiologue = await prisma.radiologue.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends radiologueUpdateArgs>(args: SelectSubset<T, radiologueUpdateArgs<ExtArgs>>): Prisma__radiologueClient<$Result.GetResult<Prisma.$radiologuePayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Radiologues.
     * @param {radiologueDeleteManyArgs} args - Arguments to filter Radiologues to delete.
     * @example
     * // Delete a few Radiologues
     * const { count } = await prisma.radiologue.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends radiologueDeleteManyArgs>(args?: SelectSubset<T, radiologueDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Radiologues.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {radiologueUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Radiologues
     * const radiologue = await prisma.radiologue.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends radiologueUpdateManyArgs>(args: SelectSubset<T, radiologueUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Radiologues and returns the data updated in the database.
     * @param {radiologueUpdateManyAndReturnArgs} args - Arguments to update many Radiologues.
     * @example
     * // Update many Radiologues
     * const radiologue = await prisma.radiologue.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Radiologues and only return the `id`
     * const radiologueWithIdOnly = await prisma.radiologue.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends radiologueUpdateManyAndReturnArgs>(args: SelectSubset<T, radiologueUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$radiologuePayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Radiologue.
     * @param {radiologueUpsertArgs} args - Arguments to update or create a Radiologue.
     * @example
     * // Update or create a Radiologue
     * const radiologue = await prisma.radiologue.upsert({
     *   create: {
     *     // ... data to create a Radiologue
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Radiologue we want to update
     *   }
     * })
     */
    upsert<T extends radiologueUpsertArgs>(args: SelectSubset<T, radiologueUpsertArgs<ExtArgs>>): Prisma__radiologueClient<$Result.GetResult<Prisma.$radiologuePayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Radiologues.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {radiologueCountArgs} args - Arguments to filter Radiologues to count.
     * @example
     * // Count the number of Radiologues
     * const count = await prisma.radiologue.count({
     *   where: {
     *     // ... the filter for the Radiologues we want to count
     *   }
     * })
    **/
    count<T extends radiologueCountArgs>(
      args?: Subset<T, radiologueCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], RadiologueCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Radiologue.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {RadiologueAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends RadiologueAggregateArgs>(args: Subset<T, RadiologueAggregateArgs>): Prisma.PrismaPromise<GetRadiologueAggregateType<T>>

    /**
     * Group by Radiologue.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {radiologueGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends radiologueGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: radiologueGroupByArgs['orderBy'] }
        : { orderBy?: radiologueGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, radiologueGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetRadiologueGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the radiologue model
   */
  readonly fields: radiologueFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for radiologue.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__radiologueClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    redio_liste<T extends radiologue$redio_listeArgs<ExtArgs> = {}>(args?: Subset<T, radiologue$redio_listeArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$RadioPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the radiologue model
   */
  interface radiologueFieldRefs {
    readonly id: FieldRef<"radiologue", 'String'>
    readonly firstName: FieldRef<"radiologue", 'String'>
    readonly lastName: FieldRef<"radiologue", 'String'>
    readonly email: FieldRef<"radiologue", 'String'>
    readonly password: FieldRef<"radiologue", 'String'>
  }
    

  // Custom InputTypes
  /**
   * radiologue findUnique
   */
  export type radiologueFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the radiologue
     */
    select?: radiologueSelect<ExtArgs> | null
    /**
     * Omit specific fields from the radiologue
     */
    omit?: radiologueOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: radiologueInclude<ExtArgs> | null
    /**
     * Filter, which radiologue to fetch.
     */
    where: radiologueWhereUniqueInput
  }

  /**
   * radiologue findUniqueOrThrow
   */
  export type radiologueFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the radiologue
     */
    select?: radiologueSelect<ExtArgs> | null
    /**
     * Omit specific fields from the radiologue
     */
    omit?: radiologueOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: radiologueInclude<ExtArgs> | null
    /**
     * Filter, which radiologue to fetch.
     */
    where: radiologueWhereUniqueInput
  }

  /**
   * radiologue findFirst
   */
  export type radiologueFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the radiologue
     */
    select?: radiologueSelect<ExtArgs> | null
    /**
     * Omit specific fields from the radiologue
     */
    omit?: radiologueOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: radiologueInclude<ExtArgs> | null
    /**
     * Filter, which radiologue to fetch.
     */
    where?: radiologueWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of radiologues to fetch.
     */
    orderBy?: radiologueOrderByWithRelationInput | radiologueOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for radiologues.
     */
    cursor?: radiologueWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` radiologues from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` radiologues.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of radiologues.
     */
    distinct?: RadiologueScalarFieldEnum | RadiologueScalarFieldEnum[]
  }

  /**
   * radiologue findFirstOrThrow
   */
  export type radiologueFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the radiologue
     */
    select?: radiologueSelect<ExtArgs> | null
    /**
     * Omit specific fields from the radiologue
     */
    omit?: radiologueOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: radiologueInclude<ExtArgs> | null
    /**
     * Filter, which radiologue to fetch.
     */
    where?: radiologueWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of radiologues to fetch.
     */
    orderBy?: radiologueOrderByWithRelationInput | radiologueOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for radiologues.
     */
    cursor?: radiologueWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` radiologues from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` radiologues.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of radiologues.
     */
    distinct?: RadiologueScalarFieldEnum | RadiologueScalarFieldEnum[]
  }

  /**
   * radiologue findMany
   */
  export type radiologueFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the radiologue
     */
    select?: radiologueSelect<ExtArgs> | null
    /**
     * Omit specific fields from the radiologue
     */
    omit?: radiologueOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: radiologueInclude<ExtArgs> | null
    /**
     * Filter, which radiologues to fetch.
     */
    where?: radiologueWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of radiologues to fetch.
     */
    orderBy?: radiologueOrderByWithRelationInput | radiologueOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing radiologues.
     */
    cursor?: radiologueWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` radiologues from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` radiologues.
     */
    skip?: number
    distinct?: RadiologueScalarFieldEnum | RadiologueScalarFieldEnum[]
  }

  /**
   * radiologue create
   */
  export type radiologueCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the radiologue
     */
    select?: radiologueSelect<ExtArgs> | null
    /**
     * Omit specific fields from the radiologue
     */
    omit?: radiologueOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: radiologueInclude<ExtArgs> | null
    /**
     * The data needed to create a radiologue.
     */
    data: XOR<radiologueCreateInput, radiologueUncheckedCreateInput>
  }

  /**
   * radiologue createMany
   */
  export type radiologueCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many radiologues.
     */
    data: radiologueCreateManyInput | radiologueCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * radiologue createManyAndReturn
   */
  export type radiologueCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the radiologue
     */
    select?: radiologueSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the radiologue
     */
    omit?: radiologueOmit<ExtArgs> | null
    /**
     * The data used to create many radiologues.
     */
    data: radiologueCreateManyInput | radiologueCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * radiologue update
   */
  export type radiologueUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the radiologue
     */
    select?: radiologueSelect<ExtArgs> | null
    /**
     * Omit specific fields from the radiologue
     */
    omit?: radiologueOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: radiologueInclude<ExtArgs> | null
    /**
     * The data needed to update a radiologue.
     */
    data: XOR<radiologueUpdateInput, radiologueUncheckedUpdateInput>
    /**
     * Choose, which radiologue to update.
     */
    where: radiologueWhereUniqueInput
  }

  /**
   * radiologue updateMany
   */
  export type radiologueUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update radiologues.
     */
    data: XOR<radiologueUpdateManyMutationInput, radiologueUncheckedUpdateManyInput>
    /**
     * Filter which radiologues to update
     */
    where?: radiologueWhereInput
    /**
     * Limit how many radiologues to update.
     */
    limit?: number
  }

  /**
   * radiologue updateManyAndReturn
   */
  export type radiologueUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the radiologue
     */
    select?: radiologueSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the radiologue
     */
    omit?: radiologueOmit<ExtArgs> | null
    /**
     * The data used to update radiologues.
     */
    data: XOR<radiologueUpdateManyMutationInput, radiologueUncheckedUpdateManyInput>
    /**
     * Filter which radiologues to update
     */
    where?: radiologueWhereInput
    /**
     * Limit how many radiologues to update.
     */
    limit?: number
  }

  /**
   * radiologue upsert
   */
  export type radiologueUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the radiologue
     */
    select?: radiologueSelect<ExtArgs> | null
    /**
     * Omit specific fields from the radiologue
     */
    omit?: radiologueOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: radiologueInclude<ExtArgs> | null
    /**
     * The filter to search for the radiologue to update in case it exists.
     */
    where: radiologueWhereUniqueInput
    /**
     * In case the radiologue found by the `where` argument doesn't exist, create a new radiologue with this data.
     */
    create: XOR<radiologueCreateInput, radiologueUncheckedCreateInput>
    /**
     * In case the radiologue was found with the provided `where` argument, update it with this data.
     */
    update: XOR<radiologueUpdateInput, radiologueUncheckedUpdateInput>
  }

  /**
   * radiologue delete
   */
  export type radiologueDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the radiologue
     */
    select?: radiologueSelect<ExtArgs> | null
    /**
     * Omit specific fields from the radiologue
     */
    omit?: radiologueOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: radiologueInclude<ExtArgs> | null
    /**
     * Filter which radiologue to delete.
     */
    where: radiologueWhereUniqueInput
  }

  /**
   * radiologue deleteMany
   */
  export type radiologueDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which radiologues to delete
     */
    where?: radiologueWhereInput
    /**
     * Limit how many radiologues to delete.
     */
    limit?: number
  }

  /**
   * radiologue.redio_liste
   */
  export type radiologue$redio_listeArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Radio
     */
    select?: RadioSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Radio
     */
    omit?: RadioOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RadioInclude<ExtArgs> | null
    where?: RadioWhereInput
    orderBy?: RadioOrderByWithRelationInput | RadioOrderByWithRelationInput[]
    cursor?: RadioWhereUniqueInput
    take?: number
    skip?: number
    distinct?: RadioScalarFieldEnum | RadioScalarFieldEnum[]
  }

  /**
   * radiologue without action
   */
  export type radiologueDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the radiologue
     */
    select?: radiologueSelect<ExtArgs> | null
    /**
     * Omit specific fields from the radiologue
     */
    omit?: radiologueOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: radiologueInclude<ExtArgs> | null
  }


  /**
   * Model doctor
   */

  export type AggregateDoctor = {
    _count: DoctorCountAggregateOutputType | null
    _min: DoctorMinAggregateOutputType | null
    _max: DoctorMaxAggregateOutputType | null
  }

  export type DoctorMinAggregateOutputType = {
    id: string | null
    firstName: string | null
    lastName: string | null
    email: string | null
    password: string | null
  }

  export type DoctorMaxAggregateOutputType = {
    id: string | null
    firstName: string | null
    lastName: string | null
    email: string | null
    password: string | null
  }

  export type DoctorCountAggregateOutputType = {
    id: number
    firstName: number
    lastName: number
    email: number
    password: number
    _all: number
  }


  export type DoctorMinAggregateInputType = {
    id?: true
    firstName?: true
    lastName?: true
    email?: true
    password?: true
  }

  export type DoctorMaxAggregateInputType = {
    id?: true
    firstName?: true
    lastName?: true
    email?: true
    password?: true
  }

  export type DoctorCountAggregateInputType = {
    id?: true
    firstName?: true
    lastName?: true
    email?: true
    password?: true
    _all?: true
  }

  export type DoctorAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which doctor to aggregate.
     */
    where?: doctorWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of doctors to fetch.
     */
    orderBy?: doctorOrderByWithRelationInput | doctorOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: doctorWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` doctors from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` doctors.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned doctors
    **/
    _count?: true | DoctorCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: DoctorMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: DoctorMaxAggregateInputType
  }

  export type GetDoctorAggregateType<T extends DoctorAggregateArgs> = {
        [P in keyof T & keyof AggregateDoctor]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateDoctor[P]>
      : GetScalarType<T[P], AggregateDoctor[P]>
  }




  export type doctorGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: doctorWhereInput
    orderBy?: doctorOrderByWithAggregationInput | doctorOrderByWithAggregationInput[]
    by: DoctorScalarFieldEnum[] | DoctorScalarFieldEnum
    having?: doctorScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: DoctorCountAggregateInputType | true
    _min?: DoctorMinAggregateInputType
    _max?: DoctorMaxAggregateInputType
  }

  export type DoctorGroupByOutputType = {
    id: string
    firstName: string
    lastName: string
    email: string
    password: string
    _count: DoctorCountAggregateOutputType | null
    _min: DoctorMinAggregateOutputType | null
    _max: DoctorMaxAggregateOutputType | null
  }

  type GetDoctorGroupByPayload<T extends doctorGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<DoctorGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof DoctorGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], DoctorGroupByOutputType[P]>
            : GetScalarType<T[P], DoctorGroupByOutputType[P]>
        }
      >
    >


  export type doctorSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    firstName?: boolean
    lastName?: boolean
    email?: boolean
    password?: boolean
    redio_liste?: boolean | doctor$redio_listeArgs<ExtArgs>
    _count?: boolean | DoctorCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["doctor"]>

  export type doctorSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    firstName?: boolean
    lastName?: boolean
    email?: boolean
    password?: boolean
  }, ExtArgs["result"]["doctor"]>

  export type doctorSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    firstName?: boolean
    lastName?: boolean
    email?: boolean
    password?: boolean
  }, ExtArgs["result"]["doctor"]>

  export type doctorSelectScalar = {
    id?: boolean
    firstName?: boolean
    lastName?: boolean
    email?: boolean
    password?: boolean
  }

  export type doctorOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "firstName" | "lastName" | "email" | "password", ExtArgs["result"]["doctor"]>
  export type doctorInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    redio_liste?: boolean | doctor$redio_listeArgs<ExtArgs>
    _count?: boolean | DoctorCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type doctorIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}
  export type doctorIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}

  export type $doctorPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "doctor"
    objects: {
      redio_liste: Prisma.$RadioPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      firstName: string
      lastName: string
      email: string
      password: string
    }, ExtArgs["result"]["doctor"]>
    composites: {}
  }

  type doctorGetPayload<S extends boolean | null | undefined | doctorDefaultArgs> = $Result.GetResult<Prisma.$doctorPayload, S>

  type doctorCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<doctorFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: DoctorCountAggregateInputType | true
    }

  export interface doctorDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['doctor'], meta: { name: 'doctor' } }
    /**
     * Find zero or one Doctor that matches the filter.
     * @param {doctorFindUniqueArgs} args - Arguments to find a Doctor
     * @example
     * // Get one Doctor
     * const doctor = await prisma.doctor.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends doctorFindUniqueArgs>(args: SelectSubset<T, doctorFindUniqueArgs<ExtArgs>>): Prisma__doctorClient<$Result.GetResult<Prisma.$doctorPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Doctor that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {doctorFindUniqueOrThrowArgs} args - Arguments to find a Doctor
     * @example
     * // Get one Doctor
     * const doctor = await prisma.doctor.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends doctorFindUniqueOrThrowArgs>(args: SelectSubset<T, doctorFindUniqueOrThrowArgs<ExtArgs>>): Prisma__doctorClient<$Result.GetResult<Prisma.$doctorPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Doctor that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {doctorFindFirstArgs} args - Arguments to find a Doctor
     * @example
     * // Get one Doctor
     * const doctor = await prisma.doctor.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends doctorFindFirstArgs>(args?: SelectSubset<T, doctorFindFirstArgs<ExtArgs>>): Prisma__doctorClient<$Result.GetResult<Prisma.$doctorPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Doctor that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {doctorFindFirstOrThrowArgs} args - Arguments to find a Doctor
     * @example
     * // Get one Doctor
     * const doctor = await prisma.doctor.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends doctorFindFirstOrThrowArgs>(args?: SelectSubset<T, doctorFindFirstOrThrowArgs<ExtArgs>>): Prisma__doctorClient<$Result.GetResult<Prisma.$doctorPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Doctors that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {doctorFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Doctors
     * const doctors = await prisma.doctor.findMany()
     * 
     * // Get first 10 Doctors
     * const doctors = await prisma.doctor.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const doctorWithIdOnly = await prisma.doctor.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends doctorFindManyArgs>(args?: SelectSubset<T, doctorFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$doctorPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Doctor.
     * @param {doctorCreateArgs} args - Arguments to create a Doctor.
     * @example
     * // Create one Doctor
     * const Doctor = await prisma.doctor.create({
     *   data: {
     *     // ... data to create a Doctor
     *   }
     * })
     * 
     */
    create<T extends doctorCreateArgs>(args: SelectSubset<T, doctorCreateArgs<ExtArgs>>): Prisma__doctorClient<$Result.GetResult<Prisma.$doctorPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Doctors.
     * @param {doctorCreateManyArgs} args - Arguments to create many Doctors.
     * @example
     * // Create many Doctors
     * const doctor = await prisma.doctor.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends doctorCreateManyArgs>(args?: SelectSubset<T, doctorCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Doctors and returns the data saved in the database.
     * @param {doctorCreateManyAndReturnArgs} args - Arguments to create many Doctors.
     * @example
     * // Create many Doctors
     * const doctor = await prisma.doctor.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Doctors and only return the `id`
     * const doctorWithIdOnly = await prisma.doctor.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends doctorCreateManyAndReturnArgs>(args?: SelectSubset<T, doctorCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$doctorPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Doctor.
     * @param {doctorDeleteArgs} args - Arguments to delete one Doctor.
     * @example
     * // Delete one Doctor
     * const Doctor = await prisma.doctor.delete({
     *   where: {
     *     // ... filter to delete one Doctor
     *   }
     * })
     * 
     */
    delete<T extends doctorDeleteArgs>(args: SelectSubset<T, doctorDeleteArgs<ExtArgs>>): Prisma__doctorClient<$Result.GetResult<Prisma.$doctorPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Doctor.
     * @param {doctorUpdateArgs} args - Arguments to update one Doctor.
     * @example
     * // Update one Doctor
     * const doctor = await prisma.doctor.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends doctorUpdateArgs>(args: SelectSubset<T, doctorUpdateArgs<ExtArgs>>): Prisma__doctorClient<$Result.GetResult<Prisma.$doctorPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Doctors.
     * @param {doctorDeleteManyArgs} args - Arguments to filter Doctors to delete.
     * @example
     * // Delete a few Doctors
     * const { count } = await prisma.doctor.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends doctorDeleteManyArgs>(args?: SelectSubset<T, doctorDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Doctors.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {doctorUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Doctors
     * const doctor = await prisma.doctor.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends doctorUpdateManyArgs>(args: SelectSubset<T, doctorUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Doctors and returns the data updated in the database.
     * @param {doctorUpdateManyAndReturnArgs} args - Arguments to update many Doctors.
     * @example
     * // Update many Doctors
     * const doctor = await prisma.doctor.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Doctors and only return the `id`
     * const doctorWithIdOnly = await prisma.doctor.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends doctorUpdateManyAndReturnArgs>(args: SelectSubset<T, doctorUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$doctorPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Doctor.
     * @param {doctorUpsertArgs} args - Arguments to update or create a Doctor.
     * @example
     * // Update or create a Doctor
     * const doctor = await prisma.doctor.upsert({
     *   create: {
     *     // ... data to create a Doctor
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Doctor we want to update
     *   }
     * })
     */
    upsert<T extends doctorUpsertArgs>(args: SelectSubset<T, doctorUpsertArgs<ExtArgs>>): Prisma__doctorClient<$Result.GetResult<Prisma.$doctorPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Doctors.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {doctorCountArgs} args - Arguments to filter Doctors to count.
     * @example
     * // Count the number of Doctors
     * const count = await prisma.doctor.count({
     *   where: {
     *     // ... the filter for the Doctors we want to count
     *   }
     * })
    **/
    count<T extends doctorCountArgs>(
      args?: Subset<T, doctorCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], DoctorCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Doctor.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {DoctorAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends DoctorAggregateArgs>(args: Subset<T, DoctorAggregateArgs>): Prisma.PrismaPromise<GetDoctorAggregateType<T>>

    /**
     * Group by Doctor.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {doctorGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends doctorGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: doctorGroupByArgs['orderBy'] }
        : { orderBy?: doctorGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, doctorGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetDoctorGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the doctor model
   */
  readonly fields: doctorFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for doctor.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__doctorClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    redio_liste<T extends doctor$redio_listeArgs<ExtArgs> = {}>(args?: Subset<T, doctor$redio_listeArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$RadioPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the doctor model
   */
  interface doctorFieldRefs {
    readonly id: FieldRef<"doctor", 'String'>
    readonly firstName: FieldRef<"doctor", 'String'>
    readonly lastName: FieldRef<"doctor", 'String'>
    readonly email: FieldRef<"doctor", 'String'>
    readonly password: FieldRef<"doctor", 'String'>
  }
    

  // Custom InputTypes
  /**
   * doctor findUnique
   */
  export type doctorFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the doctor
     */
    select?: doctorSelect<ExtArgs> | null
    /**
     * Omit specific fields from the doctor
     */
    omit?: doctorOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: doctorInclude<ExtArgs> | null
    /**
     * Filter, which doctor to fetch.
     */
    where: doctorWhereUniqueInput
  }

  /**
   * doctor findUniqueOrThrow
   */
  export type doctorFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the doctor
     */
    select?: doctorSelect<ExtArgs> | null
    /**
     * Omit specific fields from the doctor
     */
    omit?: doctorOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: doctorInclude<ExtArgs> | null
    /**
     * Filter, which doctor to fetch.
     */
    where: doctorWhereUniqueInput
  }

  /**
   * doctor findFirst
   */
  export type doctorFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the doctor
     */
    select?: doctorSelect<ExtArgs> | null
    /**
     * Omit specific fields from the doctor
     */
    omit?: doctorOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: doctorInclude<ExtArgs> | null
    /**
     * Filter, which doctor to fetch.
     */
    where?: doctorWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of doctors to fetch.
     */
    orderBy?: doctorOrderByWithRelationInput | doctorOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for doctors.
     */
    cursor?: doctorWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` doctors from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` doctors.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of doctors.
     */
    distinct?: DoctorScalarFieldEnum | DoctorScalarFieldEnum[]
  }

  /**
   * doctor findFirstOrThrow
   */
  export type doctorFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the doctor
     */
    select?: doctorSelect<ExtArgs> | null
    /**
     * Omit specific fields from the doctor
     */
    omit?: doctorOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: doctorInclude<ExtArgs> | null
    /**
     * Filter, which doctor to fetch.
     */
    where?: doctorWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of doctors to fetch.
     */
    orderBy?: doctorOrderByWithRelationInput | doctorOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for doctors.
     */
    cursor?: doctorWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` doctors from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` doctors.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of doctors.
     */
    distinct?: DoctorScalarFieldEnum | DoctorScalarFieldEnum[]
  }

  /**
   * doctor findMany
   */
  export type doctorFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the doctor
     */
    select?: doctorSelect<ExtArgs> | null
    /**
     * Omit specific fields from the doctor
     */
    omit?: doctorOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: doctorInclude<ExtArgs> | null
    /**
     * Filter, which doctors to fetch.
     */
    where?: doctorWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of doctors to fetch.
     */
    orderBy?: doctorOrderByWithRelationInput | doctorOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing doctors.
     */
    cursor?: doctorWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` doctors from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` doctors.
     */
    skip?: number
    distinct?: DoctorScalarFieldEnum | DoctorScalarFieldEnum[]
  }

  /**
   * doctor create
   */
  export type doctorCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the doctor
     */
    select?: doctorSelect<ExtArgs> | null
    /**
     * Omit specific fields from the doctor
     */
    omit?: doctorOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: doctorInclude<ExtArgs> | null
    /**
     * The data needed to create a doctor.
     */
    data: XOR<doctorCreateInput, doctorUncheckedCreateInput>
  }

  /**
   * doctor createMany
   */
  export type doctorCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many doctors.
     */
    data: doctorCreateManyInput | doctorCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * doctor createManyAndReturn
   */
  export type doctorCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the doctor
     */
    select?: doctorSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the doctor
     */
    omit?: doctorOmit<ExtArgs> | null
    /**
     * The data used to create many doctors.
     */
    data: doctorCreateManyInput | doctorCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * doctor update
   */
  export type doctorUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the doctor
     */
    select?: doctorSelect<ExtArgs> | null
    /**
     * Omit specific fields from the doctor
     */
    omit?: doctorOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: doctorInclude<ExtArgs> | null
    /**
     * The data needed to update a doctor.
     */
    data: XOR<doctorUpdateInput, doctorUncheckedUpdateInput>
    /**
     * Choose, which doctor to update.
     */
    where: doctorWhereUniqueInput
  }

  /**
   * doctor updateMany
   */
  export type doctorUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update doctors.
     */
    data: XOR<doctorUpdateManyMutationInput, doctorUncheckedUpdateManyInput>
    /**
     * Filter which doctors to update
     */
    where?: doctorWhereInput
    /**
     * Limit how many doctors to update.
     */
    limit?: number
  }

  /**
   * doctor updateManyAndReturn
   */
  export type doctorUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the doctor
     */
    select?: doctorSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the doctor
     */
    omit?: doctorOmit<ExtArgs> | null
    /**
     * The data used to update doctors.
     */
    data: XOR<doctorUpdateManyMutationInput, doctorUncheckedUpdateManyInput>
    /**
     * Filter which doctors to update
     */
    where?: doctorWhereInput
    /**
     * Limit how many doctors to update.
     */
    limit?: number
  }

  /**
   * doctor upsert
   */
  export type doctorUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the doctor
     */
    select?: doctorSelect<ExtArgs> | null
    /**
     * Omit specific fields from the doctor
     */
    omit?: doctorOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: doctorInclude<ExtArgs> | null
    /**
     * The filter to search for the doctor to update in case it exists.
     */
    where: doctorWhereUniqueInput
    /**
     * In case the doctor found by the `where` argument doesn't exist, create a new doctor with this data.
     */
    create: XOR<doctorCreateInput, doctorUncheckedCreateInput>
    /**
     * In case the doctor was found with the provided `where` argument, update it with this data.
     */
    update: XOR<doctorUpdateInput, doctorUncheckedUpdateInput>
  }

  /**
   * doctor delete
   */
  export type doctorDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the doctor
     */
    select?: doctorSelect<ExtArgs> | null
    /**
     * Omit specific fields from the doctor
     */
    omit?: doctorOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: doctorInclude<ExtArgs> | null
    /**
     * Filter which doctor to delete.
     */
    where: doctorWhereUniqueInput
  }

  /**
   * doctor deleteMany
   */
  export type doctorDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which doctors to delete
     */
    where?: doctorWhereInput
    /**
     * Limit how many doctors to delete.
     */
    limit?: number
  }

  /**
   * doctor.redio_liste
   */
  export type doctor$redio_listeArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Radio
     */
    select?: RadioSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Radio
     */
    omit?: RadioOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RadioInclude<ExtArgs> | null
    where?: RadioWhereInput
    orderBy?: RadioOrderByWithRelationInput | RadioOrderByWithRelationInput[]
    cursor?: RadioWhereUniqueInput
    take?: number
    skip?: number
    distinct?: RadioScalarFieldEnum | RadioScalarFieldEnum[]
  }

  /**
   * doctor without action
   */
  export type doctorDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the doctor
     */
    select?: doctorSelect<ExtArgs> | null
    /**
     * Omit specific fields from the doctor
     */
    omit?: doctorOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: doctorInclude<ExtArgs> | null
  }


  /**
   * Model patient
   */

  export type AggregatePatient = {
    _count: PatientCountAggregateOutputType | null
    _avg: PatientAvgAggregateOutputType | null
    _sum: PatientSumAggregateOutputType | null
    _min: PatientMinAggregateOutputType | null
    _max: PatientMaxAggregateOutputType | null
  }

  export type PatientAvgAggregateOutputType = {
    age: number | null
  }

  export type PatientSumAggregateOutputType = {
    age: number | null
  }

  export type PatientMinAggregateOutputType = {
    id: string | null
    firstName: string | null
    lastName: string | null
    age: number | null
    dateOfBirth: Date | null
    medicalHistory: string | null
    email: string | null
    password: string | null
  }

  export type PatientMaxAggregateOutputType = {
    id: string | null
    firstName: string | null
    lastName: string | null
    age: number | null
    dateOfBirth: Date | null
    medicalHistory: string | null
    email: string | null
    password: string | null
  }

  export type PatientCountAggregateOutputType = {
    id: number
    firstName: number
    lastName: number
    age: number
    dateOfBirth: number
    medicalHistory: number
    email: number
    password: number
    _all: number
  }


  export type PatientAvgAggregateInputType = {
    age?: true
  }

  export type PatientSumAggregateInputType = {
    age?: true
  }

  export type PatientMinAggregateInputType = {
    id?: true
    firstName?: true
    lastName?: true
    age?: true
    dateOfBirth?: true
    medicalHistory?: true
    email?: true
    password?: true
  }

  export type PatientMaxAggregateInputType = {
    id?: true
    firstName?: true
    lastName?: true
    age?: true
    dateOfBirth?: true
    medicalHistory?: true
    email?: true
    password?: true
  }

  export type PatientCountAggregateInputType = {
    id?: true
    firstName?: true
    lastName?: true
    age?: true
    dateOfBirth?: true
    medicalHistory?: true
    email?: true
    password?: true
    _all?: true
  }

  export type PatientAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which patient to aggregate.
     */
    where?: patientWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of patients to fetch.
     */
    orderBy?: patientOrderByWithRelationInput | patientOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: patientWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` patients from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` patients.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned patients
    **/
    _count?: true | PatientCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: PatientAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: PatientSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: PatientMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: PatientMaxAggregateInputType
  }

  export type GetPatientAggregateType<T extends PatientAggregateArgs> = {
        [P in keyof T & keyof AggregatePatient]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregatePatient[P]>
      : GetScalarType<T[P], AggregatePatient[P]>
  }




  export type patientGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: patientWhereInput
    orderBy?: patientOrderByWithAggregationInput | patientOrderByWithAggregationInput[]
    by: PatientScalarFieldEnum[] | PatientScalarFieldEnum
    having?: patientScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: PatientCountAggregateInputType | true
    _avg?: PatientAvgAggregateInputType
    _sum?: PatientSumAggregateInputType
    _min?: PatientMinAggregateInputType
    _max?: PatientMaxAggregateInputType
  }

  export type PatientGroupByOutputType = {
    id: string
    firstName: string
    lastName: string
    age: number
    dateOfBirth: Date
    medicalHistory: string
    email: string
    password: string
    _count: PatientCountAggregateOutputType | null
    _avg: PatientAvgAggregateOutputType | null
    _sum: PatientSumAggregateOutputType | null
    _min: PatientMinAggregateOutputType | null
    _max: PatientMaxAggregateOutputType | null
  }

  type GetPatientGroupByPayload<T extends patientGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<PatientGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof PatientGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], PatientGroupByOutputType[P]>
            : GetScalarType<T[P], PatientGroupByOutputType[P]>
        }
      >
    >


  export type patientSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    firstName?: boolean
    lastName?: boolean
    age?: boolean
    dateOfBirth?: boolean
    medicalHistory?: boolean
    email?: boolean
    password?: boolean
    redio_liste?: boolean | patient$redio_listeArgs<ExtArgs>
    _count?: boolean | PatientCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["patient"]>

  export type patientSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    firstName?: boolean
    lastName?: boolean
    age?: boolean
    dateOfBirth?: boolean
    medicalHistory?: boolean
    email?: boolean
    password?: boolean
  }, ExtArgs["result"]["patient"]>

  export type patientSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    firstName?: boolean
    lastName?: boolean
    age?: boolean
    dateOfBirth?: boolean
    medicalHistory?: boolean
    email?: boolean
    password?: boolean
  }, ExtArgs["result"]["patient"]>

  export type patientSelectScalar = {
    id?: boolean
    firstName?: boolean
    lastName?: boolean
    age?: boolean
    dateOfBirth?: boolean
    medicalHistory?: boolean
    email?: boolean
    password?: boolean
  }

  export type patientOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "firstName" | "lastName" | "age" | "dateOfBirth" | "medicalHistory" | "email" | "password", ExtArgs["result"]["patient"]>
  export type patientInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    redio_liste?: boolean | patient$redio_listeArgs<ExtArgs>
    _count?: boolean | PatientCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type patientIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}
  export type patientIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}

  export type $patientPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "patient"
    objects: {
      redio_liste: Prisma.$RadioPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      firstName: string
      lastName: string
      age: number
      dateOfBirth: Date
      medicalHistory: string
      email: string
      password: string
    }, ExtArgs["result"]["patient"]>
    composites: {}
  }

  type patientGetPayload<S extends boolean | null | undefined | patientDefaultArgs> = $Result.GetResult<Prisma.$patientPayload, S>

  type patientCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<patientFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: PatientCountAggregateInputType | true
    }

  export interface patientDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['patient'], meta: { name: 'patient' } }
    /**
     * Find zero or one Patient that matches the filter.
     * @param {patientFindUniqueArgs} args - Arguments to find a Patient
     * @example
     * // Get one Patient
     * const patient = await prisma.patient.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends patientFindUniqueArgs>(args: SelectSubset<T, patientFindUniqueArgs<ExtArgs>>): Prisma__patientClient<$Result.GetResult<Prisma.$patientPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Patient that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {patientFindUniqueOrThrowArgs} args - Arguments to find a Patient
     * @example
     * // Get one Patient
     * const patient = await prisma.patient.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends patientFindUniqueOrThrowArgs>(args: SelectSubset<T, patientFindUniqueOrThrowArgs<ExtArgs>>): Prisma__patientClient<$Result.GetResult<Prisma.$patientPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Patient that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {patientFindFirstArgs} args - Arguments to find a Patient
     * @example
     * // Get one Patient
     * const patient = await prisma.patient.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends patientFindFirstArgs>(args?: SelectSubset<T, patientFindFirstArgs<ExtArgs>>): Prisma__patientClient<$Result.GetResult<Prisma.$patientPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Patient that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {patientFindFirstOrThrowArgs} args - Arguments to find a Patient
     * @example
     * // Get one Patient
     * const patient = await prisma.patient.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends patientFindFirstOrThrowArgs>(args?: SelectSubset<T, patientFindFirstOrThrowArgs<ExtArgs>>): Prisma__patientClient<$Result.GetResult<Prisma.$patientPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Patients that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {patientFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Patients
     * const patients = await prisma.patient.findMany()
     * 
     * // Get first 10 Patients
     * const patients = await prisma.patient.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const patientWithIdOnly = await prisma.patient.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends patientFindManyArgs>(args?: SelectSubset<T, patientFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$patientPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Patient.
     * @param {patientCreateArgs} args - Arguments to create a Patient.
     * @example
     * // Create one Patient
     * const Patient = await prisma.patient.create({
     *   data: {
     *     // ... data to create a Patient
     *   }
     * })
     * 
     */
    create<T extends patientCreateArgs>(args: SelectSubset<T, patientCreateArgs<ExtArgs>>): Prisma__patientClient<$Result.GetResult<Prisma.$patientPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Patients.
     * @param {patientCreateManyArgs} args - Arguments to create many Patients.
     * @example
     * // Create many Patients
     * const patient = await prisma.patient.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends patientCreateManyArgs>(args?: SelectSubset<T, patientCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Patients and returns the data saved in the database.
     * @param {patientCreateManyAndReturnArgs} args - Arguments to create many Patients.
     * @example
     * // Create many Patients
     * const patient = await prisma.patient.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Patients and only return the `id`
     * const patientWithIdOnly = await prisma.patient.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends patientCreateManyAndReturnArgs>(args?: SelectSubset<T, patientCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$patientPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Patient.
     * @param {patientDeleteArgs} args - Arguments to delete one Patient.
     * @example
     * // Delete one Patient
     * const Patient = await prisma.patient.delete({
     *   where: {
     *     // ... filter to delete one Patient
     *   }
     * })
     * 
     */
    delete<T extends patientDeleteArgs>(args: SelectSubset<T, patientDeleteArgs<ExtArgs>>): Prisma__patientClient<$Result.GetResult<Prisma.$patientPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Patient.
     * @param {patientUpdateArgs} args - Arguments to update one Patient.
     * @example
     * // Update one Patient
     * const patient = await prisma.patient.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends patientUpdateArgs>(args: SelectSubset<T, patientUpdateArgs<ExtArgs>>): Prisma__patientClient<$Result.GetResult<Prisma.$patientPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Patients.
     * @param {patientDeleteManyArgs} args - Arguments to filter Patients to delete.
     * @example
     * // Delete a few Patients
     * const { count } = await prisma.patient.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends patientDeleteManyArgs>(args?: SelectSubset<T, patientDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Patients.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {patientUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Patients
     * const patient = await prisma.patient.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends patientUpdateManyArgs>(args: SelectSubset<T, patientUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Patients and returns the data updated in the database.
     * @param {patientUpdateManyAndReturnArgs} args - Arguments to update many Patients.
     * @example
     * // Update many Patients
     * const patient = await prisma.patient.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Patients and only return the `id`
     * const patientWithIdOnly = await prisma.patient.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends patientUpdateManyAndReturnArgs>(args: SelectSubset<T, patientUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$patientPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Patient.
     * @param {patientUpsertArgs} args - Arguments to update or create a Patient.
     * @example
     * // Update or create a Patient
     * const patient = await prisma.patient.upsert({
     *   create: {
     *     // ... data to create a Patient
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Patient we want to update
     *   }
     * })
     */
    upsert<T extends patientUpsertArgs>(args: SelectSubset<T, patientUpsertArgs<ExtArgs>>): Prisma__patientClient<$Result.GetResult<Prisma.$patientPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Patients.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {patientCountArgs} args - Arguments to filter Patients to count.
     * @example
     * // Count the number of Patients
     * const count = await prisma.patient.count({
     *   where: {
     *     // ... the filter for the Patients we want to count
     *   }
     * })
    **/
    count<T extends patientCountArgs>(
      args?: Subset<T, patientCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], PatientCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Patient.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PatientAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends PatientAggregateArgs>(args: Subset<T, PatientAggregateArgs>): Prisma.PrismaPromise<GetPatientAggregateType<T>>

    /**
     * Group by Patient.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {patientGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends patientGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: patientGroupByArgs['orderBy'] }
        : { orderBy?: patientGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, patientGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetPatientGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the patient model
   */
  readonly fields: patientFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for patient.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__patientClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    redio_liste<T extends patient$redio_listeArgs<ExtArgs> = {}>(args?: Subset<T, patient$redio_listeArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$RadioPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the patient model
   */
  interface patientFieldRefs {
    readonly id: FieldRef<"patient", 'String'>
    readonly firstName: FieldRef<"patient", 'String'>
    readonly lastName: FieldRef<"patient", 'String'>
    readonly age: FieldRef<"patient", 'Int'>
    readonly dateOfBirth: FieldRef<"patient", 'DateTime'>
    readonly medicalHistory: FieldRef<"patient", 'String'>
    readonly email: FieldRef<"patient", 'String'>
    readonly password: FieldRef<"patient", 'String'>
  }
    

  // Custom InputTypes
  /**
   * patient findUnique
   */
  export type patientFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the patient
     */
    select?: patientSelect<ExtArgs> | null
    /**
     * Omit specific fields from the patient
     */
    omit?: patientOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: patientInclude<ExtArgs> | null
    /**
     * Filter, which patient to fetch.
     */
    where: patientWhereUniqueInput
  }

  /**
   * patient findUniqueOrThrow
   */
  export type patientFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the patient
     */
    select?: patientSelect<ExtArgs> | null
    /**
     * Omit specific fields from the patient
     */
    omit?: patientOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: patientInclude<ExtArgs> | null
    /**
     * Filter, which patient to fetch.
     */
    where: patientWhereUniqueInput
  }

  /**
   * patient findFirst
   */
  export type patientFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the patient
     */
    select?: patientSelect<ExtArgs> | null
    /**
     * Omit specific fields from the patient
     */
    omit?: patientOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: patientInclude<ExtArgs> | null
    /**
     * Filter, which patient to fetch.
     */
    where?: patientWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of patients to fetch.
     */
    orderBy?: patientOrderByWithRelationInput | patientOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for patients.
     */
    cursor?: patientWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` patients from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` patients.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of patients.
     */
    distinct?: PatientScalarFieldEnum | PatientScalarFieldEnum[]
  }

  /**
   * patient findFirstOrThrow
   */
  export type patientFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the patient
     */
    select?: patientSelect<ExtArgs> | null
    /**
     * Omit specific fields from the patient
     */
    omit?: patientOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: patientInclude<ExtArgs> | null
    /**
     * Filter, which patient to fetch.
     */
    where?: patientWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of patients to fetch.
     */
    orderBy?: patientOrderByWithRelationInput | patientOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for patients.
     */
    cursor?: patientWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` patients from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` patients.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of patients.
     */
    distinct?: PatientScalarFieldEnum | PatientScalarFieldEnum[]
  }

  /**
   * patient findMany
   */
  export type patientFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the patient
     */
    select?: patientSelect<ExtArgs> | null
    /**
     * Omit specific fields from the patient
     */
    omit?: patientOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: patientInclude<ExtArgs> | null
    /**
     * Filter, which patients to fetch.
     */
    where?: patientWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of patients to fetch.
     */
    orderBy?: patientOrderByWithRelationInput | patientOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing patients.
     */
    cursor?: patientWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` patients from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` patients.
     */
    skip?: number
    distinct?: PatientScalarFieldEnum | PatientScalarFieldEnum[]
  }

  /**
   * patient create
   */
  export type patientCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the patient
     */
    select?: patientSelect<ExtArgs> | null
    /**
     * Omit specific fields from the patient
     */
    omit?: patientOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: patientInclude<ExtArgs> | null
    /**
     * The data needed to create a patient.
     */
    data: XOR<patientCreateInput, patientUncheckedCreateInput>
  }

  /**
   * patient createMany
   */
  export type patientCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many patients.
     */
    data: patientCreateManyInput | patientCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * patient createManyAndReturn
   */
  export type patientCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the patient
     */
    select?: patientSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the patient
     */
    omit?: patientOmit<ExtArgs> | null
    /**
     * The data used to create many patients.
     */
    data: patientCreateManyInput | patientCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * patient update
   */
  export type patientUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the patient
     */
    select?: patientSelect<ExtArgs> | null
    /**
     * Omit specific fields from the patient
     */
    omit?: patientOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: patientInclude<ExtArgs> | null
    /**
     * The data needed to update a patient.
     */
    data: XOR<patientUpdateInput, patientUncheckedUpdateInput>
    /**
     * Choose, which patient to update.
     */
    where: patientWhereUniqueInput
  }

  /**
   * patient updateMany
   */
  export type patientUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update patients.
     */
    data: XOR<patientUpdateManyMutationInput, patientUncheckedUpdateManyInput>
    /**
     * Filter which patients to update
     */
    where?: patientWhereInput
    /**
     * Limit how many patients to update.
     */
    limit?: number
  }

  /**
   * patient updateManyAndReturn
   */
  export type patientUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the patient
     */
    select?: patientSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the patient
     */
    omit?: patientOmit<ExtArgs> | null
    /**
     * The data used to update patients.
     */
    data: XOR<patientUpdateManyMutationInput, patientUncheckedUpdateManyInput>
    /**
     * Filter which patients to update
     */
    where?: patientWhereInput
    /**
     * Limit how many patients to update.
     */
    limit?: number
  }

  /**
   * patient upsert
   */
  export type patientUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the patient
     */
    select?: patientSelect<ExtArgs> | null
    /**
     * Omit specific fields from the patient
     */
    omit?: patientOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: patientInclude<ExtArgs> | null
    /**
     * The filter to search for the patient to update in case it exists.
     */
    where: patientWhereUniqueInput
    /**
     * In case the patient found by the `where` argument doesn't exist, create a new patient with this data.
     */
    create: XOR<patientCreateInput, patientUncheckedCreateInput>
    /**
     * In case the patient was found with the provided `where` argument, update it with this data.
     */
    update: XOR<patientUpdateInput, patientUncheckedUpdateInput>
  }

  /**
   * patient delete
   */
  export type patientDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the patient
     */
    select?: patientSelect<ExtArgs> | null
    /**
     * Omit specific fields from the patient
     */
    omit?: patientOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: patientInclude<ExtArgs> | null
    /**
     * Filter which patient to delete.
     */
    where: patientWhereUniqueInput
  }

  /**
   * patient deleteMany
   */
  export type patientDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which patients to delete
     */
    where?: patientWhereInput
    /**
     * Limit how many patients to delete.
     */
    limit?: number
  }

  /**
   * patient.redio_liste
   */
  export type patient$redio_listeArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Radio
     */
    select?: RadioSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Radio
     */
    omit?: RadioOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RadioInclude<ExtArgs> | null
    where?: RadioWhereInput
    orderBy?: RadioOrderByWithRelationInput | RadioOrderByWithRelationInput[]
    cursor?: RadioWhereUniqueInput
    take?: number
    skip?: number
    distinct?: RadioScalarFieldEnum | RadioScalarFieldEnum[]
  }

  /**
   * patient without action
   */
  export type patientDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the patient
     */
    select?: patientSelect<ExtArgs> | null
    /**
     * Omit specific fields from the patient
     */
    omit?: patientOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: patientInclude<ExtArgs> | null
  }


  /**
   * Model Radio
   */

  export type AggregateRadio = {
    _count: RadioCountAggregateOutputType | null
    _min: RadioMinAggregateOutputType | null
    _max: RadioMaxAggregateOutputType | null
  }

  export type RadioMinAggregateOutputType = {
    id: string | null
    patient_id: string | null
    radiologue_id: string | null
    doctor_id: string | null
    date: Date | null
    radio_image: Uint8Array | null
    Title: string | null
    Comment: string | null
    type: $Enums.RadioType | null
  }

  export type RadioMaxAggregateOutputType = {
    id: string | null
    patient_id: string | null
    radiologue_id: string | null
    doctor_id: string | null
    date: Date | null
    radio_image: Uint8Array | null
    Title: string | null
    Comment: string | null
    type: $Enums.RadioType | null
  }

  export type RadioCountAggregateOutputType = {
    id: number
    patient_id: number
    radiologue_id: number
    doctor_id: number
    date: number
    radio_image: number
    Title: number
    Comment: number
    type: number
    _all: number
  }


  export type RadioMinAggregateInputType = {
    id?: true
    patient_id?: true
    radiologue_id?: true
    doctor_id?: true
    date?: true
    radio_image?: true
    Title?: true
    Comment?: true
    type?: true
  }

  export type RadioMaxAggregateInputType = {
    id?: true
    patient_id?: true
    radiologue_id?: true
    doctor_id?: true
    date?: true
    radio_image?: true
    Title?: true
    Comment?: true
    type?: true
  }

  export type RadioCountAggregateInputType = {
    id?: true
    patient_id?: true
    radiologue_id?: true
    doctor_id?: true
    date?: true
    radio_image?: true
    Title?: true
    Comment?: true
    type?: true
    _all?: true
  }

  export type RadioAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Radio to aggregate.
     */
    where?: RadioWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Radios to fetch.
     */
    orderBy?: RadioOrderByWithRelationInput | RadioOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: RadioWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Radios from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Radios.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Radios
    **/
    _count?: true | RadioCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: RadioMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: RadioMaxAggregateInputType
  }

  export type GetRadioAggregateType<T extends RadioAggregateArgs> = {
        [P in keyof T & keyof AggregateRadio]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateRadio[P]>
      : GetScalarType<T[P], AggregateRadio[P]>
  }




  export type RadioGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: RadioWhereInput
    orderBy?: RadioOrderByWithAggregationInput | RadioOrderByWithAggregationInput[]
    by: RadioScalarFieldEnum[] | RadioScalarFieldEnum
    having?: RadioScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: RadioCountAggregateInputType | true
    _min?: RadioMinAggregateInputType
    _max?: RadioMaxAggregateInputType
  }

  export type RadioGroupByOutputType = {
    id: string
    patient_id: string
    radiologue_id: string
    doctor_id: string
    date: Date
    radio_image: Uint8Array
    Title: string
    Comment: string | null
    type: $Enums.RadioType
    _count: RadioCountAggregateOutputType | null
    _min: RadioMinAggregateOutputType | null
    _max: RadioMaxAggregateOutputType | null
  }

  type GetRadioGroupByPayload<T extends RadioGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<RadioGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof RadioGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], RadioGroupByOutputType[P]>
            : GetScalarType<T[P], RadioGroupByOutputType[P]>
        }
      >
    >


  export type RadioSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    patient_id?: boolean
    radiologue_id?: boolean
    doctor_id?: boolean
    date?: boolean
    radio_image?: boolean
    Title?: boolean
    Comment?: boolean
    type?: boolean
    patient?: boolean | patientDefaultArgs<ExtArgs>
    radiologue?: boolean | radiologueDefaultArgs<ExtArgs>
    doctor?: boolean | doctorDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["radio"]>

  export type RadioSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    patient_id?: boolean
    radiologue_id?: boolean
    doctor_id?: boolean
    date?: boolean
    radio_image?: boolean
    Title?: boolean
    Comment?: boolean
    type?: boolean
    patient?: boolean | patientDefaultArgs<ExtArgs>
    radiologue?: boolean | radiologueDefaultArgs<ExtArgs>
    doctor?: boolean | doctorDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["radio"]>

  export type RadioSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    patient_id?: boolean
    radiologue_id?: boolean
    doctor_id?: boolean
    date?: boolean
    radio_image?: boolean
    Title?: boolean
    Comment?: boolean
    type?: boolean
    patient?: boolean | patientDefaultArgs<ExtArgs>
    radiologue?: boolean | radiologueDefaultArgs<ExtArgs>
    doctor?: boolean | doctorDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["radio"]>

  export type RadioSelectScalar = {
    id?: boolean
    patient_id?: boolean
    radiologue_id?: boolean
    doctor_id?: boolean
    date?: boolean
    radio_image?: boolean
    Title?: boolean
    Comment?: boolean
    type?: boolean
  }

  export type RadioOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "patient_id" | "radiologue_id" | "doctor_id" | "date" | "radio_image" | "Title" | "Comment" | "type", ExtArgs["result"]["radio"]>
  export type RadioInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    patient?: boolean | patientDefaultArgs<ExtArgs>
    radiologue?: boolean | radiologueDefaultArgs<ExtArgs>
    doctor?: boolean | doctorDefaultArgs<ExtArgs>
  }
  export type RadioIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    patient?: boolean | patientDefaultArgs<ExtArgs>
    radiologue?: boolean | radiologueDefaultArgs<ExtArgs>
    doctor?: boolean | doctorDefaultArgs<ExtArgs>
  }
  export type RadioIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    patient?: boolean | patientDefaultArgs<ExtArgs>
    radiologue?: boolean | radiologueDefaultArgs<ExtArgs>
    doctor?: boolean | doctorDefaultArgs<ExtArgs>
  }

  export type $RadioPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Radio"
    objects: {
      patient: Prisma.$patientPayload<ExtArgs>
      radiologue: Prisma.$radiologuePayload<ExtArgs>
      doctor: Prisma.$doctorPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      patient_id: string
      radiologue_id: string
      doctor_id: string
      date: Date
      radio_image: Uint8Array
      Title: string
      Comment: string | null
      type: $Enums.RadioType
    }, ExtArgs["result"]["radio"]>
    composites: {}
  }

  type RadioGetPayload<S extends boolean | null | undefined | RadioDefaultArgs> = $Result.GetResult<Prisma.$RadioPayload, S>

  type RadioCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<RadioFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: RadioCountAggregateInputType | true
    }

  export interface RadioDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Radio'], meta: { name: 'Radio' } }
    /**
     * Find zero or one Radio that matches the filter.
     * @param {RadioFindUniqueArgs} args - Arguments to find a Radio
     * @example
     * // Get one Radio
     * const radio = await prisma.radio.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends RadioFindUniqueArgs>(args: SelectSubset<T, RadioFindUniqueArgs<ExtArgs>>): Prisma__RadioClient<$Result.GetResult<Prisma.$RadioPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Radio that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {RadioFindUniqueOrThrowArgs} args - Arguments to find a Radio
     * @example
     * // Get one Radio
     * const radio = await prisma.radio.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends RadioFindUniqueOrThrowArgs>(args: SelectSubset<T, RadioFindUniqueOrThrowArgs<ExtArgs>>): Prisma__RadioClient<$Result.GetResult<Prisma.$RadioPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Radio that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {RadioFindFirstArgs} args - Arguments to find a Radio
     * @example
     * // Get one Radio
     * const radio = await prisma.radio.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends RadioFindFirstArgs>(args?: SelectSubset<T, RadioFindFirstArgs<ExtArgs>>): Prisma__RadioClient<$Result.GetResult<Prisma.$RadioPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Radio that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {RadioFindFirstOrThrowArgs} args - Arguments to find a Radio
     * @example
     * // Get one Radio
     * const radio = await prisma.radio.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends RadioFindFirstOrThrowArgs>(args?: SelectSubset<T, RadioFindFirstOrThrowArgs<ExtArgs>>): Prisma__RadioClient<$Result.GetResult<Prisma.$RadioPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Radios that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {RadioFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Radios
     * const radios = await prisma.radio.findMany()
     * 
     * // Get first 10 Radios
     * const radios = await prisma.radio.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const radioWithIdOnly = await prisma.radio.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends RadioFindManyArgs>(args?: SelectSubset<T, RadioFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$RadioPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Radio.
     * @param {RadioCreateArgs} args - Arguments to create a Radio.
     * @example
     * // Create one Radio
     * const Radio = await prisma.radio.create({
     *   data: {
     *     // ... data to create a Radio
     *   }
     * })
     * 
     */
    create<T extends RadioCreateArgs>(args: SelectSubset<T, RadioCreateArgs<ExtArgs>>): Prisma__RadioClient<$Result.GetResult<Prisma.$RadioPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Radios.
     * @param {RadioCreateManyArgs} args - Arguments to create many Radios.
     * @example
     * // Create many Radios
     * const radio = await prisma.radio.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends RadioCreateManyArgs>(args?: SelectSubset<T, RadioCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Radios and returns the data saved in the database.
     * @param {RadioCreateManyAndReturnArgs} args - Arguments to create many Radios.
     * @example
     * // Create many Radios
     * const radio = await prisma.radio.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Radios and only return the `id`
     * const radioWithIdOnly = await prisma.radio.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends RadioCreateManyAndReturnArgs>(args?: SelectSubset<T, RadioCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$RadioPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Radio.
     * @param {RadioDeleteArgs} args - Arguments to delete one Radio.
     * @example
     * // Delete one Radio
     * const Radio = await prisma.radio.delete({
     *   where: {
     *     // ... filter to delete one Radio
     *   }
     * })
     * 
     */
    delete<T extends RadioDeleteArgs>(args: SelectSubset<T, RadioDeleteArgs<ExtArgs>>): Prisma__RadioClient<$Result.GetResult<Prisma.$RadioPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Radio.
     * @param {RadioUpdateArgs} args - Arguments to update one Radio.
     * @example
     * // Update one Radio
     * const radio = await prisma.radio.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends RadioUpdateArgs>(args: SelectSubset<T, RadioUpdateArgs<ExtArgs>>): Prisma__RadioClient<$Result.GetResult<Prisma.$RadioPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Radios.
     * @param {RadioDeleteManyArgs} args - Arguments to filter Radios to delete.
     * @example
     * // Delete a few Radios
     * const { count } = await prisma.radio.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends RadioDeleteManyArgs>(args?: SelectSubset<T, RadioDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Radios.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {RadioUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Radios
     * const radio = await prisma.radio.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends RadioUpdateManyArgs>(args: SelectSubset<T, RadioUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Radios and returns the data updated in the database.
     * @param {RadioUpdateManyAndReturnArgs} args - Arguments to update many Radios.
     * @example
     * // Update many Radios
     * const radio = await prisma.radio.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Radios and only return the `id`
     * const radioWithIdOnly = await prisma.radio.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends RadioUpdateManyAndReturnArgs>(args: SelectSubset<T, RadioUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$RadioPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Radio.
     * @param {RadioUpsertArgs} args - Arguments to update or create a Radio.
     * @example
     * // Update or create a Radio
     * const radio = await prisma.radio.upsert({
     *   create: {
     *     // ... data to create a Radio
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Radio we want to update
     *   }
     * })
     */
    upsert<T extends RadioUpsertArgs>(args: SelectSubset<T, RadioUpsertArgs<ExtArgs>>): Prisma__RadioClient<$Result.GetResult<Prisma.$RadioPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Radios.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {RadioCountArgs} args - Arguments to filter Radios to count.
     * @example
     * // Count the number of Radios
     * const count = await prisma.radio.count({
     *   where: {
     *     // ... the filter for the Radios we want to count
     *   }
     * })
    **/
    count<T extends RadioCountArgs>(
      args?: Subset<T, RadioCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], RadioCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Radio.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {RadioAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends RadioAggregateArgs>(args: Subset<T, RadioAggregateArgs>): Prisma.PrismaPromise<GetRadioAggregateType<T>>

    /**
     * Group by Radio.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {RadioGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends RadioGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: RadioGroupByArgs['orderBy'] }
        : { orderBy?: RadioGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, RadioGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetRadioGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Radio model
   */
  readonly fields: RadioFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Radio.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__RadioClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    patient<T extends patientDefaultArgs<ExtArgs> = {}>(args?: Subset<T, patientDefaultArgs<ExtArgs>>): Prisma__patientClient<$Result.GetResult<Prisma.$patientPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    radiologue<T extends radiologueDefaultArgs<ExtArgs> = {}>(args?: Subset<T, radiologueDefaultArgs<ExtArgs>>): Prisma__radiologueClient<$Result.GetResult<Prisma.$radiologuePayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    doctor<T extends doctorDefaultArgs<ExtArgs> = {}>(args?: Subset<T, doctorDefaultArgs<ExtArgs>>): Prisma__doctorClient<$Result.GetResult<Prisma.$doctorPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the Radio model
   */
  interface RadioFieldRefs {
    readonly id: FieldRef<"Radio", 'String'>
    readonly patient_id: FieldRef<"Radio", 'String'>
    readonly radiologue_id: FieldRef<"Radio", 'String'>
    readonly doctor_id: FieldRef<"Radio", 'String'>
    readonly date: FieldRef<"Radio", 'DateTime'>
    readonly radio_image: FieldRef<"Radio", 'Bytes'>
    readonly Title: FieldRef<"Radio", 'String'>
    readonly Comment: FieldRef<"Radio", 'String'>
    readonly type: FieldRef<"Radio", 'RadioType'>
  }
    

  // Custom InputTypes
  /**
   * Radio findUnique
   */
  export type RadioFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Radio
     */
    select?: RadioSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Radio
     */
    omit?: RadioOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RadioInclude<ExtArgs> | null
    /**
     * Filter, which Radio to fetch.
     */
    where: RadioWhereUniqueInput
  }

  /**
   * Radio findUniqueOrThrow
   */
  export type RadioFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Radio
     */
    select?: RadioSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Radio
     */
    omit?: RadioOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RadioInclude<ExtArgs> | null
    /**
     * Filter, which Radio to fetch.
     */
    where: RadioWhereUniqueInput
  }

  /**
   * Radio findFirst
   */
  export type RadioFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Radio
     */
    select?: RadioSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Radio
     */
    omit?: RadioOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RadioInclude<ExtArgs> | null
    /**
     * Filter, which Radio to fetch.
     */
    where?: RadioWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Radios to fetch.
     */
    orderBy?: RadioOrderByWithRelationInput | RadioOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Radios.
     */
    cursor?: RadioWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Radios from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Radios.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Radios.
     */
    distinct?: RadioScalarFieldEnum | RadioScalarFieldEnum[]
  }

  /**
   * Radio findFirstOrThrow
   */
  export type RadioFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Radio
     */
    select?: RadioSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Radio
     */
    omit?: RadioOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RadioInclude<ExtArgs> | null
    /**
     * Filter, which Radio to fetch.
     */
    where?: RadioWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Radios to fetch.
     */
    orderBy?: RadioOrderByWithRelationInput | RadioOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Radios.
     */
    cursor?: RadioWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Radios from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Radios.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Radios.
     */
    distinct?: RadioScalarFieldEnum | RadioScalarFieldEnum[]
  }

  /**
   * Radio findMany
   */
  export type RadioFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Radio
     */
    select?: RadioSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Radio
     */
    omit?: RadioOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RadioInclude<ExtArgs> | null
    /**
     * Filter, which Radios to fetch.
     */
    where?: RadioWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Radios to fetch.
     */
    orderBy?: RadioOrderByWithRelationInput | RadioOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Radios.
     */
    cursor?: RadioWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Radios from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Radios.
     */
    skip?: number
    distinct?: RadioScalarFieldEnum | RadioScalarFieldEnum[]
  }

  /**
   * Radio create
   */
  export type RadioCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Radio
     */
    select?: RadioSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Radio
     */
    omit?: RadioOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RadioInclude<ExtArgs> | null
    /**
     * The data needed to create a Radio.
     */
    data: XOR<RadioCreateInput, RadioUncheckedCreateInput>
  }

  /**
   * Radio createMany
   */
  export type RadioCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Radios.
     */
    data: RadioCreateManyInput | RadioCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Radio createManyAndReturn
   */
  export type RadioCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Radio
     */
    select?: RadioSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Radio
     */
    omit?: RadioOmit<ExtArgs> | null
    /**
     * The data used to create many Radios.
     */
    data: RadioCreateManyInput | RadioCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RadioIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * Radio update
   */
  export type RadioUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Radio
     */
    select?: RadioSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Radio
     */
    omit?: RadioOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RadioInclude<ExtArgs> | null
    /**
     * The data needed to update a Radio.
     */
    data: XOR<RadioUpdateInput, RadioUncheckedUpdateInput>
    /**
     * Choose, which Radio to update.
     */
    where: RadioWhereUniqueInput
  }

  /**
   * Radio updateMany
   */
  export type RadioUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Radios.
     */
    data: XOR<RadioUpdateManyMutationInput, RadioUncheckedUpdateManyInput>
    /**
     * Filter which Radios to update
     */
    where?: RadioWhereInput
    /**
     * Limit how many Radios to update.
     */
    limit?: number
  }

  /**
   * Radio updateManyAndReturn
   */
  export type RadioUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Radio
     */
    select?: RadioSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Radio
     */
    omit?: RadioOmit<ExtArgs> | null
    /**
     * The data used to update Radios.
     */
    data: XOR<RadioUpdateManyMutationInput, RadioUncheckedUpdateManyInput>
    /**
     * Filter which Radios to update
     */
    where?: RadioWhereInput
    /**
     * Limit how many Radios to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RadioIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * Radio upsert
   */
  export type RadioUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Radio
     */
    select?: RadioSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Radio
     */
    omit?: RadioOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RadioInclude<ExtArgs> | null
    /**
     * The filter to search for the Radio to update in case it exists.
     */
    where: RadioWhereUniqueInput
    /**
     * In case the Radio found by the `where` argument doesn't exist, create a new Radio with this data.
     */
    create: XOR<RadioCreateInput, RadioUncheckedCreateInput>
    /**
     * In case the Radio was found with the provided `where` argument, update it with this data.
     */
    update: XOR<RadioUpdateInput, RadioUncheckedUpdateInput>
  }

  /**
   * Radio delete
   */
  export type RadioDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Radio
     */
    select?: RadioSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Radio
     */
    omit?: RadioOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RadioInclude<ExtArgs> | null
    /**
     * Filter which Radio to delete.
     */
    where: RadioWhereUniqueInput
  }

  /**
   * Radio deleteMany
   */
  export type RadioDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Radios to delete
     */
    where?: RadioWhereInput
    /**
     * Limit how many Radios to delete.
     */
    limit?: number
  }

  /**
   * Radio without action
   */
  export type RadioDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Radio
     */
    select?: RadioSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Radio
     */
    omit?: RadioOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RadioInclude<ExtArgs> | null
  }


  /**
   * Enums
   */

  export const TransactionIsolationLevel: {
    ReadUncommitted: 'ReadUncommitted',
    ReadCommitted: 'ReadCommitted',
    RepeatableRead: 'RepeatableRead',
    Serializable: 'Serializable'
  };

  export type TransactionIsolationLevel = (typeof TransactionIsolationLevel)[keyof typeof TransactionIsolationLevel]


  export const RadiologueScalarFieldEnum: {
    id: 'id',
    firstName: 'firstName',
    lastName: 'lastName',
    email: 'email',
    password: 'password'
  };

  export type RadiologueScalarFieldEnum = (typeof RadiologueScalarFieldEnum)[keyof typeof RadiologueScalarFieldEnum]


  export const DoctorScalarFieldEnum: {
    id: 'id',
    firstName: 'firstName',
    lastName: 'lastName',
    email: 'email',
    password: 'password'
  };

  export type DoctorScalarFieldEnum = (typeof DoctorScalarFieldEnum)[keyof typeof DoctorScalarFieldEnum]


  export const PatientScalarFieldEnum: {
    id: 'id',
    firstName: 'firstName',
    lastName: 'lastName',
    age: 'age',
    dateOfBirth: 'dateOfBirth',
    medicalHistory: 'medicalHistory',
    email: 'email',
    password: 'password'
  };

  export type PatientScalarFieldEnum = (typeof PatientScalarFieldEnum)[keyof typeof PatientScalarFieldEnum]


  export const RadioScalarFieldEnum: {
    id: 'id',
    patient_id: 'patient_id',
    radiologue_id: 'radiologue_id',
    doctor_id: 'doctor_id',
    date: 'date',
    radio_image: 'radio_image',
    Title: 'Title',
    Comment: 'Comment',
    type: 'type'
  };

  export type RadioScalarFieldEnum = (typeof RadioScalarFieldEnum)[keyof typeof RadioScalarFieldEnum]


  export const SortOrder: {
    asc: 'asc',
    desc: 'desc'
  };

  export type SortOrder = (typeof SortOrder)[keyof typeof SortOrder]


  export const QueryMode: {
    default: 'default',
    insensitive: 'insensitive'
  };

  export type QueryMode = (typeof QueryMode)[keyof typeof QueryMode]


  export const NullsOrder: {
    first: 'first',
    last: 'last'
  };

  export type NullsOrder = (typeof NullsOrder)[keyof typeof NullsOrder]


  /**
   * Field references
   */


  /**
   * Reference to a field of type 'String'
   */
  export type StringFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'String'>
    


  /**
   * Reference to a field of type 'String[]'
   */
  export type ListStringFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'String[]'>
    


  /**
   * Reference to a field of type 'Int'
   */
  export type IntFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Int'>
    


  /**
   * Reference to a field of type 'Int[]'
   */
  export type ListIntFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Int[]'>
    


  /**
   * Reference to a field of type 'DateTime'
   */
  export type DateTimeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'DateTime'>
    


  /**
   * Reference to a field of type 'DateTime[]'
   */
  export type ListDateTimeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'DateTime[]'>
    


  /**
   * Reference to a field of type 'Bytes'
   */
  export type BytesFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Bytes'>
    


  /**
   * Reference to a field of type 'Bytes[]'
   */
  export type ListBytesFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Bytes[]'>
    


  /**
   * Reference to a field of type 'RadioType'
   */
  export type EnumRadioTypeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'RadioType'>
    


  /**
   * Reference to a field of type 'RadioType[]'
   */
  export type ListEnumRadioTypeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'RadioType[]'>
    


  /**
   * Reference to a field of type 'Float'
   */
  export type FloatFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Float'>
    


  /**
   * Reference to a field of type 'Float[]'
   */
  export type ListFloatFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Float[]'>
    
  /**
   * Deep Input Types
   */


  export type radiologueWhereInput = {
    AND?: radiologueWhereInput | radiologueWhereInput[]
    OR?: radiologueWhereInput[]
    NOT?: radiologueWhereInput | radiologueWhereInput[]
    id?: UuidFilter<"radiologue"> | string
    firstName?: StringFilter<"radiologue"> | string
    lastName?: StringFilter<"radiologue"> | string
    email?: StringFilter<"radiologue"> | string
    password?: StringFilter<"radiologue"> | string
    redio_liste?: RadioListRelationFilter
  }

  export type radiologueOrderByWithRelationInput = {
    id?: SortOrder
    firstName?: SortOrder
    lastName?: SortOrder
    email?: SortOrder
    password?: SortOrder
    redio_liste?: RadioOrderByRelationAggregateInput
  }

  export type radiologueWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    email?: string
    AND?: radiologueWhereInput | radiologueWhereInput[]
    OR?: radiologueWhereInput[]
    NOT?: radiologueWhereInput | radiologueWhereInput[]
    firstName?: StringFilter<"radiologue"> | string
    lastName?: StringFilter<"radiologue"> | string
    password?: StringFilter<"radiologue"> | string
    redio_liste?: RadioListRelationFilter
  }, "id" | "email">

  export type radiologueOrderByWithAggregationInput = {
    id?: SortOrder
    firstName?: SortOrder
    lastName?: SortOrder
    email?: SortOrder
    password?: SortOrder
    _count?: radiologueCountOrderByAggregateInput
    _max?: radiologueMaxOrderByAggregateInput
    _min?: radiologueMinOrderByAggregateInput
  }

  export type radiologueScalarWhereWithAggregatesInput = {
    AND?: radiologueScalarWhereWithAggregatesInput | radiologueScalarWhereWithAggregatesInput[]
    OR?: radiologueScalarWhereWithAggregatesInput[]
    NOT?: radiologueScalarWhereWithAggregatesInput | radiologueScalarWhereWithAggregatesInput[]
    id?: UuidWithAggregatesFilter<"radiologue"> | string
    firstName?: StringWithAggregatesFilter<"radiologue"> | string
    lastName?: StringWithAggregatesFilter<"radiologue"> | string
    email?: StringWithAggregatesFilter<"radiologue"> | string
    password?: StringWithAggregatesFilter<"radiologue"> | string
  }

  export type doctorWhereInput = {
    AND?: doctorWhereInput | doctorWhereInput[]
    OR?: doctorWhereInput[]
    NOT?: doctorWhereInput | doctorWhereInput[]
    id?: UuidFilter<"doctor"> | string
    firstName?: StringFilter<"doctor"> | string
    lastName?: StringFilter<"doctor"> | string
    email?: StringFilter<"doctor"> | string
    password?: StringFilter<"doctor"> | string
    redio_liste?: RadioListRelationFilter
  }

  export type doctorOrderByWithRelationInput = {
    id?: SortOrder
    firstName?: SortOrder
    lastName?: SortOrder
    email?: SortOrder
    password?: SortOrder
    redio_liste?: RadioOrderByRelationAggregateInput
  }

  export type doctorWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    email?: string
    AND?: doctorWhereInput | doctorWhereInput[]
    OR?: doctorWhereInput[]
    NOT?: doctorWhereInput | doctorWhereInput[]
    firstName?: StringFilter<"doctor"> | string
    lastName?: StringFilter<"doctor"> | string
    password?: StringFilter<"doctor"> | string
    redio_liste?: RadioListRelationFilter
  }, "id" | "email">

  export type doctorOrderByWithAggregationInput = {
    id?: SortOrder
    firstName?: SortOrder
    lastName?: SortOrder
    email?: SortOrder
    password?: SortOrder
    _count?: doctorCountOrderByAggregateInput
    _max?: doctorMaxOrderByAggregateInput
    _min?: doctorMinOrderByAggregateInput
  }

  export type doctorScalarWhereWithAggregatesInput = {
    AND?: doctorScalarWhereWithAggregatesInput | doctorScalarWhereWithAggregatesInput[]
    OR?: doctorScalarWhereWithAggregatesInput[]
    NOT?: doctorScalarWhereWithAggregatesInput | doctorScalarWhereWithAggregatesInput[]
    id?: UuidWithAggregatesFilter<"doctor"> | string
    firstName?: StringWithAggregatesFilter<"doctor"> | string
    lastName?: StringWithAggregatesFilter<"doctor"> | string
    email?: StringWithAggregatesFilter<"doctor"> | string
    password?: StringWithAggregatesFilter<"doctor"> | string
  }

  export type patientWhereInput = {
    AND?: patientWhereInput | patientWhereInput[]
    OR?: patientWhereInput[]
    NOT?: patientWhereInput | patientWhereInput[]
    id?: UuidFilter<"patient"> | string
    firstName?: StringFilter<"patient"> | string
    lastName?: StringFilter<"patient"> | string
    age?: IntFilter<"patient"> | number
    dateOfBirth?: DateTimeFilter<"patient"> | Date | string
    medicalHistory?: StringFilter<"patient"> | string
    email?: StringFilter<"patient"> | string
    password?: StringFilter<"patient"> | string
    redio_liste?: RadioListRelationFilter
  }

  export type patientOrderByWithRelationInput = {
    id?: SortOrder
    firstName?: SortOrder
    lastName?: SortOrder
    age?: SortOrder
    dateOfBirth?: SortOrder
    medicalHistory?: SortOrder
    email?: SortOrder
    password?: SortOrder
    redio_liste?: RadioOrderByRelationAggregateInput
  }

  export type patientWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    email?: string
    AND?: patientWhereInput | patientWhereInput[]
    OR?: patientWhereInput[]
    NOT?: patientWhereInput | patientWhereInput[]
    firstName?: StringFilter<"patient"> | string
    lastName?: StringFilter<"patient"> | string
    age?: IntFilter<"patient"> | number
    dateOfBirth?: DateTimeFilter<"patient"> | Date | string
    medicalHistory?: StringFilter<"patient"> | string
    password?: StringFilter<"patient"> | string
    redio_liste?: RadioListRelationFilter
  }, "id" | "email">

  export type patientOrderByWithAggregationInput = {
    id?: SortOrder
    firstName?: SortOrder
    lastName?: SortOrder
    age?: SortOrder
    dateOfBirth?: SortOrder
    medicalHistory?: SortOrder
    email?: SortOrder
    password?: SortOrder
    _count?: patientCountOrderByAggregateInput
    _avg?: patientAvgOrderByAggregateInput
    _max?: patientMaxOrderByAggregateInput
    _min?: patientMinOrderByAggregateInput
    _sum?: patientSumOrderByAggregateInput
  }

  export type patientScalarWhereWithAggregatesInput = {
    AND?: patientScalarWhereWithAggregatesInput | patientScalarWhereWithAggregatesInput[]
    OR?: patientScalarWhereWithAggregatesInput[]
    NOT?: patientScalarWhereWithAggregatesInput | patientScalarWhereWithAggregatesInput[]
    id?: UuidWithAggregatesFilter<"patient"> | string
    firstName?: StringWithAggregatesFilter<"patient"> | string
    lastName?: StringWithAggregatesFilter<"patient"> | string
    age?: IntWithAggregatesFilter<"patient"> | number
    dateOfBirth?: DateTimeWithAggregatesFilter<"patient"> | Date | string
    medicalHistory?: StringWithAggregatesFilter<"patient"> | string
    email?: StringWithAggregatesFilter<"patient"> | string
    password?: StringWithAggregatesFilter<"patient"> | string
  }

  export type RadioWhereInput = {
    AND?: RadioWhereInput | RadioWhereInput[]
    OR?: RadioWhereInput[]
    NOT?: RadioWhereInput | RadioWhereInput[]
    id?: UuidFilter<"Radio"> | string
    patient_id?: UuidFilter<"Radio"> | string
    radiologue_id?: UuidFilter<"Radio"> | string
    doctor_id?: UuidFilter<"Radio"> | string
    date?: DateTimeFilter<"Radio"> | Date | string
    radio_image?: BytesFilter<"Radio"> | Uint8Array
    Title?: StringFilter<"Radio"> | string
    Comment?: StringNullableFilter<"Radio"> | string | null
    type?: EnumRadioTypeFilter<"Radio"> | $Enums.RadioType
    patient?: XOR<PatientScalarRelationFilter, patientWhereInput>
    radiologue?: XOR<RadiologueScalarRelationFilter, radiologueWhereInput>
    doctor?: XOR<DoctorScalarRelationFilter, doctorWhereInput>
  }

  export type RadioOrderByWithRelationInput = {
    id?: SortOrder
    patient_id?: SortOrder
    radiologue_id?: SortOrder
    doctor_id?: SortOrder
    date?: SortOrder
    radio_image?: SortOrder
    Title?: SortOrder
    Comment?: SortOrderInput | SortOrder
    type?: SortOrder
    patient?: patientOrderByWithRelationInput
    radiologue?: radiologueOrderByWithRelationInput
    doctor?: doctorOrderByWithRelationInput
  }

  export type RadioWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: RadioWhereInput | RadioWhereInput[]
    OR?: RadioWhereInput[]
    NOT?: RadioWhereInput | RadioWhereInput[]
    patient_id?: UuidFilter<"Radio"> | string
    radiologue_id?: UuidFilter<"Radio"> | string
    doctor_id?: UuidFilter<"Radio"> | string
    date?: DateTimeFilter<"Radio"> | Date | string
    radio_image?: BytesFilter<"Radio"> | Uint8Array
    Title?: StringFilter<"Radio"> | string
    Comment?: StringNullableFilter<"Radio"> | string | null
    type?: EnumRadioTypeFilter<"Radio"> | $Enums.RadioType
    patient?: XOR<PatientScalarRelationFilter, patientWhereInput>
    radiologue?: XOR<RadiologueScalarRelationFilter, radiologueWhereInput>
    doctor?: XOR<DoctorScalarRelationFilter, doctorWhereInput>
  }, "id">

  export type RadioOrderByWithAggregationInput = {
    id?: SortOrder
    patient_id?: SortOrder
    radiologue_id?: SortOrder
    doctor_id?: SortOrder
    date?: SortOrder
    radio_image?: SortOrder
    Title?: SortOrder
    Comment?: SortOrderInput | SortOrder
    type?: SortOrder
    _count?: RadioCountOrderByAggregateInput
    _max?: RadioMaxOrderByAggregateInput
    _min?: RadioMinOrderByAggregateInput
  }

  export type RadioScalarWhereWithAggregatesInput = {
    AND?: RadioScalarWhereWithAggregatesInput | RadioScalarWhereWithAggregatesInput[]
    OR?: RadioScalarWhereWithAggregatesInput[]
    NOT?: RadioScalarWhereWithAggregatesInput | RadioScalarWhereWithAggregatesInput[]
    id?: UuidWithAggregatesFilter<"Radio"> | string
    patient_id?: UuidWithAggregatesFilter<"Radio"> | string
    radiologue_id?: UuidWithAggregatesFilter<"Radio"> | string
    doctor_id?: UuidWithAggregatesFilter<"Radio"> | string
    date?: DateTimeWithAggregatesFilter<"Radio"> | Date | string
    radio_image?: BytesWithAggregatesFilter<"Radio"> | Uint8Array
    Title?: StringWithAggregatesFilter<"Radio"> | string
    Comment?: StringNullableWithAggregatesFilter<"Radio"> | string | null
    type?: EnumRadioTypeWithAggregatesFilter<"Radio"> | $Enums.RadioType
  }

  export type radiologueCreateInput = {
    id?: string
    firstName: string
    lastName: string
    email: string
    password: string
    redio_liste?: RadioCreateNestedManyWithoutRadiologueInput
  }

  export type radiologueUncheckedCreateInput = {
    id?: string
    firstName: string
    lastName: string
    email: string
    password: string
    redio_liste?: RadioUncheckedCreateNestedManyWithoutRadiologueInput
  }

  export type radiologueUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    firstName?: StringFieldUpdateOperationsInput | string
    lastName?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    redio_liste?: RadioUpdateManyWithoutRadiologueNestedInput
  }

  export type radiologueUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    firstName?: StringFieldUpdateOperationsInput | string
    lastName?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    redio_liste?: RadioUncheckedUpdateManyWithoutRadiologueNestedInput
  }

  export type radiologueCreateManyInput = {
    id?: string
    firstName: string
    lastName: string
    email: string
    password: string
  }

  export type radiologueUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    firstName?: StringFieldUpdateOperationsInput | string
    lastName?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
  }

  export type radiologueUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    firstName?: StringFieldUpdateOperationsInput | string
    lastName?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
  }

  export type doctorCreateInput = {
    id?: string
    firstName: string
    lastName: string
    email: string
    password: string
    redio_liste?: RadioCreateNestedManyWithoutDoctorInput
  }

  export type doctorUncheckedCreateInput = {
    id?: string
    firstName: string
    lastName: string
    email: string
    password: string
    redio_liste?: RadioUncheckedCreateNestedManyWithoutDoctorInput
  }

  export type doctorUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    firstName?: StringFieldUpdateOperationsInput | string
    lastName?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    redio_liste?: RadioUpdateManyWithoutDoctorNestedInput
  }

  export type doctorUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    firstName?: StringFieldUpdateOperationsInput | string
    lastName?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    redio_liste?: RadioUncheckedUpdateManyWithoutDoctorNestedInput
  }

  export type doctorCreateManyInput = {
    id?: string
    firstName: string
    lastName: string
    email: string
    password: string
  }

  export type doctorUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    firstName?: StringFieldUpdateOperationsInput | string
    lastName?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
  }

  export type doctorUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    firstName?: StringFieldUpdateOperationsInput | string
    lastName?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
  }

  export type patientCreateInput = {
    id?: string
    firstName: string
    lastName: string
    age: number
    dateOfBirth: Date | string
    medicalHistory: string
    email: string
    password: string
    redio_liste?: RadioCreateNestedManyWithoutPatientInput
  }

  export type patientUncheckedCreateInput = {
    id?: string
    firstName: string
    lastName: string
    age: number
    dateOfBirth: Date | string
    medicalHistory: string
    email: string
    password: string
    redio_liste?: RadioUncheckedCreateNestedManyWithoutPatientInput
  }

  export type patientUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    firstName?: StringFieldUpdateOperationsInput | string
    lastName?: StringFieldUpdateOperationsInput | string
    age?: IntFieldUpdateOperationsInput | number
    dateOfBirth?: DateTimeFieldUpdateOperationsInput | Date | string
    medicalHistory?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    redio_liste?: RadioUpdateManyWithoutPatientNestedInput
  }

  export type patientUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    firstName?: StringFieldUpdateOperationsInput | string
    lastName?: StringFieldUpdateOperationsInput | string
    age?: IntFieldUpdateOperationsInput | number
    dateOfBirth?: DateTimeFieldUpdateOperationsInput | Date | string
    medicalHistory?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    redio_liste?: RadioUncheckedUpdateManyWithoutPatientNestedInput
  }

  export type patientCreateManyInput = {
    id?: string
    firstName: string
    lastName: string
    age: number
    dateOfBirth: Date | string
    medicalHistory: string
    email: string
    password: string
  }

  export type patientUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    firstName?: StringFieldUpdateOperationsInput | string
    lastName?: StringFieldUpdateOperationsInput | string
    age?: IntFieldUpdateOperationsInput | number
    dateOfBirth?: DateTimeFieldUpdateOperationsInput | Date | string
    medicalHistory?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
  }

  export type patientUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    firstName?: StringFieldUpdateOperationsInput | string
    lastName?: StringFieldUpdateOperationsInput | string
    age?: IntFieldUpdateOperationsInput | number
    dateOfBirth?: DateTimeFieldUpdateOperationsInput | Date | string
    medicalHistory?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
  }

  export type RadioCreateInput = {
    id?: string
    date?: Date | string
    radio_image: Uint8Array
    Title: string
    Comment?: string | null
    type: $Enums.RadioType
    patient: patientCreateNestedOneWithoutRedio_listeInput
    radiologue: radiologueCreateNestedOneWithoutRedio_listeInput
    doctor: doctorCreateNestedOneWithoutRedio_listeInput
  }

  export type RadioUncheckedCreateInput = {
    id?: string
    patient_id: string
    radiologue_id: string
    doctor_id: string
    date?: Date | string
    radio_image: Uint8Array
    Title: string
    Comment?: string | null
    type: $Enums.RadioType
  }

  export type RadioUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    date?: DateTimeFieldUpdateOperationsInput | Date | string
    radio_image?: BytesFieldUpdateOperationsInput | Uint8Array
    Title?: StringFieldUpdateOperationsInput | string
    Comment?: NullableStringFieldUpdateOperationsInput | string | null
    type?: EnumRadioTypeFieldUpdateOperationsInput | $Enums.RadioType
    patient?: patientUpdateOneRequiredWithoutRedio_listeNestedInput
    radiologue?: radiologueUpdateOneRequiredWithoutRedio_listeNestedInput
    doctor?: doctorUpdateOneRequiredWithoutRedio_listeNestedInput
  }

  export type RadioUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    patient_id?: StringFieldUpdateOperationsInput | string
    radiologue_id?: StringFieldUpdateOperationsInput | string
    doctor_id?: StringFieldUpdateOperationsInput | string
    date?: DateTimeFieldUpdateOperationsInput | Date | string
    radio_image?: BytesFieldUpdateOperationsInput | Uint8Array
    Title?: StringFieldUpdateOperationsInput | string
    Comment?: NullableStringFieldUpdateOperationsInput | string | null
    type?: EnumRadioTypeFieldUpdateOperationsInput | $Enums.RadioType
  }

  export type RadioCreateManyInput = {
    id?: string
    patient_id: string
    radiologue_id: string
    doctor_id: string
    date?: Date | string
    radio_image: Uint8Array
    Title: string
    Comment?: string | null
    type: $Enums.RadioType
  }

  export type RadioUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    date?: DateTimeFieldUpdateOperationsInput | Date | string
    radio_image?: BytesFieldUpdateOperationsInput | Uint8Array
    Title?: StringFieldUpdateOperationsInput | string
    Comment?: NullableStringFieldUpdateOperationsInput | string | null
    type?: EnumRadioTypeFieldUpdateOperationsInput | $Enums.RadioType
  }

  export type RadioUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    patient_id?: StringFieldUpdateOperationsInput | string
    radiologue_id?: StringFieldUpdateOperationsInput | string
    doctor_id?: StringFieldUpdateOperationsInput | string
    date?: DateTimeFieldUpdateOperationsInput | Date | string
    radio_image?: BytesFieldUpdateOperationsInput | Uint8Array
    Title?: StringFieldUpdateOperationsInput | string
    Comment?: NullableStringFieldUpdateOperationsInput | string | null
    type?: EnumRadioTypeFieldUpdateOperationsInput | $Enums.RadioType
  }

  export type UuidFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedUuidFilter<$PrismaModel> | string
  }

  export type StringFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedStringFilter<$PrismaModel> | string
  }

  export type RadioListRelationFilter = {
    every?: RadioWhereInput
    some?: RadioWhereInput
    none?: RadioWhereInput
  }

  export type RadioOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type radiologueCountOrderByAggregateInput = {
    id?: SortOrder
    firstName?: SortOrder
    lastName?: SortOrder
    email?: SortOrder
    password?: SortOrder
  }

  export type radiologueMaxOrderByAggregateInput = {
    id?: SortOrder
    firstName?: SortOrder
    lastName?: SortOrder
    email?: SortOrder
    password?: SortOrder
  }

  export type radiologueMinOrderByAggregateInput = {
    id?: SortOrder
    firstName?: SortOrder
    lastName?: SortOrder
    email?: SortOrder
    password?: SortOrder
  }

  export type UuidWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedUuidWithAggregatesFilter<$PrismaModel> | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedStringFilter<$PrismaModel>
    _max?: NestedStringFilter<$PrismaModel>
  }

  export type StringWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedStringWithAggregatesFilter<$PrismaModel> | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedStringFilter<$PrismaModel>
    _max?: NestedStringFilter<$PrismaModel>
  }

  export type doctorCountOrderByAggregateInput = {
    id?: SortOrder
    firstName?: SortOrder
    lastName?: SortOrder
    email?: SortOrder
    password?: SortOrder
  }

  export type doctorMaxOrderByAggregateInput = {
    id?: SortOrder
    firstName?: SortOrder
    lastName?: SortOrder
    email?: SortOrder
    password?: SortOrder
  }

  export type doctorMinOrderByAggregateInput = {
    id?: SortOrder
    firstName?: SortOrder
    lastName?: SortOrder
    email?: SortOrder
    password?: SortOrder
  }

  export type IntFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[] | ListIntFieldRefInput<$PrismaModel>
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel>
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntFilter<$PrismaModel> | number
  }

  export type DateTimeFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeFilter<$PrismaModel> | Date | string
  }

  export type patientCountOrderByAggregateInput = {
    id?: SortOrder
    firstName?: SortOrder
    lastName?: SortOrder
    age?: SortOrder
    dateOfBirth?: SortOrder
    medicalHistory?: SortOrder
    email?: SortOrder
    password?: SortOrder
  }

  export type patientAvgOrderByAggregateInput = {
    age?: SortOrder
  }

  export type patientMaxOrderByAggregateInput = {
    id?: SortOrder
    firstName?: SortOrder
    lastName?: SortOrder
    age?: SortOrder
    dateOfBirth?: SortOrder
    medicalHistory?: SortOrder
    email?: SortOrder
    password?: SortOrder
  }

  export type patientMinOrderByAggregateInput = {
    id?: SortOrder
    firstName?: SortOrder
    lastName?: SortOrder
    age?: SortOrder
    dateOfBirth?: SortOrder
    medicalHistory?: SortOrder
    email?: SortOrder
    password?: SortOrder
  }

  export type patientSumOrderByAggregateInput = {
    age?: SortOrder
  }

  export type IntWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[] | ListIntFieldRefInput<$PrismaModel>
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel>
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntWithAggregatesFilter<$PrismaModel> | number
    _count?: NestedIntFilter<$PrismaModel>
    _avg?: NestedFloatFilter<$PrismaModel>
    _sum?: NestedIntFilter<$PrismaModel>
    _min?: NestedIntFilter<$PrismaModel>
    _max?: NestedIntFilter<$PrismaModel>
  }

  export type DateTimeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeWithAggregatesFilter<$PrismaModel> | Date | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedDateTimeFilter<$PrismaModel>
    _max?: NestedDateTimeFilter<$PrismaModel>
  }

  export type BytesFilter<$PrismaModel = never> = {
    equals?: Uint8Array | BytesFieldRefInput<$PrismaModel>
    in?: Uint8Array[] | ListBytesFieldRefInput<$PrismaModel>
    notIn?: Uint8Array[] | ListBytesFieldRefInput<$PrismaModel>
    not?: NestedBytesFilter<$PrismaModel> | Uint8Array
  }

  export type StringNullableFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedStringNullableFilter<$PrismaModel> | string | null
  }

  export type EnumRadioTypeFilter<$PrismaModel = never> = {
    equals?: $Enums.RadioType | EnumRadioTypeFieldRefInput<$PrismaModel>
    in?: $Enums.RadioType[] | ListEnumRadioTypeFieldRefInput<$PrismaModel>
    notIn?: $Enums.RadioType[] | ListEnumRadioTypeFieldRefInput<$PrismaModel>
    not?: NestedEnumRadioTypeFilter<$PrismaModel> | $Enums.RadioType
  }

  export type PatientScalarRelationFilter = {
    is?: patientWhereInput
    isNot?: patientWhereInput
  }

  export type RadiologueScalarRelationFilter = {
    is?: radiologueWhereInput
    isNot?: radiologueWhereInput
  }

  export type DoctorScalarRelationFilter = {
    is?: doctorWhereInput
    isNot?: doctorWhereInput
  }

  export type SortOrderInput = {
    sort: SortOrder
    nulls?: NullsOrder
  }

  export type RadioCountOrderByAggregateInput = {
    id?: SortOrder
    patient_id?: SortOrder
    radiologue_id?: SortOrder
    doctor_id?: SortOrder
    date?: SortOrder
    radio_image?: SortOrder
    Title?: SortOrder
    Comment?: SortOrder
    type?: SortOrder
  }

  export type RadioMaxOrderByAggregateInput = {
    id?: SortOrder
    patient_id?: SortOrder
    radiologue_id?: SortOrder
    doctor_id?: SortOrder
    date?: SortOrder
    radio_image?: SortOrder
    Title?: SortOrder
    Comment?: SortOrder
    type?: SortOrder
  }

  export type RadioMinOrderByAggregateInput = {
    id?: SortOrder
    patient_id?: SortOrder
    radiologue_id?: SortOrder
    doctor_id?: SortOrder
    date?: SortOrder
    radio_image?: SortOrder
    Title?: SortOrder
    Comment?: SortOrder
    type?: SortOrder
  }

  export type BytesWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Uint8Array | BytesFieldRefInput<$PrismaModel>
    in?: Uint8Array[] | ListBytesFieldRefInput<$PrismaModel>
    notIn?: Uint8Array[] | ListBytesFieldRefInput<$PrismaModel>
    not?: NestedBytesWithAggregatesFilter<$PrismaModel> | Uint8Array
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedBytesFilter<$PrismaModel>
    _max?: NestedBytesFilter<$PrismaModel>
  }

  export type StringNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedStringNullableWithAggregatesFilter<$PrismaModel> | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedStringNullableFilter<$PrismaModel>
    _max?: NestedStringNullableFilter<$PrismaModel>
  }

  export type EnumRadioTypeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.RadioType | EnumRadioTypeFieldRefInput<$PrismaModel>
    in?: $Enums.RadioType[] | ListEnumRadioTypeFieldRefInput<$PrismaModel>
    notIn?: $Enums.RadioType[] | ListEnumRadioTypeFieldRefInput<$PrismaModel>
    not?: NestedEnumRadioTypeWithAggregatesFilter<$PrismaModel> | $Enums.RadioType
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumRadioTypeFilter<$PrismaModel>
    _max?: NestedEnumRadioTypeFilter<$PrismaModel>
  }

  export type RadioCreateNestedManyWithoutRadiologueInput = {
    create?: XOR<RadioCreateWithoutRadiologueInput, RadioUncheckedCreateWithoutRadiologueInput> | RadioCreateWithoutRadiologueInput[] | RadioUncheckedCreateWithoutRadiologueInput[]
    connectOrCreate?: RadioCreateOrConnectWithoutRadiologueInput | RadioCreateOrConnectWithoutRadiologueInput[]
    createMany?: RadioCreateManyRadiologueInputEnvelope
    connect?: RadioWhereUniqueInput | RadioWhereUniqueInput[]
  }

  export type RadioUncheckedCreateNestedManyWithoutRadiologueInput = {
    create?: XOR<RadioCreateWithoutRadiologueInput, RadioUncheckedCreateWithoutRadiologueInput> | RadioCreateWithoutRadiologueInput[] | RadioUncheckedCreateWithoutRadiologueInput[]
    connectOrCreate?: RadioCreateOrConnectWithoutRadiologueInput | RadioCreateOrConnectWithoutRadiologueInput[]
    createMany?: RadioCreateManyRadiologueInputEnvelope
    connect?: RadioWhereUniqueInput | RadioWhereUniqueInput[]
  }

  export type StringFieldUpdateOperationsInput = {
    set?: string
  }

  export type RadioUpdateManyWithoutRadiologueNestedInput = {
    create?: XOR<RadioCreateWithoutRadiologueInput, RadioUncheckedCreateWithoutRadiologueInput> | RadioCreateWithoutRadiologueInput[] | RadioUncheckedCreateWithoutRadiologueInput[]
    connectOrCreate?: RadioCreateOrConnectWithoutRadiologueInput | RadioCreateOrConnectWithoutRadiologueInput[]
    upsert?: RadioUpsertWithWhereUniqueWithoutRadiologueInput | RadioUpsertWithWhereUniqueWithoutRadiologueInput[]
    createMany?: RadioCreateManyRadiologueInputEnvelope
    set?: RadioWhereUniqueInput | RadioWhereUniqueInput[]
    disconnect?: RadioWhereUniqueInput | RadioWhereUniqueInput[]
    delete?: RadioWhereUniqueInput | RadioWhereUniqueInput[]
    connect?: RadioWhereUniqueInput | RadioWhereUniqueInput[]
    update?: RadioUpdateWithWhereUniqueWithoutRadiologueInput | RadioUpdateWithWhereUniqueWithoutRadiologueInput[]
    updateMany?: RadioUpdateManyWithWhereWithoutRadiologueInput | RadioUpdateManyWithWhereWithoutRadiologueInput[]
    deleteMany?: RadioScalarWhereInput | RadioScalarWhereInput[]
  }

  export type RadioUncheckedUpdateManyWithoutRadiologueNestedInput = {
    create?: XOR<RadioCreateWithoutRadiologueInput, RadioUncheckedCreateWithoutRadiologueInput> | RadioCreateWithoutRadiologueInput[] | RadioUncheckedCreateWithoutRadiologueInput[]
    connectOrCreate?: RadioCreateOrConnectWithoutRadiologueInput | RadioCreateOrConnectWithoutRadiologueInput[]
    upsert?: RadioUpsertWithWhereUniqueWithoutRadiologueInput | RadioUpsertWithWhereUniqueWithoutRadiologueInput[]
    createMany?: RadioCreateManyRadiologueInputEnvelope
    set?: RadioWhereUniqueInput | RadioWhereUniqueInput[]
    disconnect?: RadioWhereUniqueInput | RadioWhereUniqueInput[]
    delete?: RadioWhereUniqueInput | RadioWhereUniqueInput[]
    connect?: RadioWhereUniqueInput | RadioWhereUniqueInput[]
    update?: RadioUpdateWithWhereUniqueWithoutRadiologueInput | RadioUpdateWithWhereUniqueWithoutRadiologueInput[]
    updateMany?: RadioUpdateManyWithWhereWithoutRadiologueInput | RadioUpdateManyWithWhereWithoutRadiologueInput[]
    deleteMany?: RadioScalarWhereInput | RadioScalarWhereInput[]
  }

  export type RadioCreateNestedManyWithoutDoctorInput = {
    create?: XOR<RadioCreateWithoutDoctorInput, RadioUncheckedCreateWithoutDoctorInput> | RadioCreateWithoutDoctorInput[] | RadioUncheckedCreateWithoutDoctorInput[]
    connectOrCreate?: RadioCreateOrConnectWithoutDoctorInput | RadioCreateOrConnectWithoutDoctorInput[]
    createMany?: RadioCreateManyDoctorInputEnvelope
    connect?: RadioWhereUniqueInput | RadioWhereUniqueInput[]
  }

  export type RadioUncheckedCreateNestedManyWithoutDoctorInput = {
    create?: XOR<RadioCreateWithoutDoctorInput, RadioUncheckedCreateWithoutDoctorInput> | RadioCreateWithoutDoctorInput[] | RadioUncheckedCreateWithoutDoctorInput[]
    connectOrCreate?: RadioCreateOrConnectWithoutDoctorInput | RadioCreateOrConnectWithoutDoctorInput[]
    createMany?: RadioCreateManyDoctorInputEnvelope
    connect?: RadioWhereUniqueInput | RadioWhereUniqueInput[]
  }

  export type RadioUpdateManyWithoutDoctorNestedInput = {
    create?: XOR<RadioCreateWithoutDoctorInput, RadioUncheckedCreateWithoutDoctorInput> | RadioCreateWithoutDoctorInput[] | RadioUncheckedCreateWithoutDoctorInput[]
    connectOrCreate?: RadioCreateOrConnectWithoutDoctorInput | RadioCreateOrConnectWithoutDoctorInput[]
    upsert?: RadioUpsertWithWhereUniqueWithoutDoctorInput | RadioUpsertWithWhereUniqueWithoutDoctorInput[]
    createMany?: RadioCreateManyDoctorInputEnvelope
    set?: RadioWhereUniqueInput | RadioWhereUniqueInput[]
    disconnect?: RadioWhereUniqueInput | RadioWhereUniqueInput[]
    delete?: RadioWhereUniqueInput | RadioWhereUniqueInput[]
    connect?: RadioWhereUniqueInput | RadioWhereUniqueInput[]
    update?: RadioUpdateWithWhereUniqueWithoutDoctorInput | RadioUpdateWithWhereUniqueWithoutDoctorInput[]
    updateMany?: RadioUpdateManyWithWhereWithoutDoctorInput | RadioUpdateManyWithWhereWithoutDoctorInput[]
    deleteMany?: RadioScalarWhereInput | RadioScalarWhereInput[]
  }

  export type RadioUncheckedUpdateManyWithoutDoctorNestedInput = {
    create?: XOR<RadioCreateWithoutDoctorInput, RadioUncheckedCreateWithoutDoctorInput> | RadioCreateWithoutDoctorInput[] | RadioUncheckedCreateWithoutDoctorInput[]
    connectOrCreate?: RadioCreateOrConnectWithoutDoctorInput | RadioCreateOrConnectWithoutDoctorInput[]
    upsert?: RadioUpsertWithWhereUniqueWithoutDoctorInput | RadioUpsertWithWhereUniqueWithoutDoctorInput[]
    createMany?: RadioCreateManyDoctorInputEnvelope
    set?: RadioWhereUniqueInput | RadioWhereUniqueInput[]
    disconnect?: RadioWhereUniqueInput | RadioWhereUniqueInput[]
    delete?: RadioWhereUniqueInput | RadioWhereUniqueInput[]
    connect?: RadioWhereUniqueInput | RadioWhereUniqueInput[]
    update?: RadioUpdateWithWhereUniqueWithoutDoctorInput | RadioUpdateWithWhereUniqueWithoutDoctorInput[]
    updateMany?: RadioUpdateManyWithWhereWithoutDoctorInput | RadioUpdateManyWithWhereWithoutDoctorInput[]
    deleteMany?: RadioScalarWhereInput | RadioScalarWhereInput[]
  }

  export type RadioCreateNestedManyWithoutPatientInput = {
    create?: XOR<RadioCreateWithoutPatientInput, RadioUncheckedCreateWithoutPatientInput> | RadioCreateWithoutPatientInput[] | RadioUncheckedCreateWithoutPatientInput[]
    connectOrCreate?: RadioCreateOrConnectWithoutPatientInput | RadioCreateOrConnectWithoutPatientInput[]
    createMany?: RadioCreateManyPatientInputEnvelope
    connect?: RadioWhereUniqueInput | RadioWhereUniqueInput[]
  }

  export type RadioUncheckedCreateNestedManyWithoutPatientInput = {
    create?: XOR<RadioCreateWithoutPatientInput, RadioUncheckedCreateWithoutPatientInput> | RadioCreateWithoutPatientInput[] | RadioUncheckedCreateWithoutPatientInput[]
    connectOrCreate?: RadioCreateOrConnectWithoutPatientInput | RadioCreateOrConnectWithoutPatientInput[]
    createMany?: RadioCreateManyPatientInputEnvelope
    connect?: RadioWhereUniqueInput | RadioWhereUniqueInput[]
  }

  export type IntFieldUpdateOperationsInput = {
    set?: number
    increment?: number
    decrement?: number
    multiply?: number
    divide?: number
  }

  export type DateTimeFieldUpdateOperationsInput = {
    set?: Date | string
  }

  export type RadioUpdateManyWithoutPatientNestedInput = {
    create?: XOR<RadioCreateWithoutPatientInput, RadioUncheckedCreateWithoutPatientInput> | RadioCreateWithoutPatientInput[] | RadioUncheckedCreateWithoutPatientInput[]
    connectOrCreate?: RadioCreateOrConnectWithoutPatientInput | RadioCreateOrConnectWithoutPatientInput[]
    upsert?: RadioUpsertWithWhereUniqueWithoutPatientInput | RadioUpsertWithWhereUniqueWithoutPatientInput[]
    createMany?: RadioCreateManyPatientInputEnvelope
    set?: RadioWhereUniqueInput | RadioWhereUniqueInput[]
    disconnect?: RadioWhereUniqueInput | RadioWhereUniqueInput[]
    delete?: RadioWhereUniqueInput | RadioWhereUniqueInput[]
    connect?: RadioWhereUniqueInput | RadioWhereUniqueInput[]
    update?: RadioUpdateWithWhereUniqueWithoutPatientInput | RadioUpdateWithWhereUniqueWithoutPatientInput[]
    updateMany?: RadioUpdateManyWithWhereWithoutPatientInput | RadioUpdateManyWithWhereWithoutPatientInput[]
    deleteMany?: RadioScalarWhereInput | RadioScalarWhereInput[]
  }

  export type RadioUncheckedUpdateManyWithoutPatientNestedInput = {
    create?: XOR<RadioCreateWithoutPatientInput, RadioUncheckedCreateWithoutPatientInput> | RadioCreateWithoutPatientInput[] | RadioUncheckedCreateWithoutPatientInput[]
    connectOrCreate?: RadioCreateOrConnectWithoutPatientInput | RadioCreateOrConnectWithoutPatientInput[]
    upsert?: RadioUpsertWithWhereUniqueWithoutPatientInput | RadioUpsertWithWhereUniqueWithoutPatientInput[]
    createMany?: RadioCreateManyPatientInputEnvelope
    set?: RadioWhereUniqueInput | RadioWhereUniqueInput[]
    disconnect?: RadioWhereUniqueInput | RadioWhereUniqueInput[]
    delete?: RadioWhereUniqueInput | RadioWhereUniqueInput[]
    connect?: RadioWhereUniqueInput | RadioWhereUniqueInput[]
    update?: RadioUpdateWithWhereUniqueWithoutPatientInput | RadioUpdateWithWhereUniqueWithoutPatientInput[]
    updateMany?: RadioUpdateManyWithWhereWithoutPatientInput | RadioUpdateManyWithWhereWithoutPatientInput[]
    deleteMany?: RadioScalarWhereInput | RadioScalarWhereInput[]
  }

  export type patientCreateNestedOneWithoutRedio_listeInput = {
    create?: XOR<patientCreateWithoutRedio_listeInput, patientUncheckedCreateWithoutRedio_listeInput>
    connectOrCreate?: patientCreateOrConnectWithoutRedio_listeInput
    connect?: patientWhereUniqueInput
  }

  export type radiologueCreateNestedOneWithoutRedio_listeInput = {
    create?: XOR<radiologueCreateWithoutRedio_listeInput, radiologueUncheckedCreateWithoutRedio_listeInput>
    connectOrCreate?: radiologueCreateOrConnectWithoutRedio_listeInput
    connect?: radiologueWhereUniqueInput
  }

  export type doctorCreateNestedOneWithoutRedio_listeInput = {
    create?: XOR<doctorCreateWithoutRedio_listeInput, doctorUncheckedCreateWithoutRedio_listeInput>
    connectOrCreate?: doctorCreateOrConnectWithoutRedio_listeInput
    connect?: doctorWhereUniqueInput
  }

  export type BytesFieldUpdateOperationsInput = {
    set?: Uint8Array
  }

  export type NullableStringFieldUpdateOperationsInput = {
    set?: string | null
  }

  export type EnumRadioTypeFieldUpdateOperationsInput = {
    set?: $Enums.RadioType
  }

  export type patientUpdateOneRequiredWithoutRedio_listeNestedInput = {
    create?: XOR<patientCreateWithoutRedio_listeInput, patientUncheckedCreateWithoutRedio_listeInput>
    connectOrCreate?: patientCreateOrConnectWithoutRedio_listeInput
    upsert?: patientUpsertWithoutRedio_listeInput
    connect?: patientWhereUniqueInput
    update?: XOR<XOR<patientUpdateToOneWithWhereWithoutRedio_listeInput, patientUpdateWithoutRedio_listeInput>, patientUncheckedUpdateWithoutRedio_listeInput>
  }

  export type radiologueUpdateOneRequiredWithoutRedio_listeNestedInput = {
    create?: XOR<radiologueCreateWithoutRedio_listeInput, radiologueUncheckedCreateWithoutRedio_listeInput>
    connectOrCreate?: radiologueCreateOrConnectWithoutRedio_listeInput
    upsert?: radiologueUpsertWithoutRedio_listeInput
    connect?: radiologueWhereUniqueInput
    update?: XOR<XOR<radiologueUpdateToOneWithWhereWithoutRedio_listeInput, radiologueUpdateWithoutRedio_listeInput>, radiologueUncheckedUpdateWithoutRedio_listeInput>
  }

  export type doctorUpdateOneRequiredWithoutRedio_listeNestedInput = {
    create?: XOR<doctorCreateWithoutRedio_listeInput, doctorUncheckedCreateWithoutRedio_listeInput>
    connectOrCreate?: doctorCreateOrConnectWithoutRedio_listeInput
    upsert?: doctorUpsertWithoutRedio_listeInput
    connect?: doctorWhereUniqueInput
    update?: XOR<XOR<doctorUpdateToOneWithWhereWithoutRedio_listeInput, doctorUpdateWithoutRedio_listeInput>, doctorUncheckedUpdateWithoutRedio_listeInput>
  }

  export type NestedUuidFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedUuidFilter<$PrismaModel> | string
  }

  export type NestedStringFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringFilter<$PrismaModel> | string
  }

  export type NestedUuidWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedUuidWithAggregatesFilter<$PrismaModel> | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedStringFilter<$PrismaModel>
    _max?: NestedStringFilter<$PrismaModel>
  }

  export type NestedIntFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[] | ListIntFieldRefInput<$PrismaModel>
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel>
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntFilter<$PrismaModel> | number
  }

  export type NestedStringWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringWithAggregatesFilter<$PrismaModel> | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedStringFilter<$PrismaModel>
    _max?: NestedStringFilter<$PrismaModel>
  }

  export type NestedDateTimeFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeFilter<$PrismaModel> | Date | string
  }

  export type NestedIntWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[] | ListIntFieldRefInput<$PrismaModel>
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel>
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntWithAggregatesFilter<$PrismaModel> | number
    _count?: NestedIntFilter<$PrismaModel>
    _avg?: NestedFloatFilter<$PrismaModel>
    _sum?: NestedIntFilter<$PrismaModel>
    _min?: NestedIntFilter<$PrismaModel>
    _max?: NestedIntFilter<$PrismaModel>
  }

  export type NestedFloatFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel>
    in?: number[] | ListFloatFieldRefInput<$PrismaModel>
    notIn?: number[] | ListFloatFieldRefInput<$PrismaModel>
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatFilter<$PrismaModel> | number
  }

  export type NestedDateTimeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeWithAggregatesFilter<$PrismaModel> | Date | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedDateTimeFilter<$PrismaModel>
    _max?: NestedDateTimeFilter<$PrismaModel>
  }

  export type NestedBytesFilter<$PrismaModel = never> = {
    equals?: Uint8Array | BytesFieldRefInput<$PrismaModel>
    in?: Uint8Array[] | ListBytesFieldRefInput<$PrismaModel>
    notIn?: Uint8Array[] | ListBytesFieldRefInput<$PrismaModel>
    not?: NestedBytesFilter<$PrismaModel> | Uint8Array
  }

  export type NestedStringNullableFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringNullableFilter<$PrismaModel> | string | null
  }

  export type NestedEnumRadioTypeFilter<$PrismaModel = never> = {
    equals?: $Enums.RadioType | EnumRadioTypeFieldRefInput<$PrismaModel>
    in?: $Enums.RadioType[] | ListEnumRadioTypeFieldRefInput<$PrismaModel>
    notIn?: $Enums.RadioType[] | ListEnumRadioTypeFieldRefInput<$PrismaModel>
    not?: NestedEnumRadioTypeFilter<$PrismaModel> | $Enums.RadioType
  }

  export type NestedBytesWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Uint8Array | BytesFieldRefInput<$PrismaModel>
    in?: Uint8Array[] | ListBytesFieldRefInput<$PrismaModel>
    notIn?: Uint8Array[] | ListBytesFieldRefInput<$PrismaModel>
    not?: NestedBytesWithAggregatesFilter<$PrismaModel> | Uint8Array
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedBytesFilter<$PrismaModel>
    _max?: NestedBytesFilter<$PrismaModel>
  }

  export type NestedStringNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringNullableWithAggregatesFilter<$PrismaModel> | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedStringNullableFilter<$PrismaModel>
    _max?: NestedStringNullableFilter<$PrismaModel>
  }

  export type NestedIntNullableFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel> | null
    in?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntNullableFilter<$PrismaModel> | number | null
  }

  export type NestedEnumRadioTypeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.RadioType | EnumRadioTypeFieldRefInput<$PrismaModel>
    in?: $Enums.RadioType[] | ListEnumRadioTypeFieldRefInput<$PrismaModel>
    notIn?: $Enums.RadioType[] | ListEnumRadioTypeFieldRefInput<$PrismaModel>
    not?: NestedEnumRadioTypeWithAggregatesFilter<$PrismaModel> | $Enums.RadioType
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumRadioTypeFilter<$PrismaModel>
    _max?: NestedEnumRadioTypeFilter<$PrismaModel>
  }

  export type RadioCreateWithoutRadiologueInput = {
    id?: string
    date?: Date | string
    radio_image: Uint8Array
    Title: string
    Comment?: string | null
    type: $Enums.RadioType
    patient: patientCreateNestedOneWithoutRedio_listeInput
    doctor: doctorCreateNestedOneWithoutRedio_listeInput
  }

  export type RadioUncheckedCreateWithoutRadiologueInput = {
    id?: string
    patient_id: string
    doctor_id: string
    date?: Date | string
    radio_image: Uint8Array
    Title: string
    Comment?: string | null
    type: $Enums.RadioType
  }

  export type RadioCreateOrConnectWithoutRadiologueInput = {
    where: RadioWhereUniqueInput
    create: XOR<RadioCreateWithoutRadiologueInput, RadioUncheckedCreateWithoutRadiologueInput>
  }

  export type RadioCreateManyRadiologueInputEnvelope = {
    data: RadioCreateManyRadiologueInput | RadioCreateManyRadiologueInput[]
    skipDuplicates?: boolean
  }

  export type RadioUpsertWithWhereUniqueWithoutRadiologueInput = {
    where: RadioWhereUniqueInput
    update: XOR<RadioUpdateWithoutRadiologueInput, RadioUncheckedUpdateWithoutRadiologueInput>
    create: XOR<RadioCreateWithoutRadiologueInput, RadioUncheckedCreateWithoutRadiologueInput>
  }

  export type RadioUpdateWithWhereUniqueWithoutRadiologueInput = {
    where: RadioWhereUniqueInput
    data: XOR<RadioUpdateWithoutRadiologueInput, RadioUncheckedUpdateWithoutRadiologueInput>
  }

  export type RadioUpdateManyWithWhereWithoutRadiologueInput = {
    where: RadioScalarWhereInput
    data: XOR<RadioUpdateManyMutationInput, RadioUncheckedUpdateManyWithoutRadiologueInput>
  }

  export type RadioScalarWhereInput = {
    AND?: RadioScalarWhereInput | RadioScalarWhereInput[]
    OR?: RadioScalarWhereInput[]
    NOT?: RadioScalarWhereInput | RadioScalarWhereInput[]
    id?: UuidFilter<"Radio"> | string
    patient_id?: UuidFilter<"Radio"> | string
    radiologue_id?: UuidFilter<"Radio"> | string
    doctor_id?: UuidFilter<"Radio"> | string
    date?: DateTimeFilter<"Radio"> | Date | string
    radio_image?: BytesFilter<"Radio"> | Uint8Array
    Title?: StringFilter<"Radio"> | string
    Comment?: StringNullableFilter<"Radio"> | string | null
    type?: EnumRadioTypeFilter<"Radio"> | $Enums.RadioType
  }

  export type RadioCreateWithoutDoctorInput = {
    id?: string
    date?: Date | string
    radio_image: Uint8Array
    Title: string
    Comment?: string | null
    type: $Enums.RadioType
    patient: patientCreateNestedOneWithoutRedio_listeInput
    radiologue: radiologueCreateNestedOneWithoutRedio_listeInput
  }

  export type RadioUncheckedCreateWithoutDoctorInput = {
    id?: string
    patient_id: string
    radiologue_id: string
    date?: Date | string
    radio_image: Uint8Array
    Title: string
    Comment?: string | null
    type: $Enums.RadioType
  }

  export type RadioCreateOrConnectWithoutDoctorInput = {
    where: RadioWhereUniqueInput
    create: XOR<RadioCreateWithoutDoctorInput, RadioUncheckedCreateWithoutDoctorInput>
  }

  export type RadioCreateManyDoctorInputEnvelope = {
    data: RadioCreateManyDoctorInput | RadioCreateManyDoctorInput[]
    skipDuplicates?: boolean
  }

  export type RadioUpsertWithWhereUniqueWithoutDoctorInput = {
    where: RadioWhereUniqueInput
    update: XOR<RadioUpdateWithoutDoctorInput, RadioUncheckedUpdateWithoutDoctorInput>
    create: XOR<RadioCreateWithoutDoctorInput, RadioUncheckedCreateWithoutDoctorInput>
  }

  export type RadioUpdateWithWhereUniqueWithoutDoctorInput = {
    where: RadioWhereUniqueInput
    data: XOR<RadioUpdateWithoutDoctorInput, RadioUncheckedUpdateWithoutDoctorInput>
  }

  export type RadioUpdateManyWithWhereWithoutDoctorInput = {
    where: RadioScalarWhereInput
    data: XOR<RadioUpdateManyMutationInput, RadioUncheckedUpdateManyWithoutDoctorInput>
  }

  export type RadioCreateWithoutPatientInput = {
    id?: string
    date?: Date | string
    radio_image: Uint8Array
    Title: string
    Comment?: string | null
    type: $Enums.RadioType
    radiologue: radiologueCreateNestedOneWithoutRedio_listeInput
    doctor: doctorCreateNestedOneWithoutRedio_listeInput
  }

  export type RadioUncheckedCreateWithoutPatientInput = {
    id?: string
    radiologue_id: string
    doctor_id: string
    date?: Date | string
    radio_image: Uint8Array
    Title: string
    Comment?: string | null
    type: $Enums.RadioType
  }

  export type RadioCreateOrConnectWithoutPatientInput = {
    where: RadioWhereUniqueInput
    create: XOR<RadioCreateWithoutPatientInput, RadioUncheckedCreateWithoutPatientInput>
  }

  export type RadioCreateManyPatientInputEnvelope = {
    data: RadioCreateManyPatientInput | RadioCreateManyPatientInput[]
    skipDuplicates?: boolean
  }

  export type RadioUpsertWithWhereUniqueWithoutPatientInput = {
    where: RadioWhereUniqueInput
    update: XOR<RadioUpdateWithoutPatientInput, RadioUncheckedUpdateWithoutPatientInput>
    create: XOR<RadioCreateWithoutPatientInput, RadioUncheckedCreateWithoutPatientInput>
  }

  export type RadioUpdateWithWhereUniqueWithoutPatientInput = {
    where: RadioWhereUniqueInput
    data: XOR<RadioUpdateWithoutPatientInput, RadioUncheckedUpdateWithoutPatientInput>
  }

  export type RadioUpdateManyWithWhereWithoutPatientInput = {
    where: RadioScalarWhereInput
    data: XOR<RadioUpdateManyMutationInput, RadioUncheckedUpdateManyWithoutPatientInput>
  }

  export type patientCreateWithoutRedio_listeInput = {
    id?: string
    firstName: string
    lastName: string
    age: number
    dateOfBirth: Date | string
    medicalHistory: string
    email: string
    password: string
  }

  export type patientUncheckedCreateWithoutRedio_listeInput = {
    id?: string
    firstName: string
    lastName: string
    age: number
    dateOfBirth: Date | string
    medicalHistory: string
    email: string
    password: string
  }

  export type patientCreateOrConnectWithoutRedio_listeInput = {
    where: patientWhereUniqueInput
    create: XOR<patientCreateWithoutRedio_listeInput, patientUncheckedCreateWithoutRedio_listeInput>
  }

  export type radiologueCreateWithoutRedio_listeInput = {
    id?: string
    firstName: string
    lastName: string
    email: string
    password: string
  }

  export type radiologueUncheckedCreateWithoutRedio_listeInput = {
    id?: string
    firstName: string
    lastName: string
    email: string
    password: string
  }

  export type radiologueCreateOrConnectWithoutRedio_listeInput = {
    where: radiologueWhereUniqueInput
    create: XOR<radiologueCreateWithoutRedio_listeInput, radiologueUncheckedCreateWithoutRedio_listeInput>
  }

  export type doctorCreateWithoutRedio_listeInput = {
    id?: string
    firstName: string
    lastName: string
    email: string
    password: string
  }

  export type doctorUncheckedCreateWithoutRedio_listeInput = {
    id?: string
    firstName: string
    lastName: string
    email: string
    password: string
  }

  export type doctorCreateOrConnectWithoutRedio_listeInput = {
    where: doctorWhereUniqueInput
    create: XOR<doctorCreateWithoutRedio_listeInput, doctorUncheckedCreateWithoutRedio_listeInput>
  }

  export type patientUpsertWithoutRedio_listeInput = {
    update: XOR<patientUpdateWithoutRedio_listeInput, patientUncheckedUpdateWithoutRedio_listeInput>
    create: XOR<patientCreateWithoutRedio_listeInput, patientUncheckedCreateWithoutRedio_listeInput>
    where?: patientWhereInput
  }

  export type patientUpdateToOneWithWhereWithoutRedio_listeInput = {
    where?: patientWhereInput
    data: XOR<patientUpdateWithoutRedio_listeInput, patientUncheckedUpdateWithoutRedio_listeInput>
  }

  export type patientUpdateWithoutRedio_listeInput = {
    id?: StringFieldUpdateOperationsInput | string
    firstName?: StringFieldUpdateOperationsInput | string
    lastName?: StringFieldUpdateOperationsInput | string
    age?: IntFieldUpdateOperationsInput | number
    dateOfBirth?: DateTimeFieldUpdateOperationsInput | Date | string
    medicalHistory?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
  }

  export type patientUncheckedUpdateWithoutRedio_listeInput = {
    id?: StringFieldUpdateOperationsInput | string
    firstName?: StringFieldUpdateOperationsInput | string
    lastName?: StringFieldUpdateOperationsInput | string
    age?: IntFieldUpdateOperationsInput | number
    dateOfBirth?: DateTimeFieldUpdateOperationsInput | Date | string
    medicalHistory?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
  }

  export type radiologueUpsertWithoutRedio_listeInput = {
    update: XOR<radiologueUpdateWithoutRedio_listeInput, radiologueUncheckedUpdateWithoutRedio_listeInput>
    create: XOR<radiologueCreateWithoutRedio_listeInput, radiologueUncheckedCreateWithoutRedio_listeInput>
    where?: radiologueWhereInput
  }

  export type radiologueUpdateToOneWithWhereWithoutRedio_listeInput = {
    where?: radiologueWhereInput
    data: XOR<radiologueUpdateWithoutRedio_listeInput, radiologueUncheckedUpdateWithoutRedio_listeInput>
  }

  export type radiologueUpdateWithoutRedio_listeInput = {
    id?: StringFieldUpdateOperationsInput | string
    firstName?: StringFieldUpdateOperationsInput | string
    lastName?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
  }

  export type radiologueUncheckedUpdateWithoutRedio_listeInput = {
    id?: StringFieldUpdateOperationsInput | string
    firstName?: StringFieldUpdateOperationsInput | string
    lastName?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
  }

  export type doctorUpsertWithoutRedio_listeInput = {
    update: XOR<doctorUpdateWithoutRedio_listeInput, doctorUncheckedUpdateWithoutRedio_listeInput>
    create: XOR<doctorCreateWithoutRedio_listeInput, doctorUncheckedCreateWithoutRedio_listeInput>
    where?: doctorWhereInput
  }

  export type doctorUpdateToOneWithWhereWithoutRedio_listeInput = {
    where?: doctorWhereInput
    data: XOR<doctorUpdateWithoutRedio_listeInput, doctorUncheckedUpdateWithoutRedio_listeInput>
  }

  export type doctorUpdateWithoutRedio_listeInput = {
    id?: StringFieldUpdateOperationsInput | string
    firstName?: StringFieldUpdateOperationsInput | string
    lastName?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
  }

  export type doctorUncheckedUpdateWithoutRedio_listeInput = {
    id?: StringFieldUpdateOperationsInput | string
    firstName?: StringFieldUpdateOperationsInput | string
    lastName?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
  }

  export type RadioCreateManyRadiologueInput = {
    id?: string
    patient_id: string
    doctor_id: string
    date?: Date | string
    radio_image: Uint8Array
    Title: string
    Comment?: string | null
    type: $Enums.RadioType
  }

  export type RadioUpdateWithoutRadiologueInput = {
    id?: StringFieldUpdateOperationsInput | string
    date?: DateTimeFieldUpdateOperationsInput | Date | string
    radio_image?: BytesFieldUpdateOperationsInput | Uint8Array
    Title?: StringFieldUpdateOperationsInput | string
    Comment?: NullableStringFieldUpdateOperationsInput | string | null
    type?: EnumRadioTypeFieldUpdateOperationsInput | $Enums.RadioType
    patient?: patientUpdateOneRequiredWithoutRedio_listeNestedInput
    doctor?: doctorUpdateOneRequiredWithoutRedio_listeNestedInput
  }

  export type RadioUncheckedUpdateWithoutRadiologueInput = {
    id?: StringFieldUpdateOperationsInput | string
    patient_id?: StringFieldUpdateOperationsInput | string
    doctor_id?: StringFieldUpdateOperationsInput | string
    date?: DateTimeFieldUpdateOperationsInput | Date | string
    radio_image?: BytesFieldUpdateOperationsInput | Uint8Array
    Title?: StringFieldUpdateOperationsInput | string
    Comment?: NullableStringFieldUpdateOperationsInput | string | null
    type?: EnumRadioTypeFieldUpdateOperationsInput | $Enums.RadioType
  }

  export type RadioUncheckedUpdateManyWithoutRadiologueInput = {
    id?: StringFieldUpdateOperationsInput | string
    patient_id?: StringFieldUpdateOperationsInput | string
    doctor_id?: StringFieldUpdateOperationsInput | string
    date?: DateTimeFieldUpdateOperationsInput | Date | string
    radio_image?: BytesFieldUpdateOperationsInput | Uint8Array
    Title?: StringFieldUpdateOperationsInput | string
    Comment?: NullableStringFieldUpdateOperationsInput | string | null
    type?: EnumRadioTypeFieldUpdateOperationsInput | $Enums.RadioType
  }

  export type RadioCreateManyDoctorInput = {
    id?: string
    patient_id: string
    radiologue_id: string
    date?: Date | string
    radio_image: Uint8Array
    Title: string
    Comment?: string | null
    type: $Enums.RadioType
  }

  export type RadioUpdateWithoutDoctorInput = {
    id?: StringFieldUpdateOperationsInput | string
    date?: DateTimeFieldUpdateOperationsInput | Date | string
    radio_image?: BytesFieldUpdateOperationsInput | Uint8Array
    Title?: StringFieldUpdateOperationsInput | string
    Comment?: NullableStringFieldUpdateOperationsInput | string | null
    type?: EnumRadioTypeFieldUpdateOperationsInput | $Enums.RadioType
    patient?: patientUpdateOneRequiredWithoutRedio_listeNestedInput
    radiologue?: radiologueUpdateOneRequiredWithoutRedio_listeNestedInput
  }

  export type RadioUncheckedUpdateWithoutDoctorInput = {
    id?: StringFieldUpdateOperationsInput | string
    patient_id?: StringFieldUpdateOperationsInput | string
    radiologue_id?: StringFieldUpdateOperationsInput | string
    date?: DateTimeFieldUpdateOperationsInput | Date | string
    radio_image?: BytesFieldUpdateOperationsInput | Uint8Array
    Title?: StringFieldUpdateOperationsInput | string
    Comment?: NullableStringFieldUpdateOperationsInput | string | null
    type?: EnumRadioTypeFieldUpdateOperationsInput | $Enums.RadioType
  }

  export type RadioUncheckedUpdateManyWithoutDoctorInput = {
    id?: StringFieldUpdateOperationsInput | string
    patient_id?: StringFieldUpdateOperationsInput | string
    radiologue_id?: StringFieldUpdateOperationsInput | string
    date?: DateTimeFieldUpdateOperationsInput | Date | string
    radio_image?: BytesFieldUpdateOperationsInput | Uint8Array
    Title?: StringFieldUpdateOperationsInput | string
    Comment?: NullableStringFieldUpdateOperationsInput | string | null
    type?: EnumRadioTypeFieldUpdateOperationsInput | $Enums.RadioType
  }

  export type RadioCreateManyPatientInput = {
    id?: string
    radiologue_id: string
    doctor_id: string
    date?: Date | string
    radio_image: Uint8Array
    Title: string
    Comment?: string | null
    type: $Enums.RadioType
  }

  export type RadioUpdateWithoutPatientInput = {
    id?: StringFieldUpdateOperationsInput | string
    date?: DateTimeFieldUpdateOperationsInput | Date | string
    radio_image?: BytesFieldUpdateOperationsInput | Uint8Array
    Title?: StringFieldUpdateOperationsInput | string
    Comment?: NullableStringFieldUpdateOperationsInput | string | null
    type?: EnumRadioTypeFieldUpdateOperationsInput | $Enums.RadioType
    radiologue?: radiologueUpdateOneRequiredWithoutRedio_listeNestedInput
    doctor?: doctorUpdateOneRequiredWithoutRedio_listeNestedInput
  }

  export type RadioUncheckedUpdateWithoutPatientInput = {
    id?: StringFieldUpdateOperationsInput | string
    radiologue_id?: StringFieldUpdateOperationsInput | string
    doctor_id?: StringFieldUpdateOperationsInput | string
    date?: DateTimeFieldUpdateOperationsInput | Date | string
    radio_image?: BytesFieldUpdateOperationsInput | Uint8Array
    Title?: StringFieldUpdateOperationsInput | string
    Comment?: NullableStringFieldUpdateOperationsInput | string | null
    type?: EnumRadioTypeFieldUpdateOperationsInput | $Enums.RadioType
  }

  export type RadioUncheckedUpdateManyWithoutPatientInput = {
    id?: StringFieldUpdateOperationsInput | string
    radiologue_id?: StringFieldUpdateOperationsInput | string
    doctor_id?: StringFieldUpdateOperationsInput | string
    date?: DateTimeFieldUpdateOperationsInput | Date | string
    radio_image?: BytesFieldUpdateOperationsInput | Uint8Array
    Title?: StringFieldUpdateOperationsInput | string
    Comment?: NullableStringFieldUpdateOperationsInput | string | null
    type?: EnumRadioTypeFieldUpdateOperationsInput | $Enums.RadioType
  }



  /**
   * Batch Payload for updateMany & deleteMany & createMany
   */

  export type BatchPayload = {
    count: number
  }

  /**
   * DMMF
   */
  export const dmmf: runtime.BaseDMMF
}