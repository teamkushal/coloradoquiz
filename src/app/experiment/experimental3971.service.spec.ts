import { TestBed } from '@angular/core/testing';

import { Experimental3971Service } from './experimental3971.service';

describe('Experimental3971Service', () => {
  let service: Experimental3971Service;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(Experimental3971Service);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
