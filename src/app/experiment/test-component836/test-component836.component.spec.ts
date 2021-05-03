import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TestComponent836Component } from './test-component836.component';

describe('TestComponent836Component', () => {
  let component: TestComponent836Component;
  let fixture: ComponentFixture<TestComponent836Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TestComponent836Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TestComponent836Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
