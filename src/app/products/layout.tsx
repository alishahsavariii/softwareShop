import React from 'react';

function layout({
    children
}: Readonly<{
    children: React.ReactNode
}>) {
    return (
        <div>
            product layout
      {children}
        </div>
    );
};

export default layout;