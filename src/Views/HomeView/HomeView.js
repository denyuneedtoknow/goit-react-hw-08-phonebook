import SimpleSnackbar from '../../Components/Miscellaneous/snackbar'


const HomeView = () => {

    const opener = () => {
        console.log('open');
    }

    return (
        <><h1>Home</h1>
            {/* <button type='button' onClick={opener}>click</button> */}
            <SimpleSnackbar props={opener} />
        </>

    )
}

export default HomeView