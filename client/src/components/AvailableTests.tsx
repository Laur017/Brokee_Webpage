import { useEffect, useState } from "react";

interface Test {
    category: string;
    difficulty: string;
    description_short: string;
    featured_image: string;
    brokee_id: string;
    name: string;
    roles: string;
    status: string;
    type: string;
    tech_stack: string;
    __typename: string;
  }

export default function AvailableTests() {
    const [tests, setTests] = useState<Test[]>([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch('https://graph.brokee.io/v1/graphql?q=GetTests', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
            'Accept': 'application/json',
            'Origin': 'https://brokee.io',
            // Add any other headers if needed
          },
          body: JSON.stringify({
            operationName: 'GetTests',
            variables: {},
            query: `
              query GetTests {
                tests(order_by: {name: asc}) {
                  ...TestPartial
                  __typename
                }
              }
              fragment TestPartial on tests {
                category
                difficulty
                description_short
                featured_image
                brokee_id
                name
                roles
                status
                type
                tech_stack
                __typename
              }
            `,
          }),
        });

        const data = await response.json();

        if (response.ok) {
          setTests(data.data.tests);
        } else {
          console.error('Failed to fetch data:', data);
        }
      } catch (error) {
        console.error('Error during fetch:', error);
      }
    };

    fetchData();
  }, []);

  const Data = tests.map(test => (
    <div key={test.brokee_id} className="card-tests">
        <img src={test.featured_image} />
        <h3>{test.name}</h3>
        <p>{test.description_short}</p>
        <h5>TECH STACK</h5>
        <div className="roles-div-o">
            {test.tech_stack.split(",").map((role, index) => (
                <span key={index} className="gree">
                {role.trim()}
                </span>
            ))}
        </div>
        <h5>ROLES</h5>
        <div className="roles-div-o">
            {test.roles.split(",").map((role, index) => (
                <span key={index} className="yellow">
                {role.trim()}
                </span>
            ))}
        </div>
        <h5>DIFFICULTY</h5>
        <p className={`${test.difficulty === 'easy' ? "green" : test.difficulty === 'medium' ? "orange" : "red"} diff`}>{test.difficulty[0].toUpperCase() + test.difficulty.slice(1,test.difficulty.length)}</p>
    </div>
  ))

  return (
    <div className="tests-div">
      <div className="data-div">
        {Data}
      </div>
    </div>
  );
}
