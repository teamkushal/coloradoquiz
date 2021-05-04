import { TestBed } from '@angular/core/testing';

import { Experimental3685Service } from './experimental3685.service';

describe('Experimental3685Service', () => {
  let service: Experimental3685Service;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(Experimental3685Service);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
