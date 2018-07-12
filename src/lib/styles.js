export const primaryColor = '#2EA6EF';
export const secondaryColor = '#35C675';
export const textColor = '#6C7D86';
export const hoverSectionColor = '#274759';
export const alertColor = '#F0684F';

export const RootStyle = {
  flexGrow: 1,
}

export const PaperStyle = theme => ({
  marginTop: '2rem',
  padding: theme.spacing.unit * 2,
  textAlign: 'center',
  color: theme.palette.text.secondary,
});

export const hoverPointerStyle = {
  cursor: 'pointer',
};

export const headingStyle = {
  flex: 1,
  marginTop: '0.5rem',
  marginBottom: '0.5rem',
};

export const inputStyle = theme => ({
  border: 0,
  outline: 0,
  padding: theme.spacing.unit,
  fontSize: '0.9rem',
  width: '80%',
});

export const buttonActionStyle = color => ({
  display: 'inline-block',
  textAlign: 'center',
  width: '50%',
  height: '30px',
  borderRight: '1px solid white',
  color,
});

export const submitButtonStyle = {
  color: primaryColor,
  fontSize: '1rem',
  fontWeight: '600',
  cursor: 'pointer',
};
