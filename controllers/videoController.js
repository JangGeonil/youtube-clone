import {vides} from "../db"

export const home = (req, res) => {
  console.log(vides);
    res.render("home",{pageTitle:'Home',vides});
};
export const search = (req, res) => {
  const {query:{term : searchingBy}} = req
  res.render("search", {pageTitle:'search',searchingBy, vides});
};


export const videos = (req, res) =>  res.render("videos", {pageTitle:'videos'});
export const upload = (req, res) =>  res.render("upload", {pageTitle:'upload'});
export const videoDetail = (req, res) =>  res.render("videoDetail", {pageTitle:'videoDetail'});
export const editVideo = (req, res) =>  res.render("editVideo", {pageTitle:'editVideo'});
export const deleteVideo = (req, res) =>  res.render("deleteVideo", {pageTitle:'deleteVideo'});
