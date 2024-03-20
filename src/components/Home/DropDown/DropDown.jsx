import { Button } from "@/components/ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuGroup,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuPortal,
  DropdownMenuSeparator,
  DropdownMenuShortcut,
  DropdownMenuSub,
  DropdownMenuSubContent,
  DropdownMenuSubTrigger,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import useAuth from "../../Hooks/useAuth";
import toast from "react-hot-toast";
import { useNavigate } from "react-router-dom";

const DropDown = () => {
  const { user, logOut } = useAuth();
  const navigate = useNavigate();

  const handleLogOut = () => {
    logOut()
      .then(() => {
        toast.success("logout successfully");
        navigate("/");
      })
      .catch((e) => {
        toast.error(e.message);
      });
  };
  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button variant="outline" className="border-0 p-0 m-0 rounded-full">
          <img
            className="w-10 cursor-pointer rounded-full"
            src={
              user?.photoURL
                ? user?.photoURL
                : "https://cdn-icons-png.flaticon.com/128/64/64572.png"
            }
            alt=""
          />
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent className="w-56">
        <DropdownMenuLabel>My Account</DropdownMenuLabel>
        <DropdownMenuSeparator />
        <DropdownMenuGroup>
          <DropdownMenuItem>Profile</DropdownMenuItem>
          <DropdownMenuItem>Billing</DropdownMenuItem>
          <DropdownMenuItem>Settings</DropdownMenuItem>
          <DropdownMenuItem>Keyboard shortcuts</DropdownMenuItem>
        </DropdownMenuGroup>
        <DropdownMenuSeparator />

        <DropdownMenuGroup>
          <DropdownMenuSub>
            <DropdownMenuSubTrigger className="cursor-pointer">
              <p className="Website_Name ">Page</p>
            </DropdownMenuSubTrigger>
            <DropdownMenuPortal>
              <DropdownMenuSubContent>
                <DropdownMenuItem
                  onClick={() => navigate("/team")}
                  className="cursor-pointer"
                >
                  <p className="Website_Name ">Team</p>
                </DropdownMenuItem>
                <DropdownMenuItem
                  onClick={() => navigate("/contact")}
                  className="cursor-pointer"
                >
                  <p className="Website_Name ">Contact</p>
                </DropdownMenuItem>
                <DropdownMenuItem
                  onClick={() => navigate("/about")}
                  className="cursor-pointer"
                >
                  <p className="Website_Name ">About us</p>
                </DropdownMenuItem>
              </DropdownMenuSubContent>
            </DropdownMenuPortal>
          </DropdownMenuSub>

          <DropdownMenuSub>
            <DropdownMenuSubTrigger className="cursor-pointer">
              <p className="Website_Name ">Shop</p>
            </DropdownMenuSubTrigger>
            <DropdownMenuPortal>
              <DropdownMenuSubContent>
                <DropdownMenuItem
                  onClick={() => navigate("/cart")}
                  className="cursor-pointer"
                >
                  <p className="Website_Name ">Cart</p>
                </DropdownMenuItem>
                <DropdownMenuItem
                  onClick={() => navigate("/product")}
                  className="cursor-pointer"
                >
                  <p className="Website_Name ">Product</p>
                </DropdownMenuItem>
                <DropdownMenuSeparator />
                <DropdownMenuItem
                  onClick={() => navigate("/checkout")}
                  className="cursor-pointer"
                >
                  <p className="Website_Name ">Checkout</p>
                </DropdownMenuItem>
              </DropdownMenuSubContent>
            </DropdownMenuPortal>
          </DropdownMenuSub>
        </DropdownMenuGroup>
        <DropdownMenuSeparator />
        <DropdownMenuItem>GitHub</DropdownMenuItem>
        <DropdownMenuItem
          onClick={() => navigate("/contact")}
          className="cursor-pointer"
        >
          Support
        </DropdownMenuItem>
        <DropdownMenuSeparator />
        <DropdownMenuItem onClick={handleLogOut} className="cursor-pointer">
          <p> Log out</p>
          <DropdownMenuShortcut>⇧⌘Q</DropdownMenuShortcut>
        </DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  );
};

export default DropDown;
