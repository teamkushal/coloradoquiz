import { TestBed } from '@angular/core/testing';

import { Experimental287Service } from './experimental287.service';

describe('Experimental287Service', () => {
  let service: Experimental287Service;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(Experimental287Service);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
