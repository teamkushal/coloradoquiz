import { TestBed } from '@angular/core/testing';

import { Experimental177Service } from './experimental177.service';

describe('Experimental177Service', () => {
  let service: Experimental177Service;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(Experimental177Service);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
