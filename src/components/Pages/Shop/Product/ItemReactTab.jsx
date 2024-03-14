/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import { Tab, Tabs, TabList, TabPanel } from "react-tabs";
import "react-tabs/style/react-tabs.css";

const ItemReactTab = ({ colors, sizes, weight }) => {
  return (
    <div>
      <Tabs>
        <TabList>
          <Tab>Description</Tab>
          <Tab>Information</Tab>
        </TabList>
        <TabPanel>
          <p className="w-[600px] swiperStyle">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. In ut
            ullamcorper leo, eget euismod orci. Cum sociis natoque penatibus et
            magnis dis parturient montes nascetur ridiculus mus. Vestibulum
            ultricies aliquam convallis. Maecenas ut tellus.
          </p>
        </TabPanel>
        <TabPanel>
          <p className="mb-2  informationClass">
            <span>Weight: </span>
            {weight}
          </p>
          <p className="mb-2 informationClass">
            <span>Colors: </span>
            {colors}
          </p>
          <p className="mb-2 informationClass">
            <span>Sizes: </span>
            {sizes}
          </p>
        </TabPanel>
      </Tabs>
    </div>
  );
};

export default ItemReactTab;
