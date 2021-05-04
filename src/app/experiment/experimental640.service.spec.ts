import { TestBed } from '@angular/core/testing';

import { Experimental640Service } from './experimental640.service';

describe('Experimental640Service', () => {
  let service: Experimental640Service;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(Experimental640Service);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
