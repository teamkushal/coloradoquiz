import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TestComponent907Component } from './test-component907.component';

describe('TestComponent907Component', () => {
  let component: TestComponent907Component;
  let fixture: ComponentFixture<TestComponent907Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TestComponent907Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TestComponent907Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
