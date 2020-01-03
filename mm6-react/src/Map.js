import React from 'react';

function Map() {

  const maps = [
    {imgSrc: require("./assets/imgs/sw_tn.jpg"), href: '#sw', alt: 'Sweet Water map'},
    {imgSrc: require("./assets/imgs/ks_tn.jpg"), href: '#ks', alt: 'Kriegspire map'},
    {imgSrc: require("./assets/imgs/fz_tn.jpg"), href: '#fz', alt: 'Frozen Highlands map'},
    {imgSrc: require("./assets/imgs/sc_tn.jpg"), href: '#sc', alt: 'Silver Cove map'},
    {imgSrc: require("./assets/imgs/iw_tn.jpg"), href: '#iw', alt: 'Eel Infested Waters map'},
    {imgSrc: require("./assets/imgs/pv_tn.jpg"), href: '#pv', alt: 'Paradise Valley map'},
    {imgSrc: require("./assets/imgs/bs_tn.jpg"), href: '#bs', alt: 'Blackshire map'},
    {imgSrc: require("./assets/imgs/fh_tn.jpg"), href: '#fh', alt: 'Free Haven map'},
    {imgSrc: require("./assets/imgs/bb_tn.jpg"), href: '#bb', alt: 'Bootleg Bay map'},
    {imgSrc: require("./assets/imgs/mi_tn.jpg"), href: '#mi', alt: 'Misty Islands map'},
    {imgSrc: require("./assets/imgs/hi_tn.jpg"), href: '#hi', alt: 'Hermit\'s Isle map'},
    {imgSrc: require("./assets/imgs/ds_tn.jpg"), href: '#ds', alt: 'Dragonsands map'},
    {imgSrc: require("./assets/imgs/md_tn.jpg"), href: '#md', alt: 'Mire of Damned map'},
    {imgSrc: require("./assets/imgs/ci_tn.jpg"), href: '#ci', alt: 'Castle Ironfist map'},
    {imgSrc: require("./assets/imgs/ns_tn.jpg"), href: '#ns', alt: 'New Sorpigal map'},
  ];

  return (
    <section className="world-map">
      {maps.map((map, id) => <a key={id} href={map.href}><img className="map-img" src={map.imgSrc} alt={map.alt} /></a>)}
    </section>
  );
}

export default Map;