import { TestBed } from '@angular/core/testing';

import { Experimental1427Service } from './experimental1427.service';

describe('Experimental1427Service', () => {
  let service: Experimental1427Service;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(Experimental1427Service);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
