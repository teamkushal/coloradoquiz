import { TestBed } from '@angular/core/testing';

import { Experimental551Service } from './experimental551.service';

describe('Experimental551Service', () => {
  let service: Experimental551Service;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(Experimental551Service);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
