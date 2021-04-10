import { useState } from 'react'

const useFilter = defaults => {
  const [filter, setFilter] = useState(defaults)

  const filterSetters = {
    setTitle: function(title) {
      setFilter(prev => ({ ...prev, title }))
    },
    setDisplayAmount: function(displayAmount) {
      if (filter.displayAmount !== displayAmount) {
        setFilter(prev => ({ ...prev, displayAmount }))
      }
    },

    setRating: function(rating) {
      if (filter.rating !== rating) {
        setFilter(prev => ({ ...prev, rating }))
      } else {
        setFilter(prev => ({ ...prev, rating: '' }))
      }
    },
    setIsPick: function(isPick) {
      if (filter.isPick !== isPick) {
        setFilter(prev => ({ ...prev, isPick }))
      } else {
        setFilter(prev => ({ ...prev, isPick: '' }))
      }
    },

    // setDateStart: function (time) {
    //   if (params.timeLimit !== time) {
    //     setFilter({ ...params, timeLimit: time });
    //   } else {
    //     setFilter({ ...params, timeLimit: null });
    //   }
    // }
  }

  return [filter, filterSetters]
}

export default useFilter
