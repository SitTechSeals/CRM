import React from "react";
import { Card } from 'primereact/card';

import { Button } from 'primereact/button';
import './ButtonDemo.css';

const SocialMedia = () => {
  return (
    <div>
      <Card
        title={<p>Social Median</p>}
        style={{ width: "25em" }}
      >
        <div className="m-0" >
        <div className="template">
                    <Button className="google p-0" aria-label="Google">
                        <i className="pi pi-google px-2"></i>
                        <span className="px-3">Google</span>
                    </Button>
                    <Button className="youtube p-0" aria-label="Youtube">
                        <i className="pi pi-youtube px-2"></i>
                        <span className="px-3">Youtube</span>
                    </Button>
                    <Button className="vimeo p-0" aria-label="Vimeo">
                        <i className="pi pi-vimeo px-2"></i>
                        <span className="px-3">Vimeo</span>
                    </Button>

                </div>
        </div>
      </Card>
    </div>
  );
};

export default SocialMedia;
