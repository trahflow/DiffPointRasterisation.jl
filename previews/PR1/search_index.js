var documenterSearchIndex = {"docs":
[{"location":"api/#API-Documentation","page":"API","title":"API Documentation","text":"","category":"section"},{"location":"api/","page":"API","title":"API","text":"CurrentModule = DiffPointRasterisation","category":"page"},{"location":"api/#Exported-functions","page":"API","title":"Exported functions","text":"","category":"section"},{"location":"api/","page":"API","title":"API","text":"Modules = [DiffPointRasterisation]\nPrivate = false","category":"page"},{"location":"api/#DiffPointRasterisation.raster","page":"API","title":"DiffPointRasterisation.raster","text":"raster(grid_size, points, rotation, translation, [background, weight])\n\nInterpolate points (multi-) linearly into an Nd-array of size grid_size.\n\nBefore points are interpolated into the array, each point p is first transformed according to\n\nhatp = R p + t\n\nwith rotation R and translation t.\n\nPoints hatp that fall into the N-dimensional hypercube with edges spanning from (-1, 1) in each dimension, are interpolated into the output array.\n\nThe total weight of each point is distributed onto the 2^N nearest pixels/voxels of the output array (according to the closeness of the voxel center to the coordinates of point hatp) via N-linear interpolation.\n\n\n\n\n\n","category":"function"},{"location":"api/#DiffPointRasterisation.raster!-Union{Tuple{T}, Tuple{N_rotation}, Tuple{N_out}, Tuple{AbstractArray{T, N_out}, Any, AbstractArray{<:Number, N_rotation}, Any}, Tuple{AbstractArray{T, N_out}, Any, AbstractArray{<:Number, N_rotation}, Any, Any}, Tuple{AbstractArray{T, N_out}, Any, AbstractArray{<:Number, N_rotation}, Any, Any, Any}} where {N_out, N_rotation, T<:Number}","page":"API","title":"DiffPointRasterisation.raster!","text":"raster!(out, points, rotation, translation, [background, weight])\n\nInplace version of raster.\n\nWrite output into out and return out.\n\n\n\n\n\n","category":"method"},{"location":"api/#DiffPointRasterisation.raster_project","page":"API","title":"DiffPointRasterisation.raster_project","text":"raster_project(grid_size, points, rotation, translation, [background, weight])\n\nInterpolate N-dimensional points (multi-) linearly into an N-1 dimensional-array of size grid_size.\n\nBefore points are interpolated into the array, each point p is first transformed according to\n\nhatp = P R p + t\n\nwith N-dimensional rotation R, projection P and N-1-dmensional translation t. The projection simply drops the last coordinate of R p.\n\nPoints hatp that fall into the N-1-dimensional hypercube with edges spanning from (-1, 1) in each dimension, are interpolated into the output array.\n\nThe total weight of each point is distributed onto the 2^(N-1) nearest pixels/voxels of the output array (according to the closeness of the voxel center to the coordinates of point hatp) via N-1-linear interpolation.\n\n\n\n\n\n","category":"function"},{"location":"api/#DiffPointRasterisation.raster_project!-Union{Tuple{T}, Tuple{N_rotation}, Tuple{N_out}, Tuple{AbstractArray{T, N_out}, Any, AbstractArray{<:Number, N_rotation}, Any}, Tuple{AbstractArray{T, N_out}, Any, AbstractArray{<:Number, N_rotation}, Any, Any}, Tuple{AbstractArray{T, N_out}, Any, AbstractArray{<:Number, N_rotation}, Any, Any, Any}} where {N_out, N_rotation, T<:Number}","page":"API","title":"DiffPointRasterisation.raster_project!","text":"raster_project!(out, points, rotation, translation, [background, weight])\n\nInplace version of raster_project.\n\nWrite output into out and return out.\n\n\n\n\n\n","category":"method"},{"location":"api/#DiffPointRasterisation.raster_project_pullback!-Union{Tuple{N_rotation}, Tuple{N_out}, Tuple{AbstractArray{<:Number, N_out}, Any, AbstractArray{<:Number, N_rotation}, Vararg{Any}}} where {N_out, N_rotation}","page":"API","title":"DiffPointRasterisation.raster_project_pullback!","text":"raster_project_pullback!(\n    ds_dout, points, rotation, translation, [background, weight];\n    [ds_dpoints, ds_drotation, ds_dtranslation, ds_dbackground, ds_dweight]\n)\n\nPullback for raster_project(...)/raster_project!(...).\n\nTake as input ds_dout the sensitivity of some quantity (s for \"scalar\") to the output out of the function raster_project(args...), as well as the exact same arguments args that were passed to raster_project, and return the sensitivities of s to the inputs args of the function raster_project()/raster_project!().\n\nOptionally, pre-allocated output arrays for each input sensitivity can be specified as ds_d$INPUT_NAME, e.g. ds_dtranslation = [zeros(2) for _ in 1:8] for 3-dimensional points and a batch size of 8.\n\n\n\n\n\n","category":"method"},{"location":"api/#DiffPointRasterisation.raster_pullback!-Union{Tuple{N_rotation}, Tuple{N_out}, Tuple{AbstractArray{<:Number, N_out}, Any, AbstractArray{<:Number, N_rotation}, Vararg{Any}}} where {N_out, N_rotation}","page":"API","title":"DiffPointRasterisation.raster_pullback!","text":"raster_pullback!(\n    ds_dout, points, rotation, translation, [background, weight];\n    [ds_dpoints, ds_drotation, ds_dtranslation, ds_dbackground, ds_dweight]\n)\n\nPullback for raster(...)/raster!(...).\n\nTake as input ds_dout the sensitivity of some quantity (s for \"scalar\") to the output out of the function raster(args...), as well as the exact same arguments args that were passed to raster, and return the sensitivities of s to the inputs args of the function raster()/raster!().\n\nOptionally, pre-allocated output arrays for each input sensitivity can be specified as ds_d$INPUT_NAME, e.g. ds_dtranslation = [zeros(2) for _ in 1:8] for 2-dimensional points and a batch size of 8.\n\n\n\n\n\n","category":"method"},{"location":"api/#Private-functions","page":"API","title":"Private functions","text":"","category":"section"},{"location":"api/","page":"API","title":"API","text":"Modules = [DiffPointRasterisation]\nPublic = false","category":"page"},{"location":"api/#DiffPointRasterisation.digitstuple-Union{Tuple{N}, Tuple{Any, Val{N}}} where N","page":"API","title":"DiffPointRasterisation.digitstuple","text":"digitstuple(k, Val(N))\n\nreturn a N-tuple containing the bit-representation of k\n\n\n\n\n\n","category":"method"},{"location":"#DiffPointRasterisation","page":"Home","title":"DiffPointRasterisation","text":"","category":"section"},{"location":"","page":"Home","title":"Home","text":"Differentiable rasterisation of point clouds in julia","category":"page"}]
}