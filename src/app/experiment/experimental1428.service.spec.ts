import { TestBed } from '@angular/core/testing';

import { Experimental1428Service } from './experimental1428.service';

describe('Experimental1428Service', () => {
  let service: Experimental1428Service;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(Experimental1428Service);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
