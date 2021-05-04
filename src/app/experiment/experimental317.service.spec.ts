import { TestBed } from '@angular/core/testing';

import { Experimental317Service } from './experimental317.service';

describe('Experimental317Service', () => {
  let service: Experimental317Service;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(Experimental317Service);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
