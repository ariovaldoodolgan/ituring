<script>
import { onBeforeMount } from 'vue'
export default {
    props: ['modalId'],
    setup(props) {

        onBeforeMount(() => {
            showModal();
        });

        function showModal() {
            if (window.RDStationForms) {
                return new window.RDStationForms(props.modalId, 'UA-199246746-1').createForm();
            }
        }
    }
}
</script>