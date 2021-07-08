export {Heap};

class Heap{

    constructor(){
        this.heap = [];
    }

    size() {
        return this.heap.length;
    }

    empty(){
        return ( this.size()===0 );
    }

    insert(val){
        this.heap.push(val);
        this.heapifyUp();
    }

    heapifyUp(){
        var id = this.size()-1;

        while(id > 0){
            let pId = Math.floor((id-1)/2);
            if(this.heap[id] > this.heap[pId]){
                let ele = this.heap[id];
                this.heap[id] = this.heap[pId];
                this.heap[pId] = ele;
                id=pId;
            }
            else
            break;
        }
    }

    findMax(){
        const maxx = this.heap[0];
        const ele = this.heap.pop();

        if(!(this.empty())){
            this.heap[0]=ele;
            this.heapifyDown(0);
        }
        return maxx;
    }

    heapifyDown(id){

        var sz = this.size();
        
        while(id < sz){
             let c1 = 2*id +1;
             let c2 = 2*id +2;
             let maxx = id;

             if(c1 < sz && this.heap[c1] > this.heap[maxx])
                maxx = c1;
             
             if(c2 < sz && this.heap[c2] > this.heap[maxx])
                maxx = c2;  

             if(maxx !== id){
                let ele = this.heap[id];
                this.heap[id] = this.heap[maxx];
                this.heap[maxx] = ele;
                id=maxx;
             }
             else
             break;

        }

    }

}
