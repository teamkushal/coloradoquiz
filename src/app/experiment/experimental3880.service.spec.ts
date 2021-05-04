import { TestBed } from '@angular/core/testing';

import { Experimental3880Service } from './experimental3880.service';

describe('Experimental3880Service', () => {
  let service: Experimental3880Service;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(Experimental3880Service);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
