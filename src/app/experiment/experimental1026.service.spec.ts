import { TestBed } from '@angular/core/testing';

import { Experimental1026Service } from './experimental1026.service';

describe('Experimental1026Service', () => {
  let service: Experimental1026Service;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(Experimental1026Service);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
