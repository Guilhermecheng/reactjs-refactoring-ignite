# reactjs-refactoring-ignite
Refactoring code to typescript language<br>

<img src="https://user-images.githubusercontent.com/62719629/139520099-72961ab8-214f-4eed-8b5e-8c304246aca8.png" max-height="400px" />

### Objective
This project was used as a study case for refactoring a React JS code to typescript.

### Walkthrough
1 - Identify all JS files, and rename it to TS<br>
2 - Describe all component types<br>
3 - create types.ts, for FoodProps, which is used in most components<br>
4 - Test for all functionalities

### Code Examples

#### types.ts
```javascript
export interface FoodProps {
    id: number;
    available: boolean;
    name: string;
    description: string;
    price: number;
    image: string;
}
```

#### Dashboard
```javascript
interface DashboardProps {
  // empty props
}

interface DashboardState {
  foods: FoodProps[];
  editingFood: FoodProps;
  modalOpen: boolean;
  editModalOpen: boolean;
}
```

#### Food
```javascript
interface FoodComponentProps {
  food: FoodProps,
  handleEditFood: (arg0: FoodProps) => void,
  handleDelete: (arg0: number) => void,
}

interface FoodComponentState {
  isAvailable: boolean,
}
```
