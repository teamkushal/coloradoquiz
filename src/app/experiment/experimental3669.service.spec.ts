import { TestBed } from '@angular/core/testing';

import { Experimental3669Service } from './experimental3669.service';

describe('Experimental3669Service', () => {
  let service: Experimental3669Service;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(Experimental3669Service);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
