// import Secret from '../../../../assets/Secret.svg';
// import Token from '../../../../assets/Token.svg';
// import Users from '../../../../assets/Users.svg';
import theme from '../../../../themes';

export const returnIconCustomFormInput = (
  type: 'USERS' | 'SECRET' | 'TOKEN',
) => {
  switch (type) {
    case 'USERS':
      return null;
      // return <Users width={30} height={30} fill={theme.COLORS.PRIMARY} />;
    case 'SECRET':
      return null;
      // return <Secret width={30} height={30} fill={theme.COLORS.PRIMARY} />;
    case 'TOKEN':
      return null;
      // return <Token width={30} height={30} fill={theme.COLORS.PRIMARY} />;
    default:
      <></>;
  }
};
