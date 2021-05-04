import { TestBed } from '@angular/core/testing';

import { Experimental565Service } from './experimental565.service';

describe('Experimental565Service', () => {
  let service: Experimental565Service;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(Experimental565Service);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
