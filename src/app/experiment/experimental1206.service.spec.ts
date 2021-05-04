import { TestBed } from '@angular/core/testing';

import { Experimental1206Service } from './experimental1206.service';

describe('Experimental1206Service', () => {
  let service: Experimental1206Service;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(Experimental1206Service);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
