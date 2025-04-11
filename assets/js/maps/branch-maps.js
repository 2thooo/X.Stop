function initBranchMap() {
  const maps = document.querySelectorAll('#branch-map');
  maps.forEach(map => {
    const branchId = map.getAttribute('data-branch-id');
    const locations = {
      'rak-mall': { lat: 25.6741, lng: 55.7806 },
      'rifaa': { lat: 25.6741, lng: 55.7806 },
      'sharjah': { lat: 25.6741, lng: 55.7806 },
      'super-bowling': { lat: 25.6741, lng: 55.7806 },
      'haunted-cafe': { lat: 25.6741, lng: 55.7806 }
    };

    const location = locations[branchId] || { lat: 25.6741, lng: 55.7806 };
    const mapInstance = new google.maps.Map(map, {
      center: location,
      zoom: 15
    });

    new google.maps.Marker({
      position: location,
      map: mapInstance,
      title: branchId
    });
  });
}