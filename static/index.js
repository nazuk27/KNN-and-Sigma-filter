let algo_value = 'sigma';

 $(".upload-form").submit(function(event){
     event.stopPropagation();
     event.preventDefault();
     $('#overlay').css('display', 'block')
     let obj = make_values_object();
     obj = JSON.stringify(obj);
     let formData = new FormData(this);
     formData.append('overwrite', 'false');
     let file_type_bool = $('#file_type').prop('checked');
     formData.append('file_type', file_type_bool);
     formData.append('algo', algo_value);
     formData.append('obj', obj);
     formAjax(formData, '/upload');
     return false;
});

//form Ajax
const formAjax = (formData, url) => {
    $.ajax({
        url: url,
        data: formData,
        processData: false,
        contentType: false,
        type: 'POST',
        error: function (data) {
            $('#overlay').css('display', 'none');
            toastr.error("Error in Saving...Please check file. File with same name already present!!");
        },
        success: function (data) {
            let img_html;
            let input_wrapper = $('.i_image');
            let input_path = '../static/input/' + data['input_image_name'];
            let input_img_html = `<h3>Input Image</h3> <br> <img src="${input_path}" alt="Output Image">`;
            input_wrapper.html('');
            input_wrapper.append(input_img_html);
            let wrapper = $('.o_image');
            wrapper.html('');
            $('#overlay').css('display', 'none');
            let output_image = data['output_image'];
            if (data['algo_value'] === 'both'){
                output_image = data['output_image'];
                $.each(output_image, function (index, value){
                   let path = '../static/output/' + value;
                img_html += `<h3>Output Image name ${value}</h3> <br> <img src="${path}" alt="Output Image">`;
                });
            }else{
                output_image = data['output_image'][0];
                let path = '../static/output/' + output_image;
                img_html = `<h3>Output Image from ${data['algo_value']}</h3> <br> <img src="${path}" alt="Output Image">`;

            }

            wrapper.append(img_html);
            toastr.success(data);
        }
    });
}

$('.sigma_btn').click(() => {
    $('.sigma').css('display', 'block');
    $('.knn').css('display', 'none');
    $('.both').css('display', 'none');
    algo_value = 'sigma';
});

$('.knn_btn').click(() => {
     $('.sigma').css('display', 'none');
    $('.knn').css('display', 'block');
    $('.both').css('display', 'none');
    algo_value = 'knn';
});

$('.both_algo_btn').click(() => {
     $('.sigma').css('display', 'none');
    $('.knn').css('display', 'none');
    $('.both').css('display', 'block');
    algo_value = 'both';
})

const make_values_object = function (){
    let kernel_size = $('.kernel_size').val();
    let c_value = $('.c_value').val();
    let k_value = $('.k_value').val();
    let std_val = $('.std_value').val();
    if (algo_value === 'both'){
        kernel_size = $('.both .kernel_size').val();
        c_value = $('.both .c_value').val();
        k_value = $('.both .k_value').val();
        std_val = $('.both .std_value').val();
    }
    let final_obj = {kernel_size: kernel_size, c_value:c_value,
        k_value: k_value, std_val: std_val};
    return final_obj;
}