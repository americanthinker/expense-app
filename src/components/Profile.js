const user = {
  name: 'Hedy Lamarr',
  imageUrl: 'https://i.imgur.com/yXOvdOSs.jpg',
  imageSize: 180,
};

function Profile() {
    return (
      <>
        <div style={{textAlign: "center"}}>
          <img
            className="avatar"
            src={user.imageUrl}
            alt={'Photo of ' + user.name}
            style={{
              width: user.imageSize,
              height: user.imageSize
            }}
          />
        </div>
        <h1>{user.name}</h1>
      </>
    );
  }

  export default Profile;