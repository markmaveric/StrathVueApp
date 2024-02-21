export default (await import('vue')).defineComponent({
// Properties returned from data() become reactive state
// and will be exposed on `this`.
data() {
return {
courses: [
{
id: 1,
coursename: 'Financial Economics'
},
{
id: 2,
coursename: 'Psychology'
},
{
id: 3,
coursename: 'Computer Science'
},
{
id: 4,
coursename: 'Financial Engineering'
},
{
id: 5,
coursename: 'Medicine and Surgery'
},
{
id: 6,
coursename: 'Education'
},
{
id: 7,
coursename: 'Architecture'
},
{
id: 8,
coursename: 'Forestry'
},

{
id: 9,
coursename: 'Law'
},
{
id: 10,
coursename: 'Hospitality and Tourism'
},
]
};
},

// Methods are functions that mutate state and trigger updates.
// They can be bound as event handlers in templates.
methods: {
increment() {
this.count++;
}
},

// Lifecycle hooks are called at different stages
// of a component's lifecycle.
// This function will be called when the component is mounted.
mounted() {
console.log(`The initial count is ${this.count}.`);
}
});
