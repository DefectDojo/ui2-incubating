import React from 'react';
import Button from '@material-ui/core/Button';
import { makeStyles } from '@material-ui/core/styles';
import Modal from '@material-ui/core/Modal';
import Backdrop from '@material-ui/core/Backdrop';
import Fade from '@material-ui/core/Fade';

const useStyles = makeStyles(theme => ({
    modal: {
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
    },
    paper: {
        backgroundColor: theme.palette.background.paper,
        border: '2px solid #000',
        boxShadow: theme.shadows[5],
        padding: theme.spacing(2, 4, 3),
    },
}));

export default function AnimatedModal() {
    const classes = useStyles();
    const [open, setOpen] = React.useState(false);

    const handleOpen = () => {
        setOpen(true);
    };

    const handleClose = () => {
        setOpen(false);
    };

    return (
        <div>

            <Button variant="contained" color="secondary" onClick={handleOpen}>
                Open Animated Modal
            </Button>

            <Modal
                aria-labelledby="transition-modal-title"
                aria-describedby="transition-modal-description"
                className={classes.modal}
                open={open}
                onClose={handleClose}
                closeAfterTransition
                BackdropComponent={Backdrop}
                BackdropProps={{
                    timeout: 500,
                }}
            >
                <Fade in={open}>
                    <div className={classes.paper}>
                        <p>
                            <h2>Add Product</h2>
                            <form>
                            <input type="Text" placeholder="Name" size="50" required></input><br /><br />
                            <input type="Text" placeholder="Description" size="50" required></input><br /><br />
                            <input type="Text" placeholder="Tags" size="50"></input><br /><br />
                            <input type="Text" placeholder="Product Manager" size="50"></input><br /><br />
                            <input type="Text" placeholder="Technical Contact" size="50"></input><br /><br />
                            <input type="Text" placeholder="Team Manager" size="50"></input><br /><br />
                            <input type="Text" placeholder="Product Type" size="50" required></input><br /><br />
                            <input type="Text" placeholder="Regulations" size="50"></input><br /><br />
                            <input type="Text" placeholder="Technologies" size="50"></input><br /><br />
                            <input type="Text" placeholder="Authorised Users" size="50"></input><br /><br />
                            <input type="Text" placeholder="Business Criticality" size="50"></input><br /><br />
                            <input type="Text" placeholder="Platform" size="50"></input><br /><br />
                            <input type="Text" placeholder="Lifecycle" size="50"></input><br /><br />
                            <input type="Text" placeholder="Origin" size="50"></input><br /><br />
                            <input type="Text" placeholder="User Records" size="50" required></input><br /><br />
                            <input type="Text" placeholder="Revenue" size="50"></input><br /><br />
                            <input type="checkbox" style="text-align: centre; vertical-align:middle;"></input>
                            <label>Expernal Audience</label><br />
                            <input type="checkbox"></input>
                            <label>Internet accessible</label><br />
                            <input type="checkbox"></input>
                            <label>Enable simple risk acceptance</label><br />
                            <input type="checkbox"></input>
                            <label>Enable full risk acceptance</label><br /><br />
                            <input type="Text" placeholder="Name"></input><br /><br />
                            </form>
                        </p>
                    </div>
                </Fade>
            </Modal>
        </div>
    );
}