import React from 'react'
import { makeStyles, Button, TextField, Grid, Paper, IconButton, List, ListItem, ListItemText, ListItemIcon, TextareaAutosize } from '@material-ui/core'
import { firestore } from '../firebase'
import DeleteIcon from '@material-ui/icons/Delete';
import EditIcon from '@material-ui/icons/Edit';

const useStyles = makeStyles((theme) => ({
    root: {
        flexGrow: 1
    },
    content: {
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        padding: theme.spacing(3)
    },
    form: {
        width: '100%',
        marginTop: '80px',
        textAlign: 'center'
    },
    submit: {
        margin: theme.spacing(3, 0, 2),
    },
    paper: {
        width:'100%',
        marginTop: theme.spacing(8),
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center'
      },
    lista: {
        width:'100%',
        padding: '20px'
    },
    textList: {
        paddingRight: '20px'
    },
    btnDelete: {
        color: 'red'
    }

}))

const Main = () => {
    const classes = useStyles()
    const [tasks, setTasks] = React.useState([])
    const [task, setTask] = React.useState('')
    const [edit, setEdit] = React.useState(false)
    const [id, setId] = React.useState('')

    React.useEffect(() => {
        const getData = async () => {
            try{
                const db = firestore
                const data = await db.collection('tasks').get()
                console.log(data.docs)
                const arrayData = data.docs.map( doc => ({id: doc.id,  ...doc.data()}))
                console.log(arrayData)
                setTasks(arrayData)
            }catch(err){
                console.log(err)
            }
        }
        getData()
    }, [])

    const addTask = async (e) => {
        e.preventDefault()
        console.log(task)

        try {
            const db = firestore
            const newTask = {
                title: task
            }
            const data = await db.collection('tasks').add(newTask)
            setTasks([
                ...tasks,
                {...newTask, id: data.id}
            ])
            setTask('')
        } catch (err) {
            console.log(err)
        }

        console.log(task)
    }
    
    const deleteTask = async (id) => {
        
        try {
            const db = firestore
            await db.collection('tasks').doc(id).delete()  
            const arrayFilter = tasks.filter(item => item.id !== id)
            setTasks(arrayFilter)  
        } catch (err) {
            console.log(err)
        }
    }

    const active = (item) => {
        setEdit(true)
        setTask(item.name)
        setId(item.id)
    }

    const editTask = async (e) => {
        e.preventDefault()
        
        try{
            const db = firestore
            await db.collection('tasks').doc(id).update({
                title: task
            })

            const arrayEdited = tasks.map( item => (
                item.id === id ? {id: item.id, title: task} : item
            ))
            
            setTasks(arrayEdited)
            setEdit(false)
            setTask('')
            setId('')

        }catch(err) {
            console.log(err)
        }
    }

    return (
        <main className={classes.root}>
            <Grid container spacing={2}
             className={classes.content}
             >
                <Grid item xs>                
                    <form className={classes.form} noValidate onSubmit={ edit ? editTask : addTask}>
                        <TextField
                            variant="outlined"
                            margin="normal"
                            required
                            fullWidth
                            label="task"
                            autoFocus
                            onChange={e => setTask(e.target.value)}
                            
                        />
                        <Button
                            type="submit"
                            disableElevation
                            fullWidth
                            variant="contained"
                            color={edit ? 'default' : 'primary'}
                            className={classes.submit}
                        >
                            {
                               edit ? 'Edit' : 'Save'         
                            }
                        </Button>
                    </form>
                </Grid>
                <Grid>     
                    <Paper className={classes.paper} 
                            p={2}
                            m={4}>
                        <List  className={classes.lista}
                                   
                        >
                            {
                                tasks.map( item => (
                                    <ListItem key={item.id}>
                                        <ListItemText className={classes.textList}>
                                        {item.title}
                                        </ListItemText>
                                        <ListItemIcon onClick={() => deleteTask(item.id)}>
                                            <DeleteIcon color='secondary'/>
                                        </ListItemIcon>    
                                        <ListItemIcon onClick={() => active(item)}>
                                            <EditIcon color='primary'/>
                                        </ListItemIcon>
                                    </ListItem>
                                ))    
                            }
                        </List>
                    </Paper>    
                </Grid>    
            </Grid>    
      </main>
    )
}

export default Main
