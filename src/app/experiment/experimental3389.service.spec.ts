import { TestBed } from '@angular/core/testing';

import { Experimental3389Service } from './experimental3389.service';

describe('Experimental3389Service', () => {
  let service: Experimental3389Service;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(Experimental3389Service);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
