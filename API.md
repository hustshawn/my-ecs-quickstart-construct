# API Reference <a name="API Reference" id="api-reference"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### MyEcs <a name="MyEcs" id="demo-awscdk-construct.MyEcs"></a>

#### Initializers <a name="Initializers" id="demo-awscdk-construct.MyEcs.Initializer"></a>

```typescript
import { MyEcs } from 'demo-awscdk-construct'

new MyEcs(scope: Construct, id: string, props?: MyEcsProps)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#demo-awscdk-construct.MyEcs.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | *No description.* |
| <code><a href="#demo-awscdk-construct.MyEcs.Initializer.parameter.id">id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#demo-awscdk-construct.MyEcs.Initializer.parameter.props">props</a></code> | <code><a href="#demo-awscdk-construct.MyEcsProps">MyEcsProps</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="demo-awscdk-construct.MyEcs.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

---

##### `id`<sup>Required</sup> <a name="id" id="demo-awscdk-construct.MyEcs.Initializer.parameter.id"></a>

- *Type:* string

---

##### `props`<sup>Optional</sup> <a name="props" id="demo-awscdk-construct.MyEcs.Initializer.parameter.props"></a>

- *Type:* <a href="#demo-awscdk-construct.MyEcsProps">MyEcsProps</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#demo-awscdk-construct.MyEcs.toString">toString</a></code> | Returns a string representation of this construct. |

---

##### `toString` <a name="toString" id="demo-awscdk-construct.MyEcs.toString"></a>

```typescript
public toString(): string
```

Returns a string representation of this construct.

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#demo-awscdk-construct.MyEcs.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |

---

##### ~~`isConstruct`~~ <a name="isConstruct" id="demo-awscdk-construct.MyEcs.isConstruct"></a>

```typescript
import { MyEcs } from 'demo-awscdk-construct'

MyEcs.isConstruct(x: any)
```

Checks if `x` is a construct.

###### `x`<sup>Required</sup> <a name="x" id="demo-awscdk-construct.MyEcs.isConstruct.parameter.x"></a>

- *Type:* any

Any object.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#demo-awscdk-construct.MyEcs.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#demo-awscdk-construct.MyEcs.property.endpoint">endpoint</a></code> | <code>string</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="demo-awscdk-construct.MyEcs.property.node"></a>

```typescript
public readonly node: Node;
```

- *Type:* constructs.Node

The tree node.

---

##### `endpoint`<sup>Required</sup> <a name="endpoint" id="demo-awscdk-construct.MyEcs.property.endpoint"></a>

```typescript
public readonly endpoint: string;
```

- *Type:* string

---


## Structs <a name="Structs" id="Structs"></a>

### MyEcsProps <a name="MyEcsProps" id="demo-awscdk-construct.MyEcsProps"></a>

#### Initializer <a name="Initializer" id="demo-awscdk-construct.MyEcsProps.Initializer"></a>

```typescript
import { MyEcsProps } from 'demo-awscdk-construct'

const myEcsProps: MyEcsProps = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#demo-awscdk-construct.MyEcsProps.property.vpc">vpc</a></code> | <code>aws-cdk-lib.aws_ec2.IVpc</code> | *No description.* |

---

##### `vpc`<sup>Optional</sup> <a name="vpc" id="demo-awscdk-construct.MyEcsProps.property.vpc"></a>

```typescript
public readonly vpc: IVpc;
```

- *Type:* aws-cdk-lib.aws_ec2.IVpc

---



