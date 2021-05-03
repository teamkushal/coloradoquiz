import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TestComponent521Component } from './test-component521.component';

describe('TestComponent521Component', () => {
  let component: TestComponent521Component;
  let fixture: ComponentFixture<TestComponent521Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TestComponent521Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TestComponent521Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
