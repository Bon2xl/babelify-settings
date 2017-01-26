import Moment from 'moment';
import $ from 'jquery';
import TWO from './two';

$(function() {
    let dateVal = Moment();
    $("#some_label").val(dateVal);
    TWO.test();
});
