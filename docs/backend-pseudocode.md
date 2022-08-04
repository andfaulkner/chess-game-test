ACTUAL SITE
===========
Hi Isaac! You are super-rich today!

----------------------------------------------------------------------------------------------------
MODEL
=====
userData = {
    firstName: 'Isaac',
    accountQuantity = 1000001
}

CONTROLLER
==========
// receive request for user data from client
// Grab template "view"
// Populate template view
view.firstName = userData.firstName;
view.socialClass = accountQuantity > 1000000 ? 'super-rich' : 'one poor motherfucker';
// return populated view to client;

VIEW
====
Hi {firstName}! You are {socialClass} today!


----------------------------------------------------------------------------------------------------
What React does (pseudocode)
============================

View code without component architecture
----------------------------------------
```
<div>
    <label
        of="username"
        style="margin: 5px 5px 5px 5px; padding: 10px; color='gray'; font-size=20px;"
    >
        Username
    </label>
    <input
        name="username"
        style="margin: 1px 5px 1px 5px; padding: 5px; color='gray'; font-size=14px;"
    />

    <label
        of="password"
        style="margin: 5px 5px 5px 5px; padding: 10px; color='gray'; font-size=20px;"
    >
        Password
    </label>
    <input
        name="password"
        style="margin: 1px 5px 1px 5px; padding: 5px; color='gray'; font-size=14px;"
    />

    <button
        type="submit"
        sendTo="/api/login/submit"
        data={{username: thisPage.username, password: thisPage.password}}
    >
        Login
    </button>
</div>
```
----------------------------------------------------------------------------------------------------
View code with component architecture
-------------------------------------
```
<!-- Fake pseudocode React component -->
const FullInput = (props: {name}) => {
    return (
        <label
            of={${props.name}}
            style="margin: 5px 5px 5px 5px; padding: 10px; color='darkgray'; font-size=20px;"
        >
            Password
        </label>
        <input
            name={${props.name.capitalize()}}
            style="margin: 1px 5px 1px 5px; padding: 5px; color='gray'; font-size=14px;"
        />
    )
};

<!-- Fake React return data for inputs -->
<FullInput name="username" />
<FullInput name="password" />
```
