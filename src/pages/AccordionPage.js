import Accordion from "../components/Accordion";


function AccordionPage() {

    const items = [
        {
            id: 1,
            label: 'React',
            content: 'You can use anywhere You can use anywhere You can use anywhere You can use anywhere You can use anywhere You can use anywhere You can use anywhere You can use anywhere You can use anywhere You can use anywhere You can use anywhere'
        },
        {
            id: 2,
            label: 'Java',
            content: 'No, it is now paid No, it is now paid No, it is now paid No, it is now paid No, it is now paid No, it is now paid No, it is now paid No, it is now paid No, it is now paid'
        },
        {
            id: 3,
            label: 'DOTNET',
            content: 'Depends on the version Depends on the version Depends on the versionDepends on the versionDepends on the versionDepends on the versionDepends on the version Depends on the version Depends on the version Depends on the version Depends on the version Depends on the version Depends on the version Depends on the version Depends on the version'
        },
    ]

    return <div>
        <Accordion items={items} />

    </div>;
}

export default AccordionPage;