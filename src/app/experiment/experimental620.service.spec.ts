import { TestBed } from '@angular/core/testing';

import { Experimental620Service } from './experimental620.service';

describe('Experimental620Service', () => {
  let service: Experimental620Service;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(Experimental620Service);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
