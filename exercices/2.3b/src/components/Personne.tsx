import { Person } from '../types';

interface PersonneProps {
    people: Person[];
};

const Personne = (props: PersonneProps) => (
    <div>
      <div>
        {props.people.map((person) => (
            <div key={person.name}>
                <h2>{person.name}</h2>
                <p>Age: {person.age}</p>
            </div>
        ))}
      </div>
    </div>
);

export default Personne;