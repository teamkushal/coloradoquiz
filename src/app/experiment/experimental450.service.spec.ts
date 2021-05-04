import { TestBed } from '@angular/core/testing';

import { Experimental450Service } from './experimental450.service';

describe('Experimental450Service', () => {
  let service: Experimental450Service;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(Experimental450Service);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
