import { useParams } from "react-router-dom";
import {
  useGetAllUserQuery,
  useUpdateUserDataMutation,
} from "../../redux/feature/user/userApi";
import defaultAvatar from "../../assets/avatarD.jpg";
import { useState } from "react";
import { toast, Toaster } from "react-hot-toast";
import { IoMdAdd } from "react-icons/io";
import useAxiosPublic from "../../utils/UseAxiosPublic";

const EditProfileUi = () => {
  const { email } = useParams();
  const { data, refetch } = useGetAllUserQuery(undefined);
  const loginUser = data?.data.find((user: any) => user.email === email);
  const [name, setName] = useState(loginUser?.name);
  const [olpPass, setOldPass] = useState("");
  // const [newPass, setNewPass] = useState("");
  const [loading, setLoading] = useState(false);
  const [updateUserData, { data: updateData }] = useUpdateUserDataMutation();
  const [avatar, setAvatar] = useState();

  const imageBB = `https://api.imgbb.com/1/upload?key=${
    import.meta.env.VITE_PUBLIC_IMAGEBB
  }`;

  const handleFile = async (e: any) => {
    setLoading(true);
    const file = e.target.files?.[0];
    if (file) {
      const reader = new FileReader();
      reader.onload = () => {
        if (reader.readyState === 2) {
          // setAvatar(reader.result as string);
        }
      };
      reader.readAsDataURL(file);

      const axiosPublic = useAxiosPublic();

      const formData = new FormData();
      formData.append("image", file);

      try {
        const postImageRes = await axiosPublic.post(imageBB, formData, {
          headers: {
            "Content-Type": "multipart/form-data",
          },
        });

        if (postImageRes) {
          setAvatar(postImageRes.data.data.url);

          setLoading(false);
        }
      } catch (error) {
        toast.error("Image upload failed");
        setLoading(file);
      } finally {
        setLoading(false);
      }
    }
  };

  const handelUpdate = async (e: any) => {
    e.preventDefault();
    await updateUserData({ ...loginUser, name, password: olpPass, avatar });
    if (updateData?.success) {
      toast.success("User Update successful");
    } else {
      toast.error("Password does not match");
    }
    refetch();
  };

  return (
    <div className="p-10">
      <Toaster />
      <form
        onSubmit={handelUpdate}
        className="text-white lg:w-[50%] mx-auto bg-[#080826] p-3 rounded"
      >
        <div className="w-fit mx-auto relative">
          <input
            type="file"
            accept="image/*"
            id="img"
            className="hidden"
            onChange={handleFile}
          />
          <img
            className="w-[150px] h-[150px] mx-auto rounded-full"
            src={loginUser?.avatar || defaultAvatar}
            alt="User Avatar"
          />
          <span className="absolute bottom-5 -right-1 cursor-pointer">
            <label htmlFor="img">
              <IoMdAdd size={25} />
            </label>
          </span>
        </div>
        <input
          type="text"
          value={loginUser?.email || ""}
          className="bg-[#131237] text-gray-300 my-3 w-full p-2"
          readOnly
        />
        <input
          type="text"
          defaultValue={loginUser?.name}
          onChange={(e: any) => setName(e.target.value)}
          className="bg-[#131237] text-gray-300 w-full p-2"
        />
        <input
          type="password"
          onChange={(e: any) => setOldPass(e.target.value)}
          className="bg-[#131237] my-3 text-gray-300 w-full p-2"
          placeholder="Password Required"
          required
        />
        {loading ? (
          <h1 className="text-white">Image loading ...</h1>
        ) : (
          <button
            type="submit"
            className="bg-blue-600 text-white p-1 rounded w-full"
          >
            Update User
          </button>
        )}
      </form>
    </div>
  );
};

export default EditProfileUi;
