import { TestBed } from '@angular/core/testing';

import { Experimental3387Service } from './experimental3387.service';

describe('Experimental3387Service', () => {
  let service: Experimental3387Service;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(Experimental3387Service);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
