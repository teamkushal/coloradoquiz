import { TestBed } from '@angular/core/testing';

import { Experimental1097Service } from './experimental1097.service';

describe('Experimental1097Service', () => {
  let service: Experimental1097Service;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(Experimental1097Service);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
