<template>
    <div class="chat-container">
        <div class="chat-section">
            <input class="message-box" type="text" name="" id="">
            <button class="send-text"> Send </button>
        </div>
    </div>
</template>
<script>
</script>
<style>
* {
    margin: 0;
    padding: 0;
}

.chat-container {
    display: flex;
    flex-direction: column;
    justify-content: flex-end;
    align-content: flex-end;
    height: 100%;
}

.chat-section {
    display: flex;
}

.send-text {
    height: 2.1rem;
    width: 5rem;
    background-color: #5aff8e;
    border: 1px solid #5aff8e;
}

.message-box {
    height: 2rem;
    flex: 1;
    border: 1px solid #5aff8e;
    padding-left: 2rem;
}
</style>