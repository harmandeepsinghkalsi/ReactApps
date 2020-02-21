import React from 'react';
import ReactDOM from 'react-dom';
import CommnentDetail from './CommentDetail';
import faker from 'faker';
import ApprovalCard from './ApprovalCard';

function App ()  {

    return(
        <div>
            <ApprovalCard>
                <CommnentDetail
                    author="Harmandeep"
                    date="Today 6PM"
                    text="This is first blog post!"
                    image={faker.image.avatar()}
                />
            </ApprovalCard>
            <ApprovalCard>
                <CommnentDetail 
                    author="Navdeep"
                    date="Today 11AM"
                    text="Nice first blog post!"
                    image={faker.image.avatar()}
                />
            </ApprovalCard>
            <ApprovalCard>
                <CommnentDetail 
                    author="Amandeep"
                    date="Yesterday 6PM"
                    text="Awesome blog post!"
                    image={faker.image.avatar()}
                />
            </ApprovalCard>
        </div>
    )
}

ReactDOM.render(<App/>, document.getElementById('root'));