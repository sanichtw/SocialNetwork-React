import { create } from 'react-test-renderer';

const ProfileStatus = (props) => {
    return <span>{props.profileStatus}</span>
};

describe("ProfileStatus component", () => {
    test("test from props should be in the static",
        () => {
            const component = create(<ProfileStatus profileStatus="React" />);
            const root = component.root;
            let span = root.findByType("span");
            expect(span.innerText).toBe("React");
        });
})