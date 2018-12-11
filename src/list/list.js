import React, {Component} from 'react';
import ListItem from '../ListItem/ListItem';
import './list.css';
class List extends Component{
    state = {
        block: {
            name: "Additional Questions",
            questions: [
                {
                    id:1,
                    questionText: "Are you a first generation college student?",
                    checked: false
                },
                {
                    id:2,
                    questionText: "In what year did you graduate high school?",
                    checked: false
                },
                {
                    id:3,
                    questionText: "Who was the most influential person in your decision to apply for OD studies?",
                    checked: false
                },
            ]
        },
        checkedAll: false,
        activeQuestions: []
    }

    updateActiveQuestions = () => {
        let activeQuestions = [];
        let updatedBlock = {
            ...this.state.block
        }
        let updatedQuestions = [ ...updatedBlock.questions];
        updatedQuestions.forEach(item => {
            return item.checked ? activeQuestions.push(item.id):null;
        })
        this.setState({
            activeQuestions: activeQuestions
        });
    }

    onChangeHandler = (event) => {
        let updatedBlock = {
            ...this.state.block
        }
        let updatedQuestions = [ ...updatedBlock.questions];
        updatedQuestions.forEach(item => {
            return item.checked = !this.state.checkedAll;
        })
        updatedBlock.questions = updatedQuestions;
        
        this.setState({
            updatedBlock,
            checkedAll: !this.state.checkedAll
        });
        this.updateActiveQuestions();
    }
    singleChangedHandler = (id) => {
        let updatedBlock = {
            ...this.state.block
        }
        let updatedQuestions = [ ...updatedBlock.questions];
        for(let i = 0; i < updatedQuestions.length; i++){
            if(updatedQuestions[i].id === id){
                updatedQuestions[i].checked = !updatedQuestions[i].checked;
            }
        }
        updatedBlock.questions = updatedQuestions;
        
        this.setState({
            updatedBlock
        });
        this.updateActiveQuestions();
    }
    
    render(){
        return(
            <div>
                <ul><input type="checkbox"  onChange = { (event) => this.onChangeHandler(event)}/>
                    {this.state.block.name}
                    {
                        this.state.block.questions.map( (item,index) => {
                        return <ListItem
                                    key = {item.id}
                                    checked = {item.checked}
                                    changed = {() => this.singleChangedHandler(item.id)}
                               >{item.questionText}</ListItem>
                        })
                    }
                </ul>
                <p>Active Questions: {this.state.activeQuestions.join(', ')}</p> 
            </div>
            
        );
    }
}

export default List;