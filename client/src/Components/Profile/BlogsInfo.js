import Chip from '@material-ui/core/Chip';
import MenuBookRoundedIcon from '@material-ui/icons/MenuBookRounded';
import Grid from '@material-ui/core/Grid';
import FavoriteIcon from '@material-ui/icons/Favorite';
const BlogsInfo = () => {
  return (
    <Grid className="general-info">
      <form>
        <div className="flex-container">
          <h2>Blogs</h2>
        </div>
        <div className="flex-container" style={{ marginTop: '0' }}>
          <h2>Your blogs</h2>
        </div>
        <div className="info-box-container">
          <Chip icon={<MenuBookRoundedIcon />} label="Deletable primary" color="primary" variant="outlined" onDelete={() => console.log('delete')} />
          <Chip icon={<MenuBookRoundedIcon />} label="Deletable primary" color="primary" variant="outlined" onDelete={() => console.log('delete')} />
          <Chip icon={<MenuBookRoundedIcon />} label="Deletable primary" color="primary" variant="outlined" onDelete={() => console.log('delete')} />
          <Chip icon={<MenuBookRoundedIcon />} label="Deletable primary" color="primary" variant="outlined" onDelete={() => console.log('delete')} />
        </div>
        <div className="flex-container" style={{ marginTop: '0' }}>
          <h2>Your favorites</h2>
          </div>
          <div className="info-box-container">
          <Chip icon={<FavoriteIcon style={{ color: '#f50057' }} />} label="Deletable primary" color="secondary" variant="outlined" onDelete={() => console.log('delete')} />
          <Chip icon={<FavoriteIcon style={{ color: '#f50057' }} />} label="Deletable primary" color="secondary" variant="outlined" onDelete={() => console.log('delete')} />
          <Chip icon={<FavoriteIcon style={{ color: '#f50057' }} />} label="Deletable primary" color="secondary" variant="outlined" onDelete={() => console.log('delete')} />
          <Chip icon={<FavoriteIcon style={{ color: '#f50057' }} />} label="Deletable primary" color="secondary" variant="outlined" onDelete={() => console.log('delete')} />
          <Chip icon={<FavoriteIcon style={{ color: '#f50057' }} />} label="Deletable primary" color="secondary" variant="outlined" onDelete={() => console.log('delete')} />
          </div>
      </form>
    </Grid>
    // 


  );
}

export default BlogsInfo;