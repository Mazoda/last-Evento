import PropTypes from 'prop-types';
import { Link as RouterLink } from 'react-router-dom';
// @mui
import { Grid, Stack, Button } from '@mui/material';
import { PATH_DASHBOARD } from '../../../../routes/paths';
//
import ProfileAbout from './ProfileAbout';

import ProfileSocialInfo from './ProfileSocialInfo';

// ----------------------------------------------------------------------

Profile.propTypes = {
  myProfile: PropTypes.object,
};

export default function Profile({ myProfile }) {
  return (
    <Grid container spacing={2}>
      <Grid item xs={12} md={4}>
        <Stack spacing={3}>
          <ProfileAbout profile={myProfile} />
          <ProfileSocialInfo profile={myProfile} />
        </Stack>
      </Grid>

      <Grid item xs={12} md={8}>
        <Button variant="contained" component={RouterLink} to={PATH_DASHBOARD.eCommerce.newProduct}>
          New Product
        </Button>
      </Grid>
    </Grid>
  );
}
