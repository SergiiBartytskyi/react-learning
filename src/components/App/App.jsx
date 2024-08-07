import "./App.css";
import { Alert } from "../Alert/Alert";
import UserMenu from "../UserMenu/UserMenu";
import { LoginButton } from "../Buttons/LoginButton";
import { FollowButton } from "../Buttons/FollowButton";

// * inline style
// export default function App() {
//   return (
//     <>
//       <Alert variant="info">
//         Would you like to browse our recommended products?
//       </Alert>
//       <Alert variant="error">
//         There was an error during your last transaction
//       </Alert>
//       <Alert variant="success">
//         Payment received, thank you for your purchase
//       </Alert>
//       <Alert variant="warning">
//         Please update your profile contact information
//       </Alert>
//     </>
//   );
// }

// * style sheet
export default function App() {
  return (
    <>
      <Alert variant="info">
        <UserMenu />
        Would you like to browse our recommended products?
      </Alert>
      <Alert variant="error" outlined>
        <UserMenu />
        There was an error during your last transaction
      </Alert>
      <Alert variant="success" elevated>
        <UserMenu />
        Payment received, thank you for your purchase
      </Alert>
      <Alert variant="warning" outlined elevated>
        <UserMenu />
        Please update your profile contact information
      </Alert>
      <LoginButton />
      <FollowButton />
    </>
  );
}
