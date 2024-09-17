// "use client";
// import { useRouter } from "next/navigation";
// import { useEffect, useState } from "react";

// // Higher Order Component for authentication
// const withAuth = (WrappedComponent) => {
//     return (props) => {
//         const router = useRouter();
//         const [isAuthenticated, setIsAuthenticated] = useState(false);

//         useEffect(() => {
//             const token = localStorage.getItem("token");
//             if (!token) {
//                 router.push("/login");
//             } else {
//                 setIsAuthenticated(true); // Set authenticated to true if token is found
//             }
//         }, [router]);

//         // Only render the wrapped component if authenticated
//         if (!isAuthenticated) {
//             return null; // Show nothing while redirecting
//         }

//         return <WrappedComponent {...props} />;
//     };
// };

// export default withAuth;





"use client";
import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";

// Higher Order Component for authentication
const withAuth = (WrappedComponent) => {
    const AuthComponent = (props) => {
        const router = useRouter();
        const [isAuthenticated, setIsAuthenticated] = useState(false);

        useEffect(() => {
            if (typeof window !== "undefined") {
                const token = localStorage.getItem("token");
                if (!token) {
                    router.push("/login");
                } else {
                    setIsAuthenticated(true);
                }
            }
        }, [router]);

        if (!isAuthenticated) {
            return null; // Show nothing while redirecting
        }

        return <WrappedComponent {...props} />;
    };

    // Set display name for the component (important for debugging and ESLint)
    AuthComponent.displayName = `withAuth(${WrappedComponent.displayName || WrappedComponent.name || "Component"})`;

    return AuthComponent;
};

export default withAuth;