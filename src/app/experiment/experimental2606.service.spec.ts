import { TestBed } from '@angular/core/testing';

import { Experimental2606Service } from './experimental2606.service';

describe('Experimental2606Service', () => {
  let service: Experimental2606Service;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(Experimental2606Service);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
