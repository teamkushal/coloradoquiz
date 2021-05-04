import { TestBed } from '@angular/core/testing';

import { Experimental46Service } from './experimental46.service';

describe('Experimental46Service', () => {
  let service: Experimental46Service;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(Experimental46Service);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
