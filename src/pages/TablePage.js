import Table from "../components/Table";

const config = [
    {
        label: 'Name',
        render: (fruit) => fruit.name
    },
    {
        label: 'Color',
        render: (fruit) => <div className={`p-3 m-2 ${fruit.color}`} />
    },
    {
        label: 'Score',
        render: (fruit) => fruit.score
    }
];

const data = [
    {name: 'orange', color: 'bg-orange-500', score: 5},
    {name: 'apple', color: 'bg-red-500', score: 3},
    {name: 'banana', color: 'bg-yellow-500', score: 1},
    {name: 'lime', color: 'bg-green-500', score: 4},
    {name: 'grape', color: 'bg-purple-500', score: 2}
];

const keyFn = (fruit) => {
    return fruit.name;
};

function TablePage(){
    return <div><Table data={data} config={config} keyFn={keyFn}/></div>
}

export default TablePage;