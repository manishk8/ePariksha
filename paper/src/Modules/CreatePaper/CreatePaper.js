import React, { Component } from 'react'
import Card from '@material-ui/core/Card';
import CardHeader from '@material-ui/core/CardHeader';
import CardMedia from '@material-ui/core/CardMedia';
import CardContent from '@material-ui/core/CardContent';
import CardActions from '@material-ui/core/CardActions';
import IconButton from '@material-ui/core/IconButton';
import Typography from '@material-ui/core/Typography';
import FavoriteIcon from '@material-ui/icons/Favorite';
import './CreatePaper.css';
import Radio from '@material-ui/core/Radio';
import RadioGroup from '@material-ui/core/RadioGroup';
import FormHelperText from '@material-ui/core/FormHelperText';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import FormControl from '@material-ui/core/FormControl';
import FormLabel from '@material-ui/core/FormLabel';

class CreatePaper extends Component {
    constructor() {
        super();
        this.state = {
            value: 'female',
        }
    }
    handleChange = event => {
        this.setState({ value: event.target.value });
    };

    render() {
        return (
            <div className="containerPaper">
                <div className="cardPaper">
                    <Card className="card">
                        <CardHeader
                            title="(1) Shrimp and Chorizo Paella Shrimp and Chorizo Paella Shrimp and Chorizo Paella Shrimp and Chorizo Paella Shrimp and Chorizo Paella"
                        />
                        <CardContent>
                            <Typography component="p">
                                This impressive paella is a perfect party dish and a fun meal to cook together with your
                                guests. Add 1 cup of frozen peas along with the mussels, if you like.
          </Typography>
                        </CardContent>
                        <CardActions disableActionSpacing>
                            <IconButton aria-label="Add to favorites">
                                Save
                            </IconButton>
                        </CardActions>
                    </Card>
                    <Card>
                        <CardHeader
                            title="Shrimp and Chorizo Paella"
                            subheader="September 14, 2016"
                        />
                        <CardContent>
                            <FormControl component="fieldset" >
                                <RadioGroup
                                    aria-label="Gender"
                                    name="gender1"
                                    value={this.state.value}
                                    onChange={this.handleChange}
                                >
                                    <FormControlLabel value="female" control={<Radio color="primary" />} label="Female" />
                                    <FormControlLabel value="male" control={<Radio color="primary" />} label="Male" />
                                    <FormControlLabel value="other" control={<Radio color="primary" />} label="Other" />
                                    <FormControlLabel
                                        value="disabled"
                                        control={<Radio color="primary" />}
                                        label="(Disabled option)"
                                    />
                                </RadioGroup>
                            </FormControl>
                        </CardContent>
                        <CardActions disableActionSpacing>
                            <IconButton aria-label="Add to favorites">
                                Save
                            </IconButton>
                        </CardActions>
                    </Card>
                </div>
            </div>
        )
    }
}
export default CreatePaper;
