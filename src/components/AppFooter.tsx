import * as React from 'react';
import BottomNavigation from '@mui/material/BottomNavigation';
import BottomNavigationAction from '@mui/material/BottomNavigationAction';
import Article from '@mui/icons-material/Article';
import Paper from '@mui/material/Paper';
import AddBox from '@mui/icons-material/AddBox';
import { useAuthContext } from '@/src/contexts/AuthContext';

interface AppFooterProps {
  onChange: (newValue: string) => void;
}

export default function AppFooter(props: AppFooterProps) {
  const { onChange } = props;
  const [value, setValue] = React.useState(0);
  const { user } = useAuthContext();

  return (
    <Paper sx={{ position: 'fixed', bottom: 0, left: 0, right: 0 }} elevation={3}>
      {
        user && 
        <BottomNavigation
          showLabels
          value={value}
          onChange={(event, newValue) => {
            setValue(newValue);
            onChange(newValue);
          }}
        >
          <BottomNavigationAction label="Articles" icon={<Article />} value="/articles" />
          <BottomNavigationAction label="New" icon={<AddBox />} value="/articles/new" />
        </BottomNavigation>
      }
    </Paper>
  );
}