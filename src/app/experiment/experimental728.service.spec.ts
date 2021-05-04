import { TestBed } from '@angular/core/testing';

import { Experimental728Service } from './experimental728.service';

describe('Experimental728Service', () => {
  let service: Experimental728Service;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(Experimental728Service);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
