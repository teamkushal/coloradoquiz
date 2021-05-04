import { TestBed } from '@angular/core/testing';

import { Experimental1138Service } from './experimental1138.service';

describe('Experimental1138Service', () => {
  let service: Experimental1138Service;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(Experimental1138Service);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
